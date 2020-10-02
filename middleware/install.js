const fs = require('fs')

module.exports = (req, res, next) => {
    fichier = fs.readFileSync('./config.json')
    let config = JSON.parse(fichier)

    if (config.installed) {
        next();
    }
    else{
        res.status(401).json({
            error: 'Server not initialized'
            });
    }
};