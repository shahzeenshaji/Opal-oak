var app = angular.module('clothingStoreApp', []);

app.controller('StoreController', function ($scope, $http) {
    $scope.products = [];
    $scope.customers = [];

    // Fetch JSON file
    $http.get('clothing.json').then(function (response) {
        $scope.products = response.data.products;
        $scope.customers = response.data.customers;

        // Broadcast event when data is loaded
        $scope.$broadcast('jsonLoaded', response.data);
    });

    // Listen for event
    $scope.$on('jsonLoaded', function (event, data) {
        console.log("JSON Data Loaded:", data);
    });

    // Watch for changes in products
    $scope.$watch('products', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            console.log("Product data updated!");
        }
    }, true);
});
