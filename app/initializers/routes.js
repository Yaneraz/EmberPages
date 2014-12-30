import depositRoute from '../routes/deposit';

export default {
  name: 'routes',

  initialize: function(container, application) {
    application.register('route:deposit.index', depositRoute);
  }
};
