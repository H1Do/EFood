import { Home } from 'pages/home';
import './styles/styles.scss';
import { Providers } from './providers';

function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;
