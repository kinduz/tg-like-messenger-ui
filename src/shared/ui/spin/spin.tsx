import { Spinner } from '@telegram-apps/telegram-ui';
import { FC } from 'react';
import type { SpinnerProps } from '@telegram-apps/telegram-ui';

type TSpinProps = SpinnerProps;

export const Spin: FC<TSpinProps> = ({ size, ...otherProps }) => {
  return <Spinner size="m" {...otherProps} />;
};
