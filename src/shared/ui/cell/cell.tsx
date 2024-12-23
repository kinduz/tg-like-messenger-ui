import { FC } from 'react';
import { CellProps, Cell as AntCell } from '@telegram-apps/telegram-ui';

type TCellProps = CellProps;

export const Cell: FC<TCellProps> = ({ children, ...otherProps }) => {
  return <AntCell {...otherProps}>{children}</AntCell>;
};
