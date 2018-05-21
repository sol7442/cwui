define(function() {
    'use strict';
   
    var secure_input = function (){
        this.KeyPad;
        this.KeyBoard;
    }

    secure_input.prototype.check = function (){
        return false;
    }
    secure_input.prototype.getInput = function (input_id){
        return "input_value";
    }
    secure_input.prototype.setInput = function (input_id){
        //return "input_value";
    }

    return secure_input;
})