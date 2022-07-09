/// <reference path="../angular.min.js" />
var app = angular.module("HTATravelApp", []);

app.controller("ChiTietCtrl", function ($scope, $http, $window, $timeout, $interval) {
    /*================== Danh sách các biến =================================== */
    $scope.VNCT = {};
    $scope.QTCT = {};
    $scope.listXemNhieu = {};
    $scope.listXemNhieuQT = {};
    /*=================== Thao tác dữ liệu ==================================== */ 
    
    $scope.LoadVNCT = function (MaVN) {
        $http({
            method: 'GET',
            url: 'http://localhost:52137/DiemDen/GetTourVNCT/?MaVN=' + MaVN,
        }).then(function (response) {
            $scope.VNCT = response.data;
        });
    };

    

    $scope.LoadQTCT = function (MaQT) {
        $http({
            method: 'GET',
            url: 'http://localhost:52137/DiemDen/GetTourQTCT/?MaQT=' + MaQT,
        }).then(function (response) {
            $scope.QTCT = response.data;
        });
    };

    $scope.LoadXemNhieu = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:52137/DiemDen/GetXemNhieu',
        }).then(function (response) {
            $scope.listXemNhieu = response.data;
        });
    };

    $scope.LoadXemNhieuQT = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:52137/DiemDen/GetXemNhieuQT',
        }).then(function (response) {
            $scope.listXemNhieuQT = response.data;
        });
    };
});
 
 



