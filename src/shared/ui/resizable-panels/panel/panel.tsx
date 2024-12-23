import { FC } from 'react';
import { PanelProps, Panel as RpPanel } from 'react-resizable-panels';

type TPanelProps = PanelProps;

export const Panel: FC<TPanelProps> = ({ children, ...otherProps }) => {
  return <RpPanel {...otherProps}>{children}</RpPanel>;
};
