define(function() {
    'use strict';
    const Form = require("../../form");


    var selection_title = function (){
        this.name = "CommandLayer"
        this.html = require("../../../../res/html/section_title.html");
    }
    selection_title.prototype = new Form();
    selection_title.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
        return this;
    }
    selection_title.prototype.setTitle = function (title){
        this.form.text(title);
    }
    return selection_title;
});