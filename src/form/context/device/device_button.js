define(function() {
    'use strict';
    const Emitter = require('component-emitter');
    const Form = require("../../form");

    const DeviceAdapter = require("../../../model/device_adapter");
    
    var device_button = function (options){
        this.id = options["id"];
        this.text = options["text"];
        this.img  = options["img"];
        this.html = "<div class='ini-device-btn'>"+
                    "   <div class='ini-device-img'></div>"+
                    "   <div class='ini-device-txt'></div>"+
                    "</div>"
        this.emitter = new Emitter();     
        this.device  = DeviceAdapter.create(this.id);
    }
    device_button.prototype = new Form();

    device_button.prototype.click;
    device_button.prototype.initialize = function (){
        Form.prototype.initialize.call(this); 

        var self = this;
        var txt = this.form.find(".ini-device-txt");        
        txt.prepend($('<p>',{text:this.text}));
       
        var img = this.form.find(".ini-device-img");
        console.log("text_elm",img);
        img.prepend($('<img>',{src:this.img}));
        
        this.emitter.on("onClick", this.click);
        this.form.click(function(){
            self.emitter.emit("onClick",self.device);
        });

        return this;
    }   
    return device_button;
});