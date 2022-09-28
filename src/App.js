import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {reducerCustomer} from './redux/reducer';
import Customer from './Customer';
import Favorites from './Favorites';
import { Routes, Route } from 'react-router-dom';
import { Menu } from 'antd';
import { Navigate } from "react-router-dom";

const storeCustomer = createStore(reducerCustomer);


const items1 = ['Home', 'Favorites'].map((key) => ({
  key,
  label: `${key}`,
  onclick: () => {<Navigate to="/products" replace={true} />}
}));

function App() {
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
