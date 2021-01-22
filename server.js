require('dotenv').config({ path: './config.env' });
const express = require('express');

const fixturesRouter = require('./routes/fixturesRoute');
const modelRouter = require('./routes/modelRoute');
const latestFixtureRouter = require('./routes/latestFixtureRoute');
const latestLineUpRouter = require('./routes/latestLineUpRoute');

const app = express();
app.use(express.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  const allowedOrigins = [process.env.UI_DEV_DOMAIN, process.env.UI_PROD_DOMAIN];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Pass to next layer of middleware
  next();
});

app.use('/fixtures', fixturesRouter);
app.use('/model', modelRouter);
app.use('/latest_fixture', latestFixtureRouter);
app.use('/latest_line_up', latestLineUpRouter);

// ---------------------------
// START SERVER
// ---------------------------
const port = process.env.PORT || 8080;
app.listen(port, () => {
  const toepunt =
'   __                               __                          _  \n'+
'  / /_____  ___  ____  __  ______  / /_            ____ _____  (_)\n'+
' / __/ __ \\/ _ \\/ __ \\/ / / / __ \\/ __/  ______   / __ `/ __ \\/ / \n'+
'/ /_/ /_/ /  __/ /_/ / /_/ / / / / /_   /_____/  / /_/ / /_/ / /  \n'+
'\\__/\\____/\\___/ .___/\\__,_/_/ /_/\\__/            \\__,_/ .___/_/   \n'+
'             /_/                                     /_/        \n'

  console.log(toepunt);
  console.log('------------------------');
  console.log(`listening on port:${port}`);
});