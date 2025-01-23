import React, { useEffect, useState } from 'react'
import APIKit from '../spotify';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    APIKit.get('me/playlists').then(function(response) {
      setPlaylists(response.data.items)
      console.log(response.data.items);
    })
  }, []);
  
  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate('/player', {state: {id : id}})
  }
  return (
    
    <div className='container'>
      <h2 className='screen-title'>Library</h2>
      <div class="library-content">
        {playlists?.map(playlists => 
        <div className="playlist-card" key={playlists.id} onClick={() => playPlaylist(playlists.id)}>
          <img src={playlists.images[0].url} alt="playlist-image" className='playlist-img' />
          <p className='playlist-name'>{playlists.name}</p>
          <div class="playlist-fade">
            <IconContext.Provider value={{ size: "50px", color:"1B1E41" }}> 
              <AiFillPlayCircle/>
            </IconContext.Provider>
          </div>
        </div>
        )}
      </div>

    </div>
  )
}
