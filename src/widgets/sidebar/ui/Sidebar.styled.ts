import styled from 'styled-components';
import { COLORS, Flex } from '@/shared';

export const SidebarLayout = styled(Flex)`
  background-color: ${COLORS.bgDark};
  height: 100%;
  width: 100%;
  overflow: auto;
  text-overflow: ellipsis;
  overflow-x: hidden;

  > * {
    width: 100% !important;
  }

  a {
    all: unset;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(31, 37, 48, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(91, 100, 105, 0.9);
    border-radius: 20px; /* закругления плашки */
  }
`;

export const SearchBlockStyled = styled(Flex)`
  padding-left: 32px;
  div:last-child {
    margin-right: 12px;
  }
`;
