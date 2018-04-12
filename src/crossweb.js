define(function() {
    'use strict';
    
    var crossweb = function(){

    }

    crossweb.prototype.initialize = function(elm){ 
        $('#cwui').append( "<p>Test..</p>" ) ;      
        console.log($('#cwui'));
    }


    return new crossweb();
});