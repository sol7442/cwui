define(function() {
    'use strict';
    const Form = require("../../form");
   
    var input_pwd = function (){
        this.name = "InputPassword"
        this.html = "<div class='ini-input-pwd'></div>"
    }
    input_pwd.prototype = new Form();
    input_pwd.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   

        var pwd = $("<input type='password'/>");
        this.form.append(pwd);
    }


    return input_pwd;
});