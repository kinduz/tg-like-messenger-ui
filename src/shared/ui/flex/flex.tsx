import { FC } from 'react';
import { Flex as AntFlex, FlexProps } from 'antd';

type TFlexProps = FlexProps;

export const Flex: FC<TFlexProps> = ({ children, ...otherProps }) => {
  return <AntFlex {...otherProps}>{children}</AntFlex>;
};
