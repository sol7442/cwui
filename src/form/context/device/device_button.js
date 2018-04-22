define(function() {
    'use strict';
    const Form = require("../../form");
    var device_button = function (options){
        console.log(options)
        this.name = options["id"];
        this.text = options["text"];
        this.html = require("../../../../res/html/device_button.html");        
    }
    device_button.prototype = new Form();
    device_button.prototype.initialize = function (){
        Form.prototype.initialize.call(this); 

        //
        var text_elm = this.form.find(".ini-device-txt");
        console.log("text_elm",text_elm);
        text_elm.text(this.text);

        var self = this;
        
        // function mapping
        this.form.click(function(){
            console.log(self.name + " clicked.");
        });
    }

    return device_button;
});