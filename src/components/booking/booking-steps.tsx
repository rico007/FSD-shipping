import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingStepsProps {
  currentStep: number;
}

export function BookingSteps({ currentStep }: BookingStepsProps) {
  const steps = [
    'Box Delivery',
    'Pickup Request',
    'Notifications',
    'Confirm Booking'
  ];

  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex items-center">
            <div className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center',
              currentStep > index + 1 ? 'bg-green-500' : 
              currentStep === index + 1 ? 'bg-blue-600' : 'bg-gray-200',
              'text-white'
            )}>
              {currentStep > index + 1 ? <Check className="w-5 h-5" /> : index + 1}
            </div>
            <span className="ml-2 text-sm font-medium">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={cn(
              'h-0.5 w-16 mx-4',
              currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
            )} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}