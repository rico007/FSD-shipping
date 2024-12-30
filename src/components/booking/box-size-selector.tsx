import React from 'react';
import { Package, PackageCheck, PackagePlus, Package2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BoxSizeOption {
  size: 'S' | 'M' | 'L' | 'XL';
  icon: React.ReactNode;
  dimensions: string;
  maxWeight: string;
}

const BOX_SIZES: BoxSizeOption[] = [
  { size: 'S', icon: <Package className="w-6 h-6" />, dimensions: '20x20x20 cm', maxWeight: '5 kg' },
  { size: 'M', icon: <PackageCheck className="w-6 h-6" />, dimensions: '30x30x30 cm', maxWeight: '10 kg' },
  { size: 'L', icon: <PackagePlus className="w-6 h-6" />, dimensions: '40x40x40 cm', maxWeight: '20 kg' },
  { size: 'XL', icon: <Package2 className="w-6 h-6" />, dimensions: '50x50x50 cm', maxWeight: '30 kg' },
];

interface BoxSizeSelectorProps {
  value: 'S' | 'M' | 'L' | 'XL';
  onChange: (size: 'S' | 'M' | 'L' | 'XL') => void;
}

export function BoxSizeSelector({ value, onChange }: BoxSizeSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {BOX_SIZES.map((box) => (
        <button
          key={box.size}
          type="button"
          onClick={() => onChange(box.size)}
          className={cn(
            'p-4 rounded-lg border-2 text-left transition-colors',
            value === box.size
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          )}
        >
          <div className="flex items-center space-x-3">
            <div className="text-blue-600">{box.icon}</div>
            <div>
              <div className="font-medium">Size {box.size}</div>
              <div className="text-sm text-gray-500">
                {box.dimensions}<br />
                Up to {box.maxWeight}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}