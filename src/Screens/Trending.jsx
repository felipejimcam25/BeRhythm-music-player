import React from 'react'

export default function Trending() {
  return (
    <div className='container'>
      <h2 className='trend-title'>Trending</h2>
      <div className='trending-container'>
        <div className='trend-card'>
          <div className='image-content'>
            <img src="https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44" alt="utopia Album" className='image-trend' />
          </div>
          <div className='trend-info'>
            <p className='album-trend'>Utopia</p>
            <p className='artist-trend'>Travis Scott</p>
          </div>
        </div>

        <div className='trend-card'>
          <div className='image-content'>
            <img src="https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268" alt="" className='image-trend' />
          </div>
          <div className='trend-info'>
            <p className='album-trend'>Beerbongs & Bentleys</p>
            <p className='artist-trend'>Post Malone</p>
          </div>
        </div>
      </div>
    </div>
  )
}
