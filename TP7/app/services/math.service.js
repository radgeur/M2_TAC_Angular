(function (){
    'use strict';

    angular
    .module('fjs.services')
    .service('math', mathService);

    function mathService() {
        return {
            add: function(operand1, operand2) {
                if(!angular.isNumber(operand1) || !angular.isNumber(operand2)) {
                    throw new Error('Service math : operand1 and operand2 have to be number.');
                }

                return operand1 + operand2;
            },
            sub: function(operand1, operand2) {
                if(!angular.isNumber(operand1) || !angular.isNumber(operand2)) {
                    throw new Error('Service math : operand1 and operand2 have to be number.');
                }

                return operand1 - operand2;
            }    
        };
    }
})();
