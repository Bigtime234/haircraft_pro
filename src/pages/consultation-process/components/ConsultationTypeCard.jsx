import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationTypeCard = ({ type, onSelect }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in scheduling a ${type?.name?.toLowerCase()} consultation. ${type?.whatsappMessage}`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-primary transition-all duration-300">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name={type?.icon} size={32} color="white" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
          {type?.name}
        </h3>
        <p className="text-muted-foreground text-sm">
          {type?.description}
        </p>
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Duration:</span>
          <span className="font-medium text-card-foreground">{type?.duration}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Price:</span>
          <span className="font-semibold text-primary">{type?.price}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Best for:</span>
          <span className="font-medium text-card-foreground">{type?.bestFor}</span>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        <h4 className="font-medium text-card-foreground text-sm">What's Included:</h4>
        <ul className="space-y-2">
          {type?.includes?.map((item, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <Icon name="Check" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        variant="default"
        fullWidth
        onClick={handleWhatsAppClick}
        iconName="MessageCircle"
        iconPosition="left"
        className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
      >
        Book {type?.name}
      </Button>
    </div>
  );
};

export default ConsultationTypeCard;