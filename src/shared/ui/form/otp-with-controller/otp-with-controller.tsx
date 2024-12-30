import { Controller, useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { Otp, TOtpProps } from '../otp';

type TOtpWithControllerProps = TOtpProps & {
  name: string;
  handleSubmit?: () => void;
};

export const OtpWithController: FC<TOtpWithControllerProps> = ({ length, name, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const onChange: TOtpProps['onChange'] = (otp: string) => {
    if (otp.length === length) {
      console.log('send');
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Otp
          errorMessage={(errors?.[name]?.message as string) || ''}
          {...field}
          onChange={onChange}
          {...otherProps}
        />
      )}
    />
  );
};
