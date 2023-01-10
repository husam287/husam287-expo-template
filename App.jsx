import React from 'react';
import { Provider } from 'react-redux';

import Route from 'routes';
import store from 'reducers';
import useCachedResources from 'hooks/useCachedResources';

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
