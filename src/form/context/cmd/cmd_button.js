define(function() {
    'use strict';
    const Emitter = require('component-emitter');
    const Form = require("../../form");
   
    var cmd_button = function (options){
        this.id = options["id"];
        this.text = options["text"];
        this.html = "<div class='ini-command-btn'></div>"
    }

    cmd_button.prototype = new Form();
    cmd_button.prototype.click;
    cmd_button.prototype.initialize = function (){
        Form.prototype.initialize.call(this); 
        var self = this;
    console.log("cmd_button - initialize")
        var icon = $("<i></i>");
        var button  = $("<button></button>");
        icon.addClass("ini-icon-icon");
        icon.attr("id",this.id);
        
        button.text("ini-command-txt");
        button.text(this.text);

        this.form.append(icon);
        this.form.append(button);

        return this;
    }
   
    return cmd_button;
});