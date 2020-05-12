var app=angular.module("DateTime",[]);  
app.controller("clockApp",TimeCtrlMethod);  


function TimeCtrlMethod($scope){
    var sysTime=new Date();
    $scope.hourOfDay = sysTime.toTimeString();
    //the below variable userName is used for demonstration purpose where user adding name in input text area 
    //and getting same added to the scope which makes Angular js 2 way data binding
    $scope.userName="";
    // The below updatTime is a function which will be used when we call it from any defined contoleer method
    $scope.updateTime = function(){
        var sysTime=new Date();
        $scope.hourOfDay = sysTime.toTimeString();
        console.log("the user name is ",$scope.userName);
      }
}
