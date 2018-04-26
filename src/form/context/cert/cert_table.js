define(function() {
    'use strict';
    require("tablesorter");
    const Form = require("../../form");
    var cert_table = function (options){
        console.log(options)
        this.name = "CertTable"        
        this.html = require("../../../../res/html/cert_table.html");
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
        // // function mapping
        // this.form.click(function(){
        //     console.log(self.name + " clicked.");
        // });
    }

    return cert_table;
});