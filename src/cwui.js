define(function() {
    'use strict';

    const MainForm = require('./form/main_form')   
    var SecureInputFactory = require('./model/secure_input_factory');
    
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

        var input_factory = SecureInputFactory.getInstance();
        input_factory.regKeyBoard(options.keyboard);
        input_factory.regKeyPad(options.keypad);
        
    }
    cwui.prototype.login = function (){       
        this.form.initialize(this.options);
        this.form.show();
    }

    return cwui;
})