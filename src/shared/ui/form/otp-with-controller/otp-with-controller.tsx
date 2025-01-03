import { Controller, useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { Otp, TOtpProps } from '../otp';

type TOtpWithControllerProps = TOtpProps & {
  name: string;
  handleSubmit?: () => void;
};

export const OtpWithController: FC<TOtpWithControllerProps> = ({
  length,
  name,
  handleSubmit,
  ...otherProps
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const onChange: TOtpProps['onChange'] = (otp: string) => {
    setValue(name, otp);

    if (otp.length === length && !!handleSubmit) {
      handleSubmit();
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
