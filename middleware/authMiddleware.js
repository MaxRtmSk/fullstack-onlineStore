const jwt = require('jsonwebtoken')

module.exports = function (req, res, next){
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] //Bearer token
        if(!token){
            return res.status(401).json({message: `пользователь неавторизован`}) 
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded //во всех функциях этот юзер будет доступен
        next()
    } catch (e) {
        res.status(401).json({message: `пользователь неавторизован`})
    }
}