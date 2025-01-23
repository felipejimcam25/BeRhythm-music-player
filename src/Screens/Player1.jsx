import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../spotify";
import SongCard from "../Components/Song";
import AudioPlayer from "../Components/AudioPlayer";
import Queue from "../Components/Queue";
import Feed from "./Feed";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient.get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    if (tracks.length > 0 && tracks[currentIndex]) {
      setCurrentTrack(tracks[currentIndex]?.track);
    }
  }, [currentIndex, tracks]);

  console.log("Tracks array:", tracks);
  console.log("Current track:", currentTrack);
  console.log("Current index:", currentIndex);

  return (
    <div className='container player-content'>
      <div className="upper-body">
        <SongCard album={currentTrack.album} />
      </div>
      <div className="below-body">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
      <Feed artistID={currentTrack?.album} />
    </div>
  );
};

export default Player;