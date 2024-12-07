import { HeadlineProps, Headline as TgHeadline } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type THeadlineProps = HeadlineProps & {
  value: string;
};

export const Headline: FC<THeadlineProps> = ({ value, ...otherProps }) => {
  return <TgHeadline {...otherProps}>{value}</TgHeadline>;
};
