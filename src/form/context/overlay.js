define(function() {
    'use strict';
    const Form = require("../form");


    var overlay = function (){
        this.name = "overlay";
        this.html = require("../../../res/html/overlay.html");
    }
    overlay.prototype = new Form();
    overlay.prototype.initialize = function (){
        Form.prototype.initialize.call(this);
    }

    return overlay;
});