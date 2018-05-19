define(function() {
    'use strict';
    const SecureInput = require("../model/secure_input");
    var key_board = function (){
        this.name = "keybord_name";
        this.type = "keybord_type";
        this.id = "keybord_id";
    }
    return new key_board();
});