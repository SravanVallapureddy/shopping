import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Cart from './components/cart';
import Dashboard from './components/Dashboard';
// import Product from './components/Product';
import RootLayout from './components/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
