import React, { useState } from 'react';

function FaqItem({ number, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq__item">
      <div className="faq__question" onClick={() => setIsOpen(!isOpen)}>
        <span>{number}</span>
        <h4>{question}</h4>
        <button className="faq__toggle">{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <p className="faq__answer">{answer}</p>}
    </div>
  );
}

export default FaqItem;