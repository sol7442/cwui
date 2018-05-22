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

    ahnlab_keyboard.prototype.setInput = function (input_id){

        var input = $("#pwd").ready(function (){
            
            input.attr("e2e_type", 11);

            var ele = document.getElementById("pwd");    

            if(ele){
                $ASTX2.initNonE2E(3299, function() {	
                    console.log("ele..>>",ele);
                    
                    $ASTX2.addE2EObject(ele, 11);
                    $ASTX2.resetNonE2E(3299);
                });
                
                
            }
        });//.get(0);        
        //
        
    }
    ahnlab_keyboard.prototype.getInput = function (input_id){
        var ele = document.getElementById("pwd");
        console.log("ele >>",ele);
        var pageId = $ASTX2.getE2EPageID();
        var formId = $ASTX2.getE2EPageID();
        var inputId  = $ASTX2.getE2EInputID(ele);
       // var result =  [encodeURIComponent(pageId), encodeURIComponent(formId), encodeURIComponent(inputId)].join('|')
       console.log("pageId >>",pageId);
       console.log("formId >>",formId);
       console.log("inputId >>",inputId);

        return "input_value";
    }

    


    return new ahnlab_keyboard();
});