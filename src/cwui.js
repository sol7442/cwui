define(function() {
    'use strict';

    const MainForm = require('./form/main_form')   
    var SecureInput = require('./model/secure_input');
    
    var cwui = function (){
        this.form = new MainForm();
    }

    cwui.prototype.initialize = function (options){
        $(document.body).ready(function (){
            var cwui_element = document.createElement( "div");
            cwui_element.id         = "cwui";
            cwui_element.className  = "initech";
            document.body.append(cwui_element);            
        });

        var secure_input = SecureInput.getInstance();
        secure_input.regKeyBoard(options.keyboard);
        secure_input.regKeyPad(options.keypad);
        
    }
    cwui.prototype.login = function (){       
        this.form.initialize(this.options);
        this.form.show();
    }

    return cwui;
})