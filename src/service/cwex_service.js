define(function() {
    'use strict';
    var cwex_service = function (){        
    }    
    cwex_service.prototype.call = function (url,request){
        var _data = "request="+ encodeURIComponent(JSON.stringify(request));
        return new Promise(function (resolve,reject){
            $.ajax({
                method: "POST",
                url: url,
                data: _data
            })
            .done(function (result){
                resolve(result)
            })
            .fail(function (result){
                reject(reject);
            });
        });
    }

    return new cwex_service();
});