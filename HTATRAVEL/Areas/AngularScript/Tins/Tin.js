
var app = angular.module("HTATravelApp", []);

//app.module('HTATravelApp')
//    .filter('formatDateTime', function ($filter) {
//        return function (date, format) {
//            if (date) {
//                return moment(Number(date)).format(format || "DD/MM/YYYY");
//            }
//            else
//                return "";
//        };
//    });

app.controller("TinsController", function ($scope, $http) {

    $scope.GetAllData = function (searchString) {
        searchString = document.getElementById("txtSearch").value.toString();
        $http({
            method: "get",
            url: "http://localhost:52137/Admin/Tins/GetAllData/?searchString=" + searchString,
        }).then(function (response) {
            $scope.TinsList = response.data;
        }, function () {
            alert("Lỗi lấy dữ liệu");
        })
    }
    $scope.InsertData = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        if (Action == "Submit") {
            $scope.Tin = {};
            $scope.Tin.Tieude = $scope.Tieude_;
            $scope.Tin.Anh1 = $scope.Anh1_;
            $scope.Tin.Anh2 = $scope.Anh2_;
            $scope.Tin.Anh3 = $scope.Anh3_;
            $scope.Tin.Anh4 = $scope.Anh4_;
            $scope.Tin.Anh5 = $scope.Anh5_;
            $scope.Tin.Ngaydang = $scope.Ngaydang_;
            $scope.Tin.Luotxem = $scope.Luotxem_;
            $scope.Tin.Noidung = $scope.Noidung_;
            $http({
                method: "post",
                url: "/Admin/Tins/InsertData",
                dataType: "json",
                data: JSON.stringify($scope.Tin)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.Tieude = "";
            })
        } else {
            $scope.Tin = {};
            $scope.Tin.Tieude = $scope.Tieude_;
            $scope.Tin.Anh1 = $scope.Anh1_;
            $scope.Tin.Anh2 = $scope.Anh2_;
            $scope.Tin.Anh3 = $scope.Anh3_;
            $scope.Tin.Anh4 = $scope.Anh4_;
            $scope.Tin.Anh5 = $scope.Anh5_;
            $scope.Tin.Ngaydang = $scope.Ngaydang_;
            $scope.Tin.Luotxem = $scope.Luotxem_;
            $scope.Tin.Noidung = $scope.Noidung_;
            $scope.Tin.MaTin = document.getElementById("MaTin_").value;
            $http({
                method: "post",
                url: "/Admin/Tins/UpdateData",
                dataType: "json",
                data: JSON.stringify($scope.Tin)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.Tieude = "";
                document.getElementById("btnSave").setAttribute("value", "Submit");
            })
        }
    }
    $scope.UpdateData = function (Tin) {
        document.getElementById("MaTin_").value = Tin.MaTin;
        $scope.Tieude_ = Tin.Tieude;
        $scope.Anh1_ = Tin.Anh1;
        $scope.Anh2_ = Tin.Anh2;
        $scope.Anh3_ = Tin.Anh3;
        $scope.Anh4_ = Tin.Anh4;
        $scope.Anh5_ = Tin.Anh5;
        $scope.Ngaydang_ = Tin.Ngaydang;
        $scope.Luotxem_ = Tin.Luotxem;
        $scope.Noidung_ = Tin.Noidung;
        document.getElementById("btnSave").setAttribute("value", "Update");
    }
    //$scope.dateObj = function (stringDate) {
    //    if (stringDate != null) {
    //        unix_timestamp = parseInt(stringDate.replace(/[\/\(\)a-z]/ig, ""));
    //        return new Date(unix_timestamp);
    //    }
    //    else {
    //        return "";
    //    }
    //}

    $scope.DeleteData = function (Tin) {
        $http({
            method: "post",
            url: "/Admin/Tins/DeleteData",
            dataType: "json",
            data: JSON.stringify(Tin)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData('');
        })
    }
    
});