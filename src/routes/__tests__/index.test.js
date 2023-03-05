var express = require('express');
var router = express.Router();

var indexRouter = require('../index');

const mockResponse = {
  send: jest.fn((exchangeRateResponse) => {
      return exchangeRateResponse
  })
};


describe('index', () => {


  test('happy path', async () => {

      //const exchangeRate = await indexRouter({}, mockResponse);
      //expect(mockResponse).toBe(14.5);
  });
});