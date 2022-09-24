const mongoose = require('mongoose');

mongoose.Promise = global.Promise;



// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli')


const Customer = require('./models/customer');


const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.info('New Customer Added');

  });
}

// Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
      console.info(customer);
      console.info(`${customer.length} matches`);
        
    });
}

// Update Customer
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer)
    .then(customer => {
      console.info('Customer Updated');

    });
}

// Remove Customer
const removeCustomer = (_id) => {
  Customer.remove({ _id })
    .then(customer => {
      console.info('Customer Removed');

    });
}

// List Customers
const listCustomers = () => {
  Customer.find()
    .then(customers => {
      console.info(customers);
      console.info(`${customers.length} customers`);
        db.console("list")
    });
}

// Export All Methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}
