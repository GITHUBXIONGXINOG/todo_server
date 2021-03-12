//导入用户集合构造函数
const { User } = require('../model/db');

module.exports = async (req, res) => {
    
        console.log('loginstatus');
        console.log(req.session);
        res.send(req.session.userInfo)
   
}