var app = angular.module('clothingStoreApp', []);

app.controller('StoreController', function ($scope, $http) {
    $scope.products = [];
    $scope.customers = [];

   
    $http.get('clothing.json').then(function (response) {
        $scope.products = response.data.products;
        $scope.customers = response.data.customers;

        $scope.$broadcast('jsonLoaded', response.data);
    });

    
    $scope.$on('jsonLoaded', function (event, data) {
        console.log("JSON Data Loaded:", data);
    });

    
    $scope.$watch('products', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            console.log("Product data updated!");
        }
    }, true);
});
