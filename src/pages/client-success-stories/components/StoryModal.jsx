import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryModal = ({ story, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !story) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === story?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? story?.images?.length - 1 : prev - 1
    );
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`Check out this amazing hair transformation by HairCraft Pro! ${story?.clientName}'s story is truly inspiring. I'd love to discuss similar options for my hair.`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-xl shadow-elevation max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              {story?.clientName}'s Transformation
            </h2>
            <p className="text-muted-foreground">{story?.transformationType}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src={story?.images?.[currentImageIndex]}
                  alt={`${story?.clientName} transformation - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {story?.images?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {story?.images?.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {story?.images?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? 'border-primary' :'border-transparent hover:border-border'
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

            {/* Story Details */}
            <div>
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1 text-warning">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < story?.rating ? 'fill-current' : 'text-muted-foreground'}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {story?.rating}/5 stars
                </span>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Hair Type</p>
                  <p className="font-medium">{story?.hairType}</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Duration</p>
                  <p className="font-medium">{story?.duration}</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Age</p>
                  <p className="font-medium">{story?.age}</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">{story?.location}</p>
                </div>
              </div>

              {/* Full Testimonial */}
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold mb-3">Client's Story</h3>
                <div className="bg-muted rounded-lg p-4">
                  <Icon name="Quote" size={20} className="text-primary mb-2" />
                  <p className="text-foreground leading-relaxed mb-3">
                    {story?.fullTestimonial}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — {story?.clientName}
                  </p>
                </div>
              </div>

              {/* Journey Timeline */}
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold mb-3">Transformation Journey</h3>
                <div className="space-y-3">
                  {story?.journey?.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-medium">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{step?.title}</p>
                        <p className="text-xs text-muted-foreground">{step?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold mb-3">Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {story?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  onClick={handleWhatsAppShare}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                >
                  Get Similar Results
                </Button>
                <Button
                  variant="outline"
                  iconName="Share2"
                  iconPosition="left"
                >
                  Share Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;