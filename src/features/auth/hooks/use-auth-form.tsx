import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import { authService } from '@/shared';
import {
  authSchemaFirstStep,
  AuthSchemaFirstStepType,
  authSchemaSecondStep,
  AuthSchemaSecondStepType,
} from '../model';
import { AuthFormFirstStep, AuthFormSecondStep } from '../ui/auth-form';

const INITIAL_STEP = 0;

const defaultValuesFirstStep = {
  phoneNumber: '',
};

const defaultValuesSecondStep = {
  otp: '',
};

export const useAuthForm = () => {
  const [currentFormStep, setCurrentFormStep] = useState<number>(INITIAL_STEP);

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

  const {
    handleSubmit: handleSubmitFirstStep,
    watch: watchFirstStepForm,
    setValue: setFirstStepValue,
  } = methodsFirstStepAuthForm;

  const { phoneNumber } = watchFirstStepForm();

  const { handleSubmit: handleSubmitSecondStep } = methodsSecondStepAuthForm;

  const returnToFirstStepWithSavingPhone = () => {
    setCurrentFormStep(INITIAL_STEP);
    setFirstStepValue('phoneNumber', phoneNumber);
  };

  const { mutate: firstStepAuthFormMutation, isLoading: isFirstStepAuthFormMutationLoading } =
    useMutation({
      mutationFn: async (data: AuthSchemaFirstStepType) => {
        await authService.startLoginByPhoneNumber(data);
      },
      onSuccess: () => {
        setCurrentFormStep((prev) => prev + 1);
      },
    });

  const { mutate: secondStepAuthFormMutation, isLoading: isSecondStepAuthFormMutationLoading } =
    useMutation({
      mutationFn: async (data: AuthSchemaSecondStepType) => {
        await authService.sendOtp({ ...data, phoneNumber });
      },
      onSuccess: () => {
        alert('Success');
      },
    });

  const handleSubmitFirstStepAuthForm = () => {
    return handleSubmitFirstStep(async (data) => {
      firstStepAuthFormMutation(data);
    })();
  };

  const handleSubmitSecondStepAuthForm = () => {
    return handleSubmitSecondStep(async (data) => {
      secondStepAuthFormMutation(data);
    })();
  };

  const isFormLoading = isFirstStepAuthFormMutationLoading || isSecondStepAuthFormMutationLoading;

  const currentFormContent = useMemo(() => {
    return currentFormStep === 0 ? (
      <AuthFormFirstStep
        isFormLoading={isFormLoading}
        handleSubmitForm={handleSubmitFirstStepAuthForm}
        formMethods={methodsFirstStepAuthForm}
      />
    ) : (
      <AuthFormSecondStep
        phoneNumber={phoneNumber}
        isFormLoading={isFormLoading}
        handleSubmitForm={handleSubmitSecondStepAuthForm}
        formMethods={methodsSecondStepAuthForm}
        returnToFirstStepWithSavingPhone={returnToFirstStepWithSavingPhone}
      />
    );
  }, [currentFormStep, phoneNumber]);

  return {
    methodsFirstStepAuthForm,
    methodsSecondStepAuthForm,
    handleSubmitFirstStepAuthForm,
    handleSubmitSecondStepAuthForm,
    currentFormStep,
    setCurrentFormStep,
    isFormLoading,
    phoneNumber,
    returnToFirstStepWithSavingPhone,
    currentFormContent,
  };
};
