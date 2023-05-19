import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { 
    CheckOutlined,
	EyeOutlined, 
} from '@ant-design/icons';
import baseUrl from './utils/baseUrl';
import { Button, Col, Form, Input, message, Modal, Popconfirm, Row, Table, Tooltip} from "antd";
import { Link } from 'react-router-dom';

const ViewUserExport = () => {
    const [user, setUser] = useState([])
  
    const tableColumns = [
      {
        title: 'Id',
        dataIndex: 'iduser',
        width: 70,
        sorter: {
          compare: (a, b) => a.id - b.id,
        },
      },
      {
        title: 'Nombre de Usuario',
        dataIndex: 'login',
        sorter: {
          compare: (a, b) => a.name - b.name,
        },
      },
    ]
  
    const getUser = async() => {
      const url = `http://localhost:9000/api/users`;
      try {
          const resp = await axios.get(url)
          setUser(resp.data);
      } catch (error) {
        console.log(error);     
      }
    }
    
    useEffect(() => {
      getUser()
    }, [])
    
    return (
      <>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className="">Lista de Usuario de Exportaciones</h1>
          </Col>
        </Row>
        <Table rowKey={record => record.uid}  columns={tableColumns} dataSource={user} bordered  size="small" />
      </>
    );
}

export default ViewUserExport