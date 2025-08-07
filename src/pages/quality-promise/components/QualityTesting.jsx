import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const QualityTesting = () => {
  const [activeTest, setActiveTest] = useState(0);

  const testingProcedures = [
    {
      name: 'Tensile Strength',
      icon: 'Zap',
      description: 'Measures hair strength and resistance to breakage under stress',
      process: 'Individual strands are tested using calibrated equipment to measure breaking point and elasticity.',
      standards: 'Must withstand 50-80 grams of force without breaking',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
      results: [
        { grade: 'Premium', range: '70-80g', color: 'success' },
        { grade: 'Standard', range: '60-70g', color: 'warning' },
        { grade: 'Basic', range: '50-60g', color: 'destructive' }
      ]
    },
    {
      name: 'Color Fastness',
      icon: 'Palette',
      description: 'Tests color retention and resistance to fading over time',
      process: 'Hair samples undergo UV exposure, washing cycles, and chemical resistance testing.',
      standards: 'Color must remain stable through 50+ wash cycles',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=400&h=300&fit=crop',
      results: [
        { grade: 'Excellent', range: '90-100%', color: 'success' },
        { grade: 'Good', range: '80-90%', color: 'warning' },
        { grade: 'Fair', range: '70-80%', color: 'destructive' }
      ]
    },
    {
      name: 'Chemical Analysis',
      icon: 'TestTube',
      description: 'Screens for harmful chemicals and processing residues',
      process: 'Comprehensive laboratory analysis using spectroscopy and chromatography methods.',
      standards: 'Zero tolerance for harmful chemicals and heavy metals',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      results: [
        { grade: 'Clean', range: '0 ppm', color: 'success' },
        { grade: 'Trace', range: '<5 ppm', color: 'warning' },
        { grade: 'Reject', range: '>5 ppm', color: 'destructive' }
      ]
    },
    {
      name: 'Cuticle Integrity',
      icon: 'Microscope',
      description: 'Microscopic examination of cuticle alignment and condition',
      process: 'High-powered microscopy to assess cuticle structure, alignment, and damage.',
      standards: '95%+ cuticles must be intact and properly aligned',
      image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?w=400&h=300&fit=crop',
      results: [
        { grade: 'Perfect', range: '98-100%', color: 'success' },
        { grade: 'Excellent', range: '95-98%', color: 'warning' },
        { grade: 'Good', range: '90-95%', color: 'destructive' }
      ]
    }
  ];

  const qualityMetrics = [
    { label: 'Batches Tested Monthly', value: '500+', icon: 'Package' },
    { label: 'Quality Pass Rate', value: '99.8%', icon: 'CheckCircle' },
    { label: 'Testing Parameters', value: '25+', icon: 'Settings' },
    { label: 'Lab Certifications', value: '8', icon: 'Award' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Comprehensive Quality Testing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every batch undergoes rigorous laboratory testing to ensure it meets our stringent quality standards 
            before reaching our clients.
          </p>
        </div>

        {/* Quality Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualityMetrics?.map((metric, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={metric?.icon} size={20} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{metric?.value}</div>
              <div className="text-sm text-muted-foreground">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Testing Procedures */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Test Selection */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Testing Procedures</h3>
            <div className="space-y-3">
              {testingProcedures?.map((test, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTest(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    activeTest === index
                      ? 'bg-primary text-primary-foreground border-primary shadow-primary'
                      : 'bg-card text-card-foreground border-border hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeTest === index ? 'bg-primary-foreground/20' : 'bg-primary/10'
                    }`}>
                      <Icon 
                        name={test?.icon} 
                        size={18} 
                        className={activeTest === index ? 'text-primary-foreground' : 'text-primary'} 
                      />
                    </div>
                    <div>
                      <h4 className={`font-medium ${
                        activeTest === index ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {test?.name}
                      </h4>
                      <p className={`text-xs ${
                        activeTest === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {test?.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Test Details */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-elevation">
              <div className="mb-6">
                <Image
                  src={testingProcedures?.[activeTest]?.image}
                  alt={`${testingProcedures?.[activeTest]?.name} testing procedure`}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    {testingProcedures?.[activeTest]?.name} Testing
                  </h3>
                  <p className="text-muted-foreground">
                    {testingProcedures?.[activeTest]?.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Testing Process:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {testingProcedures?.[activeTest]?.process}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quality Standards:</h4>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <p className="text-sm text-primary font-medium">
                      {testingProcedures?.[activeTest]?.standards}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Test Results Grading:</h4>
                  <div className="space-y-2">
                    {testingProcedures?.[activeTest]?.results?.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            result?.color === 'success' ? 'bg-success' :
                            result?.color === 'warning' ? 'bg-warning' : 'bg-destructive'
                          }`}></div>
                          <span className="font-medium text-foreground">{result?.grade}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{result?.range}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Display */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Laboratory Certifications
            </h3>
            <p className="text-muted-foreground">
              Our testing procedures are certified by leading international standards organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'ISO 17025', desc: 'Testing Competence' },
              { name: 'ASTM D5034', desc: 'Textile Testing' },
              { name: 'AATCC 61', desc: 'Color Fastness' }
            ]?.map((cert, index) => (
              <div key={index} className="bg-card rounded-lg p-4 text-center border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Award" size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{cert?.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{cert?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityTesting;