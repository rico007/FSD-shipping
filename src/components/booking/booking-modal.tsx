import React from 'react';
import { X } from 'lucide-react';
import { BookingSteps } from './booking-steps';
import { DeliveryForm } from './delivery-form';
import { PickupForm } from './pickup-form';
import { NotificationSettings, type NotificationPreferences } from './notification-settings';
import { BookingSummary } from './booking-summary';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = React.useState(1);
  const [bookingData, setBookingData] = React.useState({
    delivery: null,
    pickup: null,
    notifications: null
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-semibold">Book New Shipment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <BookingSteps currentStep={step} />

          {step === 1 && (
            <DeliveryForm
              onNext={(data) => {
                setBookingData(prev => ({ ...prev, delivery: data }));
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <PickupForm
              onBack={() => setStep(1)}
              onNext={(data) => {
                setBookingData(prev => ({ ...prev, pickup: data }));
                setStep(3);
              }}
            />
          )}

          {step === 3 && (
            <NotificationSettings
              onBack={() => setStep(2)}
              onNext={(data) => {
                setBookingData(prev => ({ ...prev, notifications: data }));
                setStep(4);
              }}
            />
          )}

          {step === 4 && (
            <BookingSummary
              data={bookingData}
              onBack={() => setStep(3)}
              onConfirm={() => {
                // Handle booking confirmation
                onClose();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}