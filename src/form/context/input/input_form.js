define(function() {
    'use strict';
    const Form = require("../../form");   
    const SectionTitle = require("../title/section_title");
    const SecureInputFactory = require('../../../model/secure_input_factory');

    var input_form = function (parent){
        this.name = "InputPassword"
        this.html = "<div class='ini-input-pwd'></div>"
        this.parent = parent;
    }
    input_form.prototype = new Form();
    input_form.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   

        var title = new SectionTitle(this);
        this.append(title);
        title.setTitle("인증서 암호를 입력해주세요");

        var input_factory = SecureInputFactory.getInstance();


        var keybord_input  = $("<input type='password'/>");
        var keypad_input   = $("<button><span class='keypad'></span></button>");

        this.form.append(keybord_input);
        this.form.append(keypad_input);
    }


    return input_form;
});