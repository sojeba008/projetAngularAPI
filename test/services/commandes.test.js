const assert = require('assert');
const app = require('../../src/app');

describe('\'commandes\' service', () => {
  it('registered the service', () => {
    const service = app.service('commandes');

    assert.ok(service, 'Registered the service');
  });
});
