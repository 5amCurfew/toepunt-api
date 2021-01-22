const axios = require('axios');

exports.getLatestLineUp = async (req, res) => {

    const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/fixtures/lineups?fixture=${req.headers.latest_fixture_id}&team=${req.headers.team_api_id}`,
        headers: { 
          'x-rapidapi-host': 'v3.football.api-sports.io', 
          'x-rapidapi-key': process.env.API_KEY
        }
    };

    try{
        const lineup = await axios(config);
        res.send(lineup.data.response[0]);
    } catch(error){
        console.log(error);
    }
}