import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialProof = () => {
  const socialPosts = [
    {
      id: 1,
      platform: 'instagram',
      username: '@sarah_glam',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      image: 'https://images.unsplash.com/photo-1560869713-7d0b29837c64?w=400',
      caption: `Obsessed with my new hair from @haircraftpro! The quality is unmatched and the consultation process was so thorough. Can't stop touching it! 💁‍♀️✨`,likes: 234,comments: 18,date: '2 days ago'
    },
    {
      id: 2,
      platform: 'instagram',username: '@beauty_by_maya',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
      caption: `Before and after with @haircraftpro extensions! The color match is PERFECT and it feels so natural. My clients are asking where I got it done! 🔥`,
      likes: 189,
      comments: 25,
      date: '5 days ago'
    },
    {
      id: 3,
      platform: 'tiktok',username: '@hair_goals_daily',avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',image: 'https://images.unsplash.com/photo-1595475038665-8de2a4b033e5?w=400',
      caption: `POV: You finally found the perfect hair extension vendor 💯 @haircraftpro delivered exactly what I wanted. The consultation was so detailed!`,
      likes: 1200,
      comments: 89,
      date: '1 week ago'
    },
    {
      id: 4,
      platform: 'instagram',username: '@curly_crown_queen',avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150',image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400',caption: `Finally found someone who understands textured hair! @haircraftpro matched my curl pattern perfectly. This is what quality looks like! 👑`,likes: 156,comments: 12,date: '1 week ago'
    }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi! I saw the amazing client posts on social media and I'm interested in getting similar results. Can we discuss my hair goals?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-semibold text-foreground mb-3">
          What Clients Are Saying
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real posts from real clients sharing their HairCraft Pro experience across social media
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {socialPosts?.map((post) => (
          <div key={post?.id} className="bg-card rounded-xl shadow-primary overflow-hidden">
            {/* Post Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <Image
                  src={post?.avatar}
                  alt={post?.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm text-foreground">{post?.username}</p>
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={post?.platform === 'instagram' ? 'Instagram' : 'Music'} 
                      size={12} 
                      className="text-muted-foreground" 
                    />
                    <span className="text-xs text-muted-foreground">{post?.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Image */}
            <div className="aspect-square">
              <Image
                src={post?.image}
                alt="Client transformation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Content */}
            <div className="p-4">
              <p className="text-sm text-foreground mb-3 line-clamp-3">
                {post?.caption}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={12} />
                    <span>{post?.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageCircle" size={12} />
                    <span>{post?.comments}</span>
                  </div>
                </div>
                <Icon name="Share" size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-muted rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-muted-foreground mb-6">
            Start your transformation journey with a personalized consultation. Let's create your perfect look together!
          </p>
          <Button
            variant="default"
            onClick={handleWhatsAppContact}
            iconName="MessageCircle"
            iconPosition="left"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
          >
            Start Your Transformation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;