import '@telegram-apps/telegram-ui/dist/styles.css';
import './styles/index.css';
import { AppRouter } from './router';
import { Providers } from './providers';

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
