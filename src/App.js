import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {reducerCustomer} from './redux/reducer';
import Customer from './Customer';
import Favorites from './Favorites';
import { Routes, Route } from 'react-router-dom';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

const storeCustomer = createStore(reducerCustomer);



function App() {
  const navigate = useNavigate();
  
  const items1 = [
  {
    key: 'Home',
    label: `Home`,
    onClick: () => navigate("/")
  },
  {
    key: 'Favorites',
    label: `Favorites`,
    onClick: () => navigate("/favorites")
  }];
  
  return (
    <Provider store = {storeCustomer}>
       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      <Routes>
        <Route path='/' element={<Customer/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </Provider>
  );
}

export default App;
