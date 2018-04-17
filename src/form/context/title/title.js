define(function() {
    'use strict';
    const Form = require("../../form");

    var title_layer = function (){
        this.name = "title";
        this.className = "title";
        this.form = $("<div id='object1'></div>");
    
    }


    title_layer.prototype = new Form();
    title_layer.prototype.initialize = function (){

    }

    return title_layer;
});