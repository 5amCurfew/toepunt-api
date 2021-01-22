const axios = require('axios');

exports.getFixtures = async (req, res) => {
    const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/fixtures?league=${req.headers.league_id}&next=10`,
        headers: { 
          'x-rapidapi-host': 'v3.football.api-sports.io', 
          'x-rapidapi-key': process.env.API_KEY
        }
    };

    try{
        const fixtures = await axios(config);
        res.send(fixtures.data.response);
    } catch(error){
        res.status(400).json({
            status: 400,
            message: error,
        });
    }

};