import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { t } from 'i18next';
import { Flex, FormWrapper, LargeTitle, OtpWithController, TFormProps } from '@/shared';
import { TextWrapper, UnderTitleText } from '../../auth.styled';

type TAuthFormSecondStepProps = Omit<TFormProps, 'isFormLoading'>;

export const AuthFormSecondStep: FC<TAuthFormSecondStepProps> = ({
  formMethods,
  // handleSubmitForm,
}) => {
  return (
    <FormProvider {...formMethods}>
      <Flex>
        <TextWrapper vertical gap={12} align="center">
          <LargeTitle weight="1" value={t('auth.secondStep')} />
          <UnderTitleText value={t('auth.otpText')} />
        </TextWrapper>
      </Flex>
      <FormWrapper width={360} gap={8} vertical align="center" justify="center">
        <OtpWithController length={6} name="otp" />
      </FormWrapper>
    </FormProvider>
  );
};
