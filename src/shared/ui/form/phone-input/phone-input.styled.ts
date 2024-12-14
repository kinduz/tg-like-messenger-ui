import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';
import { COLORS } from '@/shared/constants';
import { Theme } from '@/shared/lib';

type TPhoneInputStyledProps = {
  theme?: string;
};

export const PhoneInputStyled = styled(PhoneInput)<TPhoneInputStyledProps>`
  color: ${({ theme }) => (theme === Theme.LIGHT ? COLORS.textDark : COLORS.textLight)} !important;
  .form-control,
  .form-control:focus {
    width: 100%;
    border-radius: 14px;
    box-shadow: none;
    background: ${({ theme }) => (theme === Theme.LIGHT ? COLORS.bgLight : COLORS.bgDark)};
    border: 1px solid
      ${({ theme }) => (theme === Theme.LIGHT ? COLORS.borderColorLight : COLORS.borderColorDark)};
    color: ${({ theme }) =>
      theme === Theme.LIGHT ? COLORS.textDark : COLORS.textLight} !important;
  }

  .flag-dropdown.open,
  .flag-dropdown.open:focus,
  .selected-flag:before,
  .selected-flag.open:before {
    box-shadow: none !important;
    border-color: transparent !important;
  }

  .country-list {
    background: ${({ theme }) => (theme === Theme.LIGHT ? COLORS.bgLight : COLORS.bgDark)};
  }

  .country.highlight,
  .country:hover {
    background: ${({ theme }) =>
      theme === Theme.LIGHT ? COLORS.borderColorLight : COLORS.borderColorDark} !important;
  }

  .country-list::-webkit-scrollbar {
    width: 8px;
  }
  .country-list::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme === Theme.LIGHT ? COLORS.borderColorLight : COLORS.borderColorDark};
  }
  .country-list::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 20px;
  }
`;
