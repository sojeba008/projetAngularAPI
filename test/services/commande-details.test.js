const assert = require('assert');
const app = require('../../src/app');

describe('\'commande-details\' service', () => {
  it('registered the service', () => {
    const service = app.service('commande-details');

    assert.ok(service, 'Registered the service');
  });
});
