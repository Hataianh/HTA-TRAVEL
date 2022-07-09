/// <reference path="../angular.min.js" />
var app = angular.module("HTATravelApp", []);

app.controller("NewsCtrl", function ($scope, $http, $window, $timeout) {

    /*================== Danh sách các biến =================================== */

    $scope.listTin = {};

    /*=================== Thao tác dữ liệu ==================================== */
    $scope.LoadTin = function () {
        $http({
            method: 'GET',  
            url: 'http://localhost:52137/News/GetTin',
        }).then(function (response) {
            $scope.listTin = response.data;
        });
    };
});


