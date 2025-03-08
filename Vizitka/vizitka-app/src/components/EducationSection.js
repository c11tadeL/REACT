import React from 'react';

const EducationSection = () => {
  const timelineItems = [
    {
      year: 2020,
      content: "Admission to the Kremenchutsk Military Lyceum.",
      active: false
    },
    {
      year: 2022,
      content: "Graduation from the Kremenchutsk Military Lyceum.",
      active: false
    },
    {
      year: 2022,
      content: "Admission to the Bogdan Khmelnitsky National University of Cherkasy.",
      active: false
    },
    {
      year: 2026,
      content: "Graduation from the Bogdan Khmelnitsky National University of Cherkasy.",
      active: true
    }
  ];

  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      
      <div className="education-container">
        <div className="line-container">
          <div className="vertical-line"></div>
        </div>
        
        <div className="education-content">
          <p className="education-intro-bold">
             My education was very different at first
          </p>
          
          <p className="education-intro-regular">
             At first I didn't plan to be a programmer, I wanted it as a hobby, but life is fickle and things changed. <br /> 
             And now I want to be a programmer :) 
          </p>
          
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-marker-container">
                  <div className="timeline-line-top"></div>
                  <div className={`timeline-marker ${item.active ? 'active' : ''}`}></div>
                  <div className="timeline-line-bottom"></div>
                </div>
                <div className="timeline-content">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;