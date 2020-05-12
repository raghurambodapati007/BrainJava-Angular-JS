
//Here function is wrapped inside an (function(){...})(); because to prevent this 
//global variable into global name space and this executes immediately.

(function () {

    var app = angular.module("contactApp");

    app.controller("contactCtrl", contactCtrl);

    function contactCtrl(contactDataSVC) {

        var self = this;
        self.editMode = false;
        self.addMode = false;

        //contactSVC is an service which is written in contactData.service.js file to populate contacts.
        contactDataSVC.getContacts()
            .then(function (data) {
                self.contacts = data;
            });


        /*This is used to show the particular row or data from list based on index value with help of ng-repeat directive */
        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            self.successMessage = undefined;
            self.errorMessage = undefined;
        }

        /* The crucial method to toggle editmode */
        this.toggelEditMode = function () {
            this.editMode = !this.editMode;
        }

        /* The below method is for saving user based on addMode value i.e either using PUT or POST */
        this.saveUser = function () {

            this.toggelEditMode();
            var userDate = this.selectedContact;

            if (self.addMode) {
                contactDataSVC.createUser(userDate)
                    .then(function () {
                        self.successMessage = "Data Saved Successfully";
                        // when usiong this in call back we must use alias name here self is alias
                    }, function () {
                        self.errorMessage = "There was an error";
                    });
                self.addMode = false;
            }
            else {
                contactDataSVC.saveUser(userDate)
                    .then(function () {
                        self.successMessage = "Data Saved Successfully";
                    }, function () {
                        self.errorMessage = "There was an error";
                    });
            }

        }

        /* The below is executed when add button is clicked and here we are assigning id explicitly */
        this.addContact = function () {

            this.selectedContact = {
                "id": new Date().toTimeString()
            };
            this.editMode = true;
            self.addMode = true;
        }

    }

})();