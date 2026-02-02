import { useState, useEffect } from "react";

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);

const Pokedex = () => {
  const pokemon_count = 150;
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      for (let i = 1; i <= pokemon_count; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const res = await fetch(url);
        const data = await res.json();
        setPokemonList((pokemonList) => [...pokemonList, data]);
      }
    };
    getPokemons();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[2rem] font-bold tracking-[3px]">Pokedex</h1>
      <div className="flex flex-wrap justify-center my-0 mx-auto max-w-300">
        {pokemonList.map((pokemon, index) => {
          const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
          const id = pokemon.id.toString().padStart(3, "0");

          const poke_types = pokemon.types.map((type) => type.type.name);
          const type = main_types.find((type) => poke_types.indexOf(type) > -1);
          const color = colors[type];

          return (
            <div
              key={index}
              className="pokemon bg-[#eee] rounded-[10px] m-2.5 p-5 text-center shadow-lg"
              style={{ backgroundColor: color }}
            >
              <div className="bg-white/60 rounded-full w-30 h-30 text-center flex justify-center items-center">
                <img
                  className="mt-5"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt=""
                />
              </div>
              <div className="info mt-5">
                <span className="bg-black/10 text-black py-1.25 px-2.5 rounded-[10px] text-[0.8em]">
                  #{id}
                </span>
                <h3 className="text-black mx-0 mt-3.75 mb-1.75 tracking-[1px]">
                  {name}
                </h3>
                <small className="text-black">
                  Type:
                  <span> {type}</span>
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
