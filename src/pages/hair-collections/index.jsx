import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import Icon from '../../components/AppIcon';
import FilterSidebar from './components/FilterSidebar';
import HairCard from './components/HairCard';
import QuickViewModal from './components/QuickViewModal';
import ComparisonModal from './components/ComparisonModal';
import WishlistSidebar from './components/WishlistSidebar';

const HairCollections = () => {
  const [filters, setFilters] = useState({
    origin: 'all',
    texture: 'all',
    length: 'all',
    priceRanges: [],
    processingLevels: [],
    densityLevels: []
  });

  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedHair, setSelectedHair] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [comparisonItems, setComparisonItems] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // Mock hair data
  const hairCollections = [
    {
      id: 1,
      name: "Luxury Brazilian Straight",
      origin: "brazilian",
      texture: "straight",
      length: 22,
      weight: 100,
      processing: "virgin",
      density: "150%",
      recommendedBundles: "3-4 bundles",
      color: "Natural Black",
      rating: 4.9,
      reviews: 127,
      versatilityRating: 9,
      isNew: true,
      images: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop"
      ],
      description: `Premium Brazilian virgin hair with natural shine and silky texture. This hair has never been chemically processed, maintaining its natural cuticle alignment for maximum longevity and styling versatility. Perfect for achieving sleek, professional looks or adding volume and length.`
    },
    {
      id: 2,
      name: "Peruvian Body Wave",
      origin: "peruvian",
      texture: "wavy",
      length: 18,
      weight: 95,
      processing: "virgin",
      density: "130%",
      recommendedBundles: "2-3 bundles",
      color: "Dark Brown",
      rating: 4.8,
      reviews: 89,
      versatilityRating: 8,
      isNew: false,
      images: [
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1595475038665-8d7707d96c90?w=400&h=500&fit=crop"
      ],
      description: `Beautiful Peruvian body wave hair with natural bounce and movement. The soft wave pattern creates effortless volume while maintaining a natural appearance. Ideal for those seeking a balance between straight and curly textures.`
    },
    {
      id: 3,
      name: "Indian Deep Curly",
      origin: "indian",
      texture: "curly",
      length: 16,
      weight: 110,
      processing: "remy",
      density: "180%",
      recommendedBundles: "2-3 bundles",
      color: "Natural Black",
      rating: 4.7,
      reviews: 156,
      versatilityRating: 7,
      isNew: false,
      images: [
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop"
      ],
      description: `Luxurious Indian deep curly hair with defined curl patterns and natural volume. This Remy hair maintains cuticle alignment in one direction, ensuring minimal tangling and maximum durability. Perfect for creating bold, voluminous styles.`
    },
    {
      id: 4,
      name: "Malaysian Kinky Straight",
      origin: "malaysian",
      texture: "kinky",
      length: 20,
      weight: 105,
      processing: "virgin",
      density: "160%",
      recommendedBundles: "3-4 bundles",
      color: "Natural Brown",
      rating: 4.6,
      reviews: 73,
      versatilityRating: 6,
      isNew: true,
      images: [
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop"
      ],
      description: `Premium Malaysian kinky straight hair that mimics natural African American hair texture. Virgin quality ensures longevity and styling flexibility. Ideal for seamless blending with relaxed or naturally straight hair.`
    },
    {
      id: 5,
      name: "Brazilian Loose Wave",
      origin: "brazilian",
      texture: "wavy",
      length: 24,
      weight: 120,
      processing: "virgin",
      density: "150%",
      recommendedBundles: "3-4 bundles",
      color: "Medium Brown",
      rating: 4.9,
      reviews: 203,
      versatilityRating: 9,
      isNew: false,
      images: [
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1595475038665-8d7707d96c90?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop"
      ],
      description: `Stunning Brazilian loose wave hair with natural movement and shine. The gentle wave pattern provides versatility for both casual and formal styling. Virgin quality ensures the hair can be colored and styled to your preference.`
    },
    {
      id: 6,
      name: "Peruvian Straight",
      origin: "peruvian",
      texture: "straight",
      length: 14,
      weight: 85,
      processing: "processed",
      density: "130%",
      recommendedBundles: "2-3 bundles",
      color: "Jet Black",
      rating: 4.5,
      reviews: 92,
      versatilityRating: 8,
      isNew: false,
      images: [
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop"
      ],
      description: `Affordable Peruvian straight hair that offers great value without compromising quality. Lightly processed to achieve consistent texture while maintaining natural appearance. Perfect for first-time extension users.`
    }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'length-short', label: 'Length: Short to Long' },
    { value: 'length-long', label: 'Length: Long to Short' }
  ];

  // Filter and sort hair collections
  const filteredAndSortedHair = useMemo(() => {
    let filtered = hairCollections?.filter(hair => {
      // Origin filter
      if (filters?.origin !== 'all' && hair?.origin !== filters?.origin) return false;
      
      // Texture filter
      if (filters?.texture !== 'all' && hair?.texture !== filters?.texture) return false;
      
      // Length filter
      if (filters?.length !== 'all') {
        const [min, max] = filters?.length?.split('-')?.map(Number);
        if (hair?.length < min || hair?.length > max) return false;
      }
      
      // Price range filter (mock implementation)
      if (filters?.priceRanges?.length > 0) {
        // Mock price calculation based on length and processing
        const mockPrice = hair?.length * 15 + (hair?.processing === 'virgin' ? 100 : hair?.processing === 'remy' ? 50 : 0);
        const inRange = filters?.priceRanges?.some(range => {
          if (range === 'budget') return mockPrice <= 300;
          if (range === 'premium') return mockPrice > 300 && mockPrice <= 600;
          if (range === 'luxury') return mockPrice > 600;
          return false;
        });
        if (!inRange) return false;
      }
      
      // Processing level filter
      if (filters?.processingLevels?.length > 0 && !filters?.processingLevels?.includes(hair?.processing)) return false;
      
      // Density filter (mock implementation)
      if (filters?.densityLevels?.length > 0) {
        const densityValue = parseInt(hair?.density);
        const inRange = filters?.densityLevels?.some(level => {
          if (level === 'light') return densityValue <= 130;
          if (level === 'medium') return densityValue > 130 && densityValue <= 160;
          if (level === 'heavy') return densityValue > 160;
          return false;
        });
        if (!inRange) return false;
      }
      
      return true;
    });

    // Sort filtered results
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b?.rating - a?.rating;
        case 'newest':
          return b?.isNew - a?.isNew;
        case 'length-short':
          return a?.length - b?.length;
        case 'length-long':
          return b?.length - a?.length;
        case 'price-low':
          // Mock price sorting
          const priceA = a?.length * 15 + (a?.processing === 'virgin' ? 100 : a?.processing === 'remy' ? 50 : 0);
          const priceB = b?.length * 15 + (b?.processing === 'virgin' ? 100 : b?.processing === 'remy' ? 50 : 0);
          return priceA - priceB;
        case 'price-high':
          const priceA2 = a?.length * 15 + (a?.processing === 'virgin' ? 100 : a?.processing === 'remy' ? 50 : 0);
          const priceB2 = b?.length * 15 + (b?.processing === 'virgin' ? 100 : b?.processing === 'remy' ? 50 : 0);
          return priceB2 - priceA2;
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      origin: 'all',
      texture: 'all',
      length: 'all',
      priceRanges: [],
      processingLevels: [],
      densityLevels: []
    });
  };

  const handleQuickView = (hair) => {
    setSelectedHair(hair);
    setIsQuickViewOpen(true);
  };

  const handleAddToWishlist = (hairId) => {
    const hair = hairCollections?.find(h => h?.id === hairId);
    if (hair) {
      setWishlistItems(prev => {
        const exists = prev?.find(item => item?.id === hairId);
        if (exists) {
          return prev?.filter(item => item?.id !== hairId);
        } else {
          return [...prev, hair];
        }
      });
    }
  };

  const handleRemoveFromWishlist = (hairId) => {
    setWishlistItems(prev => prev?.filter(item => item?.id !== hairId));
  };

  const handleAddToComparison = (hair) => {
    if (comparisonItems?.length >= 3) {
      alert('You can compare up to 3 items at a time');
      return;
    }
    
    setComparisonItems(prev => {
      const exists = prev?.find(item => item?.id === hair?.id);
      if (!exists) {
        return [...prev, hair];
      }
      return prev;
    });
  };

  const handleRemoveFromComparison = (hairId) => {
    setComparisonItems(prev => prev?.filter(item => item?.id !== hairId));
  };

  const handleShareWishlist = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Hair Extension Wishlist',
        text: 'Check out my hair extension wishlist from HairCraft Pro',
        url: window.location?.href
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard?.writeText(window.location?.href);
      alert('Wishlist URL copied to clipboard!');
    }
  };

  useEffect(() => {
    document.title = 'Hair Collections - HairCraft Pro';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
              Premium Hair Collections
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our curated selection of premium hair extensions from the world's finest sources. 
              Each piece is carefully selected for quality, authenticity, and styling versatility.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              isOpen={true}
              onClose={() => {}}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center space-x-4">
                {/* Mobile Filter Button */}
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(true)}
                  iconName="Filter"
                  iconPosition="left"
                  className="lg:hidden"
                >
                  Filters
                </Button>

                {/* Results Count */}
                <p className="text-muted-foreground">
                  {filteredAndSortedHair?.length} {filteredAndSortedHair?.length === 1 ? 'result' : 'results'}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <Select
                  options={sortOptions}
                  value={sortBy}
                  onChange={setSortBy}
                  placeholder="Sort by"
                  className="w-48"
                />

                {/* View Mode Toggle */}
                <div className="flex items-center bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon name="Grid3X3" size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon name="List" size={16} />
                  </button>
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="outline"
                  onClick={() => setIsWishlistOpen(true)}
                  iconName="Heart"
                  iconPosition="left"
                  className="relative"
                >
                  Wishlist
                  {wishlistItems?.length > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {wishlistItems?.length}
                    </span>
                  )}
                </Button>
              </div>
            </div>

            {/* Comparison Bar */}
            {comparisonItems?.length > 0 && (
              <div className="mb-6 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="GitCompare" size={20} className="text-secondary" />
                    <span className="font-medium text-foreground">
                      {comparisonItems?.length} items selected for comparison
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setIsComparisonOpen(true)}
                      iconName="Eye"
                      iconPosition="left"
                    >
                      Compare
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setComparisonItems([])}
                      iconName="X"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Hair Grid */}
            {filteredAndSortedHair?.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-muted-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  No hair extensions found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' ?'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' :'grid-cols-1'
              }`}>
                {filteredAndSortedHair?.map((hair) => (
                  <div key={hair?.id} className="relative">
                    <HairCard
                      hair={hair}
                      onQuickView={handleQuickView}
                      onAddToWishlist={handleAddToWishlist}
                      isWishlisted={wishlistItems?.some(item => item?.id === hair?.id)}
                    />
                    
                    {/* Comparison Checkbox */}
                    <div className="absolute top-2 left-2">
                      <label className="flex items-center space-x-2 bg-white/90 rounded-lg px-2 py-1 text-xs">
                        <input
                          type="checkbox"
                          checked={comparisonItems?.some(item => item?.id === hair?.id)}
                          onChange={(e) => {
                            if (e?.target?.checked) {
                              handleAddToComparison(hair);
                            } else {
                              handleRemoveFromComparison(hair?.id);
                            }
                          }}
                          className="w-3 h-3 text-primary"
                        />
                        <span className="text-foreground">Compare</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredAndSortedHair?.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Plus"
                  iconPosition="left"
                >
                  Load More Collections
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Educational Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Hair Extension Guide
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding hair terminology helps you make the best choice for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                term: "Virgin Hair",
                definition: "Hair that has never been chemically processed, maintaining its natural cuticle structure for maximum longevity and styling versatility."
              },
              {
                term: "Remy Hair",
                definition: "Hair collected with cuticles aligned in the same direction, preventing tangling and ensuring smooth, natural movement."
              },
              {
                term: "Double Drawn",
                definition: "Hair where shorter strands are removed, creating uniform thickness from root to tip for fuller, more voluminous results."
              },
              {
                term: "Cuticle Aligned",
                definition: "Hair processed to maintain the natural cuticle direction, reducing friction and tangling while preserving shine and softness."
              }
            ]?.map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {item?.term}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item?.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mobile Filter Sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
      {/* Quick View Modal */}
      <QuickViewModal
        hair={selectedHair}
        isOpen={isQuickViewOpen}
        onClose={() => {
          setIsQuickViewOpen(false);
          setSelectedHair(null);
        }}
        onAddToWishlist={handleAddToWishlist}
        isWishlisted={selectedHair ? wishlistItems?.some(item => item?.id === selectedHair?.id) : false}
      />
      {/* Comparison Modal */}
      <ComparisonModal
        comparisonItems={comparisonItems}
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        onRemoveFromComparison={handleRemoveFromComparison}
      />
      {/* Wishlist Sidebar */}
      <WishlistSidebar
        wishlistItems={wishlistItems}
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onShareWishlist={handleShareWishlist}
      />
    </div>
  );
};

export default HairCollections;