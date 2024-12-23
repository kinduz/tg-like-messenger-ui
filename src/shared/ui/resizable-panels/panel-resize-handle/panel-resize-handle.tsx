import { FC } from 'react';
import {
  PanelResizeHandleProps,
  PanelResizeHandle as RpPanelResizeHandle,
} from 'react-resizable-panels';

type TPanelResizeHandleProps = PanelResizeHandleProps;

export const PanelResizeHandle: FC<TPanelResizeHandleProps> = (props) => {
  return <RpPanelResizeHandle {...props} />;
};
