import React, { createContext, useContext, useEffect, useState } from "react";
import { projects } from "./../data/projects";
import axios from "axios";

const ProjectsContext = createContext();

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e37a86d6a2841832f55e125b53024051&page=1";

export const ProjectsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  // Dad Jokes
  const [jokeObj, setJokeObj] = useState(
    "What did the ocean say to the shore? Nothing, it just waved."
  );

  // Live User Filter
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Movies Hub
  const [movies, setMovies] = useState([]);

  // Pokedex
  const pokemon_count = 150;
  const [pokemonList, setPokemonList] = useState([]);

  // Quiz
  const [gameState, setGameState] = useState("menu");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Horoscope
  const [signs, setSigns] = useState([]);

  // Unsplash Infinite Gallery
  const [images, setImages] = useState([]);

  // Dictionary
  const [inputWord, setInputWord] = useState("");
  const [response, setResponse] = useState(null);
  const [wordError, setWordError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setResults(projects);
    getData();
    getMovies(API_URL);
    getPokemons();
    getQuizData();
    getSigns();
    getImages();
  }, []);

  useEffect(() => {
    if (inputWord.length) {
      getDictionaryData(inputWord);
    }
  }, [inputWord]);

  const generateJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);

    const { joke } = await res.json();
    setJokeObj(joke);
  };

  const getData = async () => {
    await fetch("https://randomuser.me/api?results=50")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const getPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data = await res.json();
      setPokemonList((pokemonList) => [...pokemonList, data]);
    }
  };

  const getQuizData = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
    );
    await res.json().then((data) => {
      let formattedQuestions = [];

      data.results.map((loadedQuestion) => {
        const formattedQuestion = {
          question: loadedQuestion.question,
        };

        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        answerChoices.splice(
          formattedQuestion.answer - 1,
          0,
          loadedQuestion.correct_answer
        );

        answerChoices.forEach((choice, index) => {
          formattedQuestion["choice" + (index + 1)] = choice;
        });
        formattedQuestions.push(formattedQuestion);
      });

      setQuestions(formattedQuestions);
    });
  };

  const getSigns = async () => {
    const response = await fetch(
      "http://sandipbgt.com/theastrologer/api/sunsigns/"
    );
    const data = await response.json();
    setSigns(data);
  };

  const getHoroscope = async (sign, timeframe) => {
    const response = await fetch(
      `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}`
    );
    return await response.json();
  };

  const getImages = () => {
    const apiRoute = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESS_KEY;

    axios
      .get(`${apiRoute}/photos/random?client_id=${accessKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]));
  };

  const getDictionaryData = async (param) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${param}`
      );
      const data = await res.json();

      setResponse(data);
      setWordError(null);
    } catch (error) {
      setWordError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        results,
        jokeObj,
        generateJoke,
        users,
        error,
        isLoaded,
        movies,
        getMovies,
        pokemonList,
        gameState,
        setGameState,
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        signs,
        getHoroscope,
        images,
        getImages,
        inputWord,
        setInputWord,
        loading,
        wordError,
        response,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
