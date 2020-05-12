var app = angular.module("myApp",[]);
app.controller("ctrl1",ctrl1);
app.controller("ctrl2",ctrl2);

function ctrl1($scope){
    $scope.testValue=10;
}

function ctrl2($scope){
    $scope.testValue="hello hi ";
}