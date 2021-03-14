const { Article } = require('../model/article')
module.exports = async (req,res) =>{
    console.log('删除task');
    const {type, _id} = JSON.parse(req.query.keyword)
    if(type=='task'){//删除task
        await Article.deleteOne({_id})  
        

    } else if(type=='class'){

    }
    res.send({ 'status': '1000', 'message': '删除数据成功' })

}