import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessStepCard = ({ step, isActive = false }) => {
  return (
    <div className={`relative p-6 rounded-xl border transition-all duration-300 ${
      isActive 
        ? 'bg-primary text-primary-foreground border-primary shadow-primary' 
        : 'bg-card text-card-foreground border-border hover:border-primary/30 hover:shadow-primary'
    }`}>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
          isActive ? 'bg-white/20' : 'bg-primary/10'
        }`}>
          <Icon 
            name={step?.icon} 
            size={24} 
            color={isActive ? 'white' : 'var(--color-primary)'} 
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              isActive ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
            }`}>
              Step {step?.number}
            </span>
            <span className="text-xs text-muted-foreground">
              {step?.duration}
            </span>
          </div>
          <h3 className="font-heading text-lg font-semibold mb-2">
            {step?.title}
          </h3>
          <p className={`text-sm leading-relaxed ${
            isActive ? 'text-white/90' : 'text-muted-foreground'
          }`}>
            {step?.description}
          </p>
          {step?.highlights && (
            <ul className="mt-3 space-y-1">
              {step?.highlights?.map((highlight, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm">
                  <Icon 
                    name="Check" 
                    size={14} 
                    color={isActive ? 'white' : 'var(--color-success)'} 
                  />
                  <span className={isActive ? 'text-white/90' : 'text-muted-foreground'}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessStepCard;