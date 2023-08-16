import React from 'react';
import './Portfolio.css';
import Card from '../Card/Card';
import { productData } from '../data';

const Portfolio = ({ darkMode }) => {
  return (
    <div id='Portfolio' className={`${darkMode ? "dark-mode-portfolio" : ""}`} >
      <div className="title"><h1 style={{fontWeight:'bold ',fontSize:'1.5rem',background:'black',padding:"5px",color:'red'}}>My <span style={{padding:"5px",color:"white",fontWeight:'bold',fontSize:'2rem'}}>Some</span> Projects</h1></div>
      <div className="portfolio-card">
        {
          productData.map((item, index) => (
            <Card darkMode={darkMode} key={index} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default Portfolio;
