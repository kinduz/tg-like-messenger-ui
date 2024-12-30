import { Cell, CellProps } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TChatInfoProps = CellProps & {
  chatName: string;
};

export const ChatInfo: FC<TChatInfoProps> = ({ chatName, children, ...otherProps }) => {
  return (
    <Cell {...otherProps}>
      {chatName}
      {children}
    </Cell>
  );
};
