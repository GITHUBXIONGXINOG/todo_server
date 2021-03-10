const  {Article} = require ('../model/article')

module.exports = async (req,res) => {
    console.log(req.body.data);
    const {
        task,
        author,
        classtitle,
        pulishDate,
        content  ,
        complete ,
        important 
    } = req.body.data
    await Article.create({
        task,
        author,
        classtitle,
        pulishDate,
        content  ,
        complete ,
        important 
    })
    res.send({'status':'1000','message':'task添加成功'})


}

/* task,
author,
classtitle,
pulishDate,
content  ,
complete ,
important  */