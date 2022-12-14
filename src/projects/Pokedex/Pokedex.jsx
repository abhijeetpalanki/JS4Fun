import React from "react";
import { useProjectsContext } from "../../context/ProjectsContextProvider";

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
  const { pokemonList } = useProjectsContext();

  return (
    <div className="pokedex-body bg-[#efefbb] bg-gradient-to-r from-[#d4d3dd] to-[#efefbb] font-['Lato'] flex flex-col items-center m-0">
      <h1 className="text-[2rem] font-bold tracking-[3px]">Pokedex</h1>
      <div className="poke-container flex flex-wrap justify-center my-0 mx-auto max-w-[1200px]">
        {pokemonList.map((pokemon, index) => {
          const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
          const id = pokemon.id.toString().padStart(3, "0");

          const poke_types = pokemon.types.map((type) => type.type.name);
          const type = main_types.find((type) => poke_types.indexOf(type) > -1);
          const color = colors[type];

          return (
            <div
              key={index}
              className="pokemon bg-[#eee] rounded-[10px] m-[10px] p-[20px] text-center shadow-lg"
              style={{ backgroundColor: color }}
            >
              <div className="img-container bg-white/60 rounded-[50%] w-[120px] h-[120px] text-center flex justify-center items-center">
                <img
                  className="mt-[20px]"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt=""
                />
              </div>
              <div className="info mt-[20px]">
                <span className="number bg-black/10 text-black py-[5px] px-[10px] rounded-[10px] text-[0.8em]">
                  #{id}
                </span>
                <h3 className="name mx-0 mt-[15px] mb-[7px] tracking-[1px]">
                  {name}
                </h3>
                <small className="type">
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
