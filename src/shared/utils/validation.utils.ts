import { t } from 'i18next';
import { z } from 'zod';

export const stringRequired = (message?: string) => {
  const validationRequiredMessage = message || t('validation.required');
  return z
    .string({
      message: validationRequiredMessage,
      required_error: validationRequiredMessage,
    })
    .min(1, validationRequiredMessage);
};
