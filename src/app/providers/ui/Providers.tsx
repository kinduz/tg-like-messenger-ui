import { BrowserRouter } from 'react-router-dom';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { FC, PropsWithChildren, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useTheme } from '@/shared';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();

  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AppRoot appearance={theme} platform="base">
              {children}
            </AppRoot>
          </QueryClientProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};
