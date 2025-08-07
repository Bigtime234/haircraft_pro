import React from 'react';
import Icon from '../../../components/AppIcon';

const SuccessMetrics = () => {
  const metrics = [
    {
      icon: 'Users',
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: 'Star',
      value: '4.9',
      label: 'Average Rating',
      description: 'Based on 350+ reviews'
    },
    {
      icon: 'Repeat',
      value: '92%',
      label: 'Return Rate',
      description: 'Clients who come back'
    },
    {
      icon: 'Heart',
      value: '98%',
      label: 'Satisfaction',
      description: 'Would recommend to friends'
    },
    {
      icon: 'Award',
      value: '15+',
      label: 'Years Experience',
      description: 'In premium hair extensions'
    },
    {
      icon: 'Globe',
      value: '25+',
      label: 'Countries',
      description: 'Clients served globally'
    }
  ];

  return (
    <div className="bg-gradient-brand rounded-xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-semibold text-white mb-3">
          Our Success Story
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          Numbers that speak to our commitment to excellence and client satisfaction
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {metrics?.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name={metric?.icon} size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {metric?.value}
            </div>
            <div className="text-white font-medium mb-1">
              {metric?.label}
            </div>
            <div className="text-white/80 text-xs">
              {metric?.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessMetrics;