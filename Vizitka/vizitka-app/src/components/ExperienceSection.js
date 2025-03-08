import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-container">
        <div className="line-container">
          <div className="vertical-line"></div>
        </div>
        
        <div className="experience-content">
          <div className="experience-position">
            <h3 className="experience-title">Present day</h3>
          </div>
          
          <p className="experience-description">
                As such I have no experience in development, only small labs at university. <br />
                But I have a lot of motivation, so it's all ahead of me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;