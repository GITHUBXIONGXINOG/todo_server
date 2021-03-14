//导入用户集合构造函数
const { User, Task } = require('./model/db');
const express = require('express');
const router = express.Router();
//导入加密模块
// const bcrypt = require('bcryptjs')



/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/user/register', require('./utils/regist'));
// 登录账号接口
router.post('/api/user/login', require('./utils/login'));
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
//退出账号
router.get('/api/logout', require('./utils/logout'));
//添加分类
router.post('/api/tasks/class/add',require('./utils/taskClassAdd'))
//获取分类
router.post('/api/tasks/class/get',require('./utils/taskClassGet'))

//存储文字task
router.post('/api/task_add',require('./utils/taskAdd'))
//获取分类页内容
router.post('/api/task_get',require('./utils/taskGet'))
//查询当前的用户信息,id,登录状态 
router.use('/api/loginstatus',require('./utils/loginStatus'))
//查询task
router.get('/api/search',require('./utils/search')) 
//更新task状态
router.get('/api/task_update',require('./utils/taskUpdate'))
//删除task
router.get('/api/task_del',require('./utils/taskDel'))
module.exports = router;
