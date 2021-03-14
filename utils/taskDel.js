//导入task分类构造函数
const { ClassTitle } = require('../model/classtitle')
const { Article } = require('../model/article')
module.exports = async (req,res) =>{
    const {type, _id} = JSON.parse(req.query.keyword)
    if(type=='task'){//删除task
         console.log('删除task');
        await Article.deleteOne({_id})  
    } else if(type=='class'){
        console.log('删除class');
        await ClassTitle.deleteOne({_id})  
    }
    res.send({ 'status': '1000', 'message': '删除数据成功' })

}