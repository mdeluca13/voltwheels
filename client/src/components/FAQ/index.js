import React from 'react';

const FAQ = () => {
  const faqData = [  {
    question: "What is your return policy?",
    answer: "Our return policy allows customers to return..."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, you will receive..."
  },];

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
