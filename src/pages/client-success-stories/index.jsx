import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import StoryCard from './components/StoryCard';
import VideoTestimonial from './components/VideoTestimonial';
import TransformationFilter from './components/TransformationFilter';
import StoryModal from './components/StoryModal';
import SuccessMetrics from './components/SuccessMetrics';
import SocialProof from './components/SocialProof';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ClientSuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredStories, setFilteredStories] = useState([]);

  // Mock client success stories data
  const clientStories = [
    {
      id: 1,
      clientName: "Sarah Johnson",
      age: "28",
      location: "New York, NY",
      transformationType: "Length Extension",
      hairType: "Fine, Straight",
      duration: "6 months",
      rating: 5,
      images: [
        "https://images.unsplash.com/photo-1560869713-7d0b29837c64?w=600",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
        "https://images.unsplash.com/photo-1595475038665-8de2a4b033e5?w=600"
      ],
      testimonial: `I was skeptical about extensions at first, but the consultation process completely changed my mind. The expert took time to understand my lifestyle and hair goals.`,
      fullTestimonial: `I was skeptical about extensions at first, but the consultation process completely changed my mind. The expert took time to understand my lifestyle and hair goals. The quality of the hair is incredible - it feels so natural that I forget I'm wearing extensions. Six months later, they still look and feel amazing. The color match was perfect, and I've received so many compliments. The aftercare guidance has been invaluable in maintaining the beautiful results. I can't imagine my hair routine without these extensions now!`,
      tags: ["Natural Look", "Long-lasting", "Perfect Match", "Professional Service"],
      journey: [
        { title: "Initial Consultation", description: "Discussed hair goals and lifestyle needs" },
        { title: "Color Matching", description: "Perfect shade selection process" },
        { title: "Installation", description: "Professional application technique" },
        { title: "Styling Session", description: "Learned maintenance and styling tips" },
        { title: "Follow-up", description: "Check-in after 2 weeks for adjustments" }
      ],
      date: "2024-01-15"
    },
    {
      id: 2,
      clientName: "Maya Patel",
      age: "32",
      location: "Los Angeles, CA",
      transformationType: "Volume Boost",
      hairType: "Medium, Wavy",
      duration: "4 months",
      rating: 5,
      images: [
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600"
      ],
      testimonial: `After pregnancy, my hair lost so much volume. These extensions gave me back my confidence and made me feel like myself again.`,
      fullTestimonial: `After pregnancy, my hair lost so much volume. These extensions gave me back my confidence and made me feel like myself again. The consultation was so understanding and supportive - they really listened to my concerns about postpartum hair changes. The extensions blend seamlessly with my natural hair texture, and the volume boost is exactly what I needed. The maintenance routine is manageable even with a busy mom schedule. Four months in, and I still love how they look and feel. The investment was absolutely worth it for the confidence boost alone.`,
      tags: ["Volume Boost", "Postpartum Hair", "Natural Texture", "Easy Maintenance"],
      journey: [
        { title: "Consultation", description: "Discussed postpartum hair concerns" },
        { title: "Texture Matching", description: "Found perfect wave pattern match" },
        { title: "Volume Assessment", description: "Determined optimal placement strategy" },
        { title: "Installation", description: "Gentle application process" },
        { title: "Styling Tutorial", description: "Learned quick styling techniques" }
      ],
      date: "2024-02-20"
    },
    {
      id: 3,
      clientName: "Zara Williams",
      age: "25",
      location: "Atlanta, GA",
      transformationType: "Texture Change",
      hairType: "Coarse, Curly",
      duration: "8 months",
      rating: 5,
      images: [
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600",
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600",
        "https://images.unsplash.com/photo-1595475038665-8de2a4b033e5?w=600"
      ],
      testimonial: `Finding someone who truly understands textured hair was a game-changer. The curl pattern match is absolutely perfect.`,
      fullTestimonial: `Finding someone who truly understands textured hair was a game-changer. The curl pattern match is absolutely perfect. I've struggled for years to find extensions that work with my natural texture, but this expert really knew what they were doing. The consultation process was thorough, and they educated me about different curl patterns and how to maintain them. Eight months later, the extensions still look incredible and blend seamlessly. The quality is outstanding, and I've learned so much about caring for my natural hair too. This experience has completely transformed my relationship with my hair.`,
      tags: ["Curl Pattern Match", "Textured Hair Expert", "Educational", "Long-lasting Quality"],
      journey: [
        { title: "Texture Analysis", description: "Detailed curl pattern assessment" },
        { title: "Product Selection", description: "Chose perfect texture match" },
        { title: "Installation Technique", description: "Specialized application for curly hair" },
        { title: "Care Education", description: "Learned proper maintenance routine" },
        { title: "Ongoing Support", description: "Regular check-ins and advice" }
      ],
      date: "2023-12-10"
    },
    {
      id: 4,
      clientName: "Emma Rodriguez",
      age: "30",
      location: "Miami, FL",
      transformationType: "Color Change",
      hairType: "Medium, Straight",
      duration: "5 months",
      rating: 4,
      images: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
        "https://images.unsplash.com/photo-1560869713-7d0b29837c64?w=600",
        "https://images.unsplash.com/photo-1595475038665-8de2a4b033e5?w=600"
      ],
      testimonial: `I wanted to go from brunette to blonde without damaging my natural hair. These extensions were the perfect solution.`,
      fullTestimonial: `I wanted to go from brunette to blonde without damaging my natural hair. These extensions were the perfect solution. The color consultation was incredibly detailed - we looked at different shades and discussed how they would work with my skin tone. The blonde extensions blend beautifully with my natural hair, and I love that I can experiment with color without commitment. The quality has held up wonderfully over five months, and the color hasn't faded at all. The styling versatility is amazing - I can go from casual to glamorous in minutes.`,
      tags: ["Color Transformation", "Damage-Free", "Versatile Styling", "Professional Color Match"],
      journey: [
        { title: "Color Consultation", description: "Explored blonde options and skin tone matching" },
        { title: "Shade Selection", description: "Chose perfect blonde tone" },
        { title: "Blending Technique", description: "Seamless integration with natural hair" },
        { title: "Styling Options", description: "Learned various styling techniques" },
        { title: "Color Maintenance", description: "Tips for keeping color vibrant" }
      ],
      date: "2024-03-05"
    },
    {
      id: 5,
      clientName: "Aisha Thompson",
      age: "27",
      location: "Chicago, IL",
      transformationType: "Protective Styling",
      hairType: "Coarse, Kinky",
      duration: "3 months",
      rating: 5,
      images: [
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600",
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600"
      ],
      testimonial: `Perfect protective styling solution that lets my natural hair rest while still looking fabulous every day.`,
      fullTestimonial: `Perfect protective styling solution that lets my natural hair rest while still looking fabulous every day. The consultation focused on my hair health goals and how to achieve length retention while maintaining style. The installation was gentle and comfortable, and the extensions provide excellent protection for my natural hair. I love that I can switch up my look while giving my hair a break from daily manipulation. The quality is exceptional, and they've maintained their appearance beautifully. This has become my go-to protective style.`,
      tags: ["Protective Styling", "Hair Health", "Low Manipulation", "Versatile Looks"],
      journey: [
        { title: "Hair Health Assessment", description: "Evaluated natural hair condition" },
        { title: "Protective Strategy", description: "Planned optimal protection approach" },
        { title: "Gentle Installation", description: "Careful application to minimize tension" },
        { title: "Maintenance Plan", description: "Established care routine" },
        { title: "Progress Monitoring", description: "Regular check-ins for hair health" }
      ],
      date: "2024-04-12"
    },
    {
      id: 6,
      clientName: "Isabella Chen",
      age: "26",
      location: "San Francisco, CA",
      transformationType: "Special Event",
      hairType: "Fine, Straight",
      duration: "1 month",
      rating: 5,
      images: [
        "https://images.unsplash.com/photo-1560869713-7d0b29837c64?w=600",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
        "https://images.unsplash.com/photo-1595475038665-8de2a4b033e5?w=600"
      ],
      testimonial: `My wedding hair was absolutely perfect thanks to these extensions. Every photo turned out beautifully.`,
      fullTestimonial: `My wedding hair was absolutely perfect thanks to these extensions. Every photo turned out beautifully. The consultation process was so thorough - we discussed my dress, venue, and overall wedding vision. The trial run was incredibly helpful, and we made small adjustments to achieve the perfect look. On the wedding day, my hair stayed perfect from morning until late night dancing. The extensions added the volume and length I needed for my dream bridal hairstyle. Looking back at the photos, I'm so grateful for the expert guidance and quality products.`,
      tags: ["Bridal Hair", "Special Event", "Photo-Ready", "All-Day Hold"],
      journey: [
        { title: "Bridal Consultation", description: "Discussed wedding vision and requirements" },
        { title: "Trial Session", description: "Tested different styles and looks" },
        { title: "Final Adjustments", description: "Perfected the chosen style" },
        { title: "Wedding Day", description: "Flawless execution of bridal look" },
        { title: "Follow-up", description: "Post-wedding care and removal" }
      ],
      date: "2024-05-18"
    }
  ];

  // Mock video testimonials data
  const videoTestimonials = [
    {
      id: 1,
      clientName: "Rachel Martinez",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      duration: "2:34",
      transformationType: "Volume Boost",
      rating: 5,
      description: "Rachel shares her amazing experience with volume-boosting extensions",
      date: "Jan 2024"
    },
    {
      id: 2,
      clientName: "Jasmine Lee",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      duration: "3:12",
      transformationType: "Length Extension",
      rating: 5,
      description: "Jasmine\'s journey from short to long hair transformation",
      date: "Feb 2024"
    },
    {
      id: 3,
      clientName: "Sophia Davis",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      duration: "1:58",
      transformationType: "Color Change",
      rating: 4,
      description: "Sophia\'s stunning brunette to blonde transformation story",
      date: "Mar 2024"
    }
  ];

  // Filter and sort stories
  useEffect(() => {
    let filtered = clientStories;

    // Apply filter
    if (activeFilter !== 'all') {
      filtered = filtered?.filter(story => {
        const type = story?.transformationType?.toLowerCase();
        switch (activeFilter) {
          case 'length':
            return type?.includes('length');
          case 'volume':
            return type?.includes('volume');
          case 'color':
            return type?.includes('color');
          case 'texture':
            return type?.includes('texture');
          case 'protective':
            return type?.includes('protective');
          case 'special-event':
            return type?.includes('special');
          default:
            return true;
        }
      });
    }

    // Apply search
    if (searchTerm) {
      filtered = filtered?.filter(story =>
        story?.clientName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        story?.testimonial?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        story?.transformationType?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        story?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      );
    }

    // Apply sort
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'rating':
          return b?.rating - a?.rating;
        case 'popular':
          return b?.rating - a?.rating; // Mock popularity by rating
        default:
          return 0;
      }
    });

    setFilteredStories(filtered);
  }, [activeFilter, sortBy, searchTerm]);

  const handleViewDetails = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const handleWhatsAppConsultation = () => {
    const message = encodeURIComponent("Hi! I've been looking at your client success stories and I'm inspired by the transformations. I'd love to schedule a consultation to discuss my hair goals and see what's possible for me.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Client Success Stories - HairCraft Pro | Real Transformations</title>
        <meta name="description" content="Discover authentic client transformation stories at HairCraft Pro. See real before/after results, read detailed testimonials, and get inspired by our clients' hair journeys." />
        <meta name="keywords" content="hair extension testimonials, client transformations, before after hair, success stories, hair extension reviews" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-brand py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-white mb-6">
              Real Stories, Real Results
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover authentic transformation journeys from our clients. Each story represents 
              not just a physical change, but a boost in confidence and self-expression.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsAppConsultation}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Your Transformation
            </Button>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Success Metrics */}
          <SuccessMetrics />

          {/* Filter Section */}
          <TransformationFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {filteredStories?.length} of {clientStories?.length} success stories
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Filter" size={16} />
              <span>Filtered by: {activeFilter === 'all' ? 'All Stories' : activeFilter}</span>
            </div>
          </div>

          {/* Client Stories Grid */}
          {filteredStories?.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredStories?.map((story) => (
                <StoryCard
                  key={story?.id}
                  story={story}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                No stories found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms to find more stories.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Video Testimonials Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-3">
                Video Testimonials
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear directly from our clients as they share their transformation experiences 
                and the impact it's had on their confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTestimonials?.map((video) => (
                <VideoTestimonial key={video?.id} video={video} />
              ))}
            </div>
          </section>

          {/* Social Proof Section */}
          <SocialProof />

          {/* Call to Action */}
          <section className="bg-muted rounded-xl p-8 lg:p-12 text-center">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their look and boosted 
              their confidence with our premium hair extensions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppConsultation}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
              >
                View Hair Collections
              </Button>
            </div>
          </section>
        </div>
      </main>
      {/* Story Modal */}
      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ClientSuccessStories;