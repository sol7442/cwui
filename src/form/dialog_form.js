define(function(){
    'use strict';
    
    const Form    = require("./form");
    const MainForm    = require("./main_form");
    const OverLay = require("./context/overlay");

    function dialog_form (){
        this.name = "DialogForm";
        this.html = require("../../res/html/dialog.html"); 
        
        this.overlay = new OverLay();
        this.content = $(this.html);
    }
    

    dialog_form.prototype = new Form();
    dialog_form.prototype.initialize = function (){
        Form.prototype.initialize.call(this);  
             
        this.overlay.initialize();  
       // this.form.append(this.overlay.form);
        this.form.append(this.content);
        //this.overlay.form.append(this.content);
        
        this.content.dialog();
    } 
    dialog_form.prototype.append = function (sub){
        sub.initialize();
        this.content.append(sub.form);
    }


    return dialog_form;

})