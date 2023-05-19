import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from './utils/baseUrl';
import { useParams } from 'react-router-dom';

const UserDetails = ({ match }) => {
  const [userData, setUserData] = useState({});
  let { username } = useParams();

  const GetUserData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    GetUserData();
  }, [username]);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
        <h2 className='text-center'>{userData.name}</h2>
            <div className="container d-flex justify-content-center align-items-center mb-4">
                <img className="rounded-circle" src={userData.avatar_url} alt="Imagen" style={{}}/>
            </div>
        <h5 className='text-center'>Nombre de usuario: {userData.login}</h5>
        <h5 className='text-center'>Seguidores: {userData.followers}</h5>
        <h5 className='text-center'>Siguiendo: {userData.following}</h5>

    </div>
  );
};

export default UserDetails;