import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after 3 seconds
      setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 3000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your premium hair extensions. Could you help me get started with a consultation?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 w-64 bg-card border border-border rounded-lg shadow-elevation p-4 animate-in slide-in-from-bottom-2">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={18} color="white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground mb-1">
                  Need help choosing?
                </p>
                <p className="text-xs text-muted-foreground">
                  Chat with our hair expert for personalized recommendations!
                </p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={14} />
              </button>
            </div>
            {/* Arrow */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border"></div>
          </div>
        )}

        {/* Main Button */}
        <Button
          variant="default"
          size="icon"
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground whatsapp-pulse shadow-elevation hover:shadow-primary transition-all duration-300 transform hover:scale-105"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>

        {/* Pulse Animation Rings */}
        <div className="absolute inset-0 rounded-full bg-whatsapp/20 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-whatsapp/10 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Mobile Bottom Bar (for smaller screens) */}
      <div className="fixed bottom-0 left-0 right-0 bg-whatsapp p-4 z-40 sm:hidden">
        <Button
          variant="default"
          onClick={handleWhatsAppClick}
          iconName="MessageCircle"
          iconPosition="left"
          className="w-full bg-white text-whatsapp hover:bg-gray-50 font-semibold"
        >
          Start Your Hair Consultation
        </Button>
      </div>
    </>
  );
};

export default WhatsAppFloat;