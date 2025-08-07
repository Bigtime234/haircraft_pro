import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ReturnPolicy = ({ onConsultationClick }) => {
  const [activePolicy, setActivePolicy] = useState('return');

  const policyData = {
    return: {
      title: '30-Day Return Policy',
      icon: 'RotateCcw',
      description: 'Complete satisfaction guaranteed with our comprehensive return policy',
      details: [
        {
          title: 'Eligibility Criteria',
          items: [
            'Hair must be in original condition (unwashed, uncut, unstyled)',
            'Original packaging and documentation required',
            'Return initiated within 30 days of delivery',
            'Hair must not show signs of chemical processing or heat damage'
          ]
        },
        {
          title: 'Return Process',
          items: [
            'Contact our support team via WhatsApp or email',
            'Receive return authorization and shipping label',
            'Package hair securely in original packaging',
            'Ship using provided prepaid return label'
          ]
        },
        {
          title: 'Refund Timeline',
          items: [
            'Hair inspection completed within 2-3 business days',
            'Refund processed within 5-7 business days after approval',
            'Original payment method credited automatically',
            'Email confirmation sent with refund details'
          ]
        }
      ]
    },
    exchange: {
      title: 'Hair Exchange Program',
      icon: 'RefreshCw',
      description: 'Exchange for different length, color, or texture within policy terms',
      details: [
        {
          title: 'Exchange Options',
          items: [
            'Different length (within same grade category)',
            'Color variation (natural colors only)',
            'Texture change (straight, wavy, curly)',
            'Upgrade to higher grade (price difference applies)'
          ]
        },
        {
          title: 'Exchange Conditions',
          items: [
            'Hair must be unused and in original condition',
            'Exchange requested within 14 days of delivery',
            'One exchange per order (additional exchanges subject to fees)',
            'Customer covers return shipping costs'
          ]
        },
        {
          title: 'Processing Time',
          items: [
            'Exchange request reviewed within 24 hours',
            'New hair shipped within 2-3 business days',
            'Expedited shipping available for urgent requests',
            'Tracking information provided for new shipment'
          ]
        }
      ]
    },
    warranty: {
      title: 'Quality Warranty',
      icon: 'Shield',
      description: 'Comprehensive warranty covering quality defects and premature wear',
      details: [
        {
          title: 'Warranty Coverage',
          items: [
            'Manufacturing defects and quality issues',
            'Premature shedding beyond normal limits',
            'Color fading within first 30 days',
            'Texture inconsistencies or processing errors'
          ]
        },
        {
          title: 'Warranty Terms',
          items: [
            '90-day warranty on Premium and Luxury grades',
            '60-day warranty on Standard grade hair',
            'Covers replacement or full refund at our discretion',
            'Does not cover damage from improper care or styling'
          ]
        },
        {
          title: 'Claim Process',
          items: [
            'Document issue with photos and description',
            'Submit warranty claim through WhatsApp or email',
            'Provide original order information and receipt',
            'Await evaluation and resolution within 48 hours'
          ]
        }
      ]
    }
  };

  const policyHighlights = [
    {
      icon: 'Clock',
      title: '30-Day Guarantee',
      description: 'Full month to ensure complete satisfaction'
    },
    {
      icon: 'Truck',
      title: 'Free Return Shipping',
      description: 'We cover all return shipping costs'
    },
    {
      icon: 'CreditCard',
      title: 'Full Refund',
      description: '100% money back if not satisfied'
    },
    {
      icon: 'MessageCircle',
      title: '24/7 Support',
      description: 'Instant support via WhatsApp'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Return Policy & Guarantees
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your satisfaction is our priority. We offer comprehensive return policies, exchanges, 
            and warranties to ensure you're completely happy with your purchase.
          </p>
        </div>

        {/* Policy Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {policyHighlights?.map((highlight, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={highlight?.icon} size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{highlight?.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight?.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Policy Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {Object.entries(policyData)?.map(([key, policy]) => (
                <button
                  key={key}
                  onClick={() => setActivePolicy(key)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    activePolicy === key
                      ? 'bg-primary text-primary-foreground border-primary shadow-primary'
                      : 'bg-card text-card-foreground border-border hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activePolicy === key ? 'bg-primary-foreground/20' : 'bg-primary/10'
                    }`}>
                      <Icon 
                        name={policy?.icon} 
                        size={18} 
                        className={activePolicy === key ? 'text-primary-foreground' : 'text-primary'} 
                      />
                    </div>
                    <div>
                      <h4 className={`font-medium text-sm ${
                        activePolicy === key ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {policy?.title}
                      </h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Policy Details */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 shadow-elevation">
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={policyData?.[activePolicy]?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {policyData?.[activePolicy]?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {policyData?.[activePolicy]?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {policyData?.[activePolicy]?.details?.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary">
                        {index + 1}
                      </span>
                      <span>{section?.title}</span>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {section?.items?.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                          <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-brand rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Headphones" size={32} className="text-white mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-semibold text-white mb-4">
              Need Help with Returns or Exchanges?
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Our customer service team is available 24/7 to assist with returns, exchanges, or any questions 
              about our policies. Get instant support through WhatsApp or schedule a consultation call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={onConsultationClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                WhatsApp Support
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                Email Support
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              question: 'Can I return colored hair?',
              answer: 'Yes, as long as the hair is unused and in original condition. Color must match what was ordered.'
            },
            {
              question: 'What if hair arrives damaged?',
              answer: 'Contact us immediately with photos. Damaged shipments are replaced at no cost within 48 hours.'
            },
            {
              question: 'Do you offer partial returns?',
              answer: 'No, we require complete bundle returns to maintain quality standards and prevent mixing.'
            }
          ]?.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-3">{faq?.question}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq?.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;