import React from 'react';
import { X } from 'lucide-react';
import { ShipmentTimeline } from './shipment-timeline';
import { ShipmentDetails } from './shipment-details';
import { Button } from '../ui/button';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  shipment: {
    id: string;
    status: 'success' | 'warning' | 'error';
    destination: string;
    temperature: number;
    lastUpdated: string;
  };
}

export function StatusModal({ isOpen, onClose, shipment }: StatusModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-semibold">Shipment {shipment.id}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <ShipmentDetails shipment={shipment} />
          <ShipmentTimeline shipmentId={shipment.id} />
          
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button>Download Label</Button>
          </div>
        </div>
      </div>
    </div>
  );
}