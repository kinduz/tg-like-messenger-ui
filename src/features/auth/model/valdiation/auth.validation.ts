import * as z from 'zod';

export const authSchema = z.object({
  phone: z.string().min(1, 'Введите номер телефона'),
});

export type AuthUpSchemaType = z.infer<typeof authSchema>;
