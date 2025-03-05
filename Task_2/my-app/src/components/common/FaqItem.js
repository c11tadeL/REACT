import React from 'react';

function FaqItem({ number, question, answer, isOpen, onToggle }) {
  return (
    <div className="faq__item">
      <div className="faq__question" onClick={onToggle}>
        <span>{number}</span>
        <h4>{question}</h4>
        <button className="faq__toggle" onClick={(e) => { e.stopPropagation(); onToggle(); }}>
          {isOpen ? "×" : "+"}
        </button>
      </div>
      <p className="faq__answer" style={{ display: isOpen ? "block" : "none" }}>
        {answer}
      </p>
    </div>
  );
}

export default FaqItem;
