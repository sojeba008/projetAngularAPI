// Initializes the `panier` service on path `/panier`
const { Panier } = require('./panier.class');
const createModel = require('../../models/panier.model');
const hooks = require('./panier.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/panier', new Panier(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('panier');

  service.hooks(hooks);
};
