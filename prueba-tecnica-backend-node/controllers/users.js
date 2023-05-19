
const { response } = require("express");
const bcryptjs = require('bcryptjs');
const {users} = require('../models/index');

const createUser = async(req, res = response) => {
    const {
        login,
        iduser,
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
    }= req.body;

    const userafind = await users.findOne(
        {
            where: {iduser:iduser}
        }
    )

    if (userafind) {
       return res.status(500).send("El usuario ya existe")
    }
    try {
        const usercreate =  await users.create({
            login,
            iduser,
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
        });
    
    
        res.status(201).send("Se creo correctamente el usuario")
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:error.message})
    }
    
}

const getUsers = async(req, res) => {
    try {
        const getuser = await users.findAll()

        res.status(200).send(getuser);
    } catch (error) {
        res.status(500).send({msg:error.message})
    }

}



module.exports = {
    getUsers,
    createUser,

}