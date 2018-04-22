define(function() {
    'use strict';
    const Form = require("../../form");
   
    const DeviceButton = require("./device_button");
    var button_layer = function (){
        this.name = "ButtonLayer"
        this.html = "<div class='ini-button-layer'></div>"
        this.buttons = [];
    }
    button_layer.prototype = new Form();
    button_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
        var hdd_button = new DeviceButton({id:"hdd",text:"하드디스크"});
        this.append(hdd_button);
       
        var usb_button = new DeviceButton({id:"usb",text:"이동식디스크"});
        this.append(usb_button);

        this.buttons.push(hdd_button);
        this.buttons.push(usb_button);
    }

    return button_layer;
});