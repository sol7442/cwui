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
        //return "input_value";//$ASTX2.addE2EObject(obj, 11);
    }

    return secure_input;
})