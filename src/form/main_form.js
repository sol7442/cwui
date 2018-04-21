define(function() {
    'use strict';
    
    require('webpack-jquery-ui');
    require('webpack-jquery-ui/css');
    require('../../res/css/cwui.css');
    
    const Form    = require("./form");
    function main_form (name, className){ 
       this.root = $("#cwui");
    }
    main_form.prototype = new Form();
    main_form.prototype.initialize = function (){  
        Form.prototype.initialize.call(this);   
        this.root.append(this.form);     
    }

    main_form.prototype.show = function(){
        
    }

    main_form.prototype.hide = function(){
    }

    

    return main_form;
})