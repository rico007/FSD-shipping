import React from 'react';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import { BoxSizeSelector } from './box-size-selector';
import { InsuranceSelector } from './insurance-selector';
import { PriceSummary } from './price-summary';
import { calculatePrice } from '@/lib/pricing';
import { pickupSchema } from '@/lib/validation';

interface PickupFormProps {
  onBack: () => void;
  onNext: (data: any) => void;
}

export function PickupForm({ onBack, onNext }: PickupFormProps) {
  const [formData, setFormData] = React.useState({
    date: format(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd'),
    timeSlot: '09:00-12:00',
    specialInstructions: '',
    boxSize: 'M' as const,
    insurance: 5000
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const pricing = calculatePrice({
    boxSize: formData.boxSize,
    insurance: formData.insurance
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      pickupSchema.parse(formData);
      onNext({ ...formData, pricing });
    } catch (error) {
      if (error.errors) {
        const newErrors = {};
        error.errors.forEach(err => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
          <input
            type="date"
            required
            min={format(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.date}
            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
          />
          {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Time Slot</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.timeSlot}
            onChange={(e) => setFormData(prev => ({ ...prev, timeSlot: e.target.value }))}
          >
            <option value="09:00-12:00">Morning (9:00 - 12:00)</option>
            <option value="12:00-15:00">Early Afternoon (12:00 - 15:00)</option>
            <option value="15:00-18:00">Late Afternoon (15:00 - 18:00)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Box Size</label>
          <BoxSizeSelector
            value={formData.boxSize}
            onChange={(size) => setFormData(prev => ({ ...prev, boxSize: size }))}
          />
        </div>

        <div>
          <InsuranceSelector
            value={formData.insurance}
            onChange={(value) => setFormData(prev => ({ ...prev, insurance: value }))}
          />
          {errors.insurance && <p className="mt-1 text-sm text-red-600">{errors.insurance}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Special Instructions</label>
          <textarea
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.specialInstructions}
            onChange={(e) => setFormData(prev => ({ ...prev, specialInstructions: e.target.value }))}
            placeholder="Any special instructions for pickup..."
          />
        </div>

        <PriceSummary {...pricing} />
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">
          Review Booking
        </Button>
      </div>
    </form>
  );
}