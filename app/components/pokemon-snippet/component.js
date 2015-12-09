import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  twoTypes: Ember.computed('pokemon.typeOne', 'pokemon.typeTwo', function(){
    return this.get('pokemon.typeTwo') && this.get('pokemon.typeTwo') !== this.get('pokemon.typeOne');
  }),
  isExpanded: false,
  actions: {
  toggleExpanded: function(){
    this.toggleProperty('isExpanded');
  },
  updatePokemon: function(){
    console.log('Component Action : updatePokemon');
    this.sendAction('routeUpdatePokemon');
    },
  destroyPokemon: function(){
    console.log('Component Action: destroyPokemon');
    this.sendAction('routeDestroyPokemon', this.get('pokemon'));
    }
  }
});
