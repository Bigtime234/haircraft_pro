import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';

const PreparationChecklist = ({ type = "virtual" }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const virtualPreparation = [
    {
      id: 'photos',
      title: 'Take Clear Hair Photos',
      description: 'Front, back, and side views in natural lighting',
      required: true
    },
    {
      id: 'inspiration',
      title: 'Gather Style Inspiration',
      description: 'Save 3-5 images of your desired look',
      required: true
    },
    {
      id: 'measurements',
      title: 'Measure Hair Length',
      description: 'Current length from roots to ends',
      required: false
    },
    {
      id: 'lifestyle',
      title: 'Consider Your Lifestyle',
      description: 'Daily routine, styling time, maintenance preferences',
      required: true
    },
    {
      id: 'budget',
      title: 'Set Your Budget Range',
      description: 'Include hair cost, installation, and maintenance',
      required: false
    },
    {
      id: 'questions',
      title: 'Prepare Questions',
      description: 'Write down any concerns or specific requirements',
      required: false
    }
  ];

  const inPersonPreparation = [
    {
      id: 'clean_hair',
      title: 'Clean, Dry Hair',
      description: 'Wash hair 24 hours before, no styling products',
      required: true
    },
    {
      id: 'natural_color',
      title: 'Show Natural Color',
      description: 'No temporary color or heavy styling',
      required: true
    },
    {
      id: 'comfortable_clothes',
      title: 'Wear Comfortable Clothing',
      description: 'Easy to remove top for proper hair assessment',
      required: true
    },
    {
      id: 'inspiration_physical',
      title: 'Bring Inspiration Photos',
      description: 'Physical or digital references on your phone',
      required: true
    },
    {
      id: 'hair_history',
      title: 'Hair History Information',
      description: 'Previous treatments, allergies, sensitivities',
      required: true
    },
    {
      id: 'time_buffer',
      title: 'Allow Extra Time',
      description: 'Plan for 30 minutes longer than scheduled',
      required: false
    }
  ];

  const checklist = type === "virtual" ? virtualPreparation : inPersonPreparation;

  const handleCheckChange = (itemId, checked) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: checked
    }));
  };

  const completedItems = Object.values(checkedItems)?.filter(Boolean)?.length;
  const totalItems = checklist?.length;
  const progressPercentage = (completedItems / totalItems) * 100;

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-xl font-semibold text-card-foreground">
          {type === "virtual" ? "Virtual" : "In-Person"} Consultation Prep
        </h3>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Progress</div>
          <div className="font-semibold text-primary">
            {completedItems}/{totalItems}
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Completion</span>
          <span className="font-medium text-card-foreground">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      <div className="space-y-4">
        {checklist?.map((item) => (
          <div key={item?.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <Checkbox
              checked={checkedItems?.[item?.id] || false}
              onChange={(e) => handleCheckChange(item?.id, e?.target?.checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-card-foreground text-sm">
                  {item?.title}
                </h4>
                {item?.required && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    Required
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-accent/10 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} color="var(--color-accent)" className="mt-0.5" />
          <div>
            <h4 className="font-medium text-card-foreground text-sm mb-1">
              Pro Tip
            </h4>
            <p className="text-sm text-muted-foreground">
              {type === "virtual" ?"Take photos in natural daylight near a window for the most accurate color representation." :"Arrive 10 minutes early to relax and review your inspiration photos one more time."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationChecklist;