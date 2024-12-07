import { BrowserRouter } from 'react-router-dom';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { FC, PropsWithChildren, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppRoot appearance="dark" platform="base">
            {children}
          </AppRoot>
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  );
};
