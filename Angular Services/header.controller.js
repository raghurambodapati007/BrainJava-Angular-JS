//Here function is wrapped inside an (function(){...})(); because to prevent this 
//global variable into global name space and this executes immediately.

( function() {

    var app = angular.module("contactApp");

    app.controller("headerController",headerController);

    // all these AppNameSVC,LoggingSVC,AppDataFactorySVC,AppDataServiceSVC are names of 
    //various services we used in this course.

    function headerController(AppNameSVC,LoggingSVC,AppDataFactorySVC,AppDataServiceSVC){
        this.appTitle=AppDataServiceSVC.name;
        this.date=AppDataServiceSVC.date;
        LoggingSVC();
    }

})();