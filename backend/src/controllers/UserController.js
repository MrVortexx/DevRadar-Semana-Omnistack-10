const axios = require('axios')
const Users = require('../models/user')
const ParseArrayAsString = require('../utils/ParseStringAsArray')
module.exports = {

async indexedDB(req, res) {
    const allUsers = await Users.find()

    return res.json(allUsers)
},

async store(req, res){
    const {githubNick, knowledge, longitude, latitude} = req.body
    
    let user = await Users.findOne({githubNick})

    if(!user){
        
    const api = await axios.get(`https://api.github.com/users/${githubNick}`)
    const {name = login, avatar_url, bio} = api.data

    

    const organizedKnowledge = ParseArrayAsString(knowledge)
     
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
   user = await Users.create({
        githubNick,
        name,
        avatar_url,
        bio,
        knowledge: organizedKnowledge,
        location
    })
    
    console.log(organizedKnowledge);
     
    }
    return res.json(user)




} }