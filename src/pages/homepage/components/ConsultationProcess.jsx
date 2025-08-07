import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationProcess = () => {
  const processSteps = [
    {
      id: 1,
      step: "01",
      title: "Browse & Discover",
      description: "Explore our premium hair collection and find textures that match your vision. Use our gallery to see real transformations and get inspired.",
      icon: "Search",
      color: "bg-primary",
      features: [
        "View hair texture galleries",
        "See before/after transformations",
        "Read client success stories",
        "Compare different hair types"
      ]
    },
    {
      id: 2,
      step: "02",
      title: "Consult & Plan",
      description: "Connect with our hair expert via WhatsApp for a personalized consultation. We'll discuss your goals, lifestyle, and create a custom plan.",
      icon: "MessageCircle",
      color: "bg-whatsapp",
      features: [
        "One-on-one WhatsApp consultation",
        "Hair analysis and recommendations",
        "Color matching assistance",
        "Styling and maintenance guidance"
      ]
    },
    {
      id: 3,
      step: "03",
      title: "Transform & Shine",
      description: "Receive your premium hair extensions with detailed care instructions. Enjoy ongoing support and styling tips for long-lasting results.",
      icon: "Sparkles",
      color: "bg-secondary",
      features: [
        "Premium hair delivery",
        "Installation guidance",
        "Aftercare support",
        "Styling tips and tutorials"
      ]
    }
  ];

  const consultationBenefits = [
    {
      icon: "Clock",
      title: "Quick Response",
      description: "Get expert advice within 30 minutes during business hours"
    },
    {
      icon: "Shield",
      title: "Personalized Service",
      description: "Tailored recommendations based on your unique hair needs"
    },
    {
      icon: "Heart",
      title: "Ongoing Support",
      description: "Continuous guidance throughout your hair journey"
    },
    {
      icon: "Award",
      title: "Expert Knowledge",
      description: "5+ years of experience in premium hair extensions"
    }
  ];

  const handleWhatsAppConsultation = () => {
    const message = encodeURIComponent("Hi! I'd like to schedule a consultation to discuss my hair extension needs. Could you help me get started?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-whatsapp/10 text-whatsapp px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageCircle" size={16} />
            <span>Consultation Process</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Your Journey to Perfect Hair
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple 3-step process ensures you get the perfect hair extensions tailored to your unique style and needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-whatsapp to-secondary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {processSteps?.map((step, index) => (
              <div key={step?.id} className="relative">
                {/* Mobile Connection Line */}
                {index < processSteps?.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-primary to-whatsapp transform -translate-x-1/2 z-0"></div>
                )}
                
                <div className="bg-card rounded-2xl p-8 shadow-primary hover:shadow-elevation transition-all duration-300 transform-hover text-center">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${step?.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary`}>
                      <Icon name={step?.icon} size={32} color="white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                      {step?.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">
                    {step?.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step?.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-card-foreground">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Benefits */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
              Why Choose Our Consultation?
            </h3>
            <p className="text-muted-foreground">
              Experience the difference of personalized hair expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationBenefits?.map((benefit) => (
              <div key={benefit?.title} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={benefit?.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {benefit?.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-brand rounded-2xl p-8 text-white">
          <h3 className="font-heading text-2xl font-semibold mb-4">
            Ready to Start Your Hair Transformation?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Book your free consultation today and take the first step towards your dream hair. Our expert is ready to guide you through every step of the process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppConsultation}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground whatsapp-pulse"
            >
              Start Free Consultation
            </Button>
            
            <Link to="/consultation-process">
              <Button variant="outline" size="lg" iconName="Info" iconPosition="left" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;