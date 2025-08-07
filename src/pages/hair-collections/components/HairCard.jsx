import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HairCard = ({ hair, onQuickView, onAddToWishlist, isWishlisted }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${hair?.name} - ${hair?.origin} ${hair?.texture} hair, ${hair?.length}" length. Could you please provide pricing and availability details?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === hair?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? hair?.images?.length - 1 : prev - 1
    );
  };

  const getProcessingBadgeColor = (level) => {
    switch (level) {
      case 'virgin': return 'bg-success text-success-foreground';
      case 'remy': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden shadow-primary hover:shadow-elevation transition-all duration-300 transform-hover">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={hair?.images?.[currentImageIndex]}
          alt={`${hair?.name} - ${hair?.texture} hair`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {hair?.images?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {hair?.images?.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {hair?.images?.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProcessingBadgeColor(hair?.processing)}`}>
            {hair?.processing?.charAt(0)?.toUpperCase() + hair?.processing?.slice(1)}
          </span>
          {hair?.isNew && (
            <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e?.stopPropagation();
            onAddToWishlist(hair?.id);
          }}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <Icon 
            name={isWishlisted ? "Heart" : "Heart"} 
            size={16} 
            className={isWishlisted ? "text-red-500 fill-current" : "text-muted-foreground"} 
          />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={(e) => {
              e?.stopPropagation();
              onQuickView(hair);
            }}
            iconName="Eye"
            iconPosition="left"
          >
            Quick View
          </Button>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="mb-3">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
            {hair?.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {hair?.origin} • {hair?.texture} • {hair?.length}"
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div>
            <span className="text-muted-foreground">Weight:</span>
            <span className="ml-1 font-medium text-foreground">{hair?.weight}g</span>
          </div>
          <div>
            <span className="text-muted-foreground">Density:</span>
            <span className="ml-1 font-medium text-foreground">{hair?.density}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Bundles:</span>
            <span className="ml-1 font-medium text-foreground">{hair?.recommendedBundles}</span>
          </div>
          <div className="flex items-center">
            <span className="text-muted-foreground">Rating:</span>
            <div className="ml-1 flex items-center">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={12}
                  className={i < Math.floor(hair?.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                />
              ))}
              <span className="ml-1 text-xs text-muted-foreground">({hair?.reviews})</span>
            </div>
          </div>
        </div>

        {/* Styling Versatility */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Styling Versatility</span>
            <span className="text-sm font-medium text-foreground">{hair?.versatilityRating}/10</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${hair?.versatilityRating * 10}%` }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            onClick={handleWhatsAppClick}
            iconName="MessageCircle"
            iconPosition="left"
            className="flex-1 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
          >
            Get Pricing
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e?.stopPropagation();
              onQuickView(hair);
            }}
            iconName="Eye"
            className="px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default HairCard;