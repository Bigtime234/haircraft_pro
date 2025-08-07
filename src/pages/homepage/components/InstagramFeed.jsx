import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InstagramFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
      caption: "Brazilian straight perfection ✨ 22-inch transformation that speaks for itself! #HairCraftPro #BrazilianHair",
      likes: 234,
      comments: 18,
      timestamp: "2 hours ago",
      hashtags: ["#HairExtensions", "#BrazilianHair", "#HairTransformation"]
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpg?w=400&h=400&fit=crop",
      caption: "Curly hair goals achieved! 🌟 Peruvian curly extensions bringing the volume and bounce our client dreamed of.",
      likes: 189,
      comments: 12,
      timestamp: "5 hours ago",
      hashtags: ["#CurlyHair", "#PeruvianHair", "#VolumeGoals"]
    },
    {
      id: 3,
      image: "https://images.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg?w=400&h=400&fit=crop",
      caption: "Indian wave magic ✨ The perfect blend of natural texture and added length. Swipe to see the before!",
      likes: 156,
      comments: 9,
      timestamp: "8 hours ago",
      hashtags: ["#IndianHair", "#WaveHair", "#NaturalTexture"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop",
      caption: "Behind the scenes: Quality checking every bundle before it reaches our clients 💎 #QualityFirst",
      likes: 98,
      comments: 7,
      timestamp: "12 hours ago",
      hashtags: ["#BehindTheScenes", "#QualityControl", "#PremiumHair"]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=400&h=400&fit=crop",
      caption: "Styling session in progress! 💫 Teaching our client how to maintain her new Malaysian body wave extensions.",
      likes: 167,
      comments: 15,
      timestamp: "1 day ago",
      hashtags: ["#StylingTips", "#MalaysianHair", "#HairCare"]
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?w=400&h=400&fit=crop",
      caption: "Color matching perfection! 🎨 Finding the exact shade to blend seamlessly with natural hair.",
      likes: 143,
      comments: 11,
      timestamp: "1 day ago",
      hashtags: ["#ColorMatching", "#SeamlessBlend", "#HairColor"]
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://instagram.com/haircraftpro', '_blank');
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Instagram" size={16} />
            <span>Follow Our Journey</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Daily Hair Inspiration
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Get inspired by our latest transformations, styling tips, and behind-the-scenes content. Follow us for daily hair inspiration!
          </p>

          <Button
            variant="outline"
            onClick={handleInstagramClick}
            iconName="Instagram"
            iconPosition="left"
            className="border-pink-500 text-pink-600 hover:bg-pink-50"
          >
            Follow @HairCraftPro
          </Button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts?.map((post) => (
            <div
              key={post?.id}
              className="group relative aspect-square bg-card rounded-lg overflow-hidden shadow-primary hover:shadow-elevation transition-all duration-300 cursor-pointer transform-hover"
              onClick={() => handlePostClick(post)}
            >
              <Image
                src={post?.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{post?.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{post?.comments}</span>
                    </div>
                  </div>
                  <p className="text-xs">{post?.timestamp}</p>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center opacity-80">
                <Icon name="Instagram" size={12} color="white" />
              </div>
            </div>
          ))}
        </div>

        {/* Hashtags */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Popular hashtags:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['#HairCraftPro', '#HairExtensions', '#HairTransformation', '#PremiumHair', '#BrazilianHair', '#PeruvianHair', '#IndianHair', '#MalaysianHair']?.map((hashtag) => (
              <span
                key={hashtag}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary/20 transition-colors cursor-pointer"
              >
                {hashtag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-card rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e?.stopPropagation()}>
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
              
              <Image
                src={selectedPost?.image}
                alt="Instagram post"
                className="w-full aspect-square object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={18} className="text-red-500" />
                    <span className="font-medium">{selectedPost?.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageCircle" size={18} className="text-blue-500" />
                    <span className="font-medium">{selectedPost?.comments}</span>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{selectedPost?.timestamp}</span>
              </div>
              
              <p className="text-card-foreground mb-4 leading-relaxed">
                {selectedPost?.caption}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {selectedPost?.hashtags?.map((hashtag) => (
                  <span
                    key={hashtag}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramFeed;