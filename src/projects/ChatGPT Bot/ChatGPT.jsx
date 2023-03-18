import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Container } from "./components/Container";
import loader from "./loader.svg";

const Loader = () => (
  <div
    className="items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md 
			text-white bg-emerald-500 transition ease-in-out duration-150 cursor-not-allowed"
  >
    <img src={loader} alt="loader" className="w-5" />
  </div>
);

const ChatGPT = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {}, [loading, response, prompt]);

  const getChatGPTResponse = async () => {
    setLoading(true);
    setResponse("");

    try {
      const openai = new OpenAIApi(
        new Configuration({
          apiKey: process.env.REACT_APP_CHATGPT_API_KEY,
        })
      );
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });
      setResponse(response.data.choices[0].message.content);
      setLoading(false);
    } catch (error) {
      setResponse(error);
      setLoading(false);
    }
  };

  const onChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <Container.Outer>
      <Container.Inner>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Ask ChatGPT Bot
          </label>
          <div className="mt-1">
            <textarea
              rows="4"
              name="comment"
              placeholder="text goes here..."
              className="block p-3 w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              onChange={onChange}
            ></textarea>
          </div>
        </div>
        <button
          className="inline-flex items-center rounded-md border border-emerald-300 bg-emerald-500 
							px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm 
							hover:bg-emerald-50 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          onClick={getChatGPTResponse}
        >
          Get Answer
        </button>
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-start">
            <span className="bg-zinc-200 pr-3 text-md font-medium text-gray-700">
              GPT Response
            </span>
          </div>
        </div>
        {loading ? <Loader /> : <p>{response}</p>}
      </Container.Inner>
    </Container.Outer>
  );
};

export default ChatGPT;
