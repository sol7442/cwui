define(function() {
    'use strict';
    const cwex_service = require('./service/cwex_service');
    const pFactory = require("./protocol/ex_protocol_factory");

    var cwex = function (){
           
    }

    cwex.prototype.initialize = function (){
       
    }
    cwex.prototype.login = function (){       
        var request = pFactory.createRequest();
        var exFunc  = pFactory.createExFunction();
        var args    = ["login","https://demo.initech.com:8311/SW/initech/extension/common/tools/Time.jsp",false,""]

        exFunc.fname = "PKCS7SignDataWithRandom";
        exFunc.args.push("login");
        exFunc.args.push("https://demo.initech.com:8311/SW/initech/extension/common/tools/Time.jsp");
        exFunc.args.push(false);
        exFunc.args.push("");

        request.origin = "localhost:5001"      
        request.exfunc = exFunc;
        
        cwex_service.call(request,false)
        .then(function (response){
            console.log(response);
        })              
        .catch(function (e){
            console.error(e);
        })

        

       cwex_service
    }

    return cwex;
})