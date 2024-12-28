import { t } from 'i18next';
import { z } from 'zod';

export const stringRequired = (message?: string) => {
  return z
    .string({
      message: message || t('validation.required'),
      required_error: message || t('validation.required'),
    })
    .min(1, message || t('validation.required'));
};
