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

        var title = new SectionTitle(this).initialize();
        this.append(title);
        title.setTitle("인증서 암호를 입력해주세요");

        
        var keybord_input  = $("<input type='password'/>");
        var keypad_input   = $("<button><span class='keypad'></span></button>");
        keybord_input.attr("id","pwd");

        this.form.append(keybord_input);
        this.form.append(keypad_input);

        var input_factory = SecureInputFactory.getInstance();
        input_factory.KeyBoard.setInput(this.name);
        keypad_input.click(function (){
            console.log("--click",input_factory.KeyPad);
            input_factory.KeyPad.show("id");
        })

        return this;
    }


    return input_form;
});