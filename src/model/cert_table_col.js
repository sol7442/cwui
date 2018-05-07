define(function() {
    'use strict';
       
    var defineColumns = function (){
        // 환경설정에 따라서 컬럼 순서 및 영어/한글 조정
        var columns = [];
        columns.push({key:"OID",value:"구분"});
        columns.push({key:"SUBJECT",value:"사용자"});
        columns.push({key:"ISSUER",value:"발급자"});
        columns.push({key:"AFTER_DT",value:"만료일"});

        return columns;
    }
    return defineColumns;
});