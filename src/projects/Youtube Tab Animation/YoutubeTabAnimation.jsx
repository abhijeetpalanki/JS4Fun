import React, { useState } from "react";

let tabs = [
  { id: "home", label: "home" },
  { id: "videos", label: "videos" },
  { id: "shorts", label: "shorts" },
  { id: "playlists", label: "playlists" },
  { id: "community", label: "community" },
  { id: "channels", label: "channels" },
  { id: "about", label: "about" },
];

const YoutubeTabAnimation = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#111] text-white p-8">
      <div className="w-[min(60rem,100%-2rem)] container">
        <div className="flex items-center gap-6">
          <img
            className="rounded-full [block-size:8.5rem]"
            src="/logo.png"
            alt="logo"
          />
          <div>
            <h2>Javascript For Fun</h2>
            <div className="flex gap-4">
              <span className="opacity-80">@JS4Fun</span>
              <span className="opacity-80">740K subscribers</span>
              <span className="opacity-80">614 videos</span>
            </div>
            <p>
              Helping you learn how to make fun projects using Javascript...
            </p>
          </div>
        </div>
        <div className="relative flex my-12 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "text-purple-400"
                  : "hover:text-white/20 hover:after:scale-x-100"
              } relative ps-4 pe-4 text-xl outline-sky-400 uppercase transition after:content-[''] after:h-[3px] after:absolute after:bg-purple-400 after:w-full after:left-0 after:-bottom-4 after:scale-x-0 after:transition-[scale_250ms]`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeTabAnimation;
