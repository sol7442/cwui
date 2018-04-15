define(function() {
    'use strict';
    const CrossWebUi = require('./cwui');
    
    var crossweb = function(){
         this.delegate  = new CrossWebUi();
    }

    crossweb.prototype.initialize = function(){           
        this.delegate.initialize();
    }

    crossweb.prototype.login = function(){ 
        console.log(this.delegate);
        this.delegate.login();
    }

    return new crossweb();
});