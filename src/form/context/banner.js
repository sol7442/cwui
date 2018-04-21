define(function() {
    'use strict';
    const Form = require("../form");


    var banner = function (){
        this.html = require("../../../res/html/banner.html");
    }
    banner.prototype = new Form();
    banner.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
    }

    return banner;
});