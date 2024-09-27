import React from 'react';
import './Cards.css';
import Card from './Card'; 

const Cards = () => {
  const data = [
    {
      "lang": "Python",
      "url": "https://cdn.svgporn.com/logos/python.svg",
      "fcolor": "#00c3ff",
      "scolor": "#ffff1c"
    },
    {
      "lang": "Java",
      "url": "https://cdn.svgporn.com/logos/java.svg",
      "fcolor": "#D31027",
      "scolor": "#EA384D"
    },
    {
      "lang": "React",
      "url": "https://cdn.svgporn.com/logos/react.svg",
      "fcolor": "#000428",
      "scolor": "#004e92"
    },
    {
      "lang": "Perl",
      "url": "https://cdn.svgporn.com/logos/perl.svg",
      "fcolor": "#cc2b5e",
      "scolor": "#753a88"
    }
  ];

  return (
    <div className="languages-container">
      {data.map(({ lang, url, scolor, fcolor }) => (
        <Card key={lang} lang={lang} img={url} fcolor={fcolor} scolor={scolor} />
      ))}

      {/* Aquí agregamos el video de YouTube */}
      <Card 
        isVideo={true} 
        fcolor="#1c1c1c" 
        scolor="#ffffff" 
      />
    </div>
  );
}

export default Cards;
