import { useState, useEffect } from "react";
import Header from "./Header";
import Results from "./Results";

const Dictionary = () => {
  const [inputWord, setInputWord] = useState("");
  const [response, setResponse] = useState(null);
  const [wordError, setWordError] = useState("");
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (inputWord.length) {
      getDictionaryData(inputWord);
    }
  }, [inputWord]);

  return (
    <div>
      <Header inputWord={inputWord} setInputWord={setInputWord} />
      <Results loading={loading} wordError={wordError} response={response} />
    </div>
  );
};

export default Dictionary;
