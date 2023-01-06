import { Routes, Route } from 'react-router-dom'

import DatingSim from '../pages/datingSim'
import Home from '../pages/home'
import Login from '../pages/login'
import CreateAccount from '../pages/createAccount'
import Gifts from '../pages/gifts'

function MyRoutes() {
  return (
    <Routes>
      <Route end path='/' element={<Home/>}/>
      <Route end path='/login' element={<Login/>}/>
      <Route end path='/create-account' element={<CreateAccount/>}/>
      <Route end path='/visual-novel' element={<DatingSim/>}/>
      <Route end path='/gifts' element={<Gifts/>}/>
      {/* <MyRoute end path='/' isClosed={false} component={<DatingSim/>}/> */}
    </Routes>
  )
}

export default MyRoutes