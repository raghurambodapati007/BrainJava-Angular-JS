var app = angular.module("myApp",[]);
app.controller("calculatorCtrl",calculatorCtrl);


function calculatorCtrl(){

    this.resultValue = 0;

    this.buttonClicked = function(button){
        console.log("button clicked");
        this.selectedOperation=button;
    }

    this.result = function() {

        console.log(this.input1);
        console.log(this.input2);

        var number1 = parseFloat(this.input1);
        var number2 = parseFloat(this.input2);

        if(this.selectedOperation == '+'){

            this.resultValue=number1 + number2;
        }

        else if (this.selectedOperation == '-') {
            this.resultValue=number1 - number2;
        }
        else if (this.selectedOperation == '/'){
            this.resultValue=number1 / number2;
        }
        else if (this.selectedOperation == '*'){
            this.resultValue=number1 * number2;
        }
    }
    
}
