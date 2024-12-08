import styled from 'styled-components';
import { Flex } from '@/shared';

export const AuthWrapper = styled(Flex)`
  padding: 64px 128px 128px;
`;

export const AuthImageWrapper = styled('div')`
  padding: 48px;
  border-radius: 50%;
  border: 1px solid rgba(47, 47, 47, 0.4);

  img {
    width: 200px;
  }

  @media (max-width: 500px) {
    img {
      width: 160px;
    }
  }
`;
