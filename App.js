import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResurces';
import { store } from './redux';
import Route from './routes';

export default function App() {
  const isLoadingComplete = useCachedResources();
  return (isLoadingComplete &&
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
