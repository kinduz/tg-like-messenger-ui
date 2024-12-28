import * as z from 'zod';
// import { t } from 'i18next';
import { stringRequired } from '@/shared';

export const authSchema = z.object({
  phoneNumber: stringRequired(),
  // otp: stringRequired().max(6, t('validations.maxLength')),
});

export type AuthUpSchemaType = z.infer<typeof authSchema>;
