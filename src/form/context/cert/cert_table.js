define(function() {
    'use strict';
    require("tablesorter");
    const Form = require("../../form");


    var func_defineColumns = require("../../../model/cert_table_col");

    var cert_table = function (options){
        console.log(options)
        this.name = "CertTable"        
        this.html = require("../../../../res/html/cert_table.html");
        this.columns;
        
        
    }
    cert_table.prototype = new Form();
    cert_table.prototype.initialize = function (){
        Form.prototype.initialize.call(this); 
        this.form.tablesorter({
			widgets        : ['zebra', 'columns'],
			usNumberFormat : false,
			sortReset      : true,
			sortRestart    : true
        });
        
    }
    cert_table.prototype.setData = function (cert_list){
        console.log(this.columns);
        console.log(cert_list);

        for(var i= 0; i < cert_list.length; i++){
            console.log(cert_list[i]);
        }

    }    

    cert_table.prototype.init_header = function (){
        this.columns = func_defineColumns();        
        for(var i=0; i<this.columns.length;i++){
            this.form.find('thead tr').append('<th>' + this.columns[i].value  + '</th>');
        }
        this.form.trigger('updateAll');
    }

    return cert_table;
});