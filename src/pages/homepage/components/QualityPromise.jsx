import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QualityPromise = () => {
  const qualityFeatures = [
    {
      id: 1,
      icon: "Shield",
      title: "100% Human Hair",
      description: "Authentic human hair sourced directly from trusted suppliers with full traceability and quality certification.",
      color: "text-success"
    },
    {
      id: 2,
      icon: "Heart",
      title: "Ethically Sourced",
      description: "We ensure fair compensation and ethical practices throughout our supply chain, supporting communities worldwide.",
      color: "text-primary"
    },
    {
      id: 3,
      icon: "Award",
      title: "Authenticity Guarantee",
      description: "Every bundle comes with our authenticity guarantee and quality certificate. Not satisfied? Full refund within 30 days.",
      color: "text-secondary"
    },
    {
      id: 4,
      icon: "Microscope",
      title: "Quality Tested",
      description: "Each batch undergoes rigorous quality testing for texture, strength, and color consistency before reaching you.",
      color: "text-accent"
    },
    {
      id: 5,
      icon: "Truck",
      title: "Secure Delivery",
      description: "Professional packaging and insured shipping ensure your hair arrives in perfect condition, ready for installation.",
      color: "text-muted-foreground"
    },
    {
      id: 6,
      icon: "Users",
      title: "Expert Support",
      description: "Our hair specialists provide ongoing support, styling tips, and maintenance guidance throughout your hair journey.",
      color: "text-primary"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 9001 Certified",
      description: "Quality Management System",
      icon: "CheckCircle"
    },
    {
      id: 2,
      name: "Cruelty-Free Certified",
      description: "No Animal Testing",
      icon: "Heart"
    },
    {
      id: 3,
      name: "Fair Trade Verified",
      description: "Ethical Sourcing Standards",
      icon: "Handshake"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Quality Assurance</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Our Quality Promise
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering only the finest quality hair extensions. Every strand is carefully selected, tested, and verified to meet our exacting standards.
          </p>
        </div>

        {/* Quality Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {qualityFeatures?.map((feature) => (
            <div key={feature?.id} className="bg-card rounded-xl p-6 shadow-primary hover:shadow-elevation transition-all duration-300 transform-hover">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${feature?.color}`}>
                  <Icon name={feature?.icon} size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                    {feature?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-card rounded-2xl p-8 shadow-primary mb-12">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-2">
              Certified Excellence
            </h3>
            <p className="text-muted-foreground">
              Our commitment to quality is backed by industry-leading certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications?.map((cert) => (
              <div key={cert?.id} className="text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={cert?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  {cert?.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">5+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Expert Support</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/quality-promise">
            <Button variant="outline" size="lg" iconName="Shield" iconPosition="left">
              Learn More About Our Quality Standards
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QualityPromise;