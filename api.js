//导入用户集合构造函数
const { User, Task } = require('./model/db');
const express = require('express');
const router = express.Router();
//导入加密模块
const bcrypt = require('bcryptjs')



/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/user/register', async (req, res) => {
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
});
// 登录账号接口
router.post('/api/user/login', async (req, res) => {
    const { account, password } = req.body
    if (account.trim().length == 0 || password.trim().length == 0) {
        return res.send({ 'status': 1001, 'message': '邮件地址或者密码错误', 'data': err });
    }
    let user = await User.findOne({ account })
    // console.log(user);
    if (user) {
        let isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            //将用户信息存储在session中
            // req.session.account = user.account
            res.send({ 'status': 1000, 'message': '登录成功', 'data': user.account })
            
            // req.app.locals.userInfo = user
        } else {
            //密码错误
            res.send({ 'status': 1001, 'message': 'The account is right but the password is wrong!' });
        }
    } else {
        //没有查询到用户
        res.send({ 'status': 1002, 'message': 'The account is not existed!' });

    }
});
// 获取所有账号接口
router.get('/api/user/all', (req, res) => {
    // 通过模型去查找数据库
    User.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
//存储task
router.post('/api/task', (req, res) => {
    Task.create({ task: req.body.task }, (err, data) => {
        if (!err) {
            // res.send(err);
            let newTask = new Task({
                task: req.body.task,
            });
            // 保存数据newTask数据进mongoDB
            newTask.save((err, data) => {
                if (err) {
                    res.send({ 'status': 1001, 'message': 'Fail to storage!', 'data': err });
                } else {
                    res.send({ 'status': 1000, 'message': 'Storage successfully!' });
                }
            });
        }
    })
})

module.exports = router;