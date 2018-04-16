define(function(){
    const MainForm = require("./main_form");

    const parent = new MainForm();
    function login_form (){
        this.name = "LoginForm";
        this.count = 0;
    }
    

    login_form.prototype = parent;
    login_form.prototype.initialize = function (){
        //parent.prototype.initialize();
        console.log("parent",parent );
        MainForm.prototype.initialize.call(this);
 
        console.log("LoginForm - initialize")
        this.count++;
        if(this.count > 3){
            return;
        }
    } 

    return login_form;

})