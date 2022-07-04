import React from 'react'

/** redux */
import { Provider } from 'react-redux'
import { getStore } from './@redux'

/** routers */
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallbackComponent } from './app/component/ErrorFallbackComponent'
import { HashRouter } from 'react-router-dom'
import { Router } from './router'
import './App.css'
function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <Provider store={getStore()}>
          <HashRouter>
            <Router />
          </HashRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
