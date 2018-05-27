define(function() {
    'use strict';
    const Emitter = require('component-emitter');
    const Form = require("../../form");
   
    var cmd_button = function (options){
        this.id = options["id"];
        this.html = "<div class='ini-command-btn'>"
    }

    cmd_button.prototype = new Form();
    cmd_button.prototype.click;
    cmd_button.prototype.initialize = function (){
        Form.prototype.initialize.call(this); 
        var self = this;
    console.log("cmd_button - initialize")
        this.form.append("<button>ttttttt</button>");//.prepend($('<input>',{type:"button",value:"this.img"}));

        return this;
    }
   
    return cmd_button;
});