import * as z from 'zod';
import { t } from 'i18next';
import { stringRequired } from '@/shared';

export const authSchemaFirstStep = z.object({
  phoneNumber: stringRequired(),
});

export const authSchemaSecondStep = z.object({
  otp: stringRequired().max(6, t('validations.required')),
});

export type AuthSchemaFirstStepType = z.infer<typeof authSchemaFirstStep>;
export type AuthSchemaSecondStepType = z.infer<typeof authSchemaSecondStep>;
