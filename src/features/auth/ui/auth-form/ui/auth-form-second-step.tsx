import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { t } from 'i18next';
import { MdOutlineModeEdit } from 'react-icons/md';
import { Flex, FormWrapper, IconButton, LargeTitle, OtpWithController, TFormProps } from '@/shared';
import { TextWrapper, UnderTitleText } from '../../auth.styled';

type TAuthFormSecondStepProps = TFormProps & {
  phoneNumber: string;
  returnToFirstStepWithSavingPhone: () => void;
};

export const AuthFormSecondStep: FC<TAuthFormSecondStepProps> = ({
  formMethods,
  isFormLoading,
  handleSubmitForm,
  phoneNumber,
  returnToFirstStepWithSavingPhone,
}) => {
  return (
    <FormProvider {...formMethods}>
      <Flex>
        <TextWrapper vertical gap={12} align="center">
          <Flex align="center" gap={8}>
            <LargeTitle weight="1" value={phoneNumber} />
            <IconButton
              onClick={returnToFirstStepWithSavingPhone}
              color="#fff"
              mode="outline"
              type="button"
              size="l"
              style={{ boxShadow: 'none' }}
            >
              <MdOutlineModeEdit size="24px" />
            </IconButton>
          </Flex>
          <UnderTitleText value={t('auth.otpText')} />
        </TextWrapper>
      </Flex>
      <FormWrapper width={360} gap={8} vertical align="center" justify="center">
        <OtpWithController
          handleSubmit={handleSubmitForm}
          disabled={isFormLoading}
          length={6}
          name="otp"
        />
      </FormWrapper>
    </FormProvider>
  );
};
