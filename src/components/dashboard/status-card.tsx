import React from 'react';
import { Package2, ThermometerSun, MapPin } from 'lucide-react';
import { cn, getStatusColor } from '@/lib/utils';
import { StatusModal } from './status-modal';

interface StatusCardProps {
  shipmentId: string;
  destination: string;
  temperature: number;
  status: 'success' | 'warning' | 'error';
  lastUpdated: string;
}

export function StatusCard(props: StatusCardProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Package2 className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900">{props.shipmentId}</span>
          </div>
          <div className={cn('w-3 h-3 rounded-full', getStatusColor(props.status))} />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{props.destination}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600">
            <ThermometerSun className="w-4 h-4" />
            <span className="text-sm">{props.temperature}°C</span>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-gray-500">
          Last updated: {props.lastUpdated}
        </div>
      </button>

      <StatusModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        shipment={props}
      />
    </>
  );
}