var app = angular.module("myApp",[]);
app.controller("ngHideAndngShow",ngHideAndngShow);
app.controller("ngRepeat",ngRepeat);
app.controller("objectList",objectList);


 function ngHideAndngShow(){

 }

 function ngRepeat(){

     this.myList=[1,2];

     this.Person=[
        {'name':"raghu",'age':25},
        {'name':"ram",'age':25},
        {'name':"bodapati",'age':25}
    ];


 }

function objectList(){
    
    this.list=[
        {"name":"raghu",'age':25},
        {"name":"ram",'age':25},
        {"name":"bodapati",'age':25}
    ];
}