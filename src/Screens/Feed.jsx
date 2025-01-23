import React, { useState, useEffect } from 'react'
import apiClient from '../spotify';
import FeedCard from '../Components/FeedCard';
export default function Feed({artistID}) {

  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const id = artistID?.artist[0]?.id;
  useEffect(() => {
    apiClient.get(`/artists/${id}/related-artists`)
    .then(res => {
      const a = res.data?.artists.slice(0, 3);
      setSimilar(a);
    })
    .catch(err => console.error(err));

    apiClient.get(`/browse/featured-playlists`)
    .then(res => {
      const a = res.data?.playlists.items.slice(0, 3);
      setFeatured(a);
    })
    .catch(err => console.error(err));

    apiClient.get(`/browse/new-releases`)
    .then(res => {
      const a = res.data?.albums.items.slice(0, 6);
      setNewRelease(a);
    })
    .catch(err => console.error(err));
  }, [id])
  return (
    <div className='container feed-body'>
      {/* <FeedCard title="Similar Artists" similar={similar}/>
      <FeedCard title="Made For You" similar={featured}/> */}
      <FeedCard title="Made For You" similar={newRelease}/>
    </div>
  )
}
