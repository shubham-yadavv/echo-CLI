#!/usr/bin/env node

const program = require('commander');
const prompt = require('prompt');

prompt.start();
const { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers } = require('./index');

const questions = [
    {
      type: 'input',
      name: 'firstname',
      message: 'Customer First Name'
    },
    {
      type: 'input',
      name: 'lastname',
      message: 'Customer Last Name'
    },
    {
      type: 'input',
      name: 'phone',
      message: 'Customer Phone Number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Customer Email Address'
    }
  ];

program
    .version('1.0.0')
    .alias('v')
    .description('Customer management system');




// add command
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(
        () =>{
            prompt.get(['firstname', 'lastname', 'phone','email' ]).then(answers => addCustomer(answers))
        });
      

//list command
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => listCustomers());

// remove command

program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a customer')
  .action(_id => removeCustomer(_id));

//find command
program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action(name => findCustomer(name));

// update command

program.parse(process.argv);

