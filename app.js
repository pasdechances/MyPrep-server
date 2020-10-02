const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = JSON.parse(require('fs').readFileSync('./config.json'))
const cors = require('cors')


app.use(express.static(process.cwd()+"/client/dist/client/"));
app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/client/dist/client/index.html")
});


var uri = config.cluster.connector+'://';
if(config.cluster.userName){
  uri += config.cluster.userName+':'+config.cluster.password+'@';
}
uri += config.cluster.url+':'+config.cluster.port+'/'+config.cluster.data;
mongoose.connect(uri,config.cluster.call)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

var corsOptions = config.cors    //some legacy browsers (IE11, various SmartTVs) choke on optionsSuccessStatus : 204
app.use(cors(corsOptions))

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
