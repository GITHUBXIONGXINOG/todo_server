const  {Article} = require ('../model/article')
const { ClassTitle } = require('../model/classtitle')

module.exports = async (req,res) => {
    const {classtitle} = req.body.data
    // console.log(res.session);
    // console.log(req.session.MydayId);
    // console.log(classtitle);
    // console.log('taskGet');
    // console.log(req.body);
    let result 
    if(classtitle){
        result = await Article.find({classtitle})
    } else if(req.session.userInfo){
        // console.log('当前的session:',req.session.userInfo.defaultPageId);
        // console.log('刷新id:',req.session.userInfo.defaultPageId);
        result = await Article.find({classtitle: req.session.userInfo.defaultPageId})
    }
    res.send({'status':'1000','message':'task查询成功','classpage':result})

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