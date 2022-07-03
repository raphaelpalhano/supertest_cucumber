import { Given, Then, When } from '@cucumber/cucumber';
import { createUser } from '../commands/create';

const { expect } = require('chai');

let create;

Given('que eu cadastro um produto {string}', async (option) => {
  create = await createUser('/products', option).then((res) => res);
});

Then('deve retornar statuscode {int}', async (statuscode) => {
  expect(create.status).eql(statuscode);
});

When('deve conter a propriedade {string}', async (sellPrice) => {
  expect(create.body).to.have.property(sellPrice);
});
