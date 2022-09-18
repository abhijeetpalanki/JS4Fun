import React, { useEffect, useRef } from "react";
import "./RandomChoicePicker.css";

const RandomChoicePicker = () => {
  const tagsRef = useRef();
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, [textareaRef]);

  const createTags = (e) => {
    const tags = e.target.value
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    tagsRef.current.innerHTML = "";
    tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.classList.add("tag");
      tagEl.innerText = tag;
      tagsRef.current.appendChild(tagEl);
    });

    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = "";
      }, 10);
      randomizer();
    }
  };

  const randomizer = () => {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
      }, 100);
    }, times * 100);
  };

  const pickRandomTag = () => {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
  };

  const highlightTag = (tag) => {
    tag.classList.add("highlight");
  };

  const unHighlightTag = (tag) => {
    tag.classList.remove("highlight");
  };

  return (
    <div className="random-choice-picker-body font-['Muli'] bg-[#2b88d0] h-[100vh] flex flex-col items-center justify-center overflow-hidden m-0">
      <div className="container flex flex-col items-center justify-center w-[500px]">
        <h3 className="text-white text-center mx-0 mt-[10px] mb-[20px]">
          Enter all of the choices divided by a comma (',').
          <br />
          Press Enter when you are done
        </h3>
        <textarea
          placeholder="Enter choices here..."
          id="textarea"
          autoFocus
          ref={textareaRef}
          onKeyUp={createTags}
          className="border-none block w-full h-[100px] p-[10px] mx-0 mt-0 mb-[20px] text-[16px]"
        ></textarea>
        <div id="tags" ref={tagsRef}></div>
      </div>
    </div>
  );
};

export default RandomChoicePicker;
