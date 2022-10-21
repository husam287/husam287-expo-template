import React from 'react';
import { Provider } from 'react-redux';

import useCachedResources from 'hooks/useCachedResurces';
import Route from 'routes';
import store from 'reducers';

export default function App() {
  const isLoadingComplete = useCachedResources();
  return (
    isLoadingComplete && (
      <Provider store={store}>
        <Route />
      </Provider>
    )
  );
}
