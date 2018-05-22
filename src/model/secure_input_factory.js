define(function() {
    'use strict';
   
    var instance;
    var secure_input_factory = function (){
        this.KeyPad;
        this.KeyBoard;
    }

    secure_input_factory.prototype.regKeyPad = function (key_pad){
        var _this = this;
        key_pad.check()
        .then(function (){
            _this.KeyPad = key_pad;
        })
        .catch(function(err){
            
        });

        console.log("KeyPad>>", this.KeyPad);
    }
    secure_input_factory.prototype.regKeyBoard = function (key_bord){
        var _this = this;
        key_bord.check()
        .then(function (result){
            _this.KeyBoard = key_bord;
        })
        .catch(function (err){            
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