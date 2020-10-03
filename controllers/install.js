const fs = require('fs');
const filePath = './config.json';
const base = require('../resources/connect.js')

const userCtrl = require('../controllers/user');
const groupCtrl = require('../controllers/user');


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

    groupCtrl.createGroupe({
        name: "Administrateur",
        rights: {
            userEditable: true,
            groupEditable: true,
            priceEditable: true,
            stockUsable: true,
            saleUsable: true,
            paramUsable: true,
            teletransmissionUsable: true,
            vaccinationAllow: true,
        } 
    });

    groupCtrl.createGroupe({
        name: "Utilisateur",
        rights: {
            userEditable: false,
            groupEditable: false,
            priceEditable: false,
            stockUsable: true,
            saleUsable: true,
            paramUsable: false,
            teletransmissionUsable: false,
            vaccinationAllow: false,
        } 
    });

    userCtrl.createUser({
        firstname: "admin",
        lastname: "super",
        login: req.body.user.name,
        password: req.body.user.password,
        groups:["Administrateur"]
    })
    .then(() => {console.log("User '" + user.login + "' created")})
    .catch((error) => {console.log(error)})
    
    config.cluster = req.body.cluster;
    config.installed = true;

    fs.writeFileSync(filePath, JSON.stringify(config));
    return res.status(200).json({message : config});
};


function createGroupe(params){
    const group = new Group(params);

    group.save()
    .then(() => {console.log("Group '" + group.name + "' created")})
    .catch((error) => {console.log(error)});
}