(function(){
    'use strict';

    angular
    .module('fjs.hello')
    .controller('HelloController', helloController);

    helloController.$inject = ['math', 'restData'];

    function helloController(math) {
        var vm = this;

        vm.operand1 = 0;
        vm.operand2 = 0;
        vm.addition = 0;
        vm.subtraction = 0;

        vm.solve = solve;

        function solve() {
            vm.addition = math.add(vm.operand1, vm.operand2);
            vm.subtraction = math.sub(vm.operand1, vm.operand2);
        }

        restData.get();
        restData.save();
        restData.query();
    }

})();
