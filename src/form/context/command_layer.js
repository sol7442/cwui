define(function() {
    'use strict';
    const Form = require("../form");


    var command_layer = function (){
        this.name = "CommandLayer"
        this.html = require("../../../res/html/commandlayer.html");
    }
    command_layer.prototype = new Form();
    command_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
    }

    return command_layer;
});