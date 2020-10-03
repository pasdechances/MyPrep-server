module.exports = (req, res, next) => {
    let config = JSON.parse(require('fs').readFileSync('./config.json'))

    if (config.installed) {
        next();
    }
    else{
        res.status(401).json({
            error: 'Server not initialized'
            });
    }
};