define(function() {
    'use strict';
    
    require('webpack-jquery-ui');
    require('webpack-jquery-ui/css');
    require('../../res/css/cwui.css');
    
    const Form    = require("./form");

    const OverLay = require("./context/overlay");

    function main_form (name, className){ 
       this.root = $("#cwui");
    }
    main_form.prototype = new Form();
    main_form.prototype.initialize = function (){  
        Form.prototype.initialize.call(this);   
        this.root.append(this.form);  
        
        // var zIndex = findHighestZIndex();
        // console.log("zIndex",zIndex);
        // var overlay = new OverLay();        
        // this.append(overlay);
        // overlay.form.css("z-index",zIndex+1);
        //this.form.css("z-index",zIndex+2);
        //this.form.dialog();
    }

    main_form.prototype.show = function(){
        
    }

    main_form.prototype.hide = function(){
    }

    function findHighestZIndex()
    {
        var divs = document.getElementsByTagName('div');
        var highest = 0;
        for (var i = 0; i < divs .length; i++)
        {
            var zindex = divs[i].style.zIndex;
            if (zindex > highest) {
                highest = zindex;
            }
        }
        return highest;
    }
    

    return main_form;
})