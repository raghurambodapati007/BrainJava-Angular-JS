//1
//The below is for Service service because here we wont create obj name js will create obj with this keyword and 
//return us , the below commented lines are added by angular itself cause that method is being called by service

//2
//Here function is wrapped inside an (function(){...})(); because to prevent this 
//global variable into global name space and this executes immediately.

( function() {

    var app= angular.module("contactApp");

function AppConfig(InputNameSVC){

    //var this={}; 

    this.name=InputNameSVC;
    this.company="Infosys Computers Ltd";
    this.date = new Date().toDateString();

    //return this;
}

app.service("AppDataServiceSVC",AppConfig); //this created js construct object like new AppConfig();

})();