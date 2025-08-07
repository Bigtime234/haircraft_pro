import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingCard = ({ pricing, isPopular = false }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${pricing?.name} consultation package. Can you provide more details about availability and booking?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className={`relative bg-card border rounded-xl p-6 transition-all duration-300 ${
      isPopular 
        ? 'border-primary shadow-primary scale-105' 
        : 'border-border hover:border-primary/30 hover:shadow-primary'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
          {pricing?.name}
        </h3>
        <div className="mb-3">
          <span className="text-3xl font-bold text-primary">{pricing?.price}</span>
          {pricing?.originalPrice && (
            <span className="text-lg text-muted-foreground line-through ml-2">
              {pricing?.originalPrice}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm">
          {pricing?.description}
        </p>
      </div>
      <div className="space-y-3 mb-6">
        {pricing?.features?.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon 
              name={feature?.included ? "Check" : "X"} 
              size={16} 
              color={feature?.included ? "var(--color-success)" : "var(--color-muted-foreground)"} 
              className="mt-0.5 flex-shrink-0"
            />
            <span className={`text-sm ${
              feature?.included ? 'text-card-foreground' : 'text-muted-foreground'
            }`}>
              {feature?.text}
            </span>
          </div>
        ))}
      </div>
      {pricing?.highlights && (
        <div className="mb-6 p-4 bg-accent/5 rounded-lg">
          <h4 className="font-medium text-card-foreground text-sm mb-2">
            Special Includes:
          </h4>
          <ul className="space-y-1">
            {pricing?.highlights?.map((highlight, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm">
                <Icon name="Star" size={14} color="var(--color-secondary)" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Button
        variant={isPopular ? "default" : "outline"}
        fullWidth
        onClick={handleWhatsAppClick}
        iconName="MessageCircle"
        iconPosition="left"
        className={isPopular ? "bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" : ""}
      >
        Book Consultation
      </Button>
      {pricing?.note && (
        <p className="text-xs text-muted-foreground text-center mt-3">
          {pricing?.note}
        </p>
      )}
    </div>
  );
};

export default PricingCard;