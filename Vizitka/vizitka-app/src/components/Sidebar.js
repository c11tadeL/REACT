import React from 'react';
import '../styles/style.css';

const Sidebar = () => {
    const navItems = [
        { name: "ABOUT ME", link: "." },
        { name: "EXPERIENCE", link: "/" },
        { name: "GitHub", link: "/" },
        { name: "Telegram", link: "/" }
    ];

    return (
        <div className="sidebar">
            <div className="nav-items">
                {navItems.map((item, index) => (
                    <a key={index} href={item.link} className="nav-item" target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">
                        {item.name}
                    </a>
                ))}
            </div>
            
            <div className="copyright">
                <div className="vertical-text">© 2025</div>
            </div>
        </div>
    );
};

export default Sidebar;
