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
  
        var HEAD_HTML_TAG = '';

        HEAD_HTML_TAG += '<table style="border: 0px solid red; width:100%; margin: auto;padding:0;padding-left: 10px;padding-right: 10px">';
        HEAD_HTML_TAG += '    <tbody>';
        HEAD_HTML_TAG += '        <tr>';
        HEAD_HTML_TAG += '            <td style="width:84.2%;text-align:center" id="uniwebkey_move_pos">';
        HEAD_HTML_TAG += '                <input id="uniwebkey_input" type="text" name="" size="30" placeholder="'+"인증서"+'" readonly="" style="width:50%;font-size:14px; color:#515354;font-weight:bold;height:20px;text-align:center;border:1px solid #84a0d1;)" value="'+"인증서"+'">';
        HEAD_HTML_TAG += '            </td>';
        HEAD_HTML_TAG += '            <td valign="top" style="width:1.8%" onclick="javascript:uni_keypad.close(); return false;" style="cursor:pointer"  >';
        HEAD_HTML_TAG += '                <img id="INI_keypad_close" src="/vender/unikey/keypad/uniwebkey/images/pc/keyboard_close_btn.png" border="0" style="cursor:pointer">';
        HEAD_HTML_TAG += '            </td>';
        HEAD_HTML_TAG += '        </tr>';
        HEAD_HTML_TAG += '    </tbody>';
        HEAD_HTML_TAG += '</table>';
        this.uni_key.SetHeaderDIV(HEAD_HTML_TAG);
        this.uni_key.ShowMouseOver(true); // fal
        this.uni_key.SetCallbackFunction(
            function (){
                console.log("keyPadClickEvent");
            },
            function (){
                console.log("keyPadSubmitEvent");
            },
            function (){
                console.log("keyPadErrorEvent");
            } ,
            function (){
                console.log("keyPadRearrangeEvent");
            } , function (){
                console.log("keyboardShowAfter");
            } );
        //this.uni_key.ButtonClick("reset");
        this.uni_key.SetMessageMin("msgMinError", "titleMsg", 8);        
        this.uni_key.SetPosition(0, 0, 750, 295); 
        this.uni_key.GetKeypad("PC","/demo/vender/unikey/keypad/uniwebkey_ajax.jsp?keypad_language=kor&keypad_type=PC&non=");

        var _this = this;
        $(document).on('click', 'area', function(e) {
            var thisObj = $(e.currentTarget);
            var id = thisObj.closest("area").attr("data-key");
            console.log(e);
        });
        
        console.log(this.uni_key);
    }

    uni_keypad.prototype.close = function (keyId){
        try{
            var btnValue = "";
            if( keyId.indexOf("key_") > -1 ){
                btnValue = (keyId.toString()).substring(keyId.indexOf("key_") + 4, keyId.length);
            } else {
                btnValue = keyId.toString();
            }
            this.uni_key.ButtonClick(btnValue);
        }catch(e){}
    }


    uni_keypad.prototype.close = function (){
        console.log("GetInputData",this.uni_key.GetInputData());
        this.uni_key.Close();
    }
    uni_keypad.prototype.setInput = function (input_id){

        
    }
    uni_keypad.prototype.getInput = function (input_id){
       

        return "input_value";
    }

    


    return new uni_keypad();
});