import { createContext, useContext, useEffect, useReducer } from "react";

const AnimeContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

const LOADING = "LOADING";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_PICTURES = "GET_PICTURES";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POPULAR_ANIME:
      return { ...state, loading: false, popularAnime: action.payload };
    case GET_PICTURES:
      return { ...state, loading: false, pictures: action.payload };
    default:
      return state;
  }
};

export const AnimeContextProvider = ({ children }) => {
  const initialState = {
    popularAnime: [],
    pictures: [],
    isSearch: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopularAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
  };

  const getAnimePictures = async (id) => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/characters/${id}/pictures`);
    const data = await response.json();
    dispatch({ type: GET_PICTURES, payload: data.data });
  };

  useEffect(() => {
    getPopularAnime();
  }, []);

  return (
    <AnimeContext.Provider value={{ ...state, getAnimePictures }}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnimeContext = () => {
  return useContext(AnimeContext);
};
