var app = angular.module('clothingStoreApp', []);

app.controller('StoreController', function ($scope, $http) {
    $scope.products = [];
    $scope.customers = [];

    $http.get('clothing.json').then(
        function (response) {
            console.log("JSON Data Loaded:", response.data); // Debugging Log
            $scope.products = response.data.products;
            $scope.customers = response.data.customers;
        },
        function (error) {
            console.error("Error loading JSON:", error);
        }
    );
});

