import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function(){
  this.resource('deposit', function(){
    this.resource('method', {path: ':method_name'});
  });
});

export default Router;
