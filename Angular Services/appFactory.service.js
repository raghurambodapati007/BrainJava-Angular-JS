//1
//Here function is taking name input from InputNameSVC which is an other service (value), 
//so angular helps for us to get  DI(Dependency Injection).

//2
//Here function is wrapped inside an (function(){...})(); because to prevent this 
//global variable into global name space and this executes immediately.

(function (){

    var app= angular.module("contactApp");

function preparedAppConfig(InputNameSVC){

    var value={};

    value.name=InputNameSVC;
    value.company="Infosys Computers Ltd";
    value.date = new Date().toDateString();
    return value;
}

//Here we are passing preparedAppConfig function which "should return an object or string or anything"
// to app.factory.
app.factory("AppDataFactorySVC",preparedAppConfig);

})();