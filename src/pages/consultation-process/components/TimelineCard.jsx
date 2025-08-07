import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineCard = ({ phase, isCompleted = false, isActive = false }) => {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-6 top-12 w-0.5 h-full bg-border" />
      <div className="flex items-start space-x-4">
        {/* Timeline dot */}
        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
          isCompleted 
            ? 'bg-success border-success' 
            : isActive 
              ? 'bg-primary border-primary' :'bg-background border-border'
        }`}>
          {isCompleted ? (
            <Icon name="Check" size={20} color="white" />
          ) : (
            <Icon 
              name={phase?.icon} 
              size={20} 
              color={isActive ? 'white' : 'var(--color-muted-foreground)'} 
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-primary transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {phase?.title}
              </h3>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                isCompleted 
                  ? 'bg-success/10 text-success' 
                  : isActive 
                    ? 'bg-primary/10 text-primary' :'bg-muted text-muted-foreground'
              }`}>
                {phase?.duration}
              </span>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {phase?.description}
            </p>

            {phase?.activities && (
              <div className="space-y-2">
                <h4 className="font-medium text-card-foreground text-sm">
                  Key Activities:
                </h4>
                <ul className="space-y-1">
                  {phase?.activities?.map((activity, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <Icon name="ArrowRight" size={14} color="var(--color-primary)" />
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {phase?.deliverables && (
              <div className="mt-4 p-3 bg-accent/5 rounded-lg">
                <h4 className="font-medium text-card-foreground text-sm mb-2">
                  You'll Receive:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {phase?.deliverables?.map((deliverable, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;