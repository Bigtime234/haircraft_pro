import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 'commitment',
      question: 'Am I committed to purchase after the consultation?',
      answer: `Not at all! Our consultation is designed to educate and inform you about your options. There's absolutely no pressure to purchase. We believe in building long-term relationships based on trust and satisfaction.\n\nMany clients use the consultation to learn about hair care, understand their options, or plan for future purchases. You're welcome to take time to consider our recommendations.`
    },
    {
      id: 'duration',
      question: 'How long does the consultation process take?',
      answer: `Virtual consultations typically take 30-45 minutes, while in-person consultations can take 60-90 minutes. The timeline from consultation to installation varies:\n\n• Virtual consultation: Same day\n• Hair sourcing: 1-2 weeks\n• Installation scheduling: 3-7 days\n• Total timeline: 2-3 weeks on average`
    },
    {
      id: 'cost',
      question: 'What does the consultation cost?',
      answer: `Virtual consultations are complimentary for all potential clients. In-person consultations have a small fee that's fully credited toward your hair purchase if you decide to proceed.\n\nThis ensures we can dedicate quality time to understanding your needs while keeping the service accessible to everyone.`
    },
    {
      id: 'preparation',question: 'How should I prepare for my consultation?',
      answer: `For virtual consultations, take clear photos of your hair in natural light and gather inspiration images. For in-person consultations, come with clean, product-free hair.\n\nBoth types benefit from:\n• Thinking about your lifestyle and styling routine\n• Setting a realistic budget range\n• Preparing questions about maintenance and care`
    },
    {
      id: 'customization',question: 'Can you match my exact hair color and texture?',
      answer: `Yes! Color and texture matching is one of our specialties. We use professional color analysis and have access to a wide range of hair types and colors.\n\nFor complex matches, we may request additional photos or recommend an in-person consultation. We also offer custom coloring services for perfect matches.`
    },
    {
      id: 'maintenance',question: 'What ongoing support do you provide?',
      answer: `We provide comprehensive aftercare support including:\n\n• Detailed care instruction sessions\n• 24/7 WhatsApp support for questions\n• Styling tutorial videos\n• Maintenance check-ins at 2, 6, and 12 weeks\n• Product recommendations and discounts\n• Refresh and reinstallation services`
    },
    {
      id: 'location',question: 'Do you offer consultations outside your area?',
      answer: `Virtual consultations are available worldwide! For in-person consultations, we serve the greater metropolitan area and can arrange travel for premium packages.\n\nWe also partner with certified stylists in other regions for installation services while maintaining our quality standards.`
    },
    {
      id: 'timeline',question: 'How quickly can I get my hair after consultation?',
      answer: `Timeline depends on your specific needs:\n\n• Stock colors/textures: 3-5 business days\n• Custom matching: 1-2 weeks\n• Specialty orders: 2-3 weeks\n• Rush orders: Available for additional fee\n\nWe'll provide exact timelines during your consultation based on your requirements.`
    }
  ];

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev?.[itemId]
    }));
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl font-semibold text-card-foreground mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground">
          Get answers to common questions about our consultation process
        </p>
      </div>
      <div className="space-y-4">
        {faqData?.map((item) => (
          <div key={item?.id} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(item?.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-medium text-card-foreground pr-4">
                {item?.question}
              </h3>
              <Icon 
                name={openItems?.[item?.id] ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                color="var(--color-muted-foreground)"
                className="flex-shrink-0"
              />
            </button>
            
            {openItems?.[item?.id] && (
              <div className="px-6 pb-4">
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {item?.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="MessageCircle" size={24} color="white" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Our hair experts are available 24/7 to answer any specific questions about your hair goals and consultation options.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I have some questions about the consultation process that weren't covered in the FAQ. Can you help me?");
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Ask on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;