define(function() {
    'use strict';
    
    var form = function(){
        this.id;
        this.classname;          
        this.html ;
        this.form ;
    }
    form.prototype.initialize = function (){        
        this.form = $(this.html);
        this.form.attr("id",this.id);
        this.form.attr("class",this.classname);
        return this;
    }
    form.prototype.append = function (sub){
        this.form.append(sub.form);
    }
    form.prototype.remove = function (sub){

    }

   
       

    return form;
})