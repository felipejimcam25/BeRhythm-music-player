import React from 'react'

export default function AlbumImage({url}) {
  return (
    <div>
      <div class="album-img">
        <img src={url} alt="album-art" className='album-img'/>
      </div>
    </div>
  )
}
