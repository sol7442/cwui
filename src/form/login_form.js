define(function(){
    'use strict';
    
    const MainForm    = require("./main_form");
    const DialogForm = require("./dialog_form");    
    const Banner = require("./context/banner");
    const Title   = require("./context/title/title");
    
    function login_form (){
        this.name = "LoginForm";
        this.html = require("../../res/html/login_form.html"); 
        this.dialog = new DialogForm();
    }
    

    login_form.prototype = new MainForm();
    login_form.prototype.initialize = function (){        
        MainForm.prototype.initialize.call(this); 
        //this.dialog.initialize();

        this.append(this.dialog);

        var banner = new Banner();
        this.dialog.append(banner);
        
    } 

    return login_form;

})