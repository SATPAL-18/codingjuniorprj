import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  street: z.string().min(3, 'Street address must be at least 3 characters'),
  city: z.string().min(2, 'City must be at least 2 characters').max(30, 'City must be less than 30 characters'),
  zipcode: z.string().min(4, 'Zipcode must be at least 4 characters').max(10, 'Zipcode must be less than 10 characters'),
});

export type UserFormData = z.infer<typeof userSchema>;