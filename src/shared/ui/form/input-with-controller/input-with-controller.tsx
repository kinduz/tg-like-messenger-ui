import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, TInputProps } from '../input';

type TInputWithControllerProps = TInputProps & {
  name: string;
};

export const InputWithController: FC<TInputWithControllerProps> = ({ name, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          errorMessage={(errors?.[name]?.message as string) || ''}
          {...field}
          {...otherProps}
        />
      )}
    />
  );
};
