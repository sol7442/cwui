define(function() {
    'use strict';
    require("tablesorter");
    require("../../../../node_modules/tablesorter/dist/css/theme.blue.css");
    const Form = require("../../form");
    const Emitter = require('component-emitter');


    var func_defineColumns = require("../../../model/cert_table_col");

    var columns ;
    var certs;
    var emitter = new Emitter();  
    var cert_table = function (options){
        console.log(options)
        this.name = "CertTable"        
        this.html = require("../../../../res/html/cert_table.html");
        
    }
    cert_table.prototype = new Form();
    cert_table.prototype.initialize = function (){

        Form.prototype.initialize.call(this); 
        this.form.tablesorter({           
            theme: 'blue',            
			usNumberFormat : false,
			sortReset      : true,
			sortRestart    : true
        });

        emitter.on("onSelect",this.select);
    }
    cert_table.prototype.setData = function (cert_list){
        certs = cert_list;
        clearTable(this.form);

        var tbody = this.form.find("tbody");
        for(var i= 0; i < cert_list.length; i++){
            var row = makeRow(cert_list[i]);
            tbody.append(row).trigger('addRows', [row, true]);
        }

        $("tbody tr").click(function(event) {
            onSelect(this);
        });
    }    

    cert_table.prototype.init_header = function (){
        columns = func_defineColumns(); 
        for(var i=0; i<columns.length;i++){
            this.form.find('thead tr').append('<th>' + columns[i].value  + '</th>');
        }
        this.form.trigger('updateAll');
    }
    cert_table.prototype.select;


    function clearTable(table){
        var tbody = table.find("tbody");
        tbody.html("");
        tbody.trigger('update')
    }
    function makeRow(cert_info){
        console.log(cert_info);
        var html = "<tr>";
        for(var j= 0; j < columns.length; j++){
            html += "<td>" +  cert_info[columns[j].key] + "</td>";
        }
        html += "/<tr>";
        var row = $(html);
        row.attr("id",cert_info.SERIAL);
        return row;
    }
    function onSelect(cert_info_row ){
        $(cert_info_row).attr("selected","selected");
        var selected_cert;
        var select_id = $(cert_info_row).attr("id");
        for(var i=0; i<certs.length;i++){
            if(certs[i].SERIAL == select_id){
                selected_cert = certs[i];
                break;
            }
        }

        emitter.emit("onSelect",selected_cert);
    }


    return cert_table;
});