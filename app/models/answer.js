import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  detail: DS.attr()
});
