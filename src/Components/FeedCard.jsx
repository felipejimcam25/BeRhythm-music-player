import React from 'react'
import FeedEntry from './FeedEntry'

export default function FeedCard({ title, similar, featured, newRelease}) {




  return (
    <div className='card-body-feed'>
        <p className='feed-title'>{title}</p>
        <div className='feed-content'>
            { similar ? similar.map(artist => (
                    <FeedEntry
                    title={artist?.name}
                    subtitle={artist?.followers?.total}
                    image={artist?.images[2].url}
                    />
                )) : featured ?  featured.map(playlist => (
                    <FeedEntry  
                    title={playlist?.name}
                    subtitle={playlist?.tracks?.total}
                    image={playlist?.images[2].url}
                    />
                )) : newRelease ? newRelease.map(album => (
                    <FeedEntry 
                    title={album?.name}
                    subtitle={album?.artists[0]?.name}
                    image={album?.images[2].url}
                    />
                )) : null }
            </div>
    </div>
  )
}
