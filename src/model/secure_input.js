var secure_input = (function (){
    var instance;
    var secure_object = function (){
        this.inputs = [];
    }

    secure_object.prototype.regist = function (_input){
        console.log("_input >",_input);      
        this.inputs.push(_input);
        console.log("this.inputs >",this.inputs);  
    }


    return {
        getInstance : function (){
            console.log("ceate...",instance);
            if(instance == undefined){
                instance = new secure_object();
            }
            return instance;
        }
    }
})();