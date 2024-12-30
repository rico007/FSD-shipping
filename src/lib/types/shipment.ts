export interface ShipmentLocation {
  id: string;
  lat: number;
  lng: number;
  label: string;
}

export interface ShipmentRoute {
  id: string;
  pickup: {
    lat: number;
    lng: number;
    address: string;
  };
  delivery: {
    lat: number;
    lng: number;
    address: string;
  };
  currentPosition: {
    lat: number;
    lng: number;
  };
  label: string;
  status: 'success' | 'warning' | 'error';
}