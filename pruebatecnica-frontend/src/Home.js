import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from './utils/baseUrl';
import { Alert, Button, Col, Form, Input, message, Row,} from "antd";
const Home = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    
    const handleSubmit = async() => {
        try {
            if (username.name.length < 5) {
                return message.error('No se puede hacer un buscador menor a 4 caracteres', 4);  
            }
            else if (username.name === 'doublevpartners') {
                return message.error('No se puede hacer un buscador doublevpartners', 4);  
            }
            const response = await axios.get(`${baseUrl}/users/${username.name}`);
            setUserData(response.data);
        } catch (error) {
            console.log(error);
            message.error('No se encontro este usuario', 4);
        }
    };
  
    return (
    <>
        <Form
            id='miformularioAgregar'
            layout="vertical" 
            onFinish={handleSubmit}
        >
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item 
                        name='name' 
                        label='Nombre' 
                        hasFeedback
                    >
                        <Input 
                        onChange={ (e) => {
                            setUsername( (pre) => {
                            return { ...pre, name: e.target.value}
                            })
                        }}
                        placeholder='Ingrese el Nombre de usuario'
                        />
                        <Input style={{ display: 'none'}} />
                    </Form.Item>
                </Col>
            </Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item>
                <Button htmlType="submit" block
                    style={{ backgroundColor: '#137689', color: '#fff'}}
                >
                    Consultar
                </Button>
                </Form.Item>
            </Col>
        </Form>
        {userData && (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title text-center">Información del usuario</h2>
                <div className="container d-flex justify-content-center align-items-center mb-4">
                    <img className="rounded-circle" src={userData.avatar_url} alt="Imagen" style={{}}/>
                </div>
                <h5 className="card-text text-center">Nombre: {userData.name}</h5>
                <h5 className="card-text text-center">Tipo: {userData.type}</h5>
                <h5 className="card-text text-center">Fragmento de codigo: {userData.public_gists}</h5>
                <h5 className="card-text text-center">Repositorios públicos: {userData.public_repos}</h5>
            </div>
        </div>
      )}
    </>
    );
}

export default Home