/* eslint-disable react/jsx-no-undef */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import ApiSimulation from './react/hoockex4'
//import ApoiSimulation1 from './react/useeffect'
import UserComp1 from './react/cleanup'
// import MyList from './react/mylist.jsx'
// import MyButton from './react/mybtn.jsx'
// import MyComponent from './react/Component.jsx'
//import MyButton3 from './react/purefunction.jsx'
//import MyList from './react/mylist.jsx'
//import App from './react/login.jsx'
//import StateExample from './react/hoockexample.jsx'
//import StateExample2 from './react/hoockexample2.jsx'
//import StateExample3 from './react/hoockexample3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserComp1/>
  </StrictMode>,
)
