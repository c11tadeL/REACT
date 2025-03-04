import React from 'react';
import FaqItem from './FaqItem';
import '../../styles/style_home.css';

function Faq() {
  const faqItems = [
    {
      id: 1,
      number: "01",
      question: "How much time does it take?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      number: "02",
      question: "What is your class naming convention?",
      answer: "BEM(Block Element Modifier)."
    },
    {
      id: 3,
      number: "03",
      question: "How do you communicate?",
      answer: "We use Zoom, Google Meet, E-mail."
    },
    {
      id: 4,
      number: "04",
      question: "I have a bigger project. Can you handle it?",
      answer: "Of course! We have a team of experts ready to help you scale your project efficiently."
    }
  ];

  return (
    <div className="faq">
      <div className="container">
        <div className="faq__info">
          <h3>Frequently<br />asked questions</h3>
          <a href="#">Contact us for more info</a>
        </div>
        <div className="faq__content">
          {faqItems.map(item => (
            <FaqItem 
              key={item.id}
              number={item.number}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
