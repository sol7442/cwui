define(function(){
    'use strict';
    
    const DialogForm    = require("./dialog_form");    
    const MainForm    = require("./main_form");

    const Title         = require("./context/title/title");
    const Banner        = require("./context/banner");
    const DeviceLayer   = require("./context/device/device_layer");
    const CommandLayer   = require("./context/command_layer");
    const CertificateList   = require("./context/cert/certlist");

    function login_form (){
        this.name = "LoginForm";
        this.html = require("../../res/html/login_form.html");
        
        this.dialog;
        this.banner;
        this.device_layer;
        this.command_layer;
        this.cert_list;
    }
    

    login_form.prototype = new MainForm();
    login_form.prototype.initialize = function (){        
        MainForm.prototype.initialize.call(this); 
        this.dialog = new DialogForm(this);
        this.banner = new Banner(this);
        this.device_layer  = new DeviceLayer(this);
        this.command_layer = new CommandLayer(this);
        this.cert_list     = new CertificateList(this);

        this.dialog.initialize();

        this.append(this.banner);
        this.append(this.device_layer);
        this.append(this.cert_list);
        this.append(this.command_layer);

        
    } 

    return login_form;

})