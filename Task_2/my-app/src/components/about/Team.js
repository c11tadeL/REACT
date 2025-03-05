import React from 'react';
import '../../styles/style_about.css';
import ceoImage from '../../images/ceo.jpg';
import ctoImage from '../../images/cto.png';
import designLeadImage from '../../images/design_lead.png';
import projectManagerImage from '../../images/project_manager.jpg';
import iconFacebook from '../../images/icon_facebook.svg';
import iconTwitter from '../../images/icon_twitter.svg';
import iconLinkedin from '../../images/icon_linkedin.svg';

function TeamMember({ image, name, role, socialLinks }) {
  return (
    <div className="team__member">
      <div className="team__member-image">
        <img src={image} alt={name} />
        {socialLinks && (
          <div className="team__member-social">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url}>
                <img src={link.icon} alt={link.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

function Team() {
  const teamMembers = [
    {
      image: ceoImage,
      name: "John Smith",
      role: "CEO",
      socialLinks: [
        { platform: "Facebook", icon: iconFacebook, url: "#" },
        { platform: "Twitter", icon: iconTwitter, url: "#" },
        { platform: "LinkedIn", icon: iconLinkedin, url: "#" }
      ]
    },
    {
      image: ctoImage,
      name: "Simon Adams",
      role: "CTO"
    },
    {
      image: designLeadImage,
      name: "Paul Jones",
      role: "Design Lead"
    },
    {
      image: projectManagerImage,
      name: "Donald Trump",
      role: "Project Manager"
    }
  ];

  return (
    <div className="team">
      <div className="container">
        <div className="team__title">
          <h2>Meet our team</h2>
        </div>
        <div className="team__members">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;