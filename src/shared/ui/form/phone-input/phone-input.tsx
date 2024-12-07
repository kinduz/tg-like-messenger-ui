import 'react-international-phone/style.css';

import { FC } from 'react';
import { PhoneInputProps, PhoneInput as IpPhoneInput } from 'react-international-phone';

type TPhoneInputProps = PhoneInputProps;

export const PhoneInput: FC<TPhoneInputProps> = ({ defaultCountry, ...otherProps }) => {
  return <IpPhoneInput defaultCountry="ru" {...otherProps} />;
};
