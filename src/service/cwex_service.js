define(function() {
    'use strict';
    const cwex_service_url = "https://127.0.0.1:4441";

    var cwex_service = function (){        
    }    
    cwex_service.prototype.call = function (request,bEnc){
        console.log("request>>",request);

        var _data = "request=";
        if(bEnc){
            _data = _data + encodeURIComponent(JSON.stringify(request));
        }else{
            _data = _data + JSON.stringify(request);
        }

        return new Promise(function (resolve,reject){
            $.ajax({
                method: "POST",
                url: cwex_service_url,
                data: _data
            })
            .done(function (result){
                resolve(result)
            })
            .fail(function (result){
                console.log("result",result);
                reject(reject);
            });
        });
    }

    return new cwex_service();
});