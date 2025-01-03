import { Image } from 'antd';
import { useAuthForm, useGetGif } from '../hooks';
import { AuthImageWrapper, AuthWrapper } from './auth.styled';
import { useTheme } from '@/shared';

export const Auth = () => {
  const { theme } = useTheme();
  const { currentFormStep, currentFormContent } = useAuthForm();

  const formGif = useGetGif(theme, currentFormStep);

  return (
    <AuthWrapper align="center" justify="center" vertical gap={24}>
      <AuthImageWrapper>
        <Image preview={false} width={256} src={formGif} alt="FormGif" />
      </AuthImageWrapper>
      {currentFormContent}
    </AuthWrapper>
  );
};
