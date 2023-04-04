import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Container } from "./Container";
import loader from "./loader.svg";

const Loader = () => (
  <div className="items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out rounded-md shadow cursor-not-allowed bg-emerald-500">
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
              className="block w-full p-3 border-gray-300 rounded-md shadow-sm outline-none focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              onChange={onChange}
            ></textarea>
          </div>
        </div>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border rounded-md shadow-sm border-emerald-300 bg-emerald-500 hover:bg-emerald-50 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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
            <span className="pr-3 font-medium text-gray-700 bg-zinc-200 text-md">
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
