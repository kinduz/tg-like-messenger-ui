import { useAuthForm, useGetGif } from '../hooks';
import { AuthImageWrapper, AuthWrapper } from './auth.styled';
import { AuthFormFirstStep, AuthFormSecondStep } from './auth-form';
import { useTheme } from '@/shared';

export const Auth = () => {
  const { theme } = useTheme();
  const {
    currentFormStep,
    isFormLoading,
    methodsFirstStepAuthForm,
    methodsSecondStepAuthForm,
    handleSubmitFirstStepAuthForm,
    handleSubmitSecondStepAuthForm,
  } = useAuthForm();

  const currentFormContent =
    currentFormStep === 0 ? (
      <AuthFormFirstStep
        isFormLoading={isFormLoading}
        handleSubmitForm={handleSubmitFirstStepAuthForm}
        formMethods={methodsFirstStepAuthForm}
      />
    ) : (
      <AuthFormSecondStep
        handleSubmitForm={handleSubmitSecondStepAuthForm}
        formMethods={methodsSecondStepAuthForm}
      />
    );

  const formGif = useGetGif(theme, currentFormStep);

  return (
    <AuthWrapper align="center" justify="center" vertical gap={24}>
      <AuthImageWrapper>
        <img src={formGif} alt="FormGif" />
      </AuthImageWrapper>
      {currentFormContent}
    </AuthWrapper>
  );
};
