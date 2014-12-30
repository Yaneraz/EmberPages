export default {
  name: 'templates',

  initialize: function(container, application) {
    application.register('view:visa', Ember.View.extend({
      templateName : 'visa-slider'
    }));
  }
};
