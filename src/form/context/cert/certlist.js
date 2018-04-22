define(function() {
    'use strict';
    const Form = require("../../form");


    var cert_list = function (){
        this.name = "CertificateList"
        this.html = require("../../../../res/html/certlist.html");
    }
    cert_list.prototype = new Form();
    cert_list.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
    }

    return cert_list;
});