import { Cell, CellProps } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TChatCellProps = CellProps & {
  chatName: string;
};

export const ChatCell: FC<TChatCellProps> = ({ chatName, children, ...otherProps }) => {
  return (
    <Cell {...otherProps}>
      {chatName}
      {children}
    </Cell>
  );
};
