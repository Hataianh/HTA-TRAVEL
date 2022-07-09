
var app = angular.module("HTATravelApp", []);

app.controller("ToursController", function ($scope, $http) {

    $scope.GetAllData = function (searchString) {
        searchString = document.getElementById("txtSearch").value.toString();
        $http({
            method: "get",
            url: "http://localhost:52137/Admin/Tours/GetAllData/?searchString=" + searchString,
        }).then(function (response) {
            $scope.ToursList = response.data;
        }, function () {
            alert("Lỗi lấy dữ liệu");
        })
    }
    $scope.InsertData = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        if (Action == "Submit") {
            $scope.Tour = {};
            $scope.Tour.TenVN = $scope.TenVN_;
            $scope.Tour.Anh1 = $scope.Anh1_;
            $scope.Tour.Anh2 = $scope.Anh2_;
            $scope.Tour.Anh3 = $scope.Anh3_;
            $scope.Tour.Anh4 = $scope.Anh4_;
            $scope.Tour.Anh5 = $scope.Anh5_;
            $scope.Tour.Giasale = $scope.Giasale_;
            $scope.Tour.Giagoc = $scope.Giagoc_;
            $scope.Tour.Luotxem = $scope.Luotxem_;
            $scope.Tour.Chuongtrinh = $scope.Chuongtrinh_;
            $http({
                method: "post",
                url: "/Admin/Tours/InsertData",
                dataType: "json",
                data: JSON.stringify($scope.Tour)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.TenVN = "";
            })
        } else {
            $scope.Tour = {};
            $scope.Tour.TenVN = $scope.TenVN_;
            $scope.Tour.Anh1 = $scope.Anh1_;
            $scope.Tour.Anh2 = $scope.Anh2_;
            $scope.Tour.Anh3 = $scope.Anh3_;
            $scope.Tour.Anh4 = $scope.Anh4_;
            $scope.Tour.Anh5 = $scope.Anh5_;
            $scope.Tour.Giasale = $scope.Giasale_;
            $scope.Tour.Giagoc = $scope.Giagoc_;
            $scope.Tour.Luotxem = $scope.Luotxem_;
            $scope.Tour.Chuongtrinh = $scope.Chuongtrinh_;
            $scope.Tour.MaVN = document.getElementById("MaVN_").value;
            $http({
                method: "post",
                url: "/Admin/Tours/UpdateData",
                dataType: "json",
                data: JSON.stringify($scope.Tour)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.TenVN = "";
                document.getElementById("btnSave").setAttribute("value", "Submit");
            })
        }
    }
    $scope.UpdateData = function (Tour) {
        document.getElementById("MaVN_").value = Tour.MaVN;
        $scope.TenVN_ = Tour.TenVN;
        $scope.Anh1_ = Tour.Anh1;
        $scope.Anh2_ = Tour.Anh2;
        $scope.Anh3_ = Tour.Anh3;
        $scope.Anh4_ = Tour.Anh4;
        $scope.Anh5_ = Tour.Anh5;
        $scope.Giasale_ = Tour.Giasale;
        $scope.Giagoc_ = Tour.Giagoc;
        $scope.Luotxem_ = Tour.Luotxem;
        $scope.Chuongtrinh_ = Tour.Chuongtrinh;
        document.getElementById("btnSave").setAttribute("value", "Update");
    }
    $scope.DeleteData = function (Tour) {
        $http({
            method: "post",
            url: "/Admin/Tours/DeleteData",
            dataType: "json",
            data: JSON.stringify(Tour)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData('');
        })
    }
    
});