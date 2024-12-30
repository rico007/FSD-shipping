import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from '@/components/ui/card';
import { useWeeklyShipments } from '@/lib/hooks/use-weekly-shipments';

export function WeeklyShipments() {
  const { data, options } = useWeeklyShipments();

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Shipments</h3>
        <Line data={data} options={options} />
      </div>
    </Card>
  );
}