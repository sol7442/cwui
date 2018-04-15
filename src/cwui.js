define(function() {

    

    var cwui = function (){
        this.form;
    }

    cwui.prototype.initialize = function (){
        $(document.body).ready(function (){
            var cwui_element = document.createElement( "div");
            cwui_element.id         = "cwui";
            cwui_element.className  = "initech";
            document.body.append(cwui_element);            
        });
    }
    cwui.prototype.login = function (){
    
        const LoginForm = require('./form/login_form')
        console.log(LoginForm);
        
        this.form = new LoginForm();
        this.form.show();

        console.log("form",this.form);
    }

    return cwui;
})