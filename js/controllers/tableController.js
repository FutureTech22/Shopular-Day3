(function() {
    'use strict';

    angular
        .module('shopular')
        .controller('tableController', function (api) {

            const vm = this;
//get data
            vm.data = api.getData();
//set constants
            vm.tax = 1.07;
//event listeners

            vm.changeQuantity = function(item, add) {
                if (add) {
                    item.quantity++;
                } else {
                    item.quantity--;
                }
            }


            vm.clickButton = function() {
               vm.data = api.saveData(vm.item)
            }

});
})();

