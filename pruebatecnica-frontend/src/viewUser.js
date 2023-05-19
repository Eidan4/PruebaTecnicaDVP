import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { 
    CheckOutlined,
	EyeOutlined, 
} from '@ant-design/icons';
import baseUrl from './utils/baseUrl';
import { Button, Col, Form, Input, message, Modal, Popconfirm, Row, Table, Tooltip} from "antd";
import { Link } from 'react-router-dom';

const ViewUser = () => {
    const [user, setUser] = useState([])
  
    const tableColumns = [
      {
        title: 'Id',
        dataIndex: 'id',
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
      {
        title: 'Opciones',
        render: (record) => {
          return (
            <>  
                <Tooltip title="Ver Usuario">
                    <Link to={`/user/${record.login}`}>
                        <Button 
                            type="primary" 
                            className="shadow-sm mr-2" 
                            icon={<EyeOutlined />}  
                        />
                    </Link>
				        </Tooltip>
                <Tooltip title="Ver Usuario por URL">
                    <Link to={`/userUrl/${record.login}`}>
                        <Button 
                            type="primary" 
                            className="shadow-sm mr-2" 
                            style={{ color: '#000', background:'#04D182'}}
                            icon={<CheckOutlined />
                        }  
                        />
                    </Link>
                </Tooltip>
                <Tooltip title="Exportar el usuario">
                  <Popconfirm 
                    placement="bottom" 
                    title={"¿Desea exportar este usuario?"} 
                    onConfirm={ () => crearexportacion(record)} 
                    okText="Si, exportar" 
                    cancelText="No" >
                    <Button type="" className="shadow-sm bg-danger mr-2" icon={<CheckOutlined style={{  color: '#fff'}} />} />
                  </Popconfirm>
                </Tooltip>
            </>
          );
        }
        
      }
    ]
  
    const getUser = async() => {
      const url = `${baseUrl}/search/users?q=YOUR_NAME`;
      try {
          const resp = await axios.get(url,{      
            // headers: {
            //   'x-token': localStorage.getItem('x-token')
            // }
          })
          setUser(resp.data.items);
      } catch (error) {
        console.log(error);     
      }
    }
    
    const crearexportacion = async(record) => {
      const url1 = `http://localhost:9000/api/users`;
      const {
        id,
        node_id,
        avatar_url,
        gravatar_id,
        url,
        html_url,
        followers_url,
        following_url,
        gists_url,
        starred_url,
        subscriptions_url,
        organizations_url,
        repos_url,
        events_url,
        received_events_url,
        type,
        site_admin,
        score
      } = record
      try {
        const resp = await axios.post(url1,{
        iduser:id,
        node_id,
        avatar_url,
        gravatar_id,
        url,
        html_url,
        followers_url,
        following_url,
        gists_url,
        starred_url,
        subscriptions_url,
        organizations_url,
        repos_url,
        events_url,
        received_events_url,
        type,
        site_admin,
        score
        })
        message.success(resp.data, 4);
      } catch (error) {
        console.log(error);
        message.error(error.response.data, 4);
      }
    }
  
    useEffect(() => {
      getUser()
    }, [])
    
    return (
      <>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className="">Lista de Usuario</h1>
          </Col>
        </Row>
        <Table rowKey={record => record.uid}  columns={tableColumns} dataSource={user} bordered  size="small" />
      </>
    );
}

export default ViewUser