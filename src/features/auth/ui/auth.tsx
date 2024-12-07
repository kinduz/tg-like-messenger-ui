import { FormProvider } from 'react-hook-form';
import { t } from 'i18next';
import { useAuthForm, useGetGif } from '../hooks';
import { AuthImageWrapper, AuthWrapper } from './auth.styled';
import { Button, FormWrapper, Input } from '@/shared';

export const Auth = () => {
  const rocketGif = useGetGif('dark');

  // eslint-disable-next-line no-unused-vars
  const { methodsForm } = useAuthForm();

  return (
    <AuthWrapper align="center" justify="center" vertical gap={24}>
      <AuthImageWrapper>
        <img src={rocketGif} alt="Rocket gif" />
      </AuthImageWrapper>
      <FormProvider {...methodsForm}>
        <FormWrapper width={360} vertical align="center">
          <Input placeholder={t('form.label.email')} />
          <Input placeholder={t('form.label.password')} />
          <Button type="submit" style={{ marginTop: 20 }} mode="gray" value={t('auth.submit')} />
        </FormWrapper>
      </FormProvider>
    </AuthWrapper>
  );
};
