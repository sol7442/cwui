define(function() {
    'use strict';
    const ExDevice = require('./ex_device');
    var device = function (){
         this.id = "HARD_DISK";
    }
     
    device.prototype = new ExDevice();
    
 
     return device;
 });