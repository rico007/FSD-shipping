import React from 'react';
import { Layer, Source } from 'react-map-gl';
import type { ShipmentRoute } from '@/lib/types/shipment';

interface RouteLayerProps {
  route: ShipmentRoute;
}

export function RouteLayer({ route }: RouteLayerProps) {
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [
        [route.pickup.lng, route.pickup.lat],
        [route.delivery.lng, route.delivery.lat]
      ]
    }
  };

  return (
    <Source type="geojson" data={geojson}>
      <Layer
        type="line"
        paint={{
          'line-color': '#3b82f6',
          'line-width': 2,
          'line-dasharray': [2, 1]
        }}
      />
    </Source>
  );
}