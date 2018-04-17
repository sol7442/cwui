define(function(){
    const MainForm = require("./main_form");
    
    function login_form (){
        this.name = "LoginForm";
        this.count = 0;
    }
    

    login_form.prototype = new MainForm();
    login_form.prototype.initialize = function (){
        MainForm.prototype.initialize.call(this);
        console.log("LoginForm - initialize")
        
        const TilteLayer = require("./context/title/title");        
        this.append(new TilteLayer());
    } 

    return login_form;

})