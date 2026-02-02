import { useRef, useState } from "react";
import video from "./video.mp4";

const VideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef(null);

  const formatTime = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration - minutes * 60);

    const formattedTime = `${tenPad(minutes)}:${tenPad(seconds)}`;
    return formattedTime;
  };

  const tenPad = (time) => {
    if (time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  };

  const playVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying((currentPlayStatus) => !currentPlayStatus);
  };

  const onTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#0F0F0F]">
      <main className="flex flex-col justify-center">
        <section className="px-0 py-0 text-center text-white md:py-12 md:px-8">
          <header>
            <img
              src="/logo.png"
              alt="logo"
              className="mx-auto md:w-auto w-31.5 rounded-full"
            />
          </header>
          <div className="relative w-62.5 md:w-241.75">
            <video
              ref={videoRef}
              preload="metadata"
              onWaiting={() => setIsLoading(true)}
              onCanPlayThrough={() => {
                setVideoDuration(videoRef.current.duration);
                setIsLoading(false);
              }}
              onTimeUpdate={onTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="w-full max-w-62.5 md:max-w-241.75 h-125 mx-auto my-8"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end w-full h-full">
              <div>{isLoading && "Calm down and grab a cup of coffee"}</div>
              <div className="w-[98%] m-auto mb-4.5">
                <div
                  className={`bg-[#ff0000] w-[0%] h-full ${
                    formatTime(currentTime) !== formatTime(videoDuration) &&
                    "animate-progressBar"
                  }`}
                  style={{
                    animationPlayState: isPlaying ? "running" : "paused",
                    animationDuration: isLoading
                      ? `0s`
                      : `${videoRef.current.duration}s`,
                  }}
                ></div>
              </div>

              <div className="flex justify-between w-[98%] mx-auto">
                <button onClick={playVideo}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <span className="inline-block">
                  {formatTime(currentTime)}/{formatTime(videoDuration)}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VideoPlayer;
