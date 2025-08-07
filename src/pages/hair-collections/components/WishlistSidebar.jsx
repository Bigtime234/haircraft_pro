import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const WishlistSidebar = ({ 
  wishlistItems, 
  isOpen, 
  onClose, 
  onRemoveFromWishlist, 
  onShareWishlist 
}) => {
  const handleWhatsAppShare = () => {
    if (wishlistItems?.length === 0) return;
    
    const itemNames = wishlistItems?.map(item => 
      `${item?.name} (${item?.origin} ${item?.texture}, ${item?.length}")`
    )?.join('\n• ');
    
    const message = encodeURIComponent(
      `Hi! I've created a wishlist of hair extensions I'm interested in:\n\n• ${itemNames}\n\nCould you please provide pricing and availability for these items?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-96 max-w-[90vw]
        bg-background border-l border-border
        transform transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              My Wishlist
            </h3>
            <p className="text-sm text-muted-foreground">
              {wishlistItems?.length} {wishlistItems?.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {wishlistItems?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Icon name="Heart" size={24} className="text-muted-foreground" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Your wishlist is empty</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Save hair extensions you love to compare and purchase later
              </p>
              <Button
                variant="outline"
                onClick={onClose}
                size="sm"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {wishlistItems?.map((item) => (
                <div key={item?.id} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex space-x-3">
                    {/* Image */}
                    <div className="w-16 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item?.images?.[0]}
                        alt={item?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm mb-1 truncate">
                        {item?.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {item?.origin} • {item?.texture} • {item?.length}"
                      </p>
                      
                      {/* Quick specs */}
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                        <span>{item?.weight}g</span>
                        <span>•</span>
                        <span>{item?.density}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <Icon name="Star" size={10} className="text-yellow-400 fill-current mr-1" />
                          <span>{item?.rating}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="xs"
                          onClick={() => {
                            const message = encodeURIComponent(
                              `Hi! I'm interested in the ${item?.name} - ${item?.origin} ${item?.texture} hair, ${item?.length}" length. Could you please provide pricing details?`
                            );
                            window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                          }}
                          iconName="MessageCircle"
                          iconPosition="left"
                          className="flex-1 text-xs"
                        >
                          Get Price
                        </Button>
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={() => onRemoveFromWishlist(item?.id)}
                          iconName="Trash2"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {wishlistItems?.length > 0 && (
          <div className="p-6 border-t border-border space-y-3">
            <Button
              variant="default"
              fullWidth
              onClick={handleWhatsAppShare}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
            >
              Share Wishlist via WhatsApp
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={onShareWishlist}
              iconName="Share2"
              iconPosition="left"
              size="sm"
            >
              Share Wishlist
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistSidebar;