

//Here function is wrapped inside an (function(){...})(); because to prevent this 
//global variable into global name space and this executes immediately.

(function() {

var app= angular.module("contactApp");

app.constant("AppNameSVC",{
    "name":"raghu",
    "author":"java Brains",
    "company":"Infosys",
    version:1
});

app.value("LoggingSVC",function(){
    console.log("Gello");
});

app.value("InputNameSVC","Java Brains tutorials");

})();