import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table } from 'antd';

function Customer() {
    const [orderData, setOrderData] = useState([]);
    
    const dispatch = useDispatch();
    const favoritesData = useSelector(state => state);

    useEffect(() => {
        (async () => {
            const result = await axios('https://northwind.vercel.app/api/orders');
            const response = result.data;
            setOrderData(response);
        })()
    }, [])


    function handleFavorites(data){
        if(!favoritesData.includes(data)){
            dispatch({type: 'ADD_TO_FAVORITES', payload: data});
            toast.success('Your orded added to Favorites!', {
              position: toast.POSITION.TOP_RIGHT,
            });
        }
        else {
          toast.error('Your already have this in Favorites!', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
    }
    

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
            title: 'Add to Favorites',
            dataIndex: 'add',
            render: (text, record) => (
                <button onClick={()=> handleFavorites(record)}>
                  {"add"}
                </button>
            ),
        }
    ];

  return (
    <>
    <h1>Datas</h1>
      <Table columns={columns} dataSource={orderData} />
      <ToastContainer />
    </>
  );
}

export default Customer;
