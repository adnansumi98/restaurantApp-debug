import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Cart from './Components/Cart'
import NotFound from './Components/NotFound'
import ProtectedRoute from './ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
