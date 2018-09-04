import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './components/counters/counters'
import reducer from 'reducers/counters'

const store = createStore(reducer)

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
      document.querySelector('[data-js="app"]')
    )
}

renderApp(Counter)

if (module.hot) {
  module.hot.accept('./components/counters/counters', () => {
    const NextApp = require('./components/counters/counters').default
    renderApp(NextApp)
  })
}
