import { useForm } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: '',
  code: '',
};

export const useAuthForm = () => {
  const methodsForm = useForm({
    defaultValues,
  });

  const { handleSubmit } = methodsForm;

  const handleSubmitForm = () => {
    return handleSubmit((data) => {
      console.log(data);
    })();
  };

  return { methodsForm, handleSubmitForm };
};
