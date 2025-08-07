import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SupplierPartnership = () => {
  const suppliers = [
    {
      region: 'Southeast Asia',
      country: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      specialties: ['Virgin Hair', 'Natural Black', 'Straight & Wavy'],
      certifications: ['Fair Trade', 'Ethical Sourcing', 'Quality Grade A+'],
      partnership: '8+ Years',
      description: 'Our longest-standing partnership with certified suppliers who maintain the highest ethical standards and quality control processes.'
    },
    {
      region: 'South America',
      country: 'Brazil',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=400&h=300&fit=crop',
      specialties: ['Curly Hair', 'Natural Colors', 'Thick Texture'],
      certifications: ['Sustainable Sourcing', 'Community Partnership', 'Grade AAA'],
      partnership: '5+ Years',
      description: 'Exclusive partnership with Brazilian suppliers known for premium curly and textured hair with exceptional quality and longevity.'
    },
    {
      region: 'Eastern Europe',
      country: 'Russia',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      specialties: ['Blonde Hair', 'Fine Texture', 'Straight Hair'],
      certifications: ['Premium Grade', 'Ethical Collection', 'Lab Tested'],
      partnership: '6+ Years',
      description: 'Specialized suppliers providing the finest blonde and light-colored hair with exceptional cuticle preservation and natural shine.'
    }
  ];

  const ethicalPractices = [
    {
      icon: 'Heart',
      title: 'Fair Compensation',
      description: 'Hair donors receive fair payment above market rates, ensuring ethical collection practices.',
      impact: '100% of donors compensated fairly'
    },
    {
      icon: 'Users',
      title: 'Community Support',
      description: 'We invest in local communities through education programs and healthcare initiatives.',
      impact: '15+ communities supported'
    },
    {
      icon: 'Leaf',
      title: 'Sustainable Practices',
      description: 'Environmentally conscious processing methods and waste reduction programs.',
      impact: '60% reduction in waste'
    },
    {
      icon: 'Shield',
      title: 'Quality Assurance',
      description: 'Regular audits and quality checks ensure consistent standards across all suppliers.',
      impact: '99.8% quality compliance'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Trusted Supplier Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We work exclusively with certified suppliers who share our commitment to ethical practices, 
            quality excellence, and sustainable sourcing methods.
          </p>
        </div>

        {/* Supplier Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {suppliers?.map((supplier, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-elevation hover:shadow-primary transition-all duration-300 transform-hover">
              <div className="relative">
                <Image
                  src={supplier?.image}
                  alt={`${supplier?.country} hair supplier facility`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {supplier?.partnership}
                </div>
                <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                  {supplier?.country}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {supplier?.region}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {supplier?.description}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-medium text-sm text-foreground mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {supplier?.specialties?.map((specialty, idx) => (
                      <span key={idx} className="bg-secondary/10 text-secondary-foreground px-2 py-1 rounded-md text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-medium text-sm text-foreground mb-2">Certifications:</h4>
                  <div className="space-y-2">
                    {supplier?.certifications?.map((cert, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Award" size={14} className="text-primary" />
                        <span className="text-xs text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Practices */}
        <div className="bg-card rounded-2xl p-8 shadow-elevation">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Our Ethical Commitment
            </h3>
            <p className="text-muted-foreground">
              Every partnership is built on transparency, fairness, and mutual respect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethicalPractices?.map((practice, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={practice?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{practice?.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {practice?.description}
                </p>
                <div className="bg-primary/5 rounded-lg px-3 py-2">
                  <span className="text-xs font-medium text-primary">{practice?.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Statement */}
        <div className="mt-12 bg-gradient-brand rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Eye" size={32} className="text-white mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-semibold text-white mb-4">
              Complete Transparency
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              We believe in complete transparency about our sourcing practices. Every batch of hair comes with 
              detailed documentation about its origin, processing methods, and quality certifications. 
              Ask us anything about your hair's journey from donor to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-medium">Traceable Origins</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-medium">Documented Process</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-medium">Verified Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierPartnership;