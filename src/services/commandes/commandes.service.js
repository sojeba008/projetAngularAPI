// Initializes the `commandes` service on path `/commandes`
const { Commandes } = require('./commandes.class');
const createModel = require('../../models/commandes.model');
const hooks = require('./commandes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/commandes', new Commandes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('commandes');

  service.hooks(hooks);
};
