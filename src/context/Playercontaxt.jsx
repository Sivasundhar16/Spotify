import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const Playercontext = createContext();

const PlayercontextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setplayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setplayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setplayStatus(false);
  };

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setplayStatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <Playercontext.Provider value={contextValue}>
      {props.children}
    </Playercontext.Provider>
  );
};

export default PlayercontextProvider;
