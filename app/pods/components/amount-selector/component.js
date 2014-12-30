var predefinedAmounts = [25, 50, 100, 200];

export default Ember.Component.extend({
  predefinedAmounts : predefinedAmounts,

  actions: {
    setAmount: function(amount){
      this.set('amount', amount);
    },
    templateName: 'template'
  }
});
