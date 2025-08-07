import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuickViewModal = ({ hair, isOpen, onClose, onAddToWishlist, isWishlisted }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('details');

  if (!isOpen || !hair) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${hair?.name} - ${hair?.origin} ${hair?.texture} hair, ${hair?.length}" length. Could you please provide detailed pricing, availability, and care instructions?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === hair?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? hair?.images?.length - 1 : prev - 1
    );
  };

  const tabs = [
    { id: 'details', label: 'Details', icon: 'Info' },
    { id: 'care', label: 'Care Guide', icon: 'Heart' },
    { id: 'styling', label: 'Styling Tips', icon: 'Sparkles' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              {hair?.name}
            </h2>
            <p className="text-muted-foreground">
              {hair?.origin} • {hair?.texture} • {hair?.length}"
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Image Gallery */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] relative bg-muted">
              <Image
                src={hair?.images?.[currentImageIndex]}
                alt={`${hair?.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {hair?.images?.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </>
              )}

              {/* Zoom Button */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                <Icon name="ZoomIn" size={20} className="text-foreground" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            {hair?.images?.length > 1 && (
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {hair?.images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab?.id
                      ? 'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {activeTab === 'details' && (
                <div className="space-y-6">
                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Origin</span>
                        <p className="font-medium text-foreground">{hair?.origin}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Texture</span>
                        <p className="font-medium text-foreground">{hair?.texture}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Length</span>
                        <p className="font-medium text-foreground">{hair?.length}"</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Weight</span>
                        <p className="font-medium text-foreground">{hair?.weight}g</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Processing</span>
                        <p className="font-medium text-foreground capitalize">{hair?.processing}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Density</span>
                        <p className="font-medium text-foreground">{hair?.density}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Recommended Bundles</span>
                        <p className="font-medium text-foreground">{hair?.recommendedBundles}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Color</span>
                        <p className="font-medium text-foreground">{hair?.color}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Description</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {hair?.description}
                    </p>
                  </div>

                  {/* Versatility Rating */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">Styling Versatility</span>
                      <span className="text-sm text-muted-foreground">{hair?.versatilityRating}/10</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-primary h-3 rounded-full transition-all duration-300"
                        style={{ width: `${hair?.versatilityRating * 10}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'care' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Icon name="Droplets" size={16} className="mr-2" />
                      Washing Instructions
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Wash with sulfate-free shampoo 1-2 times per week</li>
                      <li>• Use lukewarm water to prevent tangling</li>
                      <li>• Apply conditioner from mid-length to ends</li>
                      <li>• Rinse thoroughly with cool water to seal cuticles</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Icon name="Wind" size={16} className="mr-2" />
                      Drying & Styling
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Gently squeeze out excess water with a microfiber towel</li>
                      <li>• Apply heat protectant before using styling tools</li>
                      <li>• Air dry when possible or use low heat settings</li>
                      <li>• Use wide-tooth comb on wet hair to prevent breakage</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Icon name="Moon" size={16} className="mr-2" />
                      Nighttime Care
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Braid or loosely tie hair before sleeping</li>
                      <li>• Use a silk or satin pillowcase</li>
                      <li>• Apply leave-in conditioner to ends</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'styling' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Recommended Styles</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-medium text-foreground mb-1">Beach Waves</h5>
                        <p className="text-muted-foreground">Perfect for casual, effortless looks</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-medium text-foreground mb-1">Sleek Straight</h5>
                        <p className="text-muted-foreground">Professional and polished appearance</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-medium text-foreground mb-1">Voluminous Curls</h5>
                        <p className="text-muted-foreground">Glamorous for special occasions</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h5 className="font-medium text-foreground mb-1">Half-Up Styles</h5>
                        <p className="text-muted-foreground">Versatile for any occasion</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Styling Tips</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start">
                        <Icon name="Zap" size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                        Use heat protectant spray before styling with hot tools
                      </li>
                      <li className="flex items-start">
                        <Icon name="Palette" size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                        This hair can be colored up to 2 shades lighter safely
                      </li>
                      <li className="flex items-start">
                        <Icon name="Clock" size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                        Allow 48 hours between chemical treatments
                      </li>
                      <li className="flex items-start">
                        <Icon name="Scissors" size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                        Trim ends every 6-8 weeks to maintain healthy appearance
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-border">
              <div className="flex space-x-3">
                <Button
                  variant="default"
                  onClick={handleWhatsAppClick}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="flex-1 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                >
                  WhatsApp for Pricing
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onAddToWishlist(hair?.id)}
                  iconName={isWishlisted ? "Heart" : "Heart"}
                  className={isWishlisted ? "text-red-500" : ""}
                >
                  {isWishlisted ? "Saved" : "Save"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;