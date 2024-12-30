import { useQuery } from '@tanstack/react-query';
import { getWeeklyShipments } from '../api/analytics';
import { ChartOptions } from 'chart.js';

export function useWeeklyShipments() {
  const { data } = useQuery({
    queryKey: ['weekly-shipments'],
    queryFn: getWeeklyShipments,
    placeholderData: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Shipments',
        data: [320, 280, 295, 353],
        borderColor: '#3b82f6',
        tension: 0.3
      }]
    }
  });

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      }
    }
  };

  return { data, options };
}