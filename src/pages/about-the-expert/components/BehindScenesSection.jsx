import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BehindScenesSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Sourcing Excellence",
      description: "I personally visit suppliers and inspect every batch of hair to ensure it meets our premium standards.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      icon: "Search"
    },
    {
      step: "02",
      title: "Quality Inspection",
      description: "Each bundle undergoes rigorous testing for texture, strength, and color consistency before approval.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
      icon: "Eye"
    },
    {
      step: "03",
      title: "Ethical Verification",
      description: "I maintain direct relationships with ethical suppliers who provide full transparency in their sourcing.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      icon: "Shield"
    },
    {
      step: "04",
      title: "Client Consultation",
      description: "Every client receives personalized attention to understand their unique hair goals and lifestyle needs.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
      icon: "MessageCircle"
    }
  ];

  const dayInLife = [
    {
      time: "8:00 AM",
      activity: "Quality inspection of new hair arrivals",
      icon: "Clock"
    },
    {
      time: "9:30 AM",
      activity: "Client consultation and color matching",
      icon: "Users"
    },
    {
      time: "11:00 AM",
      activity: "Supplier communication and order coordination",
      icon: "Phone"
    },
    {
      time: "1:00 PM",
      activity: "Hair preparation and customization",
      icon: "Scissors"
    },
    {
      time: "3:00 PM",
      activity: "Client follow-up and care guidance",
      icon: "Heart"
    },
    {
      time: "5:00 PM",
      activity: "Research on new techniques and trends",
      icon: "BookOpen"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Behind the Scenes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparency is at the heart of everything I do. Here's an inside look at my process, 
            from sourcing the finest hair to delivering exceptional client experiences.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-12 text-center">
            My Quality Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps?.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="overflow-hidden rounded-2xl shadow-primary group-hover:shadow-elevation transition-all duration-300">
                    <Image
                      src={step?.image}
                      alt={step?.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-primary">
                    <Icon name={step?.icon} size={20} color="white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm">
                    {step?.step}
                  </div>
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {step?.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Day in the Life */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
              A Day in My Life
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every day brings new opportunities to help clients achieve their hair dreams. 
              Here's what a typical day looks like in my world of premium hair extensions.
            </p>
            <div className="space-y-6">
              {dayInLife?.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-xl shadow-primary">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item?.icon} size={18} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-primary text-sm">{item?.time}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-foreground">{item?.activity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-primary">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={32} color="white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                My Commitment to You
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Personalized Service</h4>
                  <p className="text-sm text-muted-foreground">Every consultation is tailored to your unique needs and lifestyle</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality Guarantee</h4>
                  <p className="text-sm text-muted-foreground">Only the finest, ethically sourced hair makes it to your door</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">I'm here for you throughout your entire hair journey</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Transparent Process</h4>
                  <p className="text-sm text-muted-foreground">Complete visibility into sourcing, quality, and pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindScenesSection;