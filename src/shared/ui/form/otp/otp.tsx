import { GetProps, Input } from 'antd';
import { FC } from 'react';
import { TErrorMessageType } from '@/shared/model';
import { ErrorMessage, Flex } from '@/shared';

const { OTP: AntOtp } = Input;

export type TOtpProps = GetProps<typeof Input.OTP> & TErrorMessageType;

export const Otp: FC<TOtpProps> = ({ errorMessage, ...otherProps }) => {
  return (
    <Flex vertical gap={8}>
      <AntOtp size="large" {...otherProps} />
      {errorMessage && <ErrorMessage value={errorMessage} />}
    </Flex>
  );
};
