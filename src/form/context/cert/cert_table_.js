define(function() {
    'use strict';
    require("jsgrid");    
    require("../../../../node_modules/jsgrid/css/jsgrid.css");  
    require("../../../../node_modules/jsgrid/css/theme.css");  
    
    const Form = require("../../form");
    const Emitter = require('component-emitter');
    
    var cert_table = function (options){
        console.log(options)
        this.id = "CertTable"        
        this.html = "<div></div>"
        
    }
    cert_table.prototype = new Form();
    cert_table.prototype.select;
    cert_table.prototype.initialize = function (){
        Form.prototype.initialize.call(this); 
        $("#CertTable").jsGrid({
            height: "90%",
            width: "100%",
            sorting: true,
            paging: true,
            autoload: true,
     
            pageSize: 10,
            pageButtonCount: 5,
            
     
            fields: [
                { name: "Name", type: "text", width: 150 },
                { name: "Age", type: "number", width: 50 },
                { name: "Address", type: "text", width: 200 },
               // { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                
            ]
        });
       // emitter.on("onSelect",this.select);
        console.log(">>>>>>")
        return this;
    }
    cert_table.prototype.setData = function (cert_list){        
        console.log("cert_list",cert_list)
    }    


    return cert_table;
});