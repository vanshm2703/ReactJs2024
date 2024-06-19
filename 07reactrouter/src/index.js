import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import User from './components/User/User';
import Github,{githubInfoLoader} from './components/Github/Github';
const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout />} >
       <Route path='' element={<Home/>} />
       <Route path='about' element={<About/>} />
       <Route path='user' element={<User/>} >
        <Route path=':userid' element={<User />} ></Route>
       </ Route>
       <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
       <Route path='*' element={<div><p>Error 404</p>Not Found</div>} />
       
       

    </Route>
    
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
