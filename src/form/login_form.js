define(function(){
    const MainForm = require("./main_form");

    function login_form (){
        this.name = "LoginForm";
    }
    
    login_form.prototype = new MainForm();
    

    return login_form;

})