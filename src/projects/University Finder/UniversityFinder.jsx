import axios from "axios";
import { useState, useEffect, useRef } from "react";

const UniversityFinder = () => {
  const [userValue, setUserValue] = useState("");
  const [suggestionPart, setSuggestionPart] = useState("");
  const inputRef = useRef(null);
  const userValueRef = useRef(null);
  userValueRef.current = userValue;

  const handleUserInputValueChange = (e) => {
    const newUserValue = e.target.value;
    const diff = newUserValue.substr(userValue.length);

    if (suggestionPart.indexOf(diff) === 0) {
      setSuggestionPart(suggestionPart.substr(diff.length));
    } else {
      setSuggestionPart("");
    }

    setUserValue(newUserValue);
  };

  const findSuggestionsFor = (phrase) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://universities.hipolabs.com/search?name=${phrase}`)
        .then((result) => {
          const univFound = result.data.find(
            (univ) => univ.name.indexOf(phrase) === 0
          );
          if (univFound) {
            resolve(univFound.name);
          } else {
            reject();
          }
        });
    });
  };

  useEffect(() => {
    if (userValue.length > 0) {
      findSuggestionsFor(userValue)
        .then((universityName) => {
          const stillFits = universityName.indexOf(userValueRef.current) === 0;
          if (stillFits) {
            setSuggestionPart(
              universityName.substr(userValueRef.current.length)
            );
          } else {
            setSuggestionPart("");
          }
        })
        .catch(() => {
          setSuggestionPart("");
        });
    } else {
      setSuggestionPart("");
    }
  }, [userValue]);

  useEffect(() => {
    inputRef.current.selectionStart = userValueRef.current.length;
    inputRef.current.selectionEnd =
      userValueRef.current.length + suggestionPart.length;
  }, [suggestionPart]);

  return (
    <div className="h-screen font-['Poppins'] flex flex-col justify-center items-center">
      <input
        type="text"
        value={`${userValue + suggestionPart}`}
        onChange={handleUserInputValueChange}
        ref={inputRef}
        placeholder="Search University..."
        className="w-[500px] h-10 rounded-md px-2 py-4 outline-none border-none"
      />
    </div>
  );
};

export default UniversityFinder;
