import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import CredentialsSection from './components/CredentialsSection';
import BehindScenesSection from './components/BehindScenesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ConsultationApproachSection from './components/ConsultationApproachSection';

const AboutTheExpert = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Sarah! I'd love to learn more about your premium hair extensions and schedule a consultation. I'm interested in your personalized approach to hair transformations.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Sarah Martinez - Hair Extension Expert | HairCraft Pro</title>
        <meta name="description" content="Meet Sarah Martinez, certified hair extension expert with 8+ years of experience. Discover her journey, credentials, and personalized approach to premium hair transformations." />
        <meta name="keywords" content="hair extension expert, Sarah Martinez, certified hair specialist, premium hair extensions, hair transformation expert" />
        <meta property="og:title" content="About Sarah Martinez - Hair Extension Expert | HairCraft Pro" />
        <meta property="og:description" content="Meet Sarah Martinez, your trusted hair extension expert with 8+ years of experience and 2,500+ satisfied clients." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-the-expert" />
      </Helmet>

      <Header />
      
      <main>
        <HeroSection onWhatsAppClick={handleWhatsAppClick} />
        <StorySection />
        <CredentialsSection />
        <BehindScenesSection />
        <TestimonialsSection />
        <ConsultationApproachSection />
      </main>
    </div>
  );
};

export default AboutTheExpert;