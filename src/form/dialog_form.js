define(function(){
    'use strict';
    
    //const Form    = require("./form");
    const MainForm    = require("./main_form");
    const OverLay = require("./context/overlay");

    function dialog_form (content){
        this.name = "DialogForm";
        this.html = require("../../res/html/dialog.html"); 
        
        this.overlay = new OverLay();
        this.content = content.form;
    }
    

    dialog_form.prototype = new MainForm();
    dialog_form.prototype.initialize = function (){
        MainForm.prototype.initialize.call(this);
        this.append(this.overlay);
        this.content.dialog();
    } 
    
    return dialog_form;

})