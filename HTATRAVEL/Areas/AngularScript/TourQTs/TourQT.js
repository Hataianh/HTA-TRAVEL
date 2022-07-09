
var app = angular.module("HTATravelApp", []);

app.controller("TourQTsController", function ($scope, $http) {

    $scope.GetAllData = function (searchString) {
        searchString = document.getElementById("txtSearch").value.toString();
        $http({
            method: "get",
            url: "http://localhost:52137/Admin/TourQTs/GetAllData/?searchString=" + searchString,
        }).then(function (response) {
            $scope.TourQTsList = response.data;
        }, function () {
            alert("Lỗi lấy dữ liệu");
        })
    }
    $scope.InsertData = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        if (Action == "Submit") {
            $scope.TourQT = {};
            $scope.TourQT.TenQT = $scope.TenQT_;
            $scope.TourQT.Anh1 = $scope.Anh1_;
            $scope.TourQT.Anh2 = $scope.Anh2_;
            $scope.TourQT.Anh3 = $scope.Anh3_;
            $scope.TourQT.Anh4 = $scope.Anh4_;
            $scope.TourQT.Anh5 = $scope.Anh5_;
            $scope.TourQT.Giasale = $scope.Giasale_;
            $scope.TourQT.Giagoc = $scope.Giagoc_;
            $scope.TourQT.Luotxem = $scope.Luotxem_;
            $scope.TourQT.Chuongtrinh = $scope.Chuongtrinh_;
            $http({
                method: "post",
                url: "/Admin/TourQTs/InsertData",
                dataType: "json",
                data: JSON.stringify($scope.TourQT)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.TenQT = "";
            })
        } else {
            $scope.TourQT = {};
            $scope.TourQT.TenQT = $scope.TenQT_;
            $scope.TourQT.Anh1 = $scope.Anh1_;
            $scope.TourQT.Anh2 = $scope.Anh2_;
            $scope.TourQT.Anh3 = $scope.Anh3_;
            $scope.TourQT.Anh4 = $scope.Anh4_;
            $scope.TourQT.Anh5 = $scope.Anh5_;
            $scope.TourQT.Giasale = $scope.Giasale_;
            $scope.TourQT.Giagoc = $scope.Giagoc_;
            $scope.TourQT.Luotxem = $scope.Luotxem_;
            $scope.TourQT.Chuongtrinh = $scope.Chuongtrinh_;
            $scope.TourQT.MaQT = document.getElementById("MaQT_").value;
            $http({
                method: "post",
                url: "/Admin/TourQTs/UpdateData",
                dataType: "json",
                data: JSON.stringify($scope.TourQT)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.TenQT = "";
                document.getElementById("btnSave").setAttribute("value", "Submit");
            })
        }
    }
    $scope.UpdateData = function (TourQT) {
        document.getElementById("MaQT_").value = TourQT.MaQT;
        $scope.TenQT_ = TourQT.TenQT;
        $scope.Anh1_ = TourQT.Anh1;
        $scope.Anh2_ = TourQT.Anh2;
        $scope.Anh3_ = TourQT.Anh3;
        $scope.Anh4_ = TourQT.Anh4;
        $scope.Anh5_ = TourQT.Anh5;
        $scope.Giasale_ = TourQT.Giasale;
        $scope.Giagoc_ = TourQT.Giagoc;
        $scope.Luotxem_ = TourQT.Luotxem;
        $scope.Chuongtrinh_ = TourQT.Chuongtrinh;
        document.getElementById("btnSave").setAttribute("value", "Update");
    }
    $scope.DeleteData = function (TourQT) {
        $http({
            method: "post",
            url: "/Admin/TourQTs/DeleteData",
            dataType: "json",
            data: JSON.stringify(TourQT)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData('');
        })
    }
    $scope.filteredTodos = []
        , $scope.currentPage = 1
        , $scope.numPerPage = 10
        , $scope.maxSize = 5;

    $scope.makeTodos = function () {
        $scope.todos = [];
        for (i = 1; i <= 1000; i++) {
            $scope.todos.push({ text: "todo " + i, done: false });
        }
    };
    $scope.makeTodos();

    $scope.numPages = function () {
        return Math.ceil($scope.todos.length / $scope.numPerPage);
    };

    $scope.$watch("currentPage + numPerPage", function () {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

        $scope.filteredTodos = $scope.todos.slice(begin, end);
    });
});