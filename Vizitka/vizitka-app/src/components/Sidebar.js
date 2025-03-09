import React from 'react';
import '../styles/style.css';

const Sidebar = () => {
    const navItems = [
        { name: "ABOUT ME", link: "#about-me" },
        { name: "EXPERIENCE", link: "#experience" },
        { name: "EDUCATION", link: "#education" },
    ];

    return (
        <div className="sidebar">
            <div className="nav-items">
                {navItems.map((item, index) => (
                    <a key={index} href={item.link} className="nav-item">
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
