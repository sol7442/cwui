define(function() {
    'use strict';

    const MainForm = require('./form/main_form')    
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

        console.log("options >>",options);
    }
    cwui.prototype.login = function (){       
        this.form.initialize();
        this.form.show();
    }

    return cwui;
})