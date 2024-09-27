import React from 'react';
import './Cards.css';
import Card from './Card'; 

const data = [
  {
    lang: "YouTube Video", 
    url: "https://www.youtube.com/embed/JS6uhdQJo4A", 
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