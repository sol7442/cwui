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
        this.form = new LoginForm();
        console.log(this.form);
        
        this.form.initialize();
        this.form.show();

        console.log("form",this.form);
    }

    return cwui;
})