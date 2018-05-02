define(function() {
   'use strict';
   
    var device = function (id){
        this.id = id;
    }


    device.prototype.save = function (){
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