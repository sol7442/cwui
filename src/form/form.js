define(function() {
    var form = function(){
        this.name;
        this.className;
        this.form;
        this.parent = null;
    }

    form.prototype.addClass = function (className){
        this.className = className;
        this.form.addClass(this.className);
    }
    form.prototype.append = function (sub){

    }
    form.prototype.remove = function (sub){

    }

    form.prototype.initialize; // abstract

    return form;
})