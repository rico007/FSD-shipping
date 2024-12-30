import React from 'react';

interface NotificationToggleProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
}

export function NotificationToggle({
  icon,
  title,
  description,
  checked,
  onChange,
  children
}: NotificationToggleProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
        </div>
        <div className="ml-3">
          <div className="flex items-center space-x-2">
            {icon}
            <span className="font-medium">{title}</span>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
}