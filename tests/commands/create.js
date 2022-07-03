/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';
import factory from '../fixtures/factory';

export async function createUser(endpoint, option) {
  const response = await request(app).post(endpoint).send(factory.products(option));
  return response;
}
