"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("saveaccount", {
                url: "/save-account",
                templateUrl: "app/feature/account/createAccount.html"
        }).state("updateAccount", {
                url: "/update-account",
                params: {
                	id: null,
                	firstName: null,
                	secondName: null,
                	accountNumber: null
                },
                templateUrl: "app/feature/account/updateAccount.html"
        }).state("transaction", {
                url: "/transaction",
                templateUrl: "app/feature/transaction/transaction.html"
        }).state('details', {
    			url : '/transaction-detail',
    			params : {transactionId: null},
    			templateUrl : "app/feature/transaction-detail/detail.html"
 		})
    });
}());