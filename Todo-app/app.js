var app = angular.module("myApp",[]);
app.controller("TodoController",TodoController);

function TodoController(){

    this.editMode=false;

    this.todos=[
        "Angular Js",
        "Java 8",
        "Spring Framework",
        "RestFul webServices"
    ];

    this.addNewTodo = function(){
        this.todos.push(this.newTodo);
        this.newTodo="";
    }

    this.triggerEditMode = function(){
        this.editMode= !this.editMode;
    }

    this.deleteTodo = function(index){
        this.todos.splice(index,1);
    }

}
