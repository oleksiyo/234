var angModule = angular.module("myApp", []);

angModule.controller("myCtrl", function ($scope, $filter, $window, $timeout) {
    $scope.isSaving = undefined;
    $scope.btnVal = 'Yes';
    $scope.save = function()
    {
       
    };
});