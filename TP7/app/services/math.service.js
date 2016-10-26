(function (){
    'use strict';

    angular
    .module('fjs.services')
    .service('math', mathService);

    function mathService() {
        return {
            add : function(operand1, operand2) {
                if(operand1.isNan() || operand2.isNan())
                    console.log("One of the operand are Nan");
                else
                    return operand1 + operand2;
            },
            sub : function(operand1, operand2) {
                if(operand1.isNan() || operand2.isNan())
                    console.log("One of the operand are Nan");
                else 
                    return operand1 - operand2;
            }
        };
    }
})();
