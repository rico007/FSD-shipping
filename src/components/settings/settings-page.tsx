import React from 'react';
import { ContactForm } from './contact-form';
import { PaymentForm } from './payment-form';
import { AccountDetails } from './account-details';

export function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h1>
      
      <div className="space-y-8">
        <AccountDetails accountNumber="PRE-2024-0001" />
        
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="text-sm text-gray-500 mt-1">Update your contact details for shipping and communication</p>
          </div>
          <div className="p-6">
            <ContactForm />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <p className="text-sm text-gray-500 mt-1">Manage your payment information for automatic billing</p>
          </div>
          <div className="p-6">
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
}