import { Button as TgButton, ButtonProps } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TButtonProps = ButtonProps & {
  value: string;
};

export const Button: FC<TButtonProps> = ({ value, children, ...otherProps }) => {
  return (
    <TgButton {...otherProps}>
      {value}
      {children}
    </TgButton>
  );
};
