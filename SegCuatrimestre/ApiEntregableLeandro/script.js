
let contenedor = document.getElementById("contenedor");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
.then(resp => resp.json())
.then(data => {
    data.results.forEach((pokemon, index) => {
        index += 1;      
        let crearcontenedor = document.createElement("div");
    
        crearcontenedor.innerHTML = `
            <h3>Pokemon <br> #${index}<br> ${pokemon.name} </h3>
            <img class=sprites src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index}.png" alt="${pokemon.name}" />
        `;
        contenedor.appendChild(crearcontenedor);
    });
})
.catch(err => console.log(err));
