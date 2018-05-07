define(function() {
    'use strict';
    const Form = require("../../form");
    const SectionTitle = require("../title/section_title");
    const DeviceButton = require("./device_button");
    const Emitter = require('component-emitter');

    var emitter = new Emitter();    
    var device_layer = function (){
        this.name = "DeviceLayer"
        this.html = "<div class='ini-device-layer'></div>";
        this.title;
        this.buttons = [];
         
    }
    device_layer.prototype = new Form();
    device_layer.prototype.select;

    device_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
        this.title = new SectionTitle(this);
        this.append(this.title);
        this.title.setTitle("인증서가 저장된 위치를 선택해주세요");


        var hdd_button = new DeviceButton({id:"hdd",text:"하드디스크"});
        hdd_button.click = OnSelect;
        
        var usb_button = new DeviceButton({id:"usb",text:"이동식디스크"});
        usb_button.click = OnSelect;

        this.append(hdd_button);
        this.append(usb_button);

        this.buttons.push(hdd_button);
        this.buttons.push(usb_button);

        console.log("...",this.select)
        emitter.on("OnSelect", this.select);
        
    }

    function OnSelect(device){   
        emitter.emit("OnSelect",device);
    }



    return device_layer;
});