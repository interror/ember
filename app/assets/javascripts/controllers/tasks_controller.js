Myapp.TasksController = Ember.ArrayController.extend({
  actions: {
    addTask: function() {
      record = this.store.createRecord('task',{
        description: this.get('newTask')
      });
      record.save();
      this.set('newTask', "");
    }
  }
});
