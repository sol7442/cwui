define(function() {
    'use strict';
    const Form = require("../../form");

    const SectionTitle = require("../title/section_title");
    var cert_layer = function (){
        this.name = "CertificateLayer"
        this.html = "<div class='ini-cert-layer'></div>";
        this.title;
    }
    cert_layer.prototype = new Form();
    cert_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   

        this.title = new SectionTitle(this);
        this.append(this.title);
        this.title.setTitle("인증서를 선택해주세요");

    }

    return cert_layer;
});