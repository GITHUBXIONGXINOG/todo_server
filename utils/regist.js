//导入用户集合构造函数
const { User } = require('../model/db');
//导入加密模块
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
    //获取账户密码
    const { account, password } = req.body
    if (account.trim().length == 0 || password.trim().length == 0) {
        return res.send({ 'status': 1001, 'message': '邮件地址或者密码错误' });
    }
    let user = await User.findOne({ account })
    if (!user) {
        //如果不存在该账户
        const salt = await bcrypt.genSalt(10)
        const pass = await bcrypt.hash(password, salt)
        const user = await User.create({
            account,
            password: pass,
        })
        res.send({ 'status': 1000, 'message': 'The account is already registered!' });
    } else {
        //存在该账户
        res.send({ 'status': 1001, 'message': 'The account is already registered!' });
    }
}