import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QualityHero = ({ onConsultationClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Quality Promise
                </span>
              </div>
              
              <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                Uncompromising Quality,
                <span className="text-gradient-brand block">Guaranteed Excellence</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every strand tells a story of ethical sourcing, meticulous processing, and unwavering quality standards. 
                Our commitment to excellence ensures you receive only the finest human hair extensions, backed by 
                comprehensive guarantees and transparent practices.
              </p>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: 'Award', label: '100% Human Hair', desc: 'Authentic & Verified' },
                { icon: 'Leaf', label: 'Ethically Sourced', desc: 'Fair Trade Certified' },
                { icon: 'CheckCircle', label: 'Quality Tested', desc: 'Lab Verified' },
                { icon: 'RefreshCw', label: '30-Day Return', desc: 'Satisfaction Guaranteed' }
              ]?.map((badge, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg border border-border shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name={badge?.icon} size={20} className="text-primary" />
                  </div>
                  <h3 className="font-medium text-sm text-foreground">{badge?.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{badge?.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onConsultationClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
              >
                Verify Quality Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Quality Certificate
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-elevation">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop"
                alt="Premium hair quality inspection process"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Quality Indicators Overlay */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-primary">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">Quality Verified</p>
                    <p className="text-xs text-muted-foreground">Grade AAA+ Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quality Stats */}
            <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-primary">
              <div className="text-center">
                <p className="text-2xl font-bold">99.8%</p>
                <p className="text-xs opacity-90">Quality Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityHero;