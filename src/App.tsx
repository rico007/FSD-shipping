import React from 'react';
import { Package2, Truck, BarChart3, Settings } from 'lucide-react';
import { StatusCard } from './components/dashboard/status-card';
import { ShipmentMap } from './components/dashboard/shipment-map';
import { Button } from './components/ui/button';
import { BookingModal } from './components/booking/booking-modal';
import { SettingsPage } from './components/settings/settings-page';
import { AnalyticsDashboard } from './components/analytics/analytics-dashboard';
import { cn } from './lib/utils';
import './components/analytics/charts/chart-config';

const mockShipments = [
  {
    id: 'SHP-001',
    pickup: {
      lat: 52.520008,
      lng: 13.404954,
      address: 'Berlin, Germany'
    },
    delivery: {
      lat: 48.856614,
      lng: 2.352222,
      address: 'Paris, France'
    },
    currentPosition: {
      lat: 49.937531,
      lng: 14.960279
    },
    label: 'Premium Electronics Shipment',
    status: 'success' as const
  },
  {
    id: 'SHP-002',
    pickup: {
      lat: 51.507351,
      lng: -0.127758,
      address: 'London, UK'
    },
    delivery: {
      lat: 41.902783,
      lng: 12.496366,
      address: 'Rome, Italy'
    },
    currentPosition: {
      lat: 48.208174,
      lng: 16.373819
    },
    label: 'Medical Supplies',
    status: 'warning' as const
  }
];

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);
  const [currentView, setCurrentView] = React.useState<'dashboard' | 'analytics' | 'settings'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 h-screen w-16 bg-white shadow-lg flex flex-col items-center py-8 space-y-8">
        <button 
          className={cn(
            "p-2 rounded-lg transition-colors",
            currentView === 'dashboard' ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-blue-600"
          )}
          onClick={() => setCurrentView('dashboard')}
        >
          <Package2 className="w-6 h-6" />
        </button>
        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
          <Truck className="w-6 h-6" />
        </button>
        <button 
          className={cn(
            "p-2 rounded-lg transition-colors",
            currentView === 'analytics' ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-blue-600"
          )}
          onClick={() => setCurrentView('analytics')}
        >
          <BarChart3 className="w-6 h-6" />
        </button>
        <button 
          className={cn(
            "p-2 rounded-lg transition-colors mt-auto",
            currentView === 'settings' ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-blue-600"
          )}
          onClick={() => setCurrentView('settings')}
        >
          <Settings className="w-6 h-6" />
        </button>
      </nav>

      <main className="ml-16">
        {currentView === 'dashboard' && (
          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <Button onClick={() => setIsBookingModalOpen(true)}>
                  Book New Shipment
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                  {mockShipments.map((shipment) => (
                    <StatusCard
                      key={shipment.id}
                      shipmentId={shipment.id}
                      destination={shipment.delivery.address}
                      temperature={22.5}
                      status={shipment.status}
                      lastUpdated="2 minutes ago"
                    />
                  ))}
                </div>

                <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Live Tracking</h2>
                  <ShipmentMap
                    shipments={mockShipments}
                    className="h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentView === 'analytics' && <AnalyticsDashboard />}
        
        {currentView === 'settings' && <SettingsPage />}
      </main>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;