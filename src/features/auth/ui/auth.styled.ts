import styled from 'styled-components';
import { Flex } from '@/shared';

export const AuthWrapper = styled(Flex)`
  padding: 128px;
`;

export const AuthImageWrapper = styled('div')`
  img {
    width: 240px;
  }

  @media (max-width: 500px) {
    img {
      width: 160px;
    }
  }
`;
