import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
      after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop",
      title: "Brazilian Straight Transformation",
      description: "From damaged to divine with 22-inch Brazilian straight extensions"
    },
    {
      id: 2,
      before: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?w=400&h=500&fit=crop",
      after: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpg?w=400&h=500&fit=crop",
      title: "Peruvian Curly Volume",
      description: "Added volume and length with premium Peruvian curly hair"
    },
    {
      id: 3,
      before: "https://images.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg?w=400&h=500&fit=crop",
      after: "https://images.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg?w=400&h=500&fit=crop",
      title: "Indian Wave Elegance",
      description: "Natural waves enhanced with authentic Indian hair extensions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [transformations.length]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("I'm interested in premium hair extensions and would love to learn more about your services!");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Premium Hair Extensions</span>
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Transform Your Hair,
                <span className="text-gradient-brand block">Transform Your Confidence</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Experience the luxury of premium human hair extensions with personalized consultation and expert styling guidance. Your dream hair awaits.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground whatsapp-pulse"
              >
                Start Your Consultation
              </Button>
              
              <Link to="/hair-collections">
                <Button variant="outline" size="lg" iconName="Eye" iconPosition="left">
                  View Collections
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-success" />
                <span>100% Human Hair</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Award" size={16} className="text-success" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Heart" size={16} className="text-success" />
                <span>500+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Transformation Showcase */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-elevation p-6 transform-hover">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  {transformations[currentSlide].title}
                </h3>
                <div className="flex space-x-1">
                  {transformations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Before</p>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={transformations[currentSlide].before}
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">After</p>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={transformations[currentSlide].after}
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {transformations[currentSlide].description}
              </p>

              <Link to="/client-success-stories">
                <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                  See Full Story
                </Button>
              </Link>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;