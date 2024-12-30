import { z } from 'zod';

export const deliverySchema = z.object({
  recipientName: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  street: z.string().min(5, 'Please enter a valid street address'),
  city: z.string().min(2, 'Please enter a valid city'),
  postalCode: z.string().min(5, 'Please enter a valid postal code'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address')
});

export const pickupSchema = z.object({
  date: z.string(),
  timeSlot: z.string(),
  specialInstructions: z.string().optional(),
  boxSize: z.enum(['S', 'M', 'L', 'XL']),
  insurance: z.number().min(0).max(100000)
});