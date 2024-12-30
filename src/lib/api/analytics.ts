// Mock API functions for analytics data
export async function getShipmentMetrics() {
  // In a real app, this would fetch from an API
  return {
    total: 1248,
    totalChange: 12.5,
    onTimePercentage: 94.2,
    onTimeChange: 2.1,
    temperatureAlerts: 23,
    temperatureAlertsChange: -15.3,
    incidents: 7,
    incidentsChange: -22.4
  };
}

export async function getWeeklyShipments() {
  return {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Shipments',
      data: [320, 280, 295, 353],
      borderColor: '#3b82f6',
      tension: 0.3
    }]
  };
}

export async function getTemperatureDistribution() {
  return {
    labels: ['<0°C', '0-10°C', '10-20°C', '20-30°C', '>30°C'],
    datasets: [{
      label: 'Shipments',
      data: [5, 120, 350, 270, 25],
      backgroundColor: [
        '#bfdbfe',
        '#93c5fd',
        '#60a5fa',
        '#3b82f6',
        '#2563eb'
      ]
    }]
  };
}

export async function getDeliveryPerformance() {
  return {
    labels: ['On Time', 'Delayed', 'Early'],
    datasets: [{
      data: [75, 15, 10],
      backgroundColor: [
        '#22c55e',
        '#f59e0b',
        '#3b82f6'
      ]
    }]
  };
}

export async function getRegionalData() {
  return {
    type: 'FeatureCollection',
    features: [
      // Mock heatmap data points would go here
    ]
  };
}