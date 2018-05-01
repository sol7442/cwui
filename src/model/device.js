define(function() {
   'use strict';
   
    var device = function (id){
        this.id = id;
    }


    device.prototype.save = function (){
        console.log("save : ",this.id);
    }
    device.prototype.load;
    device.prototype.sign;    

    return device;
});