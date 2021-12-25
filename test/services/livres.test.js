const assert = require('assert');
const app = require('../../src/app');

describe('\'livres\' service', () => {
  it('registered the service', () => {
    const service = app.service('livres');

    assert.ok(service, 'Registered the service');
  });
});
