define(function() {
    'use strict';
    const Form = require("../../form");

    const SectionTitle = require("../title/section_title");
    const CertTable = require("./cert_table");

    var selected_cert;
    var cert_layer = function (){
        this.name = "CertificateLayer"
        this.html = "<div class='ini-cert-layer'></div>";
        this.table;
        
    }
    cert_layer.prototype = new Form();
    cert_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
        var seceion_title = new SectionTitle(this).initialize();
        seceion_title.setTitle("인증서를 선택해주세요");
        this.append(seceion_title);
        
        this.table = new CertTable(this).initialize();
        this.table.init_header();
        this.table.select = OnSelectCert;

        this.append(this.table);
       

        return this;
    }
    cert_layer.prototype.setCertList = function (cert_list){
        this.table.setData(cert_list);
    }

    cert_layer.prototype.getSelectedCert = function(){
        return selected_cert;
    } 

    function OnSelectCert(cert){
        selected_cert = cert;
        console.log("selected_cert >> ",selected_cert);
    }

    

    return cert_layer;
});