import React from 'react';
import { Marker, Popup } from 'react-map-gl';
import { Package, MapPin, Box } from 'lucide-react';

interface MapMarkerProps {
  latitude: number;
  longitude: number;
  label: string;
  type: 'pickup' | 'delivery' | 'current';
}

export function MapMarker({ latitude, longitude, label, type }: MapMarkerProps) {
  const [showPopup, setShowPopup] = React.useState(false);

  const getIcon = () => {
    switch (type) {
      case 'pickup':
        return <Box className="w-5 h-5" />;
      case 'delivery':
        return <MapPin className="w-5 h-5" />;
      case 'current':
        return <Package className="w-5 h-5" />;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'pickup':
        return 'text-green-500';
      case 'delivery':
        return 'text-red-500';
      case 'current':
        return 'text-blue-500';
    }
  };

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      onClick={e => {
        e.originalEvent.stopPropagation();
        setShowPopup(true);
      }}
    >
      <div className={getColor()}>
        {getIcon()}
      </div>
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="top"
        >
          <div className="px-2 py-1">
            <p className="text-sm font-medium">{label}</p>
          </div>
        </Popup>
      )}
    </Marker>
  );
}