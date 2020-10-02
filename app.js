const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')
mongoose.connect('mongodb://localhost:27017/myNewDb',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(express.static(process.cwd()+"/client/dist/client/"));
app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/client/dist/client/index.html")
});

var corsOptions = {
    origin: 'http://localhost:4200',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
