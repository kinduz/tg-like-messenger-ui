import { InputProps, Input as TgInput } from '@telegram-apps/telegram-ui';
import { FC } from 'react';
import { TErrorMessageType } from '@/shared';

export type TInputProps = InputProps & TErrorMessageType;

export const Input: FC<TInputProps> = ({ ...props }) => {
  return <TgInput {...props} />;
};
