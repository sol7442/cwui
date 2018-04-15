define(function() {
    require('webpack-jquery-ui');
    require('webpack-jquery-ui/css');
    
    const Form = require("./form");

    function main_form (name, className){
        this.className = "dialog";
        $("#cwui").dialog();
    }

    main_form.prototype = new Form();

    main_form.prototype.show = function(){
        
    }

    main_form.prototype.hide = function(){
    }

    return main_form;
})