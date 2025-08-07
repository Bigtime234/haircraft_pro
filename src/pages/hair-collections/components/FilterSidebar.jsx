import React from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onClose 
}) => {
  const originOptions = [
    { value: 'all', label: 'All Origins' },
    { value: 'brazilian', label: 'Brazilian' },
    { value: 'peruvian', label: 'Peruvian' },
    { value: 'indian', label: 'Indian' },
    { value: 'malaysian', label: 'Malaysian' }
  ];

  const textureOptions = [
    { value: 'all', label: 'All Textures' },
    { value: 'straight', label: 'Straight' },
    { value: 'wavy', label: 'Wavy' },
    { value: 'curly', label: 'Curly' },
    { value: 'kinky', label: 'Kinky' }
  ];

  const lengthOptions = [
    { value: 'all', label: 'All Lengths' },
    { value: '12-16', label: '12-16 inches' },
    { value: '18-22', label: '18-22 inches' },
    { value: '24-30', label: '24-30 inches' }
  ];

  const priceRanges = [
    { value: 'budget', label: 'Budget Friendly ($100-300)' },
    { value: 'premium', label: 'Premium ($300-600)' },
    { value: 'luxury', label: 'Luxury ($600+)' }
  ];

  const processingLevels = [
    { value: 'virgin', label: 'Virgin Hair' },
    { value: 'remy', label: 'Remy Hair' },
    { value: 'processed', label: 'Processed Hair' }
  ];

  const densityLevels = [
    { value: 'light', label: 'Light (130%)' },
    { value: 'medium', label: 'Medium (150%)' },
    { value: 'heavy', label: 'Heavy (180%)' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 lg:w-full
        bg-background border-r lg:border-r-0 border-border
        transform transition-transform duration-300 z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Filter Collections
            </h3>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="lg:hidden"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {/* Hair Origin */}
            <div>
              <Select
                label="Hair Origin"
                options={originOptions}
                value={filters?.origin}
                onChange={(value) => onFilterChange('origin', value)}
                className="mb-4"
              />
            </div>

            {/* Hair Texture */}
            <div>
              <Select
                label="Hair Texture"
                options={textureOptions}
                value={filters?.texture}
                onChange={(value) => onFilterChange('texture', value)}
                className="mb-4"
              />
            </div>

            {/* Hair Length */}
            <div>
              <Select
                label="Hair Length"
                options={lengthOptions}
                value={filters?.length}
                onChange={(value) => onFilterChange('length', value)}
                className="mb-4"
              />
            </div>

            {/* Price Range */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Price Range</h4>
              <div className="space-y-2">
                {priceRanges?.map((range) => (
                  <Checkbox
                    key={range?.value}
                    label={range?.label}
                    checked={filters?.priceRanges?.includes(range?.value)}
                    onChange={(e) => {
                      const newRanges = e?.target?.checked
                        ? [...filters?.priceRanges, range?.value]
                        : filters?.priceRanges?.filter(r => r !== range?.value);
                      onFilterChange('priceRanges', newRanges);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Processing Level */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Processing Level</h4>
              <div className="space-y-2">
                {processingLevels?.map((level) => (
                  <Checkbox
                    key={level?.value}
                    label={level?.label}
                    checked={filters?.processingLevels?.includes(level?.value)}
                    onChange={(e) => {
                      const newLevels = e?.target?.checked
                        ? [...filters?.processingLevels, level?.value]
                        : filters?.processingLevels?.filter(l => l !== level?.value);
                      onFilterChange('processingLevels', newLevels);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Hair Density */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Hair Density</h4>
              <div className="space-y-2">
                {densityLevels?.map((density) => (
                  <Checkbox
                    key={density?.value}
                    label={density?.label}
                    checked={filters?.densityLevels?.includes(density?.value)}
                    onChange={(e) => {
                      const newDensities = e?.target?.checked
                        ? [...filters?.densityLevels, density?.value]
                        : filters?.densityLevels?.filter(d => d !== density?.value);
                      onFilterChange('densityLevels', newDensities);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Apply Filters Button (Mobile) */}
          <div className="lg:hidden mt-8">
            <Button
              variant="default"
              fullWidth
              onClick={onClose}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;