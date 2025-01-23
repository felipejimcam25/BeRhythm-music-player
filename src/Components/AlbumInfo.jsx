import React from 'react'

export default function AlbumInfo({album}) {
  const artists = [];
  album?.artists?.forEach(element => {
    artists.push(element.name);
  })
  return (
    <div>
      <div className='albumName-content'>
        <p className='album-name'>{album?.name }</p>
      </div>
      <div className="album-info">
          <p className='artist-name'>{artists?.join(", ")}</p>
      </div>
    </div>

  )
}
