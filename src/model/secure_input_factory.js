define(function() {
    'use strict';
   
    var instance;
    var secure_input_factory = function (){
        this.KeyPad;
        this.KeyBoard;
    }

    secure_input_factory.prototype.regKeyPad = function (key_pad){
        this.KeyPad = key_pad;
    }
    secure_input_factory.prototype.regKeyBoard = function (key_bord){
        var _this = this;
        key_bord.check()
        .then(function (result){
            console.log("keyboard check result : ", result)
            _this.KeyBoard = key_bord;
        })
        .catch(function (err){
            console.log("keyboard check err : ", err)
        }) ;
    }

    var getInstance = function (){
        console.log("ceate...",instance);
        if(instance == undefined){
            instance = new secure_input_factory();
        }
        return instance;
    }

    return {getInstance:getInstance};
})