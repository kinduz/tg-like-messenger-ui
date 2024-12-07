import { InputProps, Input as TgInput } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TInputProps = InputProps;

export const Input: FC<TInputProps> = ({ ...props }) => {
  return <TgInput {...props} />;
};
