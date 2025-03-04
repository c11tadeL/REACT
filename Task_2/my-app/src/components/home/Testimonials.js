import React, { useState } from 'react';
import '../../styles/style_home.css';
import jennyImage from '../../images/jenny.png';
import paulImage from '../../images/paul.jpg';
import sylvanaImage from '../../images/sylvana.jpg';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
      name: "Jenny Wilson",
      role: "Vice President",
      avatar: jennyImage
    },
    {
      id: 2,
      text: "Their attention to detail and creativity has transformed our online presence. Highly recommended for startups.",
      name: "Michael Brown",
      role: "CEO",
      avatar: paulImage 
    },
    {
      id: 3,
      text: "Professional, responsive, and innovative. They delivered beyond our expectations and within our timeline.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      avatar: sylvanaImage 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__info">
          <h3>What our clients<br /> say about us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit sed.</p>
        </div>
        <div className="testimonials__content">
          <blockquote id="testimonial-text">
            {currentTestimonial.text}
          </blockquote>
          <div className="testimonials__author">
            <img src={currentTestimonial.avatar} alt={currentTestimonial.name} />
            <div>
              <strong>{currentTestimonial.name}</strong>
              <span>{currentTestimonial.role}</span>
            </div>
          </div>
          <div className="testimonials__nav">
            <button className="prev" onClick={prevTestimonial}>&#10094;</button>
            <button className="next" onClick={nextTestimonial}>&#10095;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;