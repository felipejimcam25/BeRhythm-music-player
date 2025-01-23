import React from 'react'
import Player from "@madzadev/audio-player";
function Player2() {
    const tracks = [
        {
          url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
          title: 'Madza - Chords of Life',
          tags: ['house']
        },
        {
          url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
          title: 'Madza - Late Night Drive',
          tags: ['dnb']
        },
        {
          url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
          title: 'Madza - Persistence',
          tags: ['dubstep']
        }
      ]
      const colors = {
        tagsBackground: "#3e32e4",
        tagsText: "#ffffff",
        tagsBackgroundHoverActive: "#6e65f1",
        tagsTextHoverActive: "#ffffff",
        searchBackground: "#18191f",
        searchText: "#ffffff",
        searchPlaceHolder: "#575a77",
        playerBackground: "#18191f",
        titleColor: "#ffffff",
        timeColor: "#ffffff",
        progressSlider: "#00AFFF",
        progressUsed: "#00AFFF",
        progressLeft: "#fff",
        bufferLoaded: "#fff",
        volumeSlider: "#00AFFF",
        volumeUsed: "#00AFFF",
        volumeLeft: "#151616",
        playlistBackground: "#282d5f",
        playlistText: "#575a77",
        playlistBackgroundHoverActive: "#282d5f",
        playlistTextHoverActive: "#ffffff",
    }
  return (
    <div className='container music-player-content'>
        <Player 
        trackList={tracks} 
        includeTags={false}
        includeSearch={false}
        showPlaylist={true}
        sortTracks={true}
        autoPlayNextTrack={true}
        customColorScheme={colors}
        />
    </div>
  )
}

export default Player2