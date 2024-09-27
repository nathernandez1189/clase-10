import React from 'react';
import './Cards.css';
import Card from './Card'; 

const data = [
  {
    lang: "YouTube Video", 
    url: "https://youtu.be/JS6uhdQJo4A?si=uXxYUeYV084njjBJ", 
    fcolor: "#FF0000", 
    scolor: "#FF9900"
  }
];

const Cards = () => {
  return (
    <div className="languages-container">
      {data.map(({ lang, url, scolor, fcolor }, index) => (
        <Card
          key={index} 
          lang={lang} 
          videoUrl={url}  
          fcolor={fcolor}
          scolor={scolor}
        />
      ))}
    </div>
  );
}

export default Cards;