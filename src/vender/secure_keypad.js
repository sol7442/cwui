define(function() {
    'use strict';
    const SecureInput = require("../model/secure_input");
    var key_keypad = function (){
        this.name = "keypad_name";
        this.type = "keypad_type";
        this.id = "keypad_id";
    }

    return new key_keypad();
});