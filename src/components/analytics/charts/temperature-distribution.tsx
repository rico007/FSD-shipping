import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from '@/components/ui/card';
import { useTemperatureDistribution } from '@/lib/hooks/use-temperature-distribution';

export function TemperatureDistribution() {
  const { data, options } = useTemperatureDistribution();

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Temperature Distribution</h3>
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
}