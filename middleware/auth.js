const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    
    User.findById(userId).then((user)=>{
      if (user.id && user.id !== userId) {
        throw 'Invalid user ID';
      } else {
        next();
      }
    })
  } catch {
    res.status(401).json({
      error: 'Invalid request!'
    });
  }
};