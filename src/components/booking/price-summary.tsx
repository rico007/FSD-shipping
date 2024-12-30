import React from 'react';
import { formatCurrency } from '@/lib/utils';

interface PriceSummaryProps {
  basePrice: number;
  insuranceCost: number;
  total: number;
}

export function PriceSummary({ basePrice, insuranceCost, total }: PriceSummaryProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium text-gray-900 mb-4">Price Summary</h3>
      <dl className="space-y-2">
        <div className="flex justify-between text-sm">
          <dt className="text-gray-500">Base Price</dt>
          <dd className="text-gray-900">{formatCurrency(basePrice)}</dd>
        </div>
        <div className="flex justify-between text-sm">
          <dt className="text-gray-500">Insurance Cost</dt>
          <dd className="text-gray-900">{formatCurrency(insuranceCost)}</dd>
        </div>
        <div className="pt-2 border-t flex justify-between font-medium">
          <dt>Total</dt>
          <dd>{formatCurrency(total)}</dd>
        </div>
      </dl>
    </div>
  );
}