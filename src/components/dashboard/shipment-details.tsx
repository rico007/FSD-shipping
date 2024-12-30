import React from 'react';
import { MapPin, ThermometerSun, Clock } from 'lucide-react';
import { cn, getStatusColor } from '@/lib/utils';

interface ShipmentDetailsProps {
  shipment: {
    status: 'success' | 'warning' | 'error';
    destination: string;
    temperature: number;
    lastUpdated: string;
  };
}

export function ShipmentDetails({ shipment }: ShipmentDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
        <MapPin className="w-5 h-5 text-gray-500" />
        <div>
          <div className="text-sm text-gray-500">Destination</div>
          <div className="font-medium">{shipment.destination}</div>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
        <ThermometerSun className="w-5 h-5 text-gray-500" />
        <div>
          <div className="text-sm text-gray-500">Temperature</div>
          <div className="font-medium">{shipment.temperature}°C</div>
        </div>
        <div className={cn('w-2 h-2 rounded-full ml-auto', getStatusColor(shipment.status))} />
      </div>

      <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
        <Clock className="w-5 h-5 text-gray-500" />
        <div>
          <div className="text-sm text-gray-500">Last Update</div>
          <div className="font-medium">{shipment.lastUpdated}</div>
        </div>
      </div>
    </div>
  );
}