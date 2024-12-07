import { Title as TgTitle, TitleProps } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TTitleProps = TitleProps & {
  value: string;
};

export const Title: FC<TTitleProps> = ({ value, ...otherProps }) => {
  return <TgTitle {...otherProps}>{value}</TgTitle>;
};
