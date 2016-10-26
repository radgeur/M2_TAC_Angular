(function(){
    'use strict';

    angular.module(fjs.filters)
    .filter('capitalize', capitalizeFilter);

    function capitalizeFilter() {
        return function(input) {
            return input[0].toUpperCase() + input.substring(1);
        }
    }
})
