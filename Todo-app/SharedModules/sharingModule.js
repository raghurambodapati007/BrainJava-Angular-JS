var sharingModule = angular.module("sharingModule",[]);

sharingModule.controller("normalController",normalController);

 function normalController(){

     this.sharedMessage="Hi, I have come from another module other than your myApp module";

 }