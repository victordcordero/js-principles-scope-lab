// Write your solution in this file!
var customerName = "bob"


function upperCaseCustomerName() {
    console.log(customerName.toUpperCase())
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = "not bob";
    console.log(bestCustomer)
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    console.log(bestCustomer)
}

const leastFavoriteCustomer = 'victor'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'mel'
  }