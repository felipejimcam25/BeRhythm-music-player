import React from 'react'

export default function FeedEntry({ title, subtitle, image }) {
  return (
    <div className='entry-body'>
        <img src={image} alt={title} className='entry-image'/>
        <div className='entry-info'>
            <p className='playlist-name'>{title}</p>
            <p className='entry-subtitle'>{subtitle}</p>
        </div>
    </div>
  )
}
