(function() {

    var DetailController =  function($stateParams, $state) {
        
    	var vm = this;
    	
    	vm.transactions = [
        	{'id': 1, 'transactionName': 'Tesco', 'transactionNumber': '20','accountNumber': '1234'},
        	{'id': 2, 'transactionName': 'Asda', 'transactionNumber': '10','accountNumber': '1234'},
        	{'id': 3, 'transactionName': 'Tesco', 'transactionNumber': '5','accountNumber': '1234'},
        	{'id': 4, 'transactionName': 'Sainsburys', 'transactionNumber': '60','accountNumber': '1234'},
        	{'id': 5, 'transactionName': 'Tesco','transactionNumber': '4','accountNumber': '1235'},
        	{'id': 6, 'transactionName': 'Sainsburys','transactionNumber': '2','accountNumber': '1236'},
        	{'id': 7, 'transactionName': 'Asda','transactionNumber': '1','accountNumber': '1236'},
        	{'id': 8, 'transactionName': 'Tesco','transactionNumber': '10','accountNumber': '1236'},
        	{'id': 9, 'transactionName': 'Tesco','transactionNumber': '20','accountNumber': '1237'},
        	{'id': 10, 'transactionName': 'Tesco','transactionNumber': '15','accountNumber': '1238'},
        	{'id': 11, 'transactionName': 'Asda','transactionNumber': '30','accountNumber': '1239'},
        	{'id': 12, 'transactionName': 'Sainsburys','transactionNumber': '40','accountNumber': '1240'},
        	{'id': 13, 'transactionName': 'Sainsburys','transactionNumber': '10','accountNumber': '1240'},
        	{'id': 14, 'transactionName': 'Asda','transactionNumber': '20','accountNumber': '1241'},
        	{'id': 15, 'transactionName': 'Sainsburys','transactionNumber': '10','accountNumber': '1242'},
        	{'id': 16, 'transactionName': 'Asda','transactionNumber': '50','accountNumber': '1242'},
        	{'id': 17, 'transactionName': 'Asda','transactionNumber': '100','accountNumber': '1243'},
        	{'id': 18, 'transactionName': 'Asda','transactionNumber': '20','accountNumber': '1244'},
        	{'id': 19, 'transactionName': 'Sainsburys','transactionNumber': '10','accountNumber': '1245'},
        	{'id': 20, 'transactionName': 'Tesco','transactionNumber': '10','accountNumber': '1246'},
        	{'id': 21, 'transactionName': 'Tesco','transactionNumber': '20','accountNumber': '1247'}
        	];
        	
        	 vm.transactionId = $state.params.transactionId;
			 console.log("TransId " + vm.transactionId);
        
    };

    angular.module('accountApp').controller('detailController', ['$stateParams', '$state', DetailController]);
}());