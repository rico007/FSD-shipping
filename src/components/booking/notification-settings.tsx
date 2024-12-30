import React from 'react';
import { Bell, ThermometerSun, MapPin, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { NotificationToggle } from './notification-toggle';

interface NotificationSettingsProps {
  onBack: () => void;
  onNext: (data: NotificationPreferences) => void;
}

export interface NotificationPreferences {
  locationUpdates: 'hourly' | 'daily' | 'critical';
  temperatureAlerts: boolean;
  temperatureThreshold: number;
  motionAlerts: boolean;
  deliveryUpdates: boolean;
}

export function NotificationSettings({ onBack, onNext }: NotificationSettingsProps) {
  const [preferences, setPreferences] = React.useState<NotificationPreferences>({
    locationUpdates: 'daily',
    temperatureAlerts: true,
    temperatureThreshold: 25,
    motionAlerts: true,
    deliveryUpdates: true
  });

  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-2">
        <Bell className="w-5 h-5 text-blue-600 mt-1" />
        <div>
          <h4 className="font-medium">Notification Preferences</h4>
          <p className="text-sm text-gray-500">Configure how you want to be notified about your shipment</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="font-medium">Location Updates</span>
            </div>
            <select
              value={preferences.locationUpdates}
              onChange={(e) => setPreferences(prev => ({
                ...prev,
                locationUpdates: e.target.value as NotificationPreferences['locationUpdates']
              }))}
              className="rounded-md border-gray-300 text-sm"
            >
              <option value="hourly">Every Hour</option>
              <option value="daily">Once Daily</option>
              <option value="critical">Critical Changes Only</option>
            </select>
          </div>
          <p className="text-sm text-gray-500">How often you want to receive location updates</p>
        </div>

        <NotificationToggle
          icon={<ThermometerSun className="w-4 h-4 text-gray-600" />}
          title="Temperature Monitoring"
          description="Get alerts when temperature exceeds threshold"
          checked={preferences.temperatureAlerts}
          onChange={(checked) => setPreferences(prev => ({ ...prev, temperatureAlerts: checked }))}
        >
          {preferences.temperatureAlerts && (
            <div className="mt-2">
              <label className="text-sm text-gray-600">Alert threshold (°C)</label>
              <input
                type="number"
                value={preferences.temperatureThreshold}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  temperatureThreshold: parseInt(e.target.value)
                }))}
                className="ml-2 w-20 rounded-md border-gray-300"
                min="0"
                max="40"
              />
            </div>
          )}
        </NotificationToggle>

        <NotificationToggle
          icon={<AlertTriangle className="w-4 h-4 text-gray-600" />}
          title="Motion & Impact Detection"
          description="Get notified about unusual movement or impacts"
          checked={preferences.motionAlerts}
          onChange={(checked) => setPreferences(prev => ({ ...prev, motionAlerts: checked }))}
        />

        <NotificationToggle
          icon={<Bell className="w-4 h-4 text-gray-600" />}
          title="Delivery Updates"
          description="Receive notifications about delivery status changes"
          checked={preferences.deliveryUpdates}
          onChange={(checked) => setPreferences(prev => ({ ...prev, deliveryUpdates: checked }))}
        />
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={() => onNext(preferences)}>
          Review Booking
        </Button>
      </div>
    </div>
  );
}