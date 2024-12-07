import { useForm } from 'react-hook-form';

const defaultValues = {
  login: '',
  password: '',
  code: '',
};

export const useAuthForm = () => {
  const methodsForm = useForm({
    defaultValues,
  });

  return { methodsForm };
};
