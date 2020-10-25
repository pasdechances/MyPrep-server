const express = require('express')
const app = express()
const base = require('./resources/connect.js')
const bodyParser = require('body-parser')
const config = JSON.parse(require('fs').readFileSync('./config.json'))
const cors = require('cors')


app.use(express.static(process.cwd()+"/client/dist/client/"));
app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/client/dist/client/index.html")
});

base.connect(config.cluster);

var corsOptions = config.cors    //some legacy browsers (IE11, various SmartTVs) choke on optionsSuccessStatus : 204
app.use(cors(corsOptions))

const userRoutes = require('./routes/user');
const groupRoutes = require('./routes/group');
const drugRoutes = require('./routes/drug');
const authRoutes = require('./routes/auth');
const installRoutes = require('./routes/install');

app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use('/api/group', groupRoutes);
app.use('/api/drug', drugRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/install', installRoutes);

module.exports = app;
