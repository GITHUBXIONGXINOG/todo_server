//导入用户集合构造函数
const { User } = require('../model/db');
const { ClassTitle } = require('../model/classtitle')

//导入加密模块
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
    const { account, password } = req.body
    if (account.trim().length == 0 || password.trim().length == 0) {
        return res.send({ 'status': 1001, 'message': '邮件地址或者密码错误', 'data': err });
    }
    let user = await User.findOne({ account })
    if (user) {
        let isValid = await bcrypt.compare(password, user.password)
        //密码比对正确
        if (isValid) {
            req.session.save((err)=>{
                console.log(err);
            })
            let result = await ClassTitle.find({ author: user})
            //保存信息到session
            req.session.userInfo={
                account: user.account,//用户账户
                _id: user._id,//用户id
                loginStatus: true,//用户登录状态
                defaultPageId: result[0]._id,//默认页(myday)id
            }
            // res.cookie()
            //将用户信息存储在session中
            // req.session.account = user.account
            res.send({ 'status': 1000, 'message': '登录成功', 'data': {
                account: user.account,
                _id: user._id
            } })
            
            // req.app.locals.userInfo = user
        } else {
            //密码错误
            res.send({ 'status': 1001, 'message': 'The account is right but the password is wrong!' });
        }
    } else {
        //没有查询到用户
        res.send({ 'status': 1002, 'message': 'The account is not existed!' });

    }
}