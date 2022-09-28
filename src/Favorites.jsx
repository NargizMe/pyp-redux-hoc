import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { Table } from 'antd';

function Favorites() {
    const dispatch = useDispatch();
    const favoritesData = useSelector(state => state);

    const columns = [
        {
          title: 'Id',
          dataIndex: 'customerId',
        },
        {
          title: 'Employee Id',
          dataIndex: 'employeeId',
        },
        {
          title: 'Ship Name',
          dataIndex: 'shipName',
        },
        {
          title: 'Freight',
          dataIndex: 'freight',
        }
    ];

  return (
    <>
    <h1>Favorites</h1>
    <button onClick={() => dispatch({type: 'EMPTY_FAVORITES', payload: ''})}>Clear</button>
      <Table columns={columns} dataSource={favoritesData} />
    </>
  );
}

export default Favorites;
