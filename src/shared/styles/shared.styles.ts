import styled from 'styled-components';
import { Flex } from '../ui';

type TFormWrapperProps = {
  width: number;
};

export const FormWrapper = styled(Flex)<TFormWrapperProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  > div {
    width: 100%;
  }
`;
