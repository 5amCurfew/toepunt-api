const axios = require('axios');

exports.getLatestFixtureId = async (req, res) => {

    const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/fixtures?last=1&team=${req.headers.team_api_id}`,
        headers: { 
          'x-rapidapi-host': 'v3.football.api-sports.io', 
          'x-rapidapi-key': process.env.API_KEY
        }
    };

    try{
        const fixture = await axios(config);
        res.send(fixture.data.response[0].fixture)
    } catch(error){
        console.log(error);
    }
}