import { useQuery } from '@tanstack/react-query';
import { getTemperatureDistribution } from '../api/analytics';
import { ChartOptions } from 'chart.js';

export function useTemperatureDistribution() {
  const { data } = useQuery({
    queryKey: ['temperature-distribution'],
    queryFn: getTemperatureDistribution,
    placeholderData: {
      labels: ['<0°C', '0-10°C', '10-20°C', '20-30°C', '>30°C'],
      datasets: [{
        label: 'Shipments',
        data: [5, 120, 350, 270, 25],
        backgroundColor: [
          '#bfdbfe',
          '#93c5fd',
          '#60a5fa',
          '#3b82f6',
          '#2563eb'
        ]
      }]
    }
  });

  const options: ChartOptions<'bar'> = {
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