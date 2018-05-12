define(function() {
    'use strict';

    const forge = require("node-forge");

    var cert_info = function (id){
        this.ID = id;
        this.SERIAL;
        this.SUBJECT;
        this.SUBJECT_CN;
        this.ISSUER;
        this.ISSUER_CN;
        this.EXPIRE;
        this.EXPIRE_DATE;
        this.EXPIRE_STATUS;
        this.OID; 
        this.OID_NAME;
        this.ISSUER_HASH;
        this.BEFORE_DT;
        this.AFTER_DT;
        this.HASH_ALG;
        this.SIMPLE_ISSUER;
        this.SIMPLE_SUBJECT;
        this.SIMPLE_OIDNAME;
        this.pemCert;
        
    }
    cert_info.prototype.parsFromPem = function (pemCert){
        try{
            var _certInfo = forge.pki.certificateFromPem(pemCert);

            this.pemCert = pemCert;
            this.SERIAL = _certInfo.serialNumber;
            this.SUBJECT_CN = forge.util.decodeUtf8(_certInfo.subject.getField('CN').value);
            this.SUBJECT = parsSubject(this.SUBJECT_CN);
        
            this.ISSUER = _certInfo.issuer.getField('O').value;
            this.ISSUER_CN = _certInfo.issuer.getField('CN').value;
            
            var exten = _certInfo.getExtension("certificatePolicies");        
            this.OID = exten.id;
            this.ISSUER_HASH = _certInfo.issuer.hash;

            this.BEFORE_DT = _certInfo.validity.notBefore;
            this.AFTER_DT  = _certInfo.validity.notAfter;
            this.HASH_ALG  = parsHashAlgorithm(_certInfo.signatureOid);   
           
	    }catch(e){
            console.log(e);
        }
    }

    function parsSubject(subject_cn){
        var idx = subject_cn.indexOf(")");
        var subject = (idx>0 ? subject_cn.substring(0, idx+1) : subject_cn);
        return subject;
    }
    function parsHashAlgorithm(signatrue_oid){        
        var signAlgName = forge.pki.oids[signatrue_oid];
        var hashAlg = signAlgName.substring(0, signAlgName.indexOf('With'));
        return hashAlg;
    }
    function parsOID(exten){
        var OID;
        var OIDName;
        if(exten){
            if(constants.System.LANGUAGE_ENG === defaultConf.System.getLanguage()){
                OIDName = forge.pki.oids["ENG_"+exten.oid]+ ((bankCode != '')? " - "+forge.pki.bankCD["ENG_"+bankCode] : '');
            }else{
                OIDName = forge.pki.oids[exten.oid]+((bankCode != '')? " - "+forge.pki.bankCD[bankCode] : '');
            }
            OID = exten.oid;
        }
    }
    return cert_info;
});