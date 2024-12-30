import { Input } from 'antd';
import styled from 'styled-components';

const { OTP } = Input;

export const OtpStyled = styled(OTP)`
  color: red;
  border: 1px solid red !important;
  width: 20px !important;

  & > .ant-otp {
    background: red;
  }
  & > & > .ant-otp-input {
    font-size: 20px;
  }
`;
