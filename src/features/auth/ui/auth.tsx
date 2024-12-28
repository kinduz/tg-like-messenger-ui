import { FormProvider } from 'react-hook-form';
import { t } from 'i18next';
import { useAuthForm, useGetGif } from '../hooks';
import { AuthImageWrapper, AuthWrapper, TextWrapper, UnderTitleText } from './auth.styled';
import { Button, Flex, FormWrapper, LargeTitle, PhoneInputWithController, Theme } from '@/shared';

export const Auth = () => {
  const rocketGif = useGetGif(Theme.DARK);

  const { methodsForm, handleSubmitForm } = useAuthForm();

  return (
    <AuthWrapper align="center" justify="center" vertical gap={24}>
      <AuthImageWrapper>
        <img src={rocketGif} alt="Rocket gif" />
      </AuthImageWrapper>
      <FormProvider {...methodsForm}>
        <Flex vertical gap={32} align="center">
          <TextWrapper vertical gap={12} align="center">
            <LargeTitle weight="1" value="Rocket Chat" />
            <UnderTitleText value={t('auth.phoneNumberText')} />
          </TextWrapper>
          <FormWrapper width={360} gap={8} vertical align="center" justify="center">
            <PhoneInputWithController name="phoneNumber" />
            <Button
              onClick={() => handleSubmitForm()}
              style={{ marginTop: 20 }}
              size="l"
              mode="gray"
              value={t('auth.submit')}
            />
          </FormWrapper>
        </Flex>
      </FormProvider>
    </AuthWrapper>
  );
};
