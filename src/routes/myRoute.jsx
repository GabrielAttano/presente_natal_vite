import { Route } from 'react-router-dom'

function MyRoute({component: Component, isClosed, ...rest}) {
  const isLoggedIn = false

  // if (isClosed && !isLoggedIn) {
  //   return <redirect to={{pathname: './', state: {prevPath: rest.location.pathname } }} />
  // }

  // return <Route {...rest} component={Component}/>
  if (isClosed && !isLoggedIn) {
    console.log('Entrando numa página fechada sem estar logado')
  }
  
  return <Route {...rest} element={Component} />
}

export default MyRoute