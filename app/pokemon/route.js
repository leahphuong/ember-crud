import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('pokemon');
  },
  actions: {
    createPokemon: function(newPokemon){
    console.log('Route Action : createPokemon');

    // this.store.createRecord('pokemon', {
    //   nationalPokeNum: 21,
    //   name: 'Bianca',
    //   typeOne: 'Fire',
    //   typeTwo: "Metal",
    //   generation: 2

    // })
    this.store.createRecord('pokemon', newPokemon).save();
    },
    updatePokemon: function(){
      console.log('Route Action : updatePokemon');
    },
    destroyPokemon: function(pokemon){
      console.log('Route Action : destroyPokemon');
      this.store.findRecord('pokemon', pokemon.get('id')).then(function(pokemonRecord){
          pokemonRecord.destroyRecord();
          console.log('pokemon record destroyed');
        });
      }
    }
});
