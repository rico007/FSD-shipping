import { useQuery } from '@tanstack/react-query';
import { getDeliveryPerformance } from '../api/analytics';
import { ChartOptions } from 'chart.js';

export function useDeliveryPerformance() {
  const { data } = useQuery({
    queryKey: ['delivery-performance'],
    queryFn: getDeliveryPerformance,
    placeholderData: {
      labels: ['On Time', 'Delayed', 'Early'],
      datasets: [{
        data: [75, 15, 10],
        backgroundColor: [
          '#22c55e',
          '#f59e0b',
          '#3b82f6'
        ]
      }]
    }
  });

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    cutout: '70%'
  };

  return { data, options };
}