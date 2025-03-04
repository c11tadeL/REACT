import React from 'react';
import '../../styles/style_home.css';
import image01 from '../../images/01.png';
import image02 from '../../images/02.png';
import image03 from '../../images/03.png';
import image04 from '../../images/04.png';

function HowWeWork() {
  const blocks = [
    {
      id: 1,
      image: image01,
      title: "Strategy",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
    },
    {
      id: 2,
      image: image02,
      title: "Wireframing",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
    },
    {
      id: 3,
      image: image03,
      title: "Design",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
    },
    {
      id: 4,
      image: image04,
      title: "Development",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
    }
  ];

  return (
    <div className="how_weWork">
      <div className="container">
        <h2>How we work</h2>
        <div className="text-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <a href="#">Get in touch with us &#8594;</a>
        </div>
        <div className="how__info">
          {blocks.map(block => (
            <div className="block" key={block.id}>
              <img src={block.image} alt={block.title} />
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;