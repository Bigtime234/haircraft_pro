import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System Certified",
      icon: "Award",
      color: "text-primary"
    },
    {
      id: 2,
      name: "Cruelty-Free",
      description: "No Animal Testing Certification",
      icon: "Heart",
      color: "text-success"
    },
    {
      id: 3,
      name: "Fair Trade",
      description: "Ethical Sourcing Verified",
      icon: "Handshake",
      color: "text-secondary"
    },
    {
      id: 4,
      name: "BBB Accredited",
      description: "Better Business Bureau A+ Rating",
      icon: "Shield",
      color: "text-accent"
    }
  ];

  const achievements = [
    {
      id: 1,
      number: "5+",
      label: "Years Experience",
      description: "Serving clients with premium hair extensions"
    },
    {
      id: 2,
      number: "500+",
      label: "Happy Clients",
      description: "Successful transformations completed"
    },
    {
      id: 3,
      number: "98%",
      label: "Satisfaction Rate",
      description: "Client satisfaction and retention"
    },
    {
      id: 4,
      number: "4.9/5",
      label: "Average Rating",
      description: "Based on verified client reviews"
    }
  ];

  const guarantees = [
    {
      id: 1,
      title: "Quality Guarantee",
      description: "100% authentic human hair or full refund within 30 days",
      icon: "ShieldCheck"
    },
    {
      id: 2,
      title: "Color Match Promise",
      description: "Perfect color matching or free replacement",
      icon: "Palette"
    },
    {
      id: 3,
      title: "Expert Support",
      description: "Lifetime styling and maintenance guidance",
      icon: "Users"
    },
    {
      id: 4,
      title: "Secure Delivery",
      description: "Insured shipping with tracking and signature confirmation",
      icon: "Truck"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Trust & Reliability</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-card-foreground mb-4">
            Your Trust is Our Priority
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've built our reputation on quality, authenticity, and exceptional service. Here's why thousands of clients trust HairCraft Pro.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements?.map((achievement) => (
            <div key={achievement?.id} className="text-center p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                {achievement?.number}
              </div>
              <div className="font-semibold text-card-foreground mb-1">
                {achievement?.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {achievement?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-card-foreground text-center mb-8">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div key={cert?.id} className="bg-background rounded-xl p-6 shadow-primary hover:shadow-elevation transition-all duration-300 text-center transform-hover">
                <div className={`w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center ${cert?.color}`}>
                  <Icon name={cert?.icon} size={24} />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
          <h3 className="font-heading text-2xl font-semibold text-card-foreground text-center mb-8">
            Our Guarantees to You
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {guarantees?.map((guarantee) => (
              <div key={guarantee?.id} className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={guarantee?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    {guarantee?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {guarantee?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by clients worldwide • Secure payments • Privacy protected
          </p>
          
          <div className="flex justify-center items-center space-x-6 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} />
              <span className="text-xs">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span className="text-xs">Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} />
              <span className="text-xs">Verified Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;