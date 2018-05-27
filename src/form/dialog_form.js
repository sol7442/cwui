define(function(){
    'use strict';
    
    //const Form    = require("./form");
    const Form    = require("./form");
    const OverLay = require("./context/overlay");

    function dialog_form (content){
        this.name = "DialogForm";
        this.html = require("../../res/html/dialog.html"); 
        
        this.content = content.form;
    }
    

    dialog_form.prototype = new Form();
    dialog_form.prototype.initialize = function (){
        Form.prototype.initialize.call(this);
        
        var overlay = new OverLay();
        this.append(overlay);
        this.content.dialog({
            width : '720',
            height: '600'});
        return this;    
    } 
    
    return dialog_form;

})