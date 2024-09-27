import React from 'react';
import "./Card.css";

const Card = ({ lang, img, scolor, fcolor, isVideo }) => {
    return (
        <div 
            className='container' 
            style={{
                background: `linear-gradient(to left, ${fcolor}, ${scolor})`,
                padding: "20px",
                borderRadius: "8px"
            }}
        >
            {isVideo ? (
                <iframe
                    className="video-frame"
                    src="https://www.youtube.com/embed/JS6uhdQJo4A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "315px" }}
                ></iframe>
            ) : (
                <>
                    <img src={img} alt={lang} className="language-logo" />
                    <h2>{lang}</h2>
                </>
            )}
        </div>
    );
}

export default Card;
