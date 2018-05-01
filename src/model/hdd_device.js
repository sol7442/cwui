define(function() {
    'use strict';
    const ExDevice = require('ex_device');
     var device = function (){
         this.id = "hdd";
     }
 
     
     device.prototype = new ExDevice();
     
 
     return device;
 });