import React from 'react';
import Icon from '../../../components/AppIcon';


const CredentialsSection = () => {
  const certifications = [
    {
      title: "Certified Hair Extension Specialist",
      issuer: "International Hair Academy",
      year: "2016",
      icon: "Award",
      description: "Advanced certification in European hair extension techniques and application methods"
    },
    {
      title: "Quality Assessment Professional",
      issuer: "Hair Quality Institute",
      year: "2018",
      icon: "CheckCircle",
      description: "Specialized training in hair grading, quality control, and authenticity verification"
    },
    {
      title: "Ethical Sourcing Certification",
      issuer: "Global Hair Trade Association",
      year: "2020",
      icon: "Shield",
      description: "Certification in ethical hair sourcing practices and supply chain transparency"
    },
    {
      title: "Advanced Color Matching",
      issuer: "Professional Beauty Institute",
      year: "2021",
      icon: "Palette",
      description: "Expert-level training in color theory and precision hair color matching techniques"
    }
  ];

  const memberships = [
    {
      organization: "Beauty Professional Association",
      role: "Certified Member",
      since: "2017"
    },
    {
      organization: "International Hair Extension Guild",
      role: "Expert Practitioner",
      since: "2019"
    },
    {
      organization: "Ethical Beauty Coalition",
      role: "Founding Member",
      since: "2020"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Professional Credentials & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My commitment to excellence is backed by continuous education, industry certifications, 
            and active participation in professional organizations that uphold the highest standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-primary hover:shadow-elevation transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={cert?.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {cert?.title}
                    </h4>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm font-medium text-primary">{cert?.issuer}</span>
                      <span className="text-sm text-muted-foreground">• {cert?.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
              Professional Memberships
            </h3>
            <div className="space-y-6">
              {memberships?.map((membership, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-primary">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {membership?.organization}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {membership?.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Since</p>
                      <p className="font-semibold text-foreground">{membership?.since}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-primary">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} color="var(--color-primary)" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Continuous Learning
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="BookOpen" size={18} color="var(--color-primary)" />
                <span className="text-sm text-muted-foreground">
                  Monthly workshops on latest hair techniques
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={18} color="var(--color-primary)" />
                <span className="text-sm text-muted-foreground">
                  Annual industry conferences and trade shows
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Globe" size={18} color="var(--color-primary)" />
                <span className="text-sm text-muted-foreground">
                  International supplier relationship building
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Lightbulb" size={18} color="var(--color-primary)" />
                <span className="text-sm text-muted-foreground">
                  Research on emerging hair care technologies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;