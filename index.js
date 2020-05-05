const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  .then(res => res.json())
  .then(json => console.log(json.stats));
