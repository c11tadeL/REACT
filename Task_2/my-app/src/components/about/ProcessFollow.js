import React from 'react';
import '../../styles/style_about.css';
import iconAndLine from '../../images/iconAndLine.png';

function ProcessFollow() {
  const processSteps = [
    { title: "Planing", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
    { title: "Conception", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
    { title: "Design", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
    { title: "Development", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." }
  ];

  return (
    <div className="processFollow">
      <div className="container">
        <h2>The process we follow</h2>
        <div className="processFollow__info">
          {processSteps.map((step, index) => (
            <div key={index} className="processFollow__block">
              <img src={iconAndLine} alt={`${step.title} Icon`} />
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProcessFollow;