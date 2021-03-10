const  {Article} = require ('../model/article')

module.exports = async (req,res) => {
    const {classtitle} = req.body.data
    let result = await Article.find({classtitle})
    console.log(result);
    res.send({'status':'1000','message':'task查询成功','classpage':result})
}

/* task,
author,
classtitle,
pulishDate,
content  ,
complete ,
important  */