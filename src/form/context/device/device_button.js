define(function() {
    'use strict';
    const Emitter = require('component-emitter');
    const Form = require("../../form");

    const DeviceAdapter = require("../../../model/device_adapter");
    
    var device_button = function (options){
        console.log(options)
        this.name = options["id"];
        this.text = options["text"];
        this.html = require("../../../../res/html/device_button.html");   
        this.emitter = new Emitter();     
        this.device  = DeviceAdapter.create(this.name);
    }
    device_button.prototype = new Form();

    device_button.prototype.click;
    device_button.prototype.initialize = function (){
        var self = this;
        Form.prototype.initialize.call(this); 

        //
        var text_elm = this.form.find(".ini-device-txt");
        console.log("text_elm",text_elm);
        text_elm.text(this.text);

        // function mapping

        this.emitter.on("onClick", self.click);

        this.form.click(function(){
            //OnClick(self.name);
            self.emitter.emit("onClick",self.device);
        });
    }   

    
   



    return device_button;
});