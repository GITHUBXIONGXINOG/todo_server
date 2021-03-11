//导入task分类构造函数
const { ClassTitle } = require('../model/classtitle')
//引入formidable第三方模块
const formidable = require('formidable')

module.exports = async (req,res) => {
 
    const {author} = req.body.data
    // console.log(author);
    //返回该用户的分类
    let result = await ClassTitle.find({ author: author})
    // 存储MydayId作为默认页的id
    req.session.MydayId =  result[0]._id
    res.send(result)

}