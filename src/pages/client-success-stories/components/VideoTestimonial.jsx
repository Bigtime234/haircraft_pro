import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const VideoTestimonial = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-card rounded-xl shadow-primary overflow-hidden">
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-muted">
        {!isPlaying ? (
          <>
            <Image
              src={video?.thumbnail}
              alt={`${video?.clientName} video testimonial`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground transition-colors shadow-elevation"
              >
                <Icon name="Play" size={24} className="ml-1" />
              </button>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
              {video?.duration}
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center">
              <Icon name="Play" size={48} className="text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Video would play here</p>
              <p className="text-xs text-muted-foreground mt-1">
                Mock implementation - {video?.duration}
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Video Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-heading text-lg font-semibold text-foreground">
            {video?.clientName}
          </h4>
          <div className="flex items-center space-x-1 text-warning">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={12}
                className={i < video?.rating ? 'fill-current' : 'text-muted-foreground'}
              />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-3">
          {video?.description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{video?.transformationType}</span>
          <span>{video?.date}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;