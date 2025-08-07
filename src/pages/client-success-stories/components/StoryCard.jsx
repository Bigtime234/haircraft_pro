import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="bg-card rounded-xl shadow-primary overflow-hidden transform-hover">
      {/* Image Gallery */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={story?.images?.[currentImageIndex]}
          alt={`${story?.clientName} transformation - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Image Navigation */}
        {story?.images?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {story?.images?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Transformation Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {story?.transformationType}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {story?.clientName}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < story?.rating ? 'fill-current' : 'text-muted-foreground'}
              />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {story?.testimonial}
        </p>

        {/* Key Details */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-2 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground">Hair Type</p>
            <p className="font-medium text-sm">{story?.hairType}</p>
          </div>
          <div className="text-center p-2 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="font-medium text-sm">{story?.duration}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {story?.tags?.slice(0, 3)?.map((tag, index) => (
            <span
              key={index}
              className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
          {story?.tags?.length > 3 && (
            <span className="text-muted-foreground text-xs">
              +{story?.tags?.length - 3} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          fullWidth
          onClick={() => onViewDetails(story)}
          iconName="Eye"
          iconPosition="left"
        >
          View Full Story
        </Button>
      </div>
    </div>
  );
};

export default StoryCard;