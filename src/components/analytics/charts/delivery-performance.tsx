import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card } from '@/components/ui/card';
import { useDeliveryPerformance } from '@/lib/hooks/use-delivery-performance';

export function DeliveryPerformance() {
  const { data, options } = useDeliveryPerformance();

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Delivery Performance</h3>
        <Doughnut data={data} options={options} />
      </div>
    </Card>
  );
}