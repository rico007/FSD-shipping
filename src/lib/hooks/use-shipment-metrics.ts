import { useQuery } from '@tanstack/react-query';
import { getShipmentMetrics } from '../api/analytics';

export function useShipmentMetrics() {
  const { data } = useQuery({
    queryKey: ['shipment-metrics'],
    queryFn: getShipmentMetrics,
    placeholderData: {
      total: 1248,
      totalChange: 12.5,
      onTimePercentage: 94.2,
      onTimeChange: 2.1,
      temperatureAlerts: 23,
      temperatureAlertsChange: -15.3,
      incidents: 7,
      incidentsChange: -22.4
    }
  });

  return data;
}