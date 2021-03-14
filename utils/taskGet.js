const { Article } = require('../model/article')
const { ClassTitle } = require('../model/classtitle')

module.exports = async (req, res) => {
    const { classtitle, title } = req.body.data
    // console.log(res.session);
    // console.log(req.session.MydayId);
    // console.log('taskGet');
    // console.log(req.body);
    console.log('获取分类页内容');
    let result
    if (classtitle) {
        if (title === 'Myday') {
            result = await Article.find({ pulishDate: Date.now() })
        } else if (title === 'Important') {
            result = await Article.find({ important: true })
        } else {
            result = await Article.find({ classtitle })
        }
    } else if (req.session.userInfo) {//默认返回
        // console.log('当前的session:',req.session.userInfo.defaultPageId);
        // console.log('刷新id:',req.session.userInfo.defaultPageId);
        result = await Article.find({ classtitle: req.session.userInfo.defaultPageId })
    }
    res.send({ 'status': '1000', 'message': 'task查询成功', 'classpage': result })

    // console.log(result);
    // console.log(req.session);
}

/* task,
author,
classtitle,
pulishDate,
content  ,
complete ,
important  */