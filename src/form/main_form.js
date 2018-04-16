define(function() {
    require('webpack-jquery-ui');
    require('webpack-jquery-ui/css');
    
    const Form = require("./form");
    const parent = new Form();;
    function main_form (name, className){        
        this.form = $("#cwui");        
        
    }

    
    main_form.prototype = parent;

    main_form.prototype.initialize = function (){
        console.log("main_form - initialize")
        this.addClass("ini-dialog");        
        this.form.dialog();
    }

    main_form.prototype.show = function(){
        
    }

    main_form.prototype.hide = function(){
    }

    

    return main_form;
})