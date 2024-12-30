import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  trend?: 'higher-better' | 'lower-better';
}

export function MetricCard({ title, value, change, icon, trend = 'higher-better' }: MetricCardProps) {
  const isPositive = trend === 'higher-better' ? change > 0 : change < 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-500">{icon}</div>
        <div className={cn(
          'flex items-center text-sm',
          isPositive ? 'text-green-600' : 'text-red-600'
        )}>
          {change > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}