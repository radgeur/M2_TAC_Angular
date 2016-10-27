(function(){
    'use strict';

    angular
    .module('fjs.services')
    .service('restData', restDataService);

    restDataService.$inject = ['$resource'];

    function restDataService($resource) {
        return $resource('http://www.api.ws.fr');
    }

})();
