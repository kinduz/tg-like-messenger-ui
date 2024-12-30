import styled from 'styled-components';
import { Flex, Headline } from '@/shared';

export const AuthWrapper = styled(Flex)`
  padding: 64px 128px 128px;
`;

export const AuthImageWrapper = styled('div')`
  padding: 48px;
  border-radius: 50%;
  border: 1px solid rgba(47, 47, 47, 0.15);

  img {
    width: 256px;
  }

  @media (max-width: 500px) {
    img {
      width: 160px;
    }
  }
`;

export const TextWrapper = styled(Flex)`
  max-width: 600px;
  text-align: center;
`;

export const UnderTitleText = styled(Headline)`
  font-size: 16px;
  color: gray;
`;
