import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { t } from 'i18next';
import {
  Button,
  Flex,
  FormWrapper,
  LargeTitle,
  PhoneInputWithController,
  TFormProps,
} from '@/shared';
import { TextWrapper, UnderTitleText } from '../../auth.styled';

type TAuthFormFirstStepProps = TFormProps;

export const AuthFormFirstStep: FC<TAuthFormFirstStepProps> = ({
  handleSubmitForm,
  isFormLoading,
  formMethods,
}) => {
  return (
    <FormProvider {...formMethods}>
      <Flex vertical gap={32} align="center">
        <TextWrapper vertical gap={12} align="center">
          <LargeTitle weight="1" value={t('auth.firstStep')} />
          <UnderTitleText value={t('auth.phoneNumberText')} />
        </TextWrapper>
        <FormWrapper width={360} gap={8} vertical align="center" justify="center">
          <PhoneInputWithController name="phoneNumber" />
          <Button
            onClick={() => handleSubmitForm()}
            loading={isFormLoading}
            style={{ marginTop: 20 }}
            size="l"
            mode="gray"
            value={t('button.next')}
          />
        </FormWrapper>
      </Flex>
    </FormProvider>
  );
};
