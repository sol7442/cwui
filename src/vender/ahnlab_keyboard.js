define(function() {
    'use strict';
    const SecureInput = require("../model/secure_input");
    var ahnlab_keyboard = function (){
        this.name = "ahnlab_keyboard";
        this.type = "keybord_type";
    }
    ahnlab_keyboard.prototype = new SecureInput();
    ahnlab_keyboard.prototype.check = function (){
        return new Promise(function(resolve,reject){
            if($ASTX2 != undefined){
                console.log("$ASTX2.init",$ASTX2.init);
                $ASTX2.init(
                    function sucess(){
                        console.log("AhnLab Checked : ");
                        resolve(true);
                    },
                    function failed(){
                        resolve(false);        
                    }
                );
            }else{
                reject();
            }
        });
    }


    return new ahnlab_keyboard();
});