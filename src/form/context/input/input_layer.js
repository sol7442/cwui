define(function() {
    'use strict';
    const Form = require("../../form");
   
    var input_layer = function (){
        this.name = "InputLayer"
        this.html = "<div class='ini-input-layer'></div>"
        this.inputs = [];
    }
    input_layer.prototype = new Form();
    input_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
    }


    return input_layer;
});