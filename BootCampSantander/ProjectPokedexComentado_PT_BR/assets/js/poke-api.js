
const pokeApi = {}  // <= criação de um objeto que será usado para criação dos métodos abaixo


function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

//o metodo abaixo recebe uma função e essa função acessa uma url com uma promessa . 
//Quando essa promessa é cumprida pelo fetch , então uma função anonima converte os dados recebidos 
//em json, em seguida ums egunda função extrai os dados necessarios desse json (.results). 
//Em seguida uma função anonima executa um loop(map) e a cada iteração o método getpokemonDetail 
//é chamado. Como o retorno desse loop é uma lista , então é utilizado o Promise pra processar todos 
//os dados que vieram como retorno do método getPokemosDetail. Em seguida o resultado disse 
//é retornado atraves de uma função anonima que simplesmente converte esse resultado em um json

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}


pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}


