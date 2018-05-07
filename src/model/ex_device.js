define(function() {
    'use strict';
    const Device = require('./device');
    const pFactory = require("../protocol/ex_protocol_factory");
    const CertInfo = require("../model/cert_info");
    const forge = require("node-forge");

    const cwex_service = require('../service/cwex_service');
    const cwex_service_url = "https://localhost:4441";

    var device = function (){
         this.id;
    }
      
    device.prototype = new Device();
    
    device.prototype.getCertList = function(){
        var request = pFactory.createRequest();
        var exFunc  = pFactory.createExFunction();
        var args    = pFactory.creatArgument();
        var device_id = this.id;

        return new Promise(function (resolve,reject){
            args.ENCRYPTED="FALSE";
            args.COMMAND = "GET_CERT_LIST";
            args.PARAMS = {DEVICE_ID:device_id};
            
            exFunc.args.push(encodeURIComponent(JSON.stringify(args)));
    
            request.origin = "localhost:5001"      
            request.exfunc = exFunc;
            
            cwex_service.call(cwex_service_url,request)
            .then(function (response){
                return pFactory.parsResponse(response);
            })
            .then(function (result){            
                if(result.PARAMS.STATE == "SUCCEEDED"){
                    return result.PARAMS.CERT_LIST;
                }else{
                    throw result.PARAMS.STATE;
                };
            })
            .then(function (cert_list){
                var result_cert_list = [];
                for(var i=0; i<cert_list.length; i++ ){
                    var pemCert = decodeURIComponent(cert_list[i].CERT);
                    var cert_info = new CertInfo(cert_list[i].CERTID);
                    cert_info.parsFromPem(pemCert);                
                    result_cert_list.push(cert_info);
                }
                return result_cert_list;
            })
            .then(function(result_cert_list){
                resolve(result_cert_list)
            })
            .catch(function (e){
                reject(e);
            })

        });
    }

    return device;
 });