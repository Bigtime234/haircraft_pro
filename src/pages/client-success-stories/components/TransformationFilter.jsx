import React from 'react';
import Icon from '../../../components/AppIcon';

const TransformationFilter = ({ 
  activeFilter, 
  onFilterChange, 
  sortBy, 
  onSortChange,
  searchTerm,
  onSearchChange 
}) => {
  const filters = [
    { id: 'all', label: 'All Stories', icon: 'Grid3X3' },
    { id: 'length', label: 'Length Extension', icon: 'ArrowDown' },
    { id: 'volume', label: 'Volume Boost', icon: 'Zap' },
    { id: 'color', label: 'Color Change', icon: 'Palette' },
    { id: 'texture', label: 'Texture Change', icon: 'Waves' },
    { id: 'protective', label: 'Protective Styling', icon: 'Shield' },
    { id: 'special-event', label: 'Special Events', icon: 'Calendar' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' }
  ];

  return (
    <div className="bg-card rounded-xl shadow-primary p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder="Search client stories..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
        />
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => onFilterChange(filter?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeFilter === filter?.id
                ? 'bg-primary text-primary-foreground shadow-primary'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={filter?.icon} size={16} />
            <span>{filter?.label}</span>
          </button>
        ))}
      </div>
      {/* Sort Options */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Sort by:</span>
        </div>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e?.target?.value)}
          className="bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {sortOptions?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TransformationFilter;