const users = require('./users/users.service.js');
const livres = require('./livres/livres.service.js');
const commandes = require('./commandes/commandes.service.js');
const commandeDetails = require('./commande-details/commande-details.service.js');
const panier = require('./panier/panier.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(livres);
  app.configure(commandes);
  app.configure(commandeDetails);
  app.configure(panier);
};
