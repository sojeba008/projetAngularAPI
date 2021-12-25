const { Service } = require('feathers-mongoose');
const decode = require('jwt-decode');

exports.Panier = class Panier extends Service {
  constructor(options, app) {
    super(options, app);
    this.app = app;
  }
  async create(data,params){
    var userId = data.user;
    var livre = data.livre;
    let exist = await this.app.service('panier').find({
      query: {
        user : userId,  
      }
    });
    if(exist.total == 0 && data.action == 'add') {
      return super.create({user: userId, livre: livre},params);
    }
    else if(exist.total != 0 && data.action == 'remove') {
      return super.remove(exist.data[0]._id);
    }
  }

};
