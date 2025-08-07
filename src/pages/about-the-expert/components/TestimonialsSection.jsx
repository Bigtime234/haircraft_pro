import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jessica Chen",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `Sarah is absolutely incredible! I was so nervous about getting extensions for the first time, but she made the entire process so comfortable and educational. She took the time to understand exactly what I wanted and matched my hair perfectly. The quality is outstanding - it's been 4 months and my extensions still look and feel amazing. Sarah's expertise and genuine care for her clients really shows. I've already recommended her to all my friends!`,
      highlight: "Perfect color match and amazing quality",
      service: "Virgin Brazilian Hair Extensions"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `I've been working with Sarah for over 2 years now, and she never disappoints. Her attention to detail is unmatched - from the initial consultation to the final result, everything is perfect. She sources the most beautiful hair and her color matching skills are incredible. What I love most is how she educates you about proper care and maintenance. Sarah isn't just selling hair, she's building long-term relationships with her clients.`,
      highlight: "2+ years of consistent excellence",
      service: "Platinum Blonde Extensions"
    },
    {
      id: 3,
      name: "Aisha Johnson",
      location: "Atlanta, GA",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `Sarah transformed my hair and my confidence! I was dealing with hair loss after a medical treatment, and she was so understanding and supportive throughout the entire process. She helped me choose the perfect texture and length, and the results exceeded my expectations. The hair blends seamlessly with my natural hair, and I feel like myself again. Sarah's compassion and expertise made all the difference in my journey.`,
      highlight: "Compassionate care during difficult time",
      service: "Medical Hair Loss Solution"
    },
    {
      id: 4,
      name: "Emily Thompson",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: `As someone who's tried extensions from multiple vendors, I can confidently say Sarah is in a league of her own. The quality of her hair is exceptional - it's soft, shiny, and holds up beautifully to styling. But what really sets her apart is her customer service. She's always available to answer questions, provides detailed care instructions, and genuinely cares about your satisfaction. Worth every penny!`,
      highlight: "Exceptional quality and customer service",
      service: "Luxury Tape-In Extensions"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            What My Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The trust and satisfaction of my clients is what drives me every day. 
            Here are some stories from women whose lives have been transformed through quality hair extensions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl shadow-elevation p-8 lg:p-12 mb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src={currentTestimonial?.image}
                    alt={currentTestimonial?.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={16} color="white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start items-center space-x-1 mb-4">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} color="var(--color-warning)" className="fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  "{currentTestimonial?.text}"
                </p>

                {/* Highlight */}
                <div className="bg-primary/10 px-4 py-2 rounded-lg inline-block mb-6">
                  <p className="text-primary font-medium text-sm">
                    {currentTestimonial?.highlight}
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {currentTestimonial?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {currentTestimonial?.location}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Service: {currentTestimonial?.service}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeTestimonial 
                      ? 'bg-primary scale-125' :'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div className="bg-card p-6 rounded-xl shadow-primary">
              <div className="text-2xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-primary">
              <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-primary">
              <div className="text-2xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;