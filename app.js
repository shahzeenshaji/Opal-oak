var app = angular.module('clothingApp', []);

app.controller('ClothingController', function($scope, $http) {
    $http.get('clothing.json').then(function(response) {
        $scope.clothing = response.data;
    });

    $scope.showDetails = function(item) {
        $scope.selectedItem = item;
    };
});
