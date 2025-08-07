import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onWhatsAppClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted to-accent/10 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Award" size={24} color="white" />
              </div>
              <span className="text-primary font-medium">Certified Hair Extension Expert</span>
            </div>
            
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Meet Sarah Martinez
              <span className="block text-2xl lg:text-3xl text-primary mt-2">
                Your Hair Transformation Expert
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 8 years of specialized experience in premium hair extensions, I've helped 
              thousands of clients achieve their dream hair. My passion lies in sourcing the finest 
              quality hair and providing personalized consultations that transform not just your look, 
              but your confidence.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-primary">
                <Icon name="Users" size={18} color="var(--color-primary)" />
                <span className="text-sm font-medium">2,500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-primary">
                <Icon name="Calendar" size={18} color="var(--color-primary)" />
                <span className="text-sm font-medium">8+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-primary">
                <Icon name="Star" size={18} color="var(--color-primary)" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
              >
                Watch My Story
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl p-6 shadow-elevation">
                <Image
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=600&fit=crop"
                  alt="Sarah Martinez - Hair Extension Expert"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-primary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Verified" size={16} />
                    <span className="text-sm font-medium">Certified Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;