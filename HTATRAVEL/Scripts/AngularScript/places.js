/// <reference path="../angular.min.js" />
var app = angular.module("HTATravelApp", []);

app.controller("PlacesCtrl", function ($scope, $http, $window, $timeout) {
    /*================== Danh sách các biến =================================== */
    $scope.listTourVN = {};
    $scope.listTourQT = {};
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.LoadTourVN = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:52137/Places/GetVN',
        }).then(function (response) {
            $scope.listTourVN = response.data;
        });

        $timeout(function () {
            $('.js-owl-carousel-2').owlCarousel({
                loop: false,
                margin: 20,
                nav: true,
                stagePadding: 0,
                navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        }, 100);
    };

    $scope.LoadTourQT = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:52137/Places/GetQT',
        }).then(function (response) {
            $scope.listTourQT = response.data;
        });

        $timeout(function () {
            $('.js-owl-carousel-2').owlCarousel({
                loop: false,
                margin: 20,
                nav: true,
                stagePadding: 0,
                navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        }, 100);
    };
});

