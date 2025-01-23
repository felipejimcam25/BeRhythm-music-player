import React from 'react'

export default function Queue({tracks, setCurrentIndex}) {
    console.log(tracks);
    return (
        <div className='container queue-container'>
            <div className="queue">
                <p className='upNext'>Up Next</p>
                <div className='queue-list'>
                    {
                        tracks?.map((track, index) => (
                            <div className='queue-item-container' onClick={() => setCurrentIndex(index)}>
                                <p className='track-name'>{track?.track?.name}</p>
                                <p className='track-duration'>0:30</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
