import styled from 'styled-components';
import { Flex, Headline } from '../ui';

type TFormWrapperProps = {
  width: number;
};

export const FormWrapper = styled(Flex)<TFormWrapperProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  > div {
    width: 100%;
  }
`;

export const ErrorMessage = styled(Headline)`
  font-size: 14px;
  color: red;
  padding-left: 8px;
  font-weight: 400;
`;
