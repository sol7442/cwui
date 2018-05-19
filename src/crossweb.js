define(function() {
    'use strict';
    var bowser = require('bowser');

    const CrossWebUi = require('./cwui');
    const CrossWebEx = require('./cwex');
    
    var crossweb = function(){
        if(bowser.chrome){
            this.delegate  = new CrossWebUi();
        }else{
            this.delegate  = new CrossWebEx();
        }
    }

    crossweb.prototype.initialize = function(options){           
        this.delegate.initialize(options);
    }

    crossweb.prototype.login = function(){ 
        console.log(this.delegate);
        this.delegate.login();
    }

    return new crossweb();
});