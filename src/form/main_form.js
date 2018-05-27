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
    const CertificateLayer   = require("./context/cert/cert_layer");
    const CommandLayer   = require("./context/cmd/command_layer");
    const InputLayer   = require("./context/input/input_layer");
    const SecureInputFactory = require('../model/secure_input_factory');

    var banner_layer;
    var device_layer;
    var cert_layer;
    var command_layer;
    var input_layer;

    function main_form (name, className){ 
       this.root = $("#cwui");
       this.init = false;
       
       this.name = "MainForm";
       this.html = "<div class='ini-main-form'></div>";
       this.device;
       this.options;
    }
    main_form.prototype = new Form();
    main_form.prototype.initialize = function (options){  
        if(this.init) return;
        Form.prototype.initialize.call(this);   
        this.root.append(this.form); 

        var dialog = new DialogForm(this).initialize();
        banner_layer  = new Banner(this).initialize();
        device_layer  = new DeviceLayer(this);
        cert_layer      = new CertificateLayer(this).initialize();
        command_layer   = new CommandLayer(this).initialize();
        input_layer     = new InputLayer(this).initialize();

        device_layer.select = OnSelectDevice;
        device_layer.initialize();

        this.append(banner_layer);
        this.append(device_layer);
        this.append(cert_layer);
        this.append(command_layer);
        this.append(input_layer);
        
        this.options = options;

        this.init = true;

        var button   = $("<button value='button'></button>");
        this.form.append(button);
        button.click (function (){
            var input_factory = SecureInputFactory.getInstance();
            input_factory.KeyBoard.getInput("InputPassword");
        });
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