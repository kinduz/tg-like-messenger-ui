import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { PhoneInputCustom, TPhoneInputProps } from '../phone-input';

type TPhoneInputWithControllerProps = TPhoneInputProps & {
  name: string;
};

export const PhoneInputWithController: FC<TPhoneInputWithControllerProps> = ({
  name,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <PhoneInputCustom
          errorMessage={(errors?.[name]?.message as string) || ''}
          {...field}
          {...otherProps}
        />
      )}
    />
  );
};
