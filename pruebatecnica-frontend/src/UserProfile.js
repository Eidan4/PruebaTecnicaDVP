import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from './utils/baseUrl';


const UserProfile = () => {
    const [user, setUser] = useState({})
    let { login } = useParams();

    const userLogin = async() => {
        const url = `${baseUrl}/users/${login}`;
      try {
          const resp = await axios.get(url)
          setUser(resp.data);
      } catch (error) {
        console.log(error);     
      }
    }

    useEffect(() => {
        userLogin()
    }, [])
    
    return (
        <div>
            <div>
                <h2 className="card-title text-center">Información del usuario</h2>
                <div className="container d-flex justify-content-center align-items-center mb-4">
                    <img className="rounded-circle" src={user.avatar_url} alt="Imagen" style={{}}/>
                </div>
                <h5 className=" text-center">Nombre: {user.name}</h5>
                <h5 className=" text-center">Tipo: {user.type}</h5>
                <h5 className=" text-center">Fragmento de codigo: {user.public_gists}</h5>
                <h5 className=" text-center">Repositorios públicos: {user.public_repos}</h5>
            </div>
        </div>
    );
}

export default UserProfile