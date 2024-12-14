import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema, AuthUpSchemaType } from '../model';

const defaultValues = {
  phone: '',
  code: '',
};

export const useAuthForm = () => {
  const methodsForm = useForm<AuthUpSchemaType>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(authSchema),
  });

  const { handleSubmit } = methodsForm;

  const handleSubmitForm = () => {
    return handleSubmit((data) => {
      console.log(data);
    })();
  };

  return { methodsForm, handleSubmitForm };
};
