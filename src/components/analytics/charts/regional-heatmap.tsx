import React from 'react';
import { Card } from '@/components/ui/card';
import { useRegionalData } from '@/lib/hooks/use-regional-data';
import Map, { Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_CONFIG } from '@/lib/constants';

export function RegionalHeatmap() {
  const { data } = useRegionalData();

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Regional Distribution</h3>
        <div className="h-[300px]">
          <Map
            mapboxAccessToken={MAPBOX_CONFIG.apiKey}
            initialViewState={{
              latitude: 51.5074,
              longitude: -0.1278,
              zoom: 4
            }}
            mapStyle={MAPBOX_CONFIG.style}
            style={{ width: '100%', height: '100%' }}
          >
            <Source type="geojson" data={data}>
              <Layer
                id="heatmap"
                type="heatmap"
                paint={{
                  'heatmap-weight': ['interpolate', ['linear'], ['get', 'density'], 0, 0, 1, 1],
                  'heatmap-intensity': 1,
                  'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0, 'rgba(0, 0, 255, 0)',
                    0.2, '#3b82f6',
                    0.4, '#2563eb',
                    0.6, '#1d4ed8',
                    0.8, '#1e40af',
                    1, '#1e3a8a'
                  ],
                  'heatmap-radius': 30
                }}
              />
            </Source>
          </Map>
        </div>
      </div>
    </Card>
  );
}