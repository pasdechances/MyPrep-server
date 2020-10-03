const fs = require('fs');
const filePath = './config.json';
const base = require('../resources/connect.js')
const User = require('../models/user');

exports.login = (req, res, next) => {
    let config = JSON.parse(fs.readFileSync(filePath));

    if(config.installed)return res.status(401).json({error: 'Server already initialized' });
    if(!req.body.cluster.connector)return res.status(500).json({ field: 'connector', error: 'field is empty' });
    if(!req.body.cluster.url)return res.status(500).json({ field: 'url', error: 'field is empty' });
    if(!req.body.cluster.port)return res.status(500).json({ field: 'port', error: 'field is empty' });
    if(!req.body.cluster.data)return res.status(500).json({ field: 'data', error: 'field is empty' });
    if(!req.body.cluster.call.useNewUrlParser)return res.status(500).json({ field: 'useNewUrlParser', error: 'field is empty' });
    if(!req.body.cluster.call.useUnifiedTopology)return res.status(500).json({ field: 'useUnifiedTopology', error: 'field is empty' });

    if(base.connect(req.body.cluster)){
        return res.status(500).json({error : 'Connection database failed'});
    }

    if(!req.body.user.name)return res.status(500).json({ field: 'name', error: 'field is empty' });
    if(!req.body.user.password)return res.status(500).json({ field: 'user', error: 'field is empty' });

    const user = new User({
        firstname: "admin",
        lastname: "super",
        login: req.body.user.name,
        password: req.body.user.password,
        });

    user.save()
    .then(() => {
        console.log("SuperAdmin created")
        next();
    })
    .catch((error) => {
        res.status(400).json({
        error: error
        });
    });
    
    config.cluster = req.body.cluster;
    config.installed = true;

    fs.writeFileSync(filePath, JSON.stringify(config));
    return res.status(200).json({message : config});
  };