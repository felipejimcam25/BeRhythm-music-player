import React from 'react'

export default function Favorites() {
  return (
    <div className='container fav-body'>
      <h2 className='fav-title'>Favorites</h2>
      <div className='fav-content'>
        <div className='fav-image'>
          <img src="https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268" alt="image" className='image-album'/>
        </div>
        <div className='song-info-fav'>
          <p className='song-fav'>Better Now</p>
          <p className='artist-fav'>Post Malone</p>
        </div>
      </div>

      <div className='fav-content'>
        <div className='fav-image'>
          <img src="https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44" alt="image" className='image-album'/>
        </div>
        <div className='song-info-fav'>
          <p className='song-fav'>FE!N</p>
          <p className='artist-fav'>Travis Scott, Playboi Carti</p>
        </div>
      </div>
    </div>
  )
}
