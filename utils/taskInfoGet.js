const moment = require('moment');
const { Article } = require('../model/article')

module.exports = async (req, res) => {
    console.log('taskinfoget');
    let _id = req.query.data
    console.log(_id);
    // const { _id } = req.body.data
    // console.log(res.session);
    // console.log(req.session.MydayId);
    // console.log('taskGet');
    // console.log(req.body);
    console.log('获取taskinfo内容');
    let result
    if (req.session.userInfo) {
        // console.log('当前的session:',req.session.userInfo.defaultPageId);
        // console.log('刷新id:',req.session.userInfo.defaultPageId);
        result = await Article.find({ _id })
        // console.log(result);
    }
    res.send({ 'status': '1000', 'message': 'taskinfo查询成功', 'classpage': result })

    // console.log(result);
    // console.log(req.session);
}

 