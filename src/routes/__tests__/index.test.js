var index = require('../index');

const mockResponse = {
  send: jest.fn((exchangeRateResponse) => {
      return exchangeRateResponse
  })
};


describe('index', () => {

  test('happy path', async () => {
      index(null, mockResponse);
      expect(mockResponse.send).toBeCalled()
  });
});