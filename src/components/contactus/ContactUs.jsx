import React, { useState } from "react";

const serviceCards = [
  { icon: "📦", title: "Track Order" },
  { icon: "🔑", title: "Reset Password" },
  { icon: "💳", title: "Payment Option" },
  { icon: "👤", title: "User & Account" },
  { icon: "❤️", title: "Wishlist & Compare" },
  { icon: "🚚", title: "Shipping & Billing" },
  { icon: "🛒", title: "Shopping Cart & Wallet" },
  { icon: "🏪", title: "Sell on Clicon" },
];

const popularTopics = [
  "How do I return my item?",
  "What is Clicons Returns Policy?",
  "How long is the refund process?",
  "What are the 'Delivery Timelines'?",
  "What is 'Discover Your Daraz Campaign 2022'?",
  "What is the Voucher & Gift Offer in this Campaign?",
  "How to cancel Clicon Order",
  "Ask the Digital and Device Community",
  "How to change my shop name?",
];

const faqItems = [
  {
    question: "Where can I watch?",
    answer: "Details about where you can watch.",
  },
  {
    question: "How do I reset my password?",
    answer: "Steps to reset your password.",
  },
  {
    question: "What payment options are available?",
    answer: "Information on payment options.",
  },
  {
    question: "How do I track my order?",
    answer: "Guide to track your order.",
  },
];

const  ContactUs =() => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-12">
        What can we assist you with today?
      </h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-6 border-2 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-2xl">{card.icon}</div>
            <span className="font-medium">{card.title}</span>
          </div>
        ))}
      </div>

      {/* Popular Topics */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTopics.map((topic, index) => (
            <a
              key={index}
              href="#"
              className="text-primary hover:underline cursor-pointer"
            >
              {topic}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Don't find your answer?</h2>
          <p className="text-xl">Contact with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 border rounded-lg text-center">
            <div className="bg-blue-50 p-4 rounded-full inline-block mb-4">
              📞
            </div>
            <h3 className="font-bold">Call us now</h3>
            <p className="text-sm text-gray-500">
              Available online from 9:00 AM to 5:00 PM (GMT+5:45)
            </p>
            <p className="font-bold mb-4">+61 466 468 528</p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">
              CALL NOW
            </button>
          </div>

          <div className="p-6 border rounded-lg text-center">
            <div className="bg-green-50 p-4 rounded-full inline-block mb-4">
              📧
            </div>
            <h3 className="font-bold">Email Us</h3>
            <p className="text-sm text-gray-500">
              Available online from 9:00 AM to 5:00 PM (GMT+5:45)
            </p>
            <p className="font-bold mb-4">Support@clicon.com</p>
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{item.question}</h3>
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </div>
              {activeFAQ === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;