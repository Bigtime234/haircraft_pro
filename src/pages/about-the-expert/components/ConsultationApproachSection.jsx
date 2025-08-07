import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationApproachSection = () => {
  const consultationSteps = [
    {
      step: 1,
      title: "Initial Discovery",
      duration: "15-20 minutes",
      description: "We start with understanding your hair goals, lifestyle, and any specific concerns you might have.",
      features: [
        "Hair history assessment",
        "Lifestyle and maintenance preferences",
        "Budget and timeline discussion",
        "Style inspiration review"
      ],
      icon: "MessageCircle"
    },
    {
      step: 2,
      title: "Hair Analysis",
      duration: "10-15 minutes",
      description: "I analyze your natural hair texture, color, and condition to ensure perfect matching.",
      features: [
        "Texture and density evaluation",
        "Color matching with natural light",
        "Scalp and hair health assessment",
        "Length and volume requirements"
      ],
      icon: "Eye"
    },
    {
      step: 3,
      title: "Custom Recommendations",
      duration: "20-25 minutes",
      description: "Based on my analysis, I provide personalized recommendations for the best hair options.",
      features: [
        "Hair type and origin suggestions",
        "Length and volume recommendations",
        "Color matching options",
        "Care and maintenance guidance"
      ],
      icon: "Lightbulb"
    },
    {
      step: 4,
      title: "Planning & Next Steps",
      duration: "10-15 minutes",
      description: "We finalize your hair selection and plan the timeline for delivery and any follow-up support.",
      features: [
        "Final hair selection confirmation",
        "Delivery timeline planning",
        "Care package preparation",
        "Follow-up support scheduling"
      ],
      icon: "Calendar"
    }
  ];

  const supportServices = [
    {
      title: "Pre-Installation Guidance",
      description: "Detailed instructions and tips for preparing your hair before installation",
      icon: "BookOpen"
    },
    {
      title: "Care & Maintenance Support",
      description: "Comprehensive care guides and ongoing support for maintaining your extensions",
      icon: "Heart"
    },
    {
      title: "Color Touch-Up Advice",
      description: "Professional guidance on maintaining color consistency and vibrancy",
      icon: "Palette"
    },
    {
      title: "Styling Consultation",
      description: "Tips and techniques for styling your extensions to achieve your desired looks",
      icon: "Sparkles"
    },
    {
      title: "Troubleshooting Support",
      description: "Quick assistance for any questions or concerns that arise after installation",
      icon: "HelpCircle"
    },
    {
      title: "Replacement Planning",
      description: "Proactive planning for future hair needs and replacement timelines",
      icon: "RotateCcw"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Sarah! I'd love to schedule a consultation to discuss my hair extension needs. I'm interested in learning more about your personalized approach and finding the perfect hair match for me.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            My Consultation Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every client is unique, and so is my approach. My comprehensive consultation process ensures 
            you get exactly what you need for your perfect hair transformation.
          </p>
        </div>

        {/* Consultation Process */}
        <div className="mb-20">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-12 text-center">
            The Consultation Process
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {consultationSteps?.map((step, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-primary hover:shadow-elevation transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <Icon name={step?.icon} size={24} color="white" />
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-bold text-primary">Step {step?.step}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-heading text-lg font-semibold text-foreground">
                        {step?.title}
                      </h4>
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        {step?.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step?.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step?.features?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} color="var(--color-success)" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Support */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
              Ongoing Support & Care
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My relationship with you doesn't end after the consultation. I provide comprehensive 
              ongoing support to ensure you get the most out of your hair extensions and feel 
              confident throughout your hair journey.
            </p>
            
            <div className="space-y-4">
              {supportServices?.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-xl shadow-primary">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service?.icon} size={18} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{service?.title}</h4>
                    <p className="text-sm text-muted-foreground">{service?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MessageCircle" size={32} color="white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Ready to Start Your Hair Journey?
              </h3>
              <p className="text-muted-foreground mb-8">
                Book your free consultation today and let's create the perfect hair transformation plan for you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-primary">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Clock" size={18} color="var(--color-primary)" />
                  <span className="font-semibold text-foreground">Free 60-Minute Consultation</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive hair analysis and personalized recommendations
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-primary">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Shield" size={18} color="var(--color-primary)" />
                  <span className="font-semibold text-foreground">No Pressure Approach</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Take your time to make the right decision for your hair goals
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-primary">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Heart" size={18} color="var(--color-primary)" />
                  <span className="font-semibold text-foreground">Ongoing Support Included</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive care guidance and follow-up support
                </p>
              </div>

              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground whatsapp-pulse"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationApproachSection;