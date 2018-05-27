define(function() {
    'use strict';
    const Form = require("../../form");
   
    const PwdInput = require("./input_form");
    var input_layer = function (parent){
        this.name = "InputLayer"
        this.html = "<div class='ini-input-layer'></div>"
        this.inputs = [];
        this.parent = parent;
    }
    input_layer.prototype = new Form();
    input_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   

        var pwd = new PwdInput(this);
        this.append(pwd);

        return this;
    }


    return input_layer;
});