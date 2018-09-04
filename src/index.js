import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import App from './app'
import reducers from 'reducers/rootReducer'

const store = createStore(reducers)

/*
O createStore tem 3 métodos inclusos nele: getState(), dispatch e subscribe
o getState() recebe por padrão os states do reducers. O dispatch também, mas
ele pega ao mesmo tempo a action, então toda vez que este método for executado, 
ele vai pegar a action e sobrepor o state utilizando assim o conceito de 
Funções Puras.

Ex. de Dispatch:

const dispatch = (action) => {
  state: reducer(state, action)
}

O dispatch recebe o action do reducer e o state, podendo assim manipulá-los
a cada execução deste método. Para que o dispatch possa ser disparado, existem
algumas formas, uma delas é usando 'this.props.store.dispatch' que é colocado
direto na função e, existe o método 'mapDispatchToProps' que é declarado nos
paramêtros do connect e que recebe um objeto que dispara a action.

AULA 14 DO MÓDULO 3
O MapStateToProps recebe da função connect o state que vem direto do reducer
que foi passado para o store, que por sua vez foi passado pelo Provider via props.
Dentro do corpo do MapStateToProps, retornamos um objeto que é igual ao state
recebido e colocado como parâmetro, permitindo assim que possamos criar elementos
JSX com os dados do state do reducer.

O MapDispatchToProps funciona de forma parecida, porém ele recebe o dispatch do store
passado pelo Provider e, pelo fato do state do reducer já fazer parte do corpo do método
dispatch, este state, que é o mesmo do MapStateToProps, é integrado no MapDispatchToProps.
*/

console.log('store', store.getState())

store.subscribe(() => {
  console.log('store', store.getState())
})

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

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
