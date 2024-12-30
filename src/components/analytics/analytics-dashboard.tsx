import React from 'react';
import { ShipmentMetrics } from './metrics/shipment-metrics';
import { WeeklyShipments } from './charts/weekly-shipments';
import { TemperatureDistribution } from './charts/temperature-distribution';
import { DeliveryPerformance } from './charts/delivery-performance';
import { RegionalHeatmap } from './charts/regional-heatmap';

export function AnalyticsDashboard() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
      
      <ShipmentMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyShipments />
        <TemperatureDistribution />
        <DeliveryPerformance />
        <RegionalHeatmap />
      </div>
    </div>
  );
}