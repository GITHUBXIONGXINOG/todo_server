const  {Article} = require ('../model/article')

module.exports = async (req,res) => {
    console.log(req.body.data);
    const {
        task,
        author,
        classtitle,
        title,
        publishDate,
        time,
        content  ,
        complete ,
        important 
    } = req.body.data
    await Article.create({
        task,
        author,
        classtitle,
        title,
        publishDate,
        time,
        content  ,
        complete ,
        important 
    })

    res.send({'status':'1000','message':'task添加成功'})


}

 