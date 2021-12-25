const assert = require('assert');
const app = require('../../src/app');

describe('\'panier\' service', () => {
  it('registered the service', () => {
    const service = app.service('panier');

    assert.ok(service, 'Registered the service');
  });
});
