import React from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_CONFIG } from '@/lib/constants';
import { MapMarker } from '../map/map-marker';
import { RouteLayer } from '../map/route-layer';
import type { ShipmentRoute } from '@/lib/types/shipment';

interface ShipmentMapProps {
  shipments: ShipmentRoute[];
  className?: string;
}

export function ShipmentMap({ shipments, className }: ShipmentMapProps) {
  // Calculate bounds to fit all points
  const bounds = React.useMemo(() => {
    if (!shipments.length) return null;
    
    const points = shipments.flatMap(s => [
      [s.pickup.lng, s.pickup.lat],
      [s.delivery.lng, s.delivery.lat],
      [s.currentPosition.lng, s.currentPosition.lat]
    ]);
    
    const lngs = points.map(p => p[0]);
    const lats = points.map(p => p[1]);
    
    return {
      minLng: Math.min(...lngs) - 1,
      maxLng: Math.max(...lngs) + 1,
      minLat: Math.min(...lats) - 1,
      maxLat: Math.max(...lats) + 1,
    };
  }, [shipments]);

  const center = React.useMemo(() => {
    if (!bounds) return { lat: 0, lng: 0 };
    return {
      lat: (bounds.minLat + bounds.maxLat) / 2,
      lng: (bounds.minLng + bounds.maxLng) / 2,
    };
  }, [bounds]);

  return (
    <div className={className}>
      <Map
        mapboxAccessToken={MAPBOX_CONFIG.apiKey}
        initialViewState={{
          latitude: center.lat,
          longitude: center.lng,
          zoom: MAPBOX_CONFIG.defaultZoom,
          bounds: bounds ? [
            [bounds.minLng, bounds.minLat],
            [bounds.maxLng, bounds.maxLat]
          ] : undefined,
        }}
        mapStyle={MAPBOX_CONFIG.style}
        style={{ width: '100%', height: '100%' }}
      >
        <NavigationControl />
        
        {shipments.map((shipment) => (
          <React.Fragment key={shipment.id}>
            <RouteLayer route={shipment} />
            
            <MapMarker
              latitude={shipment.pickup.lat}
              longitude={shipment.pickup.lng}
              label={`Pickup: ${shipment.pickup.address}`}
              type="pickup"
            />
            
            <MapMarker
              latitude={shipment.delivery.lat}
              longitude={shipment.delivery.lng}
              label={`Delivery: ${shipment.delivery.address}`}
              type="delivery"
            />
            
            <MapMarker
              latitude={shipment.currentPosition.lat}
              longitude={shipment.currentPosition.lng}
              label={`Current: ${shipment.label}`}
              type="current"
            />
          </React.Fragment>
        ))}
      </Map>
    </div>
  );
}