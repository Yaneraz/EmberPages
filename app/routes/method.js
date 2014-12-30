export default Ember.Route.extend({
  model: function(params){
    var pm = this.modelFor('deposit').findBy('name', params.method_name);
    return pm
  },
  renderTemplate: function(){
    var model = this.get('currentModel');
    this.controllerFor(model.name).set('model', model);
    this.render(model.name);
  }
});
