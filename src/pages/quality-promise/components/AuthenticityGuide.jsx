import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AuthenticityGuide = () => {
  const [activeComparison, setActiveComparison] = useState('cuticle');

  const comparisonData = {
    cuticle: {
      title: 'Cuticle Alignment',
      authentic: {
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop',
        features: [
          'Uniform cuticle direction',
          'Smooth, aligned scales',
          'Natural shine and luster',
          'Consistent texture throughout'
        ]
      },
      synthetic: {
        image: 'https://images.pexels.com/photos/3993452/pexels-photo-3993452.jpeg?w=300&h=200&fit=crop',
        features: [
          'Irregular or missing cuticles',
          'Artificial shine or dullness',
          'Inconsistent texture',
          'Rough or coarse feel'
        ]
      }
    },
    burn: {
      title: 'Burn Test Results',
      authentic: {
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
        features: [
          'Burns slowly with hair smell',
          'Leaves fine ash residue',
          'Self-extinguishing flame',
          'Natural protein odor'
        ]
      },
      synthetic: {
        image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=300&h=200&fit=crop',
        features: [
          'Burns quickly with plastic smell',
          'Melts and forms beads',
          'Continues burning',
          'Chemical or sweet odor'
        ]
      }
    },
    water: {
      title: 'Water Absorption',
      authentic: {
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop',
        features: [
          'Absorbs water naturally',
          'Becomes heavier when wet',
          'Maintains structure',
          'Dries to original state'
        ]
      },
      synthetic: {
        image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?w=300&h=200&fit=crop',
        features: [
          'Repels water or absorbs poorly',
          'Maintains artificial feel',
          'May become tangled',
          'Loses shape when wet'
        ]
      }
    }
  };

  const redFlags = [
    {
      icon: 'AlertTriangle',
      title: 'Unrealistic Pricing',
      description: 'Extremely low prices often indicate synthetic or low-quality hair mixed with human hair.',
      warning: 'Premium human hair requires significant investment in sourcing and processing.'
    },
    {
      icon: 'Eye',
      title: 'Perfect Uniformity',
      description: 'Hair that looks too perfect or uniform may be heavily processed or synthetic.',
      warning: 'Natural human hair has slight variations in texture and color.'
    },
    {
      icon: 'Zap',
      title: 'Excessive Shine',
      description: 'Overly shiny or glossy hair often indicates chemical coating or synthetic fibers.',
      warning: 'Natural hair has a subtle, healthy luster, not artificial shine.'
    },
    {
      icon: 'Package',
      title: 'Poor Packaging',
      description: 'Cheap packaging, missing labels, or no authenticity certificates are red flags.',
      warning: 'Quality hair comes with proper documentation and professional packaging.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Authenticity Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn to identify authentic human hair and protect yourself from synthetic alternatives. 
            Our comprehensive guide helps you make informed decisions.
          </p>
        </div>

        {/* Comparison Tests */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Authentic vs. Synthetic Comparison
          </h3>

          {/* Test Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(comparisonData)?.map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveComparison(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeComparison === key
                    ? 'bg-primary text-primary-foreground shadow-primary'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {data?.title}
              </button>
            ))}
          </div>

          {/* Comparison Display */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Authentic Hair */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                </div>
                <h4 className="font-semibold text-lg text-foreground">Authentic Human Hair</h4>
              </div>

              <div className="mb-4">
                <Image
                  src={comparisonData?.[activeComparison]?.authentic?.image}
                  alt="Authentic human hair characteristics"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-3">
                {comparisonData?.[activeComparison]?.authentic?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Synthetic Hair */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                  <Icon name="XCircle" size={20} className="text-destructive" />
                </div>
                <h4 className="font-semibold text-lg text-foreground">Synthetic Hair</h4>
              </div>

              <div className="mb-4">
                <Image
                  src={comparisonData?.[activeComparison]?.synthetic?.image}
                  alt="Synthetic hair characteristics"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-3">
                {comparisonData?.[activeComparison]?.synthetic?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="X" size={16} className="text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Red Flags Section */}
        <div className="bg-destructive/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Red Flags to Avoid
            </h3>
            <p className="text-muted-foreground">
              Warning signs that indicate low-quality or synthetic hair extensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {redFlags?.map((flag, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={flag?.icon} size={20} className="text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{flag?.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{flag?.description}</p>
                    <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                      <p className="text-xs text-warning-foreground font-medium">{flag?.warning}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticityGuide;