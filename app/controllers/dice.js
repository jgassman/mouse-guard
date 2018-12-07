import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  MIN: 1,
  MAX: 7,
  quantity: 0,
  results: computed(function() {
    return [];
  }),

  actions: {
    roll: function(){
      this.set('results', [])
      for(let i=0; i<this.quantity; ++i) {
        let value = Math.floor(Math.random() * (this.MAX - this.MIN) + this.MIN);
        this.results.pushObject(value);
      }
    }
  }
});
