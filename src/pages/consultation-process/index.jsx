import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import ProcessStepCard from './components/ProcessStepCard';
import ConsultationTypeCard from './components/ConsultationTypeCard';
import PreparationChecklist from './components/PreparationChecklist';
import TimelineCard from './components/TimelineCard';
import PricingCard from './components/PricingCard';
import FAQSection from './components/FAQSection';

const ConsultationProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedConsultationType, setSelectedConsultationType] = useState('virtual');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      number: 1,
      title: 'Initial WhatsApp Contact',
      description: 'Reach out through our WhatsApp button to start your hair transformation journey. We\'ll respond within minutes during business hours.',
      icon: 'MessageCircle',
      duration: '5 minutes',
      highlights: [
        'Instant response during business hours',
        'Friendly, pressure-free conversation',
        'Basic needs assessment'
      ]
    },
    {
      number: 2,
      title: 'Hair Assessment Questionnaire',
      description: 'Complete our comprehensive hair assessment to help us understand your current hair condition, history, and specific needs.',
      icon: 'ClipboardList',
      duration: '10-15 minutes',
      highlights: [
        'Current hair condition analysis',
        'Previous treatment history',
        'Lifestyle and maintenance preferences'
      ]
    },
    {
      number: 3,
      title: 'Style Goal Discussion',
      description: 'Share your vision, inspiration photos, and desired outcomes. We\'ll discuss what\'s achievable and provide expert recommendations.',
      icon: 'Target',
      duration: '15-20 minutes',
      highlights: [
        'Vision alignment and goal setting',
        'Realistic expectation management',
        'Style inspiration review'
      ]
    },
    {
      number: 4,
      title: 'Customized Recommendations',
      description: 'Receive personalized hair recommendations including type, length, color, and quantity based on your assessment and goals.',
      icon: 'Award',
      duration: '20-30 minutes',
      highlights: [
        'Personalized hair selection',
        'Color and texture matching',
        'Quantity and length recommendations'
      ]
    }
  ];

  const consultationTypes = [
    {
      name: 'Virtual Consultation',
      description: 'Perfect for initial assessment and planning from the comfort of your home',
      icon: 'Video',
      duration: '30-45 minutes',
      price: 'FREE',
      bestFor: 'Initial planning',
      includes: [
        'Video call hair assessment',
        'Style goal discussion',
        'Color and texture recommendations',
        'Care instruction overview',
        'Pricing and timeline information',
        'Follow-up WhatsApp support'
      ],
      whatsappMessage: 'I\'d like to know more about scheduling and what to expect.'
    },
    {
      name: 'In-Person Consultation',
      description: 'Comprehensive hands-on assessment with physical hair matching and styling',
      icon: 'Users',
      duration: '60-90 minutes',
      price: '$50',
      bestFor: 'Complex matching',
      includes: [
        'Physical hair examination',
        'Professional color matching',
        'Texture analysis and comparison',
        'Live hair sample testing',
        'Styling demonstration',
        'Complete care kit',
        'Priority booking for installation'
      ],
      whatsappMessage: 'I\'m interested in booking an in-person consultation. What are your available times?'
    }
  ];

  const timelinePhases = [
    {
      title: 'Consultation Booking',
      description: 'Schedule your preferred consultation type and receive preparation guidelines.',
      icon: 'Calendar',
      duration: 'Same day',
      activities: [
        'Choose consultation type',
        'Select convenient time slot',
        'Receive preparation checklist',
        'Get confirmation details'
      ],
      deliverables: ['Booking confirmation', 'Prep guidelines', 'Contact information']
    },
    {
      title: 'Hair Assessment',
      description: 'Comprehensive evaluation of your current hair and detailed discussion of your goals.',
      icon: 'Search',
      duration: '30-90 min',
      activities: [
        'Current hair condition analysis',
        'Color and texture assessment',
        'Lifestyle needs discussion',
        'Goal alignment and planning'
      ],
      deliverables: ['Assessment report', 'Personalized recommendations', 'Style inspiration board']
    },
    {
      title: 'Custom Matching',
      description: 'Professional color and texture matching to ensure perfect integration with your natural hair.',
      icon: 'Palette',
      duration: '1-2 weeks',
      activities: [
        'Professional color analysis',
        'Texture matching process',
        'Quality verification',
        'Final approval confirmation'
      ],
      deliverables: ['Color match samples', 'Texture confirmation', 'Quality certificates']
    },
    {
      title: 'Installation Planning',
      description: 'Schedule your installation appointment and receive detailed preparation instructions.',
      icon: 'Clock',
      duration: '3-7 days',
      activities: [
        'Installation appointment booking',
        'Pre-installation preparation',
        'Care product recommendations',
        'Timeline confirmation'
      ],
      deliverables: ['Installation schedule', 'Prep instructions', 'Care product list']
    }
  ];

  const pricingOptions = [
    {
      name: 'Virtual Consultation',
      price: 'FREE',
      description: 'Perfect for getting started and understanding your options',
      features: [
        { text: 'Video call assessment', included: true },
        { text: 'Style recommendations', included: true },
        { text: 'Basic color guidance', included: true },
        { text: 'Care instructions', included: true },
        { text: 'Physical hair samples', included: false },
        { text: 'Hands-on styling demo', included: false },
        { text: 'Professional color matching', included: false }
      ]
    },
    {
      name: 'In-Person Premium',
      price: '$50',
      originalPrice: '$100',
      description: 'Comprehensive consultation with hands-on assessment',
      features: [
        { text: 'Everything in Virtual', included: true },
        { text: 'Physical hair examination', included: true },
        { text: 'Professional color matching', included: true },
        { text: 'Live styling demonstration', included: true },
        { text: 'Hair sample testing', included: true },
        { text: 'Complete care kit included', included: true },
        { text: 'Priority installation booking', included: true }
      ],
      highlights: [
        'Fee credited toward purchase',
        'Complimentary care kit ($75 value)',
        'Priority booking privileges'
      ],
      note: 'Consultation fee fully credited toward hair purchase'
    },
    {
      name: 'VIP Experience',
      price: '$150',
      originalPrice: '$250',
      description: 'Ultimate consultation with exclusive perks and priority service',
      features: [
        { text: 'Everything in Premium', included: true },
        { text: 'Extended 2-hour session', included: true },
        { text: 'Multiple style options', included: true },
        { text: 'Professional photography', included: true },
        { text: 'Custom color creation', included: true },
        { text: 'Luxury care package', included: true },
        { text: '6-month support program', included: true }
      ],
      highlights: [
        'Professional before/after photos',
        'Custom color formulation',
        'Luxury care package ($200 value)',
        'Extended support program'
      ],
      note: 'Includes exclusive VIP client benefits and priority access'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in scheduling a consultation for premium hair extensions. Can you help me understand the process and available options?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Consultation Process - HairCraft Pro | Expert Hair Extension Consultations</title>
        <meta name="description" content="Discover our personalized consultation process for premium hair extensions. Virtual and in-person options available with expert guidance, color matching, and style planning." />
        <meta name="keywords" content="hair extension consultation, virtual hair consultation, color matching, hair assessment, style planning, expert guidance" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Star" size={16} />
                <span>Personalized Expert Guidance</span>
              </div>
              
              <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Your Hair Transformation
                <span className="text-gradient-brand block">Starts Here</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience our comprehensive consultation process designed to understand your unique needs, 
                match your perfect hair, and create a personalized plan for your dream transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground whatsapp-pulse"
                >
                  Start Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                >
                  Watch Process Video
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Consultations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elevation">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hair consultation session with expert stylist"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating consultation card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-elevation">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} color="white" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground text-sm">Free Consultation</div>
                    <div className="text-xs text-muted-foreground">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Steps */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Our 4-Step Consultation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to understanding your needs and creating the perfect hair solution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {processSteps?.map((step, index) => (
              <ProcessStepCard
                key={step?.number}
                step={step}
                isActive={activeStep === step?.number}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={handleWhatsAppClick}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Begin Your Journey
            </Button>
          </div>
        </div>
      </section>
      {/* Consultation Types */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Choose Your Consultation Style
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the consultation format that best fits your needs and comfort level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {consultationTypes?.map((type, index) => (
              <ConsultationTypeCard
                key={index}
                type={type}
                onSelect={() => setSelectedConsultationType(type?.name?.toLowerCase())}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Preparation Checklist */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Consultation Preparation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the most out of your consultation with our preparation guidelines
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <PreparationChecklist type="virtual" />
            <PreparationChecklist type="in-person" />
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Your Journey Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              From consultation to installation - here's what to expect
            </p>
          </div>

          <div className="space-y-8">
            {timelinePhases?.map((phase, index) => (
              <TimelineCard
                key={index}
                phase={phase}
                isCompleted={index < 1}
                isActive={index === 1}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Consultation Investment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with options to fit every budget and need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions?.map((pricing, index) => (
              <PricingCard
                key={index}
                pricing={pricing}
                isPopular={index === 1}
              />
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-elevation">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Sparkles" size={32} color="white" />
            </div>
            
            <h2 className="font-heading text-3xl font-semibold text-card-foreground mb-4">
              Ready to Transform Your Hair?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey with a free consultation. Our experts are ready to help you 
              achieve the hair of your dreams with personalized guidance and premium quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground whatsapp-pulse"
              >
                Start Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Call (555) 123-4567
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="var(--color-success)" />
                <span>24/7 support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} color="var(--color-success)" />
                <span>Expert guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Scissors" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold">HairCraft Pro</h3>
                  <p className="text-sm opacity-80">Premium Extensions</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4 max-w-md">
                Transform your look with premium hair extensions and expert consultation. 
                Quality you can feel, results you can see.
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
                <Icon name="Facebook" size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
                <Icon name="Youtube" size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/hair-collections" className="hover:opacity-100">Hair Collections</a></li>
                <li><a href="/about-the-expert" className="hover:opacity-100">About Expert</a></li>
                <li><a href="/quality-promise" className="hover:opacity-100">Quality Promise</a></li>
                <li><a href="/client-success-stories" className="hover:opacity-100">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>WhatsApp: +1 (555) 123-4567</li>
                <li>Email: info@haircraftpro.com</li>
                <li>Hours: 9 AM - 8 PM EST</li>
                <li>Response: Within 1 hour</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; {new Date()?.getFullYear()} HairCraft Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultationProcess;