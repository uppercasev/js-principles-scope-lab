// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    globalThis.bestCustomer = 'not bob';
} 

function overwriteBestCustomer(newName) {
    bestCustomer = newName;
}

const leastFavoriteCustomer = 'karen';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'susan';
}
