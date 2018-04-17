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
        console.log("form - ", this.form);
        console.log("append - ", sub);
        console.log("sub.name : ", sub.name)
        this.form.append(sub.form,{id:sub.name,title:"ddddd",text:"testkkkkkk"});
        this.form.append("<p>This is the default dialog which is useful for displaying informa</p>")

    }
    form.prototype.remove = function (sub){

    }

    form.prototype.initialize; // abstract

    return form;
})