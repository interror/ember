// for more details see: http://emberjs.com/guides/models/defining-models/

Myapp.Task = DS.Model.extend({
  owner: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('boolean'),
  performer: DS.attr('string')
});
