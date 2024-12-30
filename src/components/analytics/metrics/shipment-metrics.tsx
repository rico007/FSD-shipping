import React from 'react';
import { Package, Clock, ThermometerSun, AlertTriangle } from 'lucide-react';
import { MetricCard } from './metric-card';
import { useShipmentMetrics } from '@/lib/hooks/use-shipment-metrics';

export function ShipmentMetrics() {
  const metrics = useShipmentMetrics();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Shipments"
        value={metrics.total}
        change={metrics.totalChange}
        icon={<Package className="w-5 h-5" />}
      />
      <MetricCard
        title="On-Time Delivery"
        value={`${metrics.onTimePercentage}%`}
        change={metrics.onTimeChange}
        icon={<Clock className="w-5 h-5" />}
      />
      <MetricCard
        title="Temperature Alerts"
        value={metrics.temperatureAlerts}
        change={metrics.temperatureAlertsChange}
        trend="lower-better"
        icon={<ThermometerSun className="w-5 h-5" />}
      />
      <MetricCard
        title="Incidents"
        value={metrics.incidents}
        change={metrics.incidentsChange}
        trend="lower-better"
        icon={<AlertTriangle className="w-5 h-5" />}
      />
    </div>
  );
}