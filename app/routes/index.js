import Ember from 'ember';

var questions = [{
  id: 1,
  title: "Benefits of Using Ember.js",
  author: "Jiwon",
  detail: "What are the benefits of using Ember.js?"
}, {
  id: 2,
  title: "Grinch Movie",
  author: "Grinch",
  detail: "Has anyone seen the movie, Grinch?"
}, {
  id: 3,
  title: "Group Project",
  author: "John",
  detail: "What do you guys want to do for group project?"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  }
});
