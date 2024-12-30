import { useQuery } from '@tanstack/react-query';
import { getRegionalData } from '../api/analytics';

export function useRegionalData() {
  const { data } = useQuery({
    queryKey: ['regional-data'],
    queryFn: getRegionalData,
    placeholderData: {
      type: 'FeatureCollection',
      features: [
        // Mock heatmap data points would go here
      ]
    }
  });

  return { data };
}