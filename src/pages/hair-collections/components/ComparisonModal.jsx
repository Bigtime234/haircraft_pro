import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ComparisonModal = ({ comparisonItems, isOpen, onClose, onRemoveFromComparison }) => {
  if (!isOpen || comparisonItems?.length === 0) return null;

  const handleWhatsAppClick = (items) => {
    const itemNames = items?.map(item => `${item?.name} (${item?.origin} ${item?.texture}, ${item?.length}")`)?.join(', ');
    const message = encodeURIComponent(
      `Hi! I'm interested in comparing these hair extensions: ${itemNames}. Could you please provide detailed pricing and help me choose the best option for my needs?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const specifications = [
    { key: 'origin', label: 'Origin' },
    { key: 'texture', label: 'Texture' },
    { key: 'length', label: 'Length' },
    { key: 'weight', label: 'Weight' },
    { key: 'processing', label: 'Processing' },
    { key: 'density', label: 'Density' },
    { key: 'recommendedBundles', label: 'Bundles Needed' },
    { key: 'versatilityRating', label: 'Versatility' },
    { key: 'color', label: 'Color' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Compare Hair Extensions
            </h2>
            <p className="text-muted-foreground">
              Side-by-side comparison of {comparisonItems?.length} items
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        <div className="overflow-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisonItems?.map((item, index) => (
                <div key={item?.id} className="bg-card border border-border rounded-lg overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[4/5] bg-muted">
                    <Image
                      src={item?.images?.[0]}
                      alt={item?.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => onRemoveFromComparison(item?.id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <Icon name="X" size={16} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      {item?.name}
                    </h3>

                    {/* Specifications */}
                    <div className="space-y-3">
                      {specifications?.map((spec) => (
                        <div key={spec?.key} className="flex justify-between items-center py-1 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">{spec?.label}:</span>
                          <span className="text-sm font-medium text-foreground">
                            {spec?.key === 'length' ? `${item?.[spec?.key]}"` :
                             spec?.key === 'weight' ? `${item?.[spec?.key]}g` :
                             spec?.key === 'versatilityRating' ? `${item?.[spec?.key]}/10` :
                             spec?.key === 'processing' ? item?.[spec?.key]?.charAt(0)?.toUpperCase() + item?.[spec?.key]?.slice(1) :
                             item?.[spec?.key]}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rating:</span>
                      <div className="flex items-center">
                        {[...Array(5)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={i < Math.floor(item?.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                          />
                        ))}
                        <span className="ml-1 text-xs text-muted-foreground">({item?.reviews})</span>
                      </div>
                    </div>

                    {/* Versatility Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Styling Versatility</span>
                        <span className="text-xs text-foreground">{item?.versatilityRating}/10</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item?.versatilityRating * 10}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                onClick={() => handleWhatsAppClick(comparisonItems)}
                iconName="MessageCircle"
                iconPosition="left"
                className="flex-1 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
              >
                Get Pricing for All Items
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
                className="sm:w-auto"
              >
                Close Comparison
              </Button>
            </div>

            {/* Comparison Tips */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium text-foreground mb-2 flex items-center">
                <Icon name="Lightbulb" size={16} className="mr-2" />
                Comparison Tips
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Higher versatility ratings indicate more styling options</li>
                <li>• Virgin hair offers the most natural look and longevity</li>
                <li>• Consider your lifestyle when choosing density levels</li>
                <li>• Bundle recommendations are for average head coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;