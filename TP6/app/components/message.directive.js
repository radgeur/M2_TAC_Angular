(function(){
    'use strict';

    angular
    .module('fjs.components')
    .directive('message', messageDirectiveDefinition);

    function messageDirectiveDefinition() {
        return {
            restrict : 'E',
            scope: {
                text: '='
            },
            controller : messageDirectiveController,
            templateUrl : 'app/components/message.html',
            controllerAs : 'vm',
            bindToController : true
        };
    }

    function messageDirectiveController() {
        var vm = this;

        vm.text = "Hello World !!";
    }
})();
