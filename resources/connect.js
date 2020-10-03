const mongoose = require('mongoose')

exports.connect = (cluster) => {
    var uri = cluster.connector+'://';
    if(cluster.userName){
    uri += cluster.userName+':'+cluster.password+'@';
    }
    uri += cluster.url+':'+cluster.port+'/'+cluster.data;

    mongoose.connect(uri,cluster.call)
    .then(() => {
        console.log('Connexion à MongoDB réussie !')
        return 1;
    })
    .catch(() => {
        console.log('Connexion à MongoDB échouée !')
        return 0;
    });
}