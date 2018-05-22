define(function() {
    'use strict';
    const SecureInput = require("../model/secure_input");
    
    var uni_keypad = function (){
        this.name = "uni_keypad";
        this.type = "keypad";
    }
    uni_keypad.prototype = new SecureInput();
    uni_keypad.prototype.check = function (){
        var _this = this;
        return new Promise(function(resolve,reject){
            try{
                _this.uni_key = new UniWebKey_Control();    
                console.log("is run :",_this.uni_key.IsRun());

                resolve(true);
            }catch(e){
                console.log(e);
                reject(false);
            }
        });
    }
    uni_keypad.prototype.show = function (input_id){
        console.log("this.uni_key",this.uni_key);
        //this.uni_key.ClearInput();
        this.uni_key.SetD(true);
        this.uni_key.ButtonClick("reset");
        UniWebKey_ShowClick("pwd");
        this.uni_key.ShowMouseOver(true);
  
        this.uni_key.GetKeypad("PC","/initech/unikey/keypad/uniwebkey_ajax.jsp?keypad_language=kor&keypad_type=PC&non=");
    }
    uni_keypad.prototype.setInput = function (input_id){

        
    }
    uni_keypad.prototype.getInput = function (input_id){
       

        return "input_value";
    }

    


    return new uni_keypad();
});