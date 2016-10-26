(function(){
    'use strict';

    angular
    .module('fjs.hello')
    .controller('HelloController', helloController);

    helloController.$inject = ['math'];

    function helloController(math) {
        var vm = this;

        var vm.result = math.add(1,2);
    }

})();
