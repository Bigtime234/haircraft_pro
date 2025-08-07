import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const QualityStandards = () => {
  const [activeStandard, setActiveStandard] = useState(0);

  const qualityStandards = [
    {
      id: 'sourcing',
      title: 'Ethical Sourcing',
      icon: 'Globe',
      description: 'Direct partnerships with certified suppliers ensuring fair trade practices and ethical collection methods.',
      details: [
        'Fair compensation to hair donors',
        'Transparent supply chain tracking',
        'Cultural respect and consent protocols',
        'Sustainable harvesting practices'
      ],
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=400&h=300&fit=crop'
    },
    {
      id: 'processing',
      title: 'Advanced Processing',
      icon: 'Settings',
      description: 'State-of-the-art processing facilities using gentle methods to preserve hair integrity and natural properties.',
      details: [
        'Minimal chemical processing',
        'Cuticle preservation techniques',
        'Color-safe treatment methods',
        'Sterile processing environment'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'
    },
    {
      id: 'testing',
      title: 'Quality Testing',
      icon: 'TestTube',
      description: 'Comprehensive laboratory testing ensures every batch meets our stringent quality and safety standards.',
      details: [
        'Tensile strength analysis',
        'Color fastness testing',
        'Chemical residue screening',
        'Microscopic cuticle examination'
      ],
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop'
    },
    {
      id: 'grading',
      title: 'Hair Grading System',
      icon: 'Star',
      description: 'Our proprietary grading system categorizes hair quality from Premium to Luxury based on multiple factors.',
      details: [
        'Cuticle alignment assessment',
        'Texture consistency evaluation',
        'Longevity potential rating',
        'Processing history verification'
      ],
      image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Our Quality Standards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From sourcing to delivery, every step in our process is designed to maintain the highest quality standards 
            and ensure you receive premium hair extensions that exceed expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Standards Navigation */}
          <div className="space-y-4">
            {qualityStandards?.map((standard, index) => (
              <div
                key={standard?.id}
                onClick={() => setActiveStandard(index)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeStandard === index
                    ? 'bg-primary text-primary-foreground border-primary shadow-primary'
                    : 'bg-card text-card-foreground border-border hover:border-primary/30 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeStandard === index
                      ? 'bg-primary-foreground/20'
                      : 'bg-primary/10'
                  }`}>
                    <Icon 
                      name={standard?.icon} 
                      size={20} 
                      className={activeStandard === index ? 'text-primary-foreground' : 'text-primary'} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{standard?.title}</h3>
                    <p className={`text-sm leading-relaxed ${
                      activeStandard === index ? 'text-primary-foreground/90' : 'text-muted-foreground'
                    }`}>
                      {standard?.description}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`transition-transform duration-300 ${
                      activeStandard === index ? 'rotate-90 text-primary-foreground' : 'text-muted-foreground'
                    }`} 
                  />
                </div>

                {/* Expanded Details */}
                {activeStandard === index && (
                  <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {standard?.details?.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-primary-foreground flex-shrink-0" />
                          <span className="text-sm text-primary-foreground/90">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Display */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card rounded-2xl p-8 shadow-elevation">
              <div className="relative mb-6">
                <Image
                  src={qualityStandards?.[activeStandard]?.image}
                  alt={qualityStandards?.[activeStandard]?.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {qualityStandards?.[activeStandard]?.title}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {qualityStandards?.[activeStandard]?.title} Process
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {qualityStandards?.[activeStandard]?.description}
                </p>

                {/* Process Steps */}
                <div className="space-y-3">
                  {qualityStandards?.[activeStandard]?.details?.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-sm text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;