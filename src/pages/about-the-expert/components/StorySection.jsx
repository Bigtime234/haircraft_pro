import React from 'react';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  const milestones = [
    {
      year: "2016",
      title: "Started My Journey",
      description: "Graduated from the International Hair Academy with specialization in extension techniques"
    },
    {
      year: "2018",
      title: "First Certification",
      description: "Earned certification in European hair extension methods and quality assessment"
    },
    {
      year: "2020",
      title: "Business Launch",
      description: "Founded HairCraft Pro with a mission to provide premium quality hair extensions"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Awarded \'Excellence in Hair Extension Services\' by the Beauty Professional Association"
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Expanded services and reached 2,500+ satisfied clients with 5-star ratings"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            My Journey in Hair Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a passionate cosmetology student to a recognized expert in premium hair extensions, 
            my journey has been driven by one goal: helping women feel confident and beautiful in their own skin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-primary">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Heart" size={24} color="var(--color-primary)" />
                <h3 className="font-heading text-xl font-semibold text-foreground">Why I Do This</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe that beautiful hair is more than just an accessory—it's a form of self-expression 
                and confidence. After struggling with my own hair journey in my early twenties, I discovered 
                the transformative power of quality hair extensions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This personal experience ignited my passion for helping other women achieve their hair goals 
                without compromise. Every consultation is an opportunity to understand your unique vision and 
                bring it to life with the finest quality hair available.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-primary">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Target" size={24} color="var(--color-primary)" />
                <h3 className="font-heading text-xl font-semibold text-foreground">My Philosophy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Quality over quantity, always. I work exclusively with ethically sourced, premium-grade 
                hair that maintains its integrity and beauty for months. My approach is deeply personal—
                no two clients are the same, and neither should their hair solutions be.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm committed to transparency in my sourcing process, ongoing education in the latest 
                techniques, and providing honest guidance that prioritizes your hair health above all else.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-8">
              {milestones?.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <span className="text-xs font-bold text-primary-foreground">{milestone?.year?.slice(-2)}</span>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-primary flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary">{milestone?.year}</span>
                      <Icon name="Calendar" size={14} color="var(--color-primary)" />
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {milestone?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {milestone?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;