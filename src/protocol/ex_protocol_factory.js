define(function() {
    'use strict';

    const forge = require("node-forge");

    var factory = function(){

    }

    factory.prototype.createRequest = function (version){        
        var request = {
            id:forge.util.bytesToHex(forge.random.getBytesSync(32)),
            tabid:forge.util.bytesToHex(forge.random.getBytesSync(16)),
            module:"crosswebex",
            cmd:'native',
            origin:"",            
            exfunc:{}
        }
        return request;
    }
    factory.prototype.createExFunction = function (){
        var ex_func = {fname:'CWEXRequestCmd',args:[]};      
        return ex_func;
    }
    factory.prototype.creatArgument = function (){
        var args = {
            PROTOCOLVER:"1.0",
            PRODUCTID:"1.0.0",
            ENCRYPTED:"",
            COMMAND:"",
            TRANS_SEQ:"",
            PARAMS:{},
            OPTION:{},
            PROPERTY_LIST:[]
        }
        return args;
    }

    factory.prototype.parsResponse = function (res){
        var respons= JSON.parse(res);        
        var reply_data= decodeURIComponent(respons["response"]["reply"]["reply"]["reply"]);      
        var result = JSON.parse(reply_data);
        return result;
    }

    return new factory();
});
