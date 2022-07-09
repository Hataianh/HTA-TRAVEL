/// <reference path="../angular.min.js" />
var app = angular.module("HTATravelApp", []);
app.controller("LoginCtrl", function ($scope, $http, loginService, $injector, notificationService) {
    $scope.listUser = [];
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.Login = function () {
        let Login = {};
        Login.TaiKhoan = $('#TaiKhoan').val();
        Login.MatKhau = $('#MatKhau').val();
        $http({
            method: 'POST',
            url: 'http://localhost:52137/Admin/AjaxLogin',
            datatype: 'json',
            data: JSON.stringify(Login)
        }).then(function (response) {
            if (response.data.ok == 1) {
                window.location.replace("/Admin/Admin/Index");
            }
            else {
                alert('Có lỗi');
            }
        });
    };
});