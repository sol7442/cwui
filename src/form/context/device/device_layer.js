define(function() {
    'use strict';
    const Form = require("../../form");
    const SectionTitle = require("../title/section_title");
    const ButtonLayer = require("./button_layer");
    var device_layer = function (){
        this.name = "DeviceLayer"
        this.html = require("../../../../res/html/devicelayer.html");
        this.title;
        this.button_layer;
    }
    device_layer.prototype = new Form();
    device_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
        this.title = new SectionTitle(this);
        this.append(this.title);
        this.title.setTitle("인증서가 저장된 위치를 선택해주세요");

        this.button_layer = new ButtonLayer(this);
        this.append(this.button_layer);
    }

    return device_layer;
});