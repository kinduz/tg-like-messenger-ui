import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { authService } from '@/shared';
import {
  authSchemaFirstStep,
  AuthSchemaFirstStepType,
  authSchemaSecondStep,
  AuthSchemaSecondStepType,
} from '../model';

const defaultValuesFirstStep = {
  phoneNumber: '',
};

const defaultValuesSecondStep = {
  otp: '',
};

export const useAuthForm = () => {
  const [currentFormStep, setCurrentFormStep] = useState<number>(0);

  const methodsFirstStepAuthForm = useForm<AuthSchemaFirstStepType>({
    defaultValues: defaultValuesFirstStep,
    mode: 'onSubmit',
    resolver: zodResolver(authSchemaFirstStep),
  });

  const methodsSecondStepAuthForm = useForm<AuthSchemaSecondStepType>({
    defaultValues: defaultValuesSecondStep,
    mode: 'onSubmit',
    resolver: zodResolver(authSchemaSecondStep),
  });

  const { handleSubmit: handleSubmitFirstStep } = methodsFirstStepAuthForm;
  const { handleSubmit: handleSubmitSecondStep } = methodsSecondStepAuthForm;

  const { mutate: firstStepAuthFormMutation, isLoading: isFirstStepAuthFormMutationLoading } =
    useMutation({
      mutationFn: async (data: AuthSchemaFirstStepType) => {
        await authService.startLoginByPhoneNumber(data);
      },
      onSuccess: () => {
        setCurrentFormStep((prev) => prev + 1);
      },
    });

  const handleSubmitFirstStepAuthForm = () => {
    return handleSubmitFirstStep(async (data) => {
      firstStepAuthFormMutation(data);
    })();
  };

  const handleSubmitSecondStepAuthForm = () => {
    return handleSubmitSecondStep(async (data) => {
      console.log(data);
      return null;
    });
  };

  const isFormLoading = isFirstStepAuthFormMutationLoading;

  return {
    methodsFirstStepAuthForm,
    methodsSecondStepAuthForm,
    handleSubmitFirstStepAuthForm,
    handleSubmitSecondStepAuthForm,
    currentFormStep,
    setCurrentFormStep,
    isFormLoading,
  };
};
