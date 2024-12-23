import { FC } from 'react';
import { PanelGroupProps, PanelGroup as RpPanelGroup } from 'react-resizable-panels';

type TPanelGroupProps = PanelGroupProps;

export const PanelGroup: FC<TPanelGroupProps> = ({ children, ...otherProps }) => {
  return <RpPanelGroup {...otherProps}>{children}</RpPanelGroup>;
};
