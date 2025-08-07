import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CareInstructions = () => {
  const [activeCategory, setActiveCategory] = useState('washing');

  const careCategories = {
    washing: {
      title: 'Washing & Cleansing',
      icon: 'Droplets',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
      instructions: [
        {
          step: 1,
          title: 'Pre-Wash Preparation',
          description: 'Gently detangle hair using a wide-tooth comb, starting from ends and working upward.',
          tips: ['Use detangling spray if needed', 'Never brush wet hair aggressively', 'Section hair for easier handling']
        },
        {
          step: 2,
          title: 'Shampooing Process',
          description: 'Use sulfate-free shampoo with lukewarm water, focusing on the scalp and roots.',
          tips: ['Avoid harsh rubbing motions', 'Rinse thoroughly to remove all residue', 'Use clarifying shampoo weekly']
        },
        {
          step: 3,
          title: 'Conditioning Treatment',
          description: 'Apply deep conditioner from mid-length to ends, avoiding the root area.',
          tips: ['Leave conditioner for 5-10 minutes', 'Use protein treatments monthly', 'Rinse with cool water to seal cuticles']
        }
      ]
    },
    styling: {
      title: 'Styling & Heat Protection',
      icon: 'Flame',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=400&h=300&fit=crop',
      instructions: [
        {
          step: 1,
          title: 'Heat Protection',
          description: 'Always apply heat protectant spray before using any heated styling tools.',
          tips: ['Use products with 400°F+ protection', 'Allow hair to dry 80% before heat styling', 'Never exceed 350°F on extensions']
        },
        {
          step: 2,
          title: 'Styling Techniques',
          description: 'Use gentle styling methods and avoid excessive tension on the hair.',
          tips: ['Opt for loose braids over tight styles', 'Use silk scrunchies to prevent breakage', 'Alternate styling patterns daily']
        },
        {
          step: 3,
          title: 'Overnight Care',
          description: 'Protect hair while sleeping using silk pillowcases or bonnets.',
          tips: ['Braid hair loosely before bed', 'Use silk or satin materials', 'Apply leave-in treatment for extra protection']
        }
      ]
    },
    maintenance: {
      title: 'Daily Maintenance',
      icon: 'Calendar',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      instructions: [
        {
          step: 1,
          title: 'Daily Brushing',
          description: 'Brush hair 2-3 times daily using a boar bristle brush or wide-tooth comb.',
          tips: ['Start from ends and work upward', 'Use detangling spray for stubborn knots', 'Be extra gentle with wet hair']
        },
        {
          step: 2,
          title: 'Moisture Balance',
          description: 'Maintain proper moisture levels with leave-in conditioners and oils.',
          tips: ['Use lightweight oils like argan or jojoba', 'Apply products to damp hair for better absorption', 'Focus on mid-lengths and ends']
        },
        {
          step: 3,
          title: 'Environmental Protection',
          description: 'Protect hair from sun, chlorine, and environmental pollutants.',
          tips: ['Wear UV protection sprays outdoors', 'Rinse hair after swimming', 'Use protective styles in harsh weather']
        }
      ]
    },
    storage: {
      title: 'Storage & Longevity',
      icon: 'Package',
      image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?w=400&h=300&fit=crop',
      instructions: [
        {
          step: 1,
          title: 'Proper Storage',
          description: 'Store unused hair in original packaging in a cool, dry place.',
          tips: ['Avoid direct sunlight and humidity', 'Use breathable storage bags', 'Keep away from heat sources']
        },
        {
          step: 2,
          title: 'Long-term Care',
          description: 'Perform deep conditioning treatments weekly to maintain hair health.',
          tips: ['Rotate between protein and moisture treatments', 'Trim ends every 6-8 weeks', 'Monitor for signs of wear or damage']
        },
        {
          step: 3,
          title: 'Quality Preservation',
          description: 'Follow manufacturer guidelines to maximize hair lifespan.',
          tips: ['Document care routine for consistency', 'Use recommended products only', 'Schedule professional maintenance if needed']
        }
      ]
    }
  };

  const productRecommendations = [
    {
      category: 'Shampoo',
      product: 'Sulfate-Free Moisturizing Shampoo',
      description: 'Gentle cleansing without stripping natural oils',
      price: '$24-32',
      features: ['Sulfate-free formula', 'Color-safe', 'Moisturizing agents']
    },
    {
      category: 'Conditioner',
      product: 'Deep Repair Conditioner',
      description: 'Intensive moisture and protein treatment',
      price: '$28-36',
      features: ['Protein complex', 'Deep moisturizing', 'Heat protection']
    },
    {
      category: 'Heat Protectant',
      product: 'Thermal Protection Spray',
      description: 'High-heat protection up to 450°F',
      price: '$18-25',
      features: ['450°F protection', 'Lightweight formula', 'Anti-frizz properties']
    },
    {
      category: 'Leave-in Treatment',
      product: 'Nourishing Hair Oil',
      description: 'Daily moisture and shine enhancement',
      price: '$22-30',
      features: ['Natural oils blend', 'UV protection', 'Frizz control']
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Hair Care Instructions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proper care ensures your premium hair extensions maintain their quality, longevity, and beautiful appearance. 
            Follow our expert-recommended care routine for best results.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {Object.entries(careCategories)?.map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    activeCategory === key
                      ? 'bg-primary text-primary-foreground border-primary shadow-primary'
                      : 'bg-card text-card-foreground border-border hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeCategory === key ? 'bg-primary-foreground/20' : 'bg-primary/10'
                    }`}>
                      <Icon 
                        name={category?.icon} 
                        size={18} 
                        className={activeCategory === key ? 'text-primary-foreground' : 'text-primary'} 
                      />
                    </div>
                    <span className={`font-medium text-sm ${
                      activeCategory === key ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {category?.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Care Instructions */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl overflow-hidden shadow-elevation">
              <div className="relative h-48">
                <Image
                  src={careCategories?.[activeCategory]?.image}
                  alt={`${careCategories?.[activeCategory]?.title} demonstration`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    {careCategories?.[activeCategory]?.title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-8">
                  {careCategories?.[activeCategory]?.instructions?.map((instruction, index) => (
                    <div key={index} className="flex space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">{instruction?.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{instruction?.title}</h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {instruction?.description}
                        </p>
                        <div className="space-y-2">
                          {instruction?.tips?.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start space-x-2">
                              <Icon name="Lightbulb" size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Recommendations */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Recommended Products
            </h3>
            <p className="text-muted-foreground">
              Professional-grade products specifically chosen for premium hair extensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productRecommendations?.map((product, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon name="Package" size={20} className="text-secondary" />
                  </div>
                  <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                    {product?.category}
                  </span>
                  <h4 className="font-semibold text-foreground mt-1">{product?.product}</h4>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product?.description}
                </p>

                <div className="space-y-2 mb-4">
                  {product?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-xs text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <span className="font-semibold text-primary">{product?.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Care Schedule */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-elevation">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
            Weekly Care Schedule
          </h3>

          <div className="grid md:grid-cols-7 gap-4">
            {[
              { day: 'Mon', tasks: ['Gentle brushing', 'Leave-in treatment'] },
              { day: 'Tue', tasks: ['Detangling', 'Moisture check'] },
              { day: 'Wed', tasks: ['Deep conditioning', 'Protein treatment'] },
              { day: 'Thu', tasks: ['Gentle styling', 'Heat protection'] },
              { day: 'Fri', tasks: ['Clarifying wash', 'Deep moisturizing'] },
              { day: 'Sat', tasks: ['Protective styling', 'Oil treatment'] },
              { day: 'Sun', tasks: ['Rest day', 'Gentle care only'] }
            ]?.map((schedule, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-primary mb-3">{schedule?.day}</h4>
                <div className="space-y-2">
                  {schedule?.tasks?.map((task, taskIndex) => (
                    <div key={taskIndex} className="text-xs text-muted-foreground bg-background rounded px-2 py-1">
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareInstructions;