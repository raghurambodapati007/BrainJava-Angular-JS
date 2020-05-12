var app = angular.module("myApp",[]);
app.controller("ctrl1",ctrl1);
app.controller("ctrl2",ctrl2);

function ctrl1(){
    //var this =$scope; // this line will not be there actually but we get this object as an ref to scope obj.
    this.testValue=10;
}

function ctrl2(){
    this.testValue="hello hi ";
}
