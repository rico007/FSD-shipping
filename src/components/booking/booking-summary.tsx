import React from 'react';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import type { NotificationPreferences } from './notification-settings';

interface BookingSummaryProps {
  data: {
    delivery: any;
    pickup: any;
    notifications: NotificationPreferences;
  };
  onBack: () => void;
  onConfirm: () => void;
}

export function BookingSummary({ data, onBack, onConfirm }: BookingSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {/* Existing delivery and pickup details */}
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Notification Settings</h3>
          <dl className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Location Updates</dt>
              <dd className="text-gray-900 capitalize">{data.notifications.locationUpdates}</dd>
            </div>
            {data.notifications.temperatureAlerts && (
              <div className="flex justify-between">
                <dt className="text-gray-500">Temperature Threshold</dt>
                <dd className="text-gray-900">{data.notifications.temperatureThreshold}°C</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-gray-500">Motion Alerts</dt>
              <dd className="text-gray-900">{data.notifications.motionAlerts ? 'Enabled' : 'Disabled'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Delivery Updates</dt>
              <dd className="text-gray-900">{data.notifications.deliveryUpdates ? 'Enabled' : 'Disabled'}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onConfirm}>
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}