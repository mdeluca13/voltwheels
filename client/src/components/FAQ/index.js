import React from 'react';

const FAQ = () => {
  const faqData = [  {
    question: "What are the advantages of buying an electric car?",
    answer: " Listing your car for sale is easy. First, create an account on our website. Then, click on "Sell Your Car" and follow the step-by-step process to provide all necessary details about your vehicle, including photos, description, and price."
  },
  {
    question: "What information do I need to provide when listing my car for sale?",
    answer: "To create an attractive listing, you should provide essential details such as the make, model, year, mileage, condition, VIN number, any relevant history or maintenance records, and a comprehensive description of the car's features and specifications."
  },
  {
    question: "How do I search for cars to buy on your website?",
    answer: "To find cars for purchase, use our search bar and enter specific criteria like make, model, year, price range, and location. Our advanced filters will help you narrow down your search based on your preferences.."
  },
  {
    question: " How long does it usually take for a car to sell on your website?",
    answer: "The time it takes to sell a car varies depending on various factors such as demand, pricing, and the condition of the vehicle. We cannot guarantee an exact time frame, but well-priced cars in good condition tend to sell faster."
  },
  {
    question: "How can I delete or deactivate my listing if my car has been sold?",
    answer: "You can log in to your account, find the listing, and select the option to delete or deactivate the listing once your car has been sold."
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
