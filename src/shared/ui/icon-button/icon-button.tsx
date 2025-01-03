import { IconButtonProps, IconButton as TgIconButton } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TIconButtonProps = IconButtonProps;

export const IconButton: FC<TIconButtonProps> = ({ children, ...otherProps }) => {
  return <TgIconButton {...otherProps}>{children}</TgIconButton>;
};
