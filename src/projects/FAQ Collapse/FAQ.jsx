import React, { useState } from "react";
import "./FAQ.css";
import { IconContext } from "react-icons";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const FAQ = () => {
  const [activeId, setActiveId] = useState(1);
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: " Is there something like instance variables?",
      answer:
        "Yes! The useRef() Hook isn't just for DOM refs. The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.",
    },
    {
      id: 2,
      question: "Can I run an effect only on updates?",
      answer:
        "This is a rare use case. If you need it, you can use a mutable ref to manually store a boolean value corresponding to whether you are on the first or a subsequent render, then check that flag in your effect. (If you find yourself doing this often, you could create a custom Hook for it.)",
    },
    {
      id: 3,
      question: "How to get the previous props or state?",
      answer:
        "Sometimes, you need previous props to clean up an effect. For example, you might have an effect that subscribes to a socket based on the userId prop. If the userId prop changes, you want to unsubscribe from the previous userId and subscribe to the next one.",
    },
    {
      id: 4,
      question: "Is there something like forceUpdate?",
      answer:
        "Both useState and useReducer Hooks bail out of updates if the next value is the same as the previous one. Mutating state in place and calling setState will not cause a re-render.",
    },
    {
      id: 5,
      question: "Can I make a ref to a function component?",
      answer:
        "While you shouldn't need this often, you may expose some imperative methods to a parent component with the useImperativeHandle Hook.",
    },
  ]);

  const togglePanel = (index) => {
    setActiveId(faqs[index].id);
  };
  return (
    <div className="faq-body font-['Muli'] bg-[#f0f0f0] h-[100vh] overflow-hidden m-0">
      <h1 className="mt-[15px] mb-[30px] mx-0 text-[32px] font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div className="faq-container max-w-[600px] my-0 mx-auto">
        {faqs.map((faq, index) => {
          return (
            <div
              key={index}
              className={`faq bg-transparent rounded-[10px] my-[20px] mx-0 p-[30px] relative overflow-hidden ${
                faqs[index].id == activeId ? "active" : ""
              }`}
            >
              <h3 className="text-base font-bold faq-title mr-[35px] my-0 ml-0">
                {faq.question}
              </h3>
              <p className="faq-text mt-[30px] mx-0 mb-0 hidden">
                {faq.answer}
              </p>

              <button
                className="faq-toggle bg-[#9fa4a8] bg-transparent border-0 rounded-[50%] cursor-pointer flex items-center justify-center text-base p-0 absolute top-[30px] right-[30px] h-[30px] w-[30px] focus:outline-0"
                onClick={() => togglePanel(index)}
              >
                <IconContext.Provider value={{ color: "white" }}>
                  <FaChevronDown className="chevron" />
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white" }}>
                  <FaTimes className="times" />
                </IconContext.Provider>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
