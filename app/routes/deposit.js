import configFile from '../configFile';

export default Ember.Route.extend({
  model : function(){
    return configFile.pms;
  }
});
