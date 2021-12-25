// Initializes the `livres` service on path `/livres`
const { Livres } = require('./livres.class');
const createModel = require('../../models/livres.model');
const hooks = require('./livres.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/livres', new Livres(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('livres');

  service.hooks(hooks);
};
