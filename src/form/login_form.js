define(function(){
    'use strict';
    
    const DialogForm    = require("./dialog_form");    
    const MainForm    = require("./main_form");
    const Title   = require("./context/title/title");
    const Banner = require("./context/banner");

    function login_form (){
        this.name = "LoginForm";
        this.html = require("../../res/html/login_form.html");
    }
    

    login_form.prototype = new MainForm();
    login_form.prototype.initialize = function (){        
        MainForm.prototype.initialize.call(this); 
        var dialog = new DialogForm(this);
        dialog.initialize();
        
        var banner = new Banner();
        this.append(banner);


        
    } 

    return login_form;

})