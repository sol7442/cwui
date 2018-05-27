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
        this.buttons = [];
         
    }
    device_layer.prototype = new Form();
    device_layer.prototype.select;

    device_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);  

        var select_title = new SectionTitle(this).initialize();
        select_title.setTitle("인증서가 저장된 위치를 선택해주세요");
        this.append(select_title);
        
        var hdd_button = new DeviceButton({id:"hdd",text:"하드디스크",img:"/res/img/icon/icon_disk1.png"});
        hdd_button.click = OnSelect;
        hdd_button.initialize();

        var usb_button = new DeviceButton({id:"usb",text:"이동식디스크",img:"/res/img/icon/icon_disk2.png"});
        usb_button.click = OnSelect;
        usb_button.initialize();

        this.append(hdd_button);
        this.append(usb_button);

        this.buttons.push(hdd_button);
        this.buttons.push(usb_button);

        console.log("...",this.select)
        emitter.on("OnSelect", this.select);
        
        return this;
    }

    function OnSelect(device){   
        emitter.emit("OnSelect",device);
    }



    return device_layer;
});