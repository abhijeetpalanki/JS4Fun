import { useState } from "react";

const DynamicInputs = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });
  const [prompts, setPrompts] = useState([
    {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    },
  ]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePrompt = (e, i) => {
    const { name, value } = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name] = value;
    setPrompts(newPrompts);
  };

  const handleAddPrompt = () => {
    setPrompts([
      ...prompts,
      {
        prompt: "",
        answer: "",
        timestamp: new Date().getTime(),
      },
    ]);
  };

  const handleDeletePrompt = (i) => {
    let deletePrompts = [...prompts];
    deletePrompts.splice(i, 1);
    setPrompts(deletePrompts);
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl text-center">Dynamic Inputs</h1>
      <form className="w-5/6 max-w-xl pt-4 pb-10 mx-auto">
        <fieldset className="flex flex-col gap-2 px-4 py-1 border">
          <legend className="mb-2 text-2xl font-semibold text-gray-500">
            About You
          </legend>
          <div className="">
            <label className="text-3xl font-semibold">What's your name?</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-4/5 px-2 py-3 mt-4 mb-3 text-lg leading-tight border rounded focus:outline-orange-400"
              placeholder="First Name"
              onChange={handleInput}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-4/5 px-2 py-3 mb-4 text-lg leading-tight border rounded focus:outline-orange-400"
              placeholder="Last Name"
              onChange={handleInput}
            />
          </div>

          <div className="">
            <label className="text-3xl font-semibold">What's your email?</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-4/5 px-2 py-3 mt-4 mb-3 text-lg leading-tight border rounded focus:outline-orange-400"
              placeholder="email@example.com"
              onChange={handleInput}
            />
          </div>

          <div className="">
            <label className="text-3xl font-semibold">
              What's your date of birth?
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              max={new Date().toDateString()}
              className="w-3/5 px-2 py-3 mt-4 mb-3 text-lg leading-tight border rounded focus:outline-orange-400"
              placeholder="Date of birth"
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-3xl font-semibold">
              What's your gender?
            </label>
            <select
              name="gender"
              id="gender"
              className="w-3/5 px-2 py-3 mt-4 mb-3 text-lg leading-tight border rounded focus:outline-orange-400"
              onChange={handleInput}
            >
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="MTF">MTF</option>
              <option value="FTM">FTM</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-2 px-4 py-1 border">
          <legend className="mb-2 text-2xl font-semibold text-gray-500">
            Prompts
          </legend>

          {prompts.map((prompt, i) => (
            <div key={prompt.timestamp} className="flex flex-col">
              <label className="text-3xl font-semibold">Select a prompt</label>
              <div className="flex items-center gap-2">
                <select
                  name="prompt1"
                  id="prompt1"
                  className="w-full px-2 py-3 mt-4 mb-3 text-lg leading-tight border rounded focus:outline-orange-400"
                  onChange={(e) => handlePrompt(e, i)}
                >
                  <option value="Select Prompt">Select Prompt</option>
                  <option value="Dating me is like...">
                    Dating me is like...
                  </option>
                  <option value="Fact about me that surprises people:">
                    Fact about me that surprises people:
                  </option>
                  <option value="I want someone who...">
                    I want someone who...
                  </option>
                  <option value="I spend most of my money on:">
                    I spend most of my money on:
                  </option>
                  <option value="The most spontaneous thing I've done:">
                    The most spontaneous thing I've done:
                  </option>
                  <option value="We're same type of wierd if...">
                    We're same type of wierd if...
                  </option>
                </select>
                <button
                  type="button"
                  onClick={() => handleDeletePrompt(i)}
                  className="px-4 py-3 text-xl font-bold text-white bg-red-400 border rounded-lg"
                >
                  -
                </button>
              </div>
              <textarea
                id="answer1"
                name="answer1"
                className="px-2 py-3 mb-4 border border-dashed focus:outline-orange-400"
                rows="5"
                placeholder="Let your true colors shine through"
                onChange={(e) => handlePrompt(e, i)}
              ></textarea>
            </div>
          ))}

          <div className="flex justify-center w-full">
            <button
              className="px-2 py-1 text-xl font-bold text-white bg-orange-400 border rounded-lg"
              type="button"
              onClick={handleAddPrompt}
            >
              Add Prompt
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default DynamicInputs;
