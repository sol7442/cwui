define(function() {
    'use strict';
    const Form = require("../../form");
    const CmdButton = require("./cmd_button");

    var command_layer = function (){
        this.id = "CommandLayer"
        this.html = require("../../../../res/html/commandlayer.html");
    }
    command_layer.prototype = new Form();
    command_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
        
        var a = new CmdButton({id:"aa"}).initialize();
        console.log("a >>",a);
        this.append(a);
        
        return this;
    }
    
    return command_layer;
});