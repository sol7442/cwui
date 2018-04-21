define(function() {
    'use strict';
    
    var form = function(){
        this.name;  
        this.form ;
        this.html ;
    }

    form.prototype.append = function (sub){
        sub.initialize();
        console.log("append >>",sub);
        this.form.append(sub.form);
    }
    form.prototype.remove = function (sub){

    }

    form.prototype.initialize = function (){        
        this.form = $(this.html);
        this.form.attr("id",this.name);
        console.log("initialize",this.form);
    }
       

    return form;
})