interface PricingOptions {
  boxSize: 'S' | 'M' | 'L' | 'XL';
  insurance: number;
  distance?: number;
}

const BOX_PRICES = {
  S: 29.99,
  M: 39.99,
  L: 49.99,
  XL: 69.99
};

const INSURANCE_RATE = 0.01; // 1% of insured value

export function calculatePrice({ boxSize, insurance }: PricingOptions): {
  basePrice: number;
  insuranceCost: number;
  total: number;
} {
  const basePrice = BOX_PRICES[boxSize];
  const insuranceCost = insurance * INSURANCE_RATE;
  const total = basePrice + insuranceCost;

  return {
    basePrice,
    insuranceCost,
    total
  };
}