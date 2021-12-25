const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');

module.exports = app => {


  class MyAuthService extends AuthenticationService {
    async getPayload(authResult, params) {
      const payload = await super.getPayload(authResult, params);
      const { user } = authResult;
      if (user) {
        payload.user = user.permissions;
      }
  
      return payload;
    }
  }

  
  const authentication = new MyAuthService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
