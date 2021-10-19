// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

//Canvas instructions: "Write a function that when called, declares a variable called bestCustomer in global scope 
//and assigns it to be 'not bob'". - This is not possible??
function setBestCustomer() {
    window.bestCustomer = 'not bob';
} 

function overwriteBestCustomer(newName) {
    bestCustomer = newName;
}

const leastFavoriteCustomer = 'karen';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'susan';
}
