import React from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

interface AccountDetailsProps {
  accountNumber: string;
}

export function AccountDetails({ accountNumber }: AccountDetailsProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Account Details</h2>
          <p className="text-sm text-gray-500 mt-1">Your unique account identifier</p>
        </div>
        <div className="flex items-center space-x-2">
          <code className="px-4 py-2 bg-gray-100 rounded-md font-mono text-sm">
            {accountNumber}
          </code>
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center space-x-1"
          >
            {copied ? (
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}