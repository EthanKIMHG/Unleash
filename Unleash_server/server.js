const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const db = require('./sequelize/models');
var cookieParser = require('cookie-parser');

app.use(cors({ origin: true, credentials: true }));
app.use(cors(), express.json());
app.use(cookieParser());
app.listen(port, () => {
  console.log('서버가 정상적으로 실행되었습니다.');
});

app.get('/', async (req, res) => {
  res.json(await test());
});

require('./routes/index.js')(app);
