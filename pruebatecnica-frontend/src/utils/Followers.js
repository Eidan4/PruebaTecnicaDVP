import baseUrl from "./baseUrl"
import axios from 'axios';

const FollowerList = async() => {
    let lista = []
    try {
        const url1 = `${baseUrl}/search/users?q=YOUR_NAME`;
        const resp1 = await axios.get(url1)
        const user = resp1.data.items
        for (let i = 0; i < user.length; i++) {
            let login = user[i].login
            const url = `${baseUrl}/users/${login}`
            let resp = await axios.get(url)
            lista.push({name: resp.data.login,followers:resp.data.followers})
        }
        return lista
    } catch (error) {
      console.log(error);     
    }
}

export {FollowerList}