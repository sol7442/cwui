define(function() {
    'use strict';
    const ExDevice = require('./ex_device');
     var device = function (){
         this.id = "usb";
     }
 
     
     device.prototype = new ExDevice();
     
 
     return device;
 });