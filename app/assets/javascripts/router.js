// For more information see: http://emberjs.com/guides/routing/

Myapp.Router.map(function() {
  this.route('tasks', { path: '/' });
});

// Myapp.TasksRoute = Ember.Route.extend({
//   model: function() {
//     Myapp.Task.find();
//   }
// });
Myapp.TasksRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('task')
  }
});
