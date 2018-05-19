define(function() {
    'use strict';
   
    var instance;
    var secure_input = function (){
        this.KeyPad;
        this.KeyBoard;
    }

    secure_input.prototype.regKeyPad = function (key_pad){
        this.KeyPad = key_pad;
    }
    secure_input.prototype.regKeyBoard = function (key_bord){
        this.KeyBoard = key_bord;
    }

    var getInstance = function (){
        console.log("ceate...",instance);
        if(instance == undefined){
            instance = new secure_input();
        }
        return instance;
    }

    return {getInstance:getInstance};
})