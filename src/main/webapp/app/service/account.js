"use strict";

(function () {

    
    function AccountService ($log, accountDal) {

        this.getAccounts = function()
        {
            $log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };
        
         this.saveAccount = function(user)
        {
            $log.log("AccountService createAccounts");
            $log.log(user);
        	return accountDal.saveAccount(user);
        };
        
    }
    
    angular.module("accountApp").service("accountService", ["$log", "accountDal", AccountService]);

}());