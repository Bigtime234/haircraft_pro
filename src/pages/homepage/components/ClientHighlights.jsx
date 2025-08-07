import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ClientHighlights = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const clientStories = [
    {
      id: 1,
      name: "Sarah Mitchell",
      age: 28,
      profession: "Marketing Executive",
      location: "New York, NY",
      beforeImage: "https://images.unsplash.com/photo-1494790108755-2616c6d4e6c8?w=300&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=400&fit=crop",
      hairType: "Brazilian Straight 20\"",
      duration: "6 months",
      testimonial: `"I was hesitant about extensions, but HairCraft Pro made the entire process seamless. The quality is incredible - people think it's my natural hair! The consultation was thorough, and the aftercare support has been amazing."`,
      rating: 5,
      transformation: "Added length and volume for professional confidence",
      beforeDescription: "Thin, shoulder-length hair lacking volume",
      afterDescription: "Full, lustrous 20-inch Brazilian straight extensions"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      age: 35,
      profession: "Event Planner",
      location: "Los Angeles, CA",
      beforeImage: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?w=300&h=400&fit=crop",
      afterImage: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpg?w=300&h=400&fit=crop",
      hairType: "Peruvian Curly 18\"",
      duration: "8 months",
      testimonial: `"After years of heat damage, I thought I'd never have beautiful hair again. The Peruvian curly extensions matched my natural texture perfectly. I get compliments everywhere I go!"`,
      rating: 5,
      transformation: "Restored natural curl pattern with added volume",
      beforeDescription: "Heat-damaged, brittle curls",
      afterDescription: "Voluminous, healthy-looking Peruvian curls"
    },
    {
      id: 3,
      name: "Jessica Chen",
      age: 24,
      profession: "Content Creator",
      location: "Miami, FL",
      beforeImage: "https://images.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg?w=300&h=400&fit=crop",
      afterImage: "https://images.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg?w=300&h=400&fit=crop",
      hairType: "Indian Wave 22\"",
      duration: "4 months",
      testimonial: `"As a content creator, my hair is crucial for my brand. These Indian wave extensions photograph beautifully and style effortlessly. The investment was worth every penny!"`,
      rating: 5,
      transformation: "Enhanced natural waves with dramatic length",
      beforeDescription: "Short, fine hair with minimal wave",
      afterDescription: "Flowing 22-inch Indian wave extensions"
    }
  ];

  const handleWhatsAppContact = (clientName) => {
    const message = encodeURIComponent(`Hi! I saw ${clientName}'s transformation story and I'm interested in achieving similar results. Could we schedule a consultation?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Real Transformations, Real Results
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our premium hair extensions have transformed the confidence and style of women just like you.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-muted rounded-lg p-1">
            {clientStories?.map((story, index) => (
              <button
                key={story?.id}
                onClick={() => setSelectedStory(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedStory === index
                    ? 'bg-primary text-primary-foreground shadow-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {story?.name?.split(' ')?.[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Story */}
        <div className="bg-card rounded-2xl shadow-elevation overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Before/After Images */}
            <div className="relative">
              <div className="grid grid-cols-2 h-full">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Before
                  </div>
                  <Image
                    src={clientStories?.[selectedStory]?.beforeImage}
                    alt={`${clientStories?.[selectedStory]?.name} before transformation`}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    After
                  </div>
                  <Image
                    src={clientStories?.[selectedStory]?.afterImage}
                    alt={`${clientStories?.[selectedStory]?.name} after transformation`}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Client Info */}
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-2">
                    {clientStories?.[selectedStory]?.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{clientStories?.[selectedStory]?.profession}</span>
                    <span>•</span>
                    <span>{clientStories?.[selectedStory]?.location}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(clientStories?.[selectedStory]?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {clientStories?.[selectedStory]?.rating}.0 rating
                  </span>
                </div>

                {/* Testimonial */}
                <blockquote className="text-card-foreground italic leading-relaxed">
                  {clientStories?.[selectedStory]?.testimonial}
                </blockquote>

                {/* Hair Details */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Hair Type</p>
                    <p className="text-sm font-semibold text-card-foreground">
                      {clientStories?.[selectedStory]?.hairType}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Duration</p>
                    <p className="text-sm font-semibold text-card-foreground">
                      {clientStories?.[selectedStory]?.duration}
                    </p>
                  </div>
                </div>

                {/* Transformation Details */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Before:</p>
                    <p className="text-sm text-card-foreground">
                      {clientStories?.[selectedStory]?.beforeDescription}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">After:</p>
                    <p className="text-sm text-card-foreground">
                      {clientStories?.[selectedStory]?.afterDescription}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="default"
                    onClick={() => handleWhatsAppContact(clientStories?.[selectedStory]?.name)}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                  >
                    Get Similar Results
                  </Button>
                  
                  <Link to="/client-success-stories">
                    <Button variant="outline" iconName="Eye" iconPosition="left">
                      View All Stories
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-card rounded-xl shadow-primary">
            <div className="text-2xl font-heading font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Transformations</p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-primary">
            <div className="text-2xl font-heading font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-primary">
            <div className="text-2xl font-heading font-bold text-primary mb-2">4.9</div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-primary">
            <div className="text-2xl font-heading font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHighlights;