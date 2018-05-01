define(function() {
    'use strict';
    const Device = require('device');
     var device = function (){
         this.id;
     }
 
     device.prototype = new Device();
     device.prototype.isInstall = function (){
        console.log(this.id);
     }
     return device;
 });