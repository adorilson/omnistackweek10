const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

async function create_or_update(developer){

    const {github_username, techs, latitude, longitude} = developer

    const api_response = await axios.get(`https://api.github.com/users/${github_username}`)

    const {name = login, avatar_url, bio} = api_response.data

    const techs_array = parseStringAsArray(techs)
    
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    let dev = await Dev.findOne({github_username})

    if (!dev){
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techs_array,
            location
        })
    }else{
        await Dev.update({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techs_array,
            location
        })

        dev = await Dev.findOne({github_username})
    }

    return dev
}

module.exports = {

    async index(request, response){
        const devs = await Dev.find()

        return response.json(devs)
    },

    async store (request, response) {
        const {github_username, techs, latitude, longitude} = request.body

        const dev = await create_or_update({github_username, techs, latitude, longitude})

        return response.json(dev)
    },

    async update(request, response){
        const {github_username, techs, latitude, longitude} = request.body

        const dev = await create_or_update({github_username, techs, latitude, longitude})

        return response.json({dev})
    },

    async destroy(request, response){
        const {github_username} = request.query

        await Dev.deleteOne({github_username})

        return response.json({mensagem: "Dev removed"})
    }
}
