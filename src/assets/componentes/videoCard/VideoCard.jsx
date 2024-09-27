import React from 'react'
import "./VideoCard.css"

const VideoCard = ({link, text}) => {
  return (
    <div className='video-container'>
        <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>{text}</p>
    </div>
  )
}

export default VideoCard