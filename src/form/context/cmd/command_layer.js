define(function() {
    'use strict';
    const Form = require("../../form");
    const CmdButton = require("./cmd_button");

    var command_layer = function (){
        this.id = "CommandLayer"
        this.html = require("../../../../res/html/commandlayer.html");
    }
    command_layer.prototype = new Form();
    command_layer.prototype.initialize = function (){
        Form.prototype.initialize.call(this);   
        
        var btn_bring = new CmdButton({id:"bring",text:"인증서 가저오기"}).initialize();
        var btn_view = new CmdButton({id:"view",text:"인증서 보기"}).initialize();
        var btn_del = new CmdButton({id:"del",text:"인증서 삭제"}).initialize();
        var btn_mgr = new CmdButton({id:"mgr",text:"인증서 관리"}).initialize();

        
        
        
        this.append(btn_mgr);
        this.append(btn_del);
        this.append(btn_view);
        this.append(btn_bring);
        
        return this;
    }
    
    return command_layer;
});