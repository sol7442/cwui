define(function() {
    'use strict';

    const HddDevie = require('./hdd_device');
    const UsbDevie = require('./usb_device');

    var device_adapter = function (){
    }
    device_adapter.prototype.create = function(id){
        var device = null;
        switch(id) {
            case "hdd":
            device = new HddDevie(id);
            break;
            case "usb":
            device = new UsbDevie(id);
            break;
        }

        return device;
    }
     return new device_adapter;
 });