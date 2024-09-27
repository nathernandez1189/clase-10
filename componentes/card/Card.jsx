import React from 'react';
import './Card.css';

const Card = ({ lang, videoUrl, fcolor, scolor }) => {
  return (
    <div className='container' style={{ background: `linear-gradient(45deg, ${fcolor}, ${scolor})` }}>
      <iframe
        width="100%" 
        height="200" 
        src={videoUrl}
        title={lang}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>{lang}</h2>
    </div>
  );
}

export default Card;