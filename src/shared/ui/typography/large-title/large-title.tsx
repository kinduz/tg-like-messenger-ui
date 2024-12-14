import { LargeTitle as TgLargeTitle, LargeTitleProps } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TlargeTitleProps = LargeTitleProps & {
  value: string;
};

export const LargeTitle: FC<TlargeTitleProps> = ({ value, ...otherProps }) => {
  return <TgLargeTitle {...otherProps}>{value}</TgLargeTitle>;
};
