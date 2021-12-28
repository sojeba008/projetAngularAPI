/* eslint-disable indent */
const { Service } = require('feathers-mongoose');
const feathers = require('@feathersjs/feathers');
exports.Commandes = class Commandes extends Service {
  
  constructor(options, app) {
    super(options, app);
    this.app = app;
  }


  async create(data,params){
    const getPrix = async (data) => {
      var cout = 0;
      for(let i=0;i<data.livres.length;i++){
        if(typeof data.livres[i]!=="undefined"){
          await this.app.service("livres").get(data.livres[i]._id).then( async (resp) =>{
            cout+=resp.prix;
          });
        }
      } 
      return cout;
    }
    var cout = await getPrix(data);
    var response;
    return await super.create({
        "status": "Terminé",
        "user": data.user,
        "prix": cout
    }).then(async (re)=>{
        var commande_id=re._id;
        console.log("Commande added ",re)
        for(let i=0;i<data.livres.length;i++){
            await this.app.service("commande-details").create({
                commande: commande_id,
                livre: data.livres[i]._id,
                quantite: 1,
            }).then( async (resp) =>{console.log(resp)}).catch((err)=>{})
        }
        return re;
    });
  }

  async find(params){       
    var commande = await super.find({user:params.user});
    for(let i = 0; i<commande.data.length; i++) {
        
        var detailscommande = await this.app.service('commande-details').find({query: {commande: commande.data[i]._id}});
        // console.log(detailscommande);
        commande.data[i].livres = detailscommande.data;
    }
    return commande;
  }

  async get(id) {
      console.log(id);
      var commande = await super.get(id);
      var detailscommande = await this.app.service('commande-details').find({query: {commande: commande._id}});
      commande.livres = detailscommande.data;
      return commande;
  }





};
