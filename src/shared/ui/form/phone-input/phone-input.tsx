import 'react-phone-input-2/lib/bootstrap.css';
import ru from 'react-phone-input-2/lang/ru.json';
import { PhoneInputProps } from 'react-phone-input-2';
import { FC } from 'react';
import { PhoneInputStyled } from './phone-input.styled';
import { useTheme } from '@/shared/lib';
import { ErrorMessage, Flex, TErrorMessageType } from '@/shared';

export type TPhoneInputProps = PhoneInputProps & TErrorMessageType;

export const PhoneInputCustom: FC<TPhoneInputProps> = ({
  localization,
  country,
  errorMessage,
  ...otherProps
}) => {
  const { theme } = useTheme();
  return (
    <Flex vertical gap={8}>
      <PhoneInputStyled localization={ru} theme={theme} country="ru" {...otherProps} />
      {errorMessage && <ErrorMessage value={errorMessage} />}
    </Flex>
  );
};
