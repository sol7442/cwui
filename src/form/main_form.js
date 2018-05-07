define(function() {
    'use strict';
    
    require('webpack-jquery-ui');
    require('webpack-jquery-ui/css');
    require('../../res/css/cwui.css');
    
    const Form    = require("./form");
    const DialogForm    = require("./dialog_form");   
    const Title         = require("./context/title/title");
    const Banner        = require("./context/banner");
    const DeviceLayer   = require("./context/device/device_layer");
    const CommandLayer   = require("./context/command_layer");
    const CertificateLayer   = require("./context/cert/cert_layer");
    

    var cert_layer;
    function main_form (name, className){ 
       this.root = $("#cwui");
       this.init = false;
       
       this.name = "MainForm";
       this.html = "<div class='ini-main-form'></div>";
       this.device;
    }
    main_form.prototype = new Form();
    main_form.prototype.initialize = function (){  
        if(this.init) return;

        Form.prototype.initialize.call(this);   
        
        this.root.append(this.form); 

        var dialog = new DialogForm(this);
        var banner = new Banner(this);
        var device_layer  = new DeviceLayer(this);
        device_layer.select = OnSelectDevice;

        var command_layer = new CommandLayer(this);
        cert_layer     = new CertificateLayer(this);

        dialog.initialize();


        this.append(banner);
        this.append(device_layer);
        this.append(cert_layer);
        this.append(command_layer);
        
        this.init = true;
    }

    main_form.prototype.show = function(){
        console.log("show--");
    }

    main_form.prototype.hide = function(){
    }

    function OnSelectDevice(device){
        console.log("this>>",this);
        this.device = device;
        this.device.getCertList()
        .then(function (cert_list){
            cert_layer.setCertList(cert_list);
        })
        .catch(function (e){
            console.log(e);
        });
    }

    return main_form;
})