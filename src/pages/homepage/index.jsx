import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TextureGallery from './components/TextureGallery';
import QualityPromise from './components/QualityPromise';
import ClientHighlights from './components/ClientHighlights';
import InstagramFeed from './components/InstagramFeed';
import ConsultationProcess from './components/ConsultationProcess';
import TrustIndicators from './components/TrustIndicators';
import WhatsAppFloat from './components/WhatsAppFloat';
import Icon from '../../components/AppIcon';


const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>HairCraft Pro - Premium Hair Extensions | Transform Your Hair, Transform Your Confidence</title>
        <meta name="description" content="Experience luxury with HairCraft Pro's premium human hair extensions. Brazilian, Peruvian, Indian & Malaysian hair with expert consultation. 100% authentic, ethically sourced. Book your consultation today!" />
        <meta name="keywords" content="hair extensions, premium hair, Brazilian hair, Peruvian hair, Indian hair, Malaysian hair, human hair extensions, hair transformation, hair consultation" />
        <meta property="og:title" content="HairCraft Pro - Premium Hair Extensions" />
        <meta property="og:description" content="Transform your hair with premium human hair extensions. Expert consultation, 100% authentic hair, 5+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haircraftpro.com" />
        <link rel="canonical" href="https://haircraftpro.com" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Texture Gallery */}
          <TextureGallery />

          {/* Quality Promise */}
          <QualityPromise />

          {/* Client Highlights */}
          <ClientHighlights />

          {/* Instagram Feed */}
          <InstagramFeed />

          {/* Consultation Process */}
          <ConsultationProcess />

          {/* Trust Indicators */}
          <TrustIndicators />
        </main>

        {/* Floating WhatsApp Button */}
        <WhatsAppFloat />

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">HairCraft Pro</h3>
                    <p className="text-sm text-background/70">Premium Hair Extensions</p>
                  </div>
                </div>
                <p className="text-background/80 mb-4 max-w-md">
                  Transform your hair with our premium human hair extensions. Expert consultation, authentic quality, and personalized service for your perfect hair transformation.
                </p>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/haircraftpro" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
                    <Icon name="Instagram" size={20} />
                  </a>
                  <a href="https://facebook.com/haircraftpro" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
                    <Icon name="Facebook" size={20} />
                  </a>
                  <a href="https://tiktok.com/@haircraftpro" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
                    <Icon name="Music" size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/hair-collections" className="text-background/70 hover:text-background transition-colors">Hair Collections</a></li>
                  <li><a href="/about-the-expert" className="text-background/70 hover:text-background transition-colors">About Expert</a></li>
                  <li><a href="/quality-promise" className="text-background/70 hover:text-background transition-colors">Quality Promise</a></li>
                  <li><a href="/consultation-process" className="text-background/70 hover:text-background transition-colors">Consultation</a></li>
                  <li><a href="/client-success-stories" className="text-background/70 hover:text-background transition-colors">Success Stories</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Get in Touch</h4>
                <div className="space-y-2 text-sm text-background/70">
                  <p>WhatsApp: +1 (234) 567-8900</p>
                  <p>Email: hello@haircraftpro.com</p>
                  <p>Hours: Mon-Sat 9AM-7PM EST</p>
                </div>
              </div>
            </div>

            <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
              <p>&copy; {new Date()?.getFullYear()} HairCraft Pro. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;