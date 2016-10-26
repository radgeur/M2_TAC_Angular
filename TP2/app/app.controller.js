angular
    .module('fjs')
    .controller('CustomerController', CustomerController);

CustomerController.$inject = ["$scope", "$log"];

function CustomerController($scope, $log) {
    $scope.name = "Chuck";
    var firstname = "Norris";
    $scope.$watch("name", function(){console.log($scope.name + " est le meilleur")});
    $log.debug('test');
}
