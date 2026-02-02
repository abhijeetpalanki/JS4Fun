import { useState } from "react";
import { data } from "./data";

const FAQ = () => {
  const [faqs] = useState(data);
  const [selected, setSelected] = useState(null);

  const togglePanel = (id) => {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-[32px] font-bold text-center text-[#f0f0f0]">
        Frequently Asked Questions
      </h1>
      <p className="mb-[15px] text-[26px] text-gray-500 text-center">
        Let's answer some of your questions.
      </p>
      <div className="w-[250px] md:w-[600px]">
        {faqs.map((faq) => (
          <div
            className="bg-[#f0ebe1] mb-[5px] py-[10px] px-[20px]"
            key={faq.id}
          >
            <div
              className="text-[#a5662b] flex justify-between items-center cursor-pointer"
              onClick={() => togglePanel(faq.id)}
            >
              <h2 className="text-xl font-bold">{faq.question}</h2>
              <span>{selected === faq.id ? "-" : "+"}</span>
            </div>
            <div
              className={
                selected === faq.id
                  ? "text-[#8b7f75] overflow-hidden transition-all duration-[0.5s] h-auto max-h-[9999px] ease-[cubic-bezier(1,0,1,0)]"
                  : "text-[#8b7f75] overflow-hidden transition-all duration-[0.5s] max-h-0 ease-[cubic-bezier(0,1,0,1)]"
              }
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
