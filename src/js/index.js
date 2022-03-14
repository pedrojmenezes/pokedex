// Criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // Trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click', () => {
        console.log(pokemon)

        // Remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // Ao clicar em um pokémon da listagem, pegamos o id desse pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir)
        cartaoPokemonAbrir.classList.add('aberto')

        // Remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')

        // Adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoListagem.classList.add('ativo')
    })
})