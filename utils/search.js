const  {Article} = require ('../model/article')

module.exports = (async (req,res)=>{
    console.log('搜索中...');
    let query = new RegExp(req.query.keyword,'i')//模糊查询参数
    let result = await Article.find({
        $or:[{'task': query}],
        // author:req.session.userInfo._id
    })
    res.send({ 'status': 1000, 'message': '查询关键字成功' ,'data':result});
})