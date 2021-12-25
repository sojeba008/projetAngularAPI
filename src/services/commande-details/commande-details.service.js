// Initializes the `commande-details` service on path `/commande-details`
const { CommandeDetails } = require('./commande-details.class');
const createModel = require('../../models/commande-details.model');
const hooks = require('./commande-details.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/commande-details', new CommandeDetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('commande-details');

  service.hooks(hooks);
};
