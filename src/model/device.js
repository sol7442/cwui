define(function() {
   'use strict';
   
    var device = function (id){
        this.id = id;
    }

    device.prototype.save = function (){

        var args = {
            PROTOCOLVER:"1.0",
            PRODUCTID:"1.0.0",
            ENCRYPTED:"FALSE",
            COMMAND:"GET_CERT_LIST",
            TRANS_SEQ:"9c3e7420171e77cf404b2330e0d2d706",
            PARAMS:{
                DEVICE_ID:"HARD_DISK",
                DEVICE_PIN:"",
                DEVICE_SUB:""
            },
            OPTION:{},
            PROPERTY_LIST:[]
        }
       
        var args_ =  encodeURI(JSON.stringify(args));


        var request = {
            id:"1525421244525_67641",
            tabid:"1525421002549_794009",
            module:"crosswebex",
            cmd:'native',
            origin:"localhost:5001",
            SESSIONID:"123144",
            exfunc:{fname:'CWEXRequestCmd',args:[args_]},
            callback:"callback111"     
        }

        var _data = "request="+ encodeURI(JSON.stringify(request));

        console.log("CET_CERT_LIST",_data);

        $.ajax({
            method: "POST",
            url: "https://127.0.0.1:4441/",
            data: _data
        })
        .done(function(data){
            console.log("data1",data);
            var res = JSON.parse(data);
            var result = res["response"]["reply"]["reply"]["reply"];

            var dec_res = decodeURI(result);
            var pars = JSON.stringify(dec_res);
            pars = decodeURI(pars);
            pars = pars.replace(/%3A/gi,":");
            pars = pars.replace(/%2C/gi,",");
         
            //var dec_pars = decodeURI(pars);

            var res_ = JSON.parse(pars);

            console.log("data23",res_);
            
          
            
        })
        .fail(function(jqXHR, textStatus ){
            console.log("fail",textStatus);
        });
    }

    device.prototype.getVersion = function (){
        var request = {
            cmd:'native',
            exfunc:{fname:'',args:''},
            init:'get_versions'
        }

        var _data = "request="+ encodeURI(JSON.stringify(request));
        console.log("data",_data)
        $.ajax({
            method: "POST",
            url: "https://127.0.0.1:4441/",
            data: _data
        })
        .done(function(data){
            console.log("data",data);
        })
        .fail(function(jqXHR, textStatus ){
            console.log("fail",textStatus);
        });
        
    }
    device.prototype.load;
    device.prototype.sign;    

    return device;
});