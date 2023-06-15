// import React from "react";
// import { useEffect, useState } from "react";

// import { Link } from 'react-router-dom';

// import user from "../../img/usersuave.png"
// import userdark from "../../img/userdark.png"
// import tomatesuave from "../../img/tomatesuave.png"
// import tomatedark from "../../img/tomatedark.png"
// import sound from "../../img/somsuave.png"

// const NavBar = ({pages}) => {
//   const [selected, setSelected] = useState("profile");
//   const handleClick = () => {
//     setSelected((prevState) => pages);
//   };

//   useEffect(() => {
//     handleClick();
//   }, [selected]);

//   return (
//     <nav className="flex items-center justify-center gap-10  bg-none h-16 text-white fixed bottom-0  w-full">
//      <Link to="/profile">
//       <div onClick={handleClick}><img src={selected === "profile" ? userdark : user}  width={45}/></div>
//       </Link>
//       <Link to="/pomodoro">
//       <div onClick={handleClick}><img src={selected === "pomodoro" ? tomatedark : tomatesuave} width={45}/></div>
//       </Link>
//       <div onClick={handleClick}><img src={sound} width={45}/></div>

//     </nav>
//   );
// };

// export default NavBar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import user from "../../img/usersuave.png";
import userdark from "../../img/userdark.png";
import tomatesuave from "../../img/tomatesuave.png";
import tomatedark from "../../img/tomatedark.png";
import sound from "../../img/somsuave.png";

import muteIcon from "../../icons/soundmute.png";
import unmuteIcon from "../../icons/unmute.png";

import binaural from "../../audio/binaural.mp3";
import forest from "../../audio/forest.mp3";
import lofi from "../../audio/lofi.mp3";
import rain from "../../audio/rain.mp3";

const NavBar = ({ pages }) => {
  const [selected, setSelected] = useState("profile");
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = (page) => {
    setSelected(page);
  };

  useEffect(() => {
    handleClick();
  }, [selected]);

  const songs = [
    { id: 1, name: "Song 1", url: binaural },
    { id: 2, name: "Song 2", url: forest },
    { id: 3, name: "Song 3", url: lofi },
    { id: 4, name: "Song 4", url: rain },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayback = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };

  return (
    <nav className="flex items-center justify-center gap-10 bg-none h-16 text-white fixed bottom-0 w-full">
      <Link to="/profile">
        <div onClick={() => handleClick("profile")}>
          <img
            src={selected === "profile" ? userdark : user}
            width={45}
            alt="User Icon"
          />
        </div>
      </Link>
      <Link to="/pomodoro">
        <div onClick={() => handleClick("pomodoro")}>
          <img
            src={selected === "pomodoro" ? tomatedark : tomatesuave}
            width={45}
            alt="Tomato Icon"
          />
        </div>
      </Link>
      <div onClick={() => setShowPopup(!showPopup)}>
        <img src={sound} width={45} alt="Sound Icon" />
      </div>

      {showPopup && (
        <div className="absolute popup border border-rose-700 mb-56 flex flex-col justify-center items-center right-4 rounded-md p-2 gap-4 bg-[#F58282]">
          <span className="text-black">
            {/**<a href="/path/to/sound1.mp3"*>Sound 1</a>*/}Stromy Days
          </span>
          <span>
            <a className="text-black" href="/path/to/sound2.mp3">
              Night Sounds
            </a>
          </span>
          <span>
            <a className="text-black" href="/path/to/sound3.mp3">
              Binaural
            </a>
          </span>
          <span>
            <a className="text-black" href="/path/to/sound4.mp3">
              LoFi Beat
            </a>
          </span>
        </div>
      )}
      {/*   
      <span>
        <img
          src={sound}
          width={45}
          alt="Sound Icon"
          onCspanck={togglePlayback}
        />
      </span>
      <span>
        <img className="mute-unmute"
          src={isMuted ? muteIcon : unmuteIcon}
          width={45}
          alt={isMuted ? "Unmute" : "Mute"}
          onClick={toggleMute}
        />
      </span>
  
      {currentSongIndex !== null && (
        <audio
          src={songs[currentSongIndex].url}
          autoPlay={isPlaying}
          onEnded={togglePlayback}
          onPause={() => setIsPlaying(false)}
          muted={isMuted}
        />
      )} */}
    </nav>
  );
};

export default NavBar;
