import React from 'react';
import { Shield, Info } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface InsuranceSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const INSURANCE_TIERS = [
  { value: 1000, label: '€1,000' },
  { value: 5000, label: '€5,000' },
  { value: 10000, label: '€10,000' },
  { value: 50000, label: '€50,000' },
  { value: 100000, label: '€100,000' },
];

export function InsuranceSelector({ value, onChange }: InsuranceSelectorProps) {
  const [customValue, setCustomValue] = React.useState('');

  const handleCustomValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCustomValue(newValue);
    const numValue = parseFloat(newValue);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100000) {
      onChange(numValue);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-2">
        <Shield className="w-5 h-5 text-blue-600 mt-1" />
        <div>
          <h4 className="font-medium">Shipment Insurance</h4>
          <p className="text-sm text-gray-500">Protect your valuable items during transit</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {INSURANCE_TIERS.map((tier) => (
          <button
            key={tier.value}
            type="button"
            onClick={() => onChange(tier.value)}
            className={`p-2 text-sm rounded-md border transition-colors ${
              value === tier.value
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            {tier.label}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <input
            type="number"
            min="0"
            max="100000"
            step="100"
            placeholder="Custom amount"
            className="w-full pl-8 pr-16 py-2 border rounded-md"
            value={customValue}
            onChange={handleCustomValueChange}
          />
          <span className="absolute left-3 top-2 text-gray-500">€</span>
        </div>
        <div className="relative group">
          <Info className="w-5 h-5 text-gray-400" />
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Maximum insurance value: {formatCurrency(100000)}
          </div>
        </div>
      </div>
    </div>
  );
}