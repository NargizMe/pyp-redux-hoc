import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {emptyFavoriteAction, deleteSpecific} from './redux/action';

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
        },
        {
          title: 'Delete from Favorites',
          dataIndex: 'delete',
          render: (text, record) => (
              <button onClick={()=> handleDelete(record)}>
                {"delete"}
              </button>
          ),
      }
    ];
    
    function handleDelete(data){
      const newArr = favoritesData.filter((item) => item !== data);
      dispatch(deleteSpecific(newArr));
    }

  return (
    <>
      <h1>Favorites</h1>
      <button onClick={() => dispatch(emptyFavoriteAction())}>Clear</button>
      <Table columns={columns} dataSource={favoritesData} />
    </>
  );
}

export default Favorites;
