import React from 'react';
import { CheckCircle2, Clock, Truck, Package, Box, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ShipmentTimelineProps {
  shipmentId: string;
}

export function ShipmentTimeline({ shipmentId }: ShipmentTimelineProps) {
  // In a real app, fetch this data based on shipmentId
  const steps: TimelineStep[] = [
    {
      id: '1',
      title: 'Box Delivered',
      description: 'Special eco-friendly box delivered to sender',
      icon: <Box className="w-5 h-5" />,
      date: '2024-03-10 09:30',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Pickup Scheduled',
      description: 'Pickup scheduled for March 12, 09:00-12:00',
      icon: <Clock className="w-5 h-5" />,
      date: '2024-03-11 14:45',
      status: 'completed'
    },
    {
      id: '3',
      title: 'Package Collected',
      description: 'Package collected from sender',
      icon: <Package className="w-5 h-5" />,
      date: '2024-03-12 10:15',
      status: 'current'
    },
    {
      id: '4',
      title: 'In Transit',
      description: 'Package in transit to destination',
      icon: <Truck className="w-5 h-5" />,
      date: '',
      status: 'upcoming'
    },
    {
      id: '5',
      title: 'Delivered',
      description: 'Package delivered to recipient',
      icon: <MapPin className="w-5 h-5" />,
      date: '',
      status: 'upcoming'
    },
    {
      id: '6',
      title: 'Box Returned',
      description: 'Eco-friendly box returned to circulation',
      icon: <CheckCircle2 className="w-5 h-5" />,
      date: '',
      status: 'upcoming'
    }
  ];

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900 mb-4">Shipment Progress</h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={cn(
                'rounded-full p-2',
                step.status === 'completed' ? 'bg-green-100 text-green-600' :
                step.status === 'current' ? 'bg-blue-100 text-blue-600' :
                'bg-gray-100 text-gray-400'
              )}>
                {step.icon}
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  'w-0.5 h-full mt-2',
                  step.status === 'completed' ? 'bg-green-300' : 'bg-gray-200'
                )} />
              )}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {step.date && (
                  <span className="text-sm text-gray-500">{step.date}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}