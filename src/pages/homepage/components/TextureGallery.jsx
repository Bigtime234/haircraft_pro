import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TextureGallery = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const hairCategories = [
    {
      id: 1,
      name: "Brazilian Straight",
      description: "Silky smooth texture with natural shine",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop",
      lengths: ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
      colors: ["Natural Black", "Dark Brown", "Medium Brown", "Light Brown"],
      price: "From $180",
      popular: true
    },
    {
      id: 2,
      name: "Peruvian Curly",
      description: "Voluminous curls with natural bounce",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpg?w=400&h=500&fit=crop",
      lengths: ["12\"", "14\"", "16\"", "18\"", "20\"", "22\""],
      colors: ["Jet Black", "Natural Brown", "Honey Brown", "Auburn"],
      price: "From $220",
      popular: false
    },
    {
      id: 3,
      name: "Indian Wave",
      description: "Natural waves with soft texture",
      image: "https://images.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg?w=400&h=500&fit=crop",
      lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
      colors: ["Natural Black", "Dark Brown", "Chocolate Brown"],
      price: "From $200",
      popular: false
    },
    {
      id: 4,
      name: "Malaysian Body Wave",
      description: "Luxurious body waves with natural movement",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
      lengths: ["16\"", "18\"", "20\"", "22\"", "24\"", "26\""],
      colors: ["Natural Black", "Off Black", "Dark Brown", "Medium Brown"],
      price: "From $240",
      popular: true
    }
  ];

  const handleWhatsAppInquiry = (categoryName) => {
    const message = encodeURIComponent(`Hi! I'm interested in learning more about your ${categoryName} hair extensions. Could you provide more details about pricing and availability?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>Premium Hair Collections</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Discover Your Perfect Texture
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From silky straight to voluminous curls, explore our curated collection of premium human hair extensions sourced from the finest regions worldwide.
          </p>
        </div>

        {/* Hair Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {hairCategories?.map((category) => (
            <div
              key={category?.id}
              className="group relative bg-card rounded-2xl shadow-primary hover:shadow-elevation transition-all duration-300 overflow-hidden transform-hover"
              onMouseEnter={() => setHoveredCategory(category?.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Popular Badge */}
              {category?.popular && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Popular
                </div>
              )}

              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={category?.image}
                  alt={category?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredCategory === category?.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="space-y-2 mb-4">
                      <div>
                        <p className="text-xs font-medium mb-1">Available Lengths:</p>
                        <div className="flex flex-wrap gap-1">
                          {category?.lengths?.slice(0, 4)?.map((length) => (
                            <span key={length} className="bg-white/20 px-2 py-1 rounded text-xs">
                              {length}
                            </span>
                          ))}
                          {category?.lengths?.length > 4 && (
                            <span className="bg-white/20 px-2 py-1 rounded text-xs">
                              +{category?.lengths?.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium mb-1">Popular Colors:</p>
                        <div className="flex flex-wrap gap-1">
                          {category?.colors?.slice(0, 2)?.map((color) => (
                            <span key={color} className="bg-white/20 px-2 py-1 rounded text-xs">
                              {color}
                            </span>
                          ))}
                          <span className="bg-white/20 px-2 py-1 rounded text-xs">
                            +{category?.colors?.length - 2} more
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleWhatsAppInquiry(category?.name)}
                      iconName="MessageCircle"
                      iconPosition="left"
                      className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                    >
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-xl font-semibold text-card-foreground">
                    {category?.name}
                  </h3>
                  <span className="text-primary font-semibold text-sm">
                    {category?.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {category?.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{category?.lengths?.length} lengths</span>
                    <span>{category?.colors?.length} colors</span>
                  </div>
                  
                  <Icon name="ArrowRight" size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/hair-collections">
            <Button variant="outline" size="lg" iconName="Eye" iconPosition="left">
              View Complete Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TextureGallery;