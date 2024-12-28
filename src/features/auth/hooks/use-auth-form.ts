import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { authSchema, AuthUpSchemaType } from '../model';
import { authService } from '@/shared';

const defaultValues = {
  phoneNumber: '',
  code: '',
};

export const useAuthForm = () => {
  const [currentFormStep, setCurrentFormStep] = useState<number>(0);

  const methodsForm = useForm<AuthUpSchemaType>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(authSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methodsForm;
  console.log(errors);

  const handleSubmitForm = () => {
    return handleSubmit(async (data) => {
      console.log(data);
      await authService.startLoginByPhoneNumber(data);
    })();
  };

  return { methodsForm, handleSubmitForm, currentFormStep, setCurrentFormStep };
};
