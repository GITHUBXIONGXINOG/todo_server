//导入task分类构造函数
const { ClassTitle } = require('../model/classtitle')
//引入formidable第三方模块
const formidable = require('formidable')

module.exports = async (req,res) => {
    // // console.log(req);
    // const {taskClass,author} = req.body.data
    // if (taskClass.trim().length == 0) {
    //     return res.send({'status': 1001, 'message': '分类标题不能为空'})
    // }
    // console.log(req.body);
    // //添加分类
    // await ClassTitle.create({
    //     taskClass,
    //     author,
    // })
    // res.send({'status': 1000,'message':'分类获取成功'})
    const {author} = req.body.data
    // console.log(author);
    //返回该用户的分类
    let result = await ClassTitle.find({ author: author})
    // console.log(result);
    res.send(result)

}