//导入task分类构造函数
const { ClassTitle } = require('../model/classtitle')
const { User } = require('../model/db');
const  {Article} = require ('../model/article')

module.exports = async (account) => {
    console.log('初始化');
    // const {taskClass,author} = req.body.data
    // console.log(req.body);
    let user = await User.findOne({account})

 
    //添加Tasks分类
    await ClassTitle.create({
        taskClass:'Tasks',
        author:user._id,
        static: true
    })

    let classTitle = await ClassTitle.find({ author: user._id})

    await Article.create({//tasks
        task: null,
        author: user._id,
        classtitle: classTitle._id,
        title:'',
        publishDate: Date.now(),
        time: Date.now(),
        content: '',
        complete: false ,
        important : false
    }).catch((err)=>{
        console.log(err);
    })


    // res.send({'status': 1000,'message':'分类添加成功'})
}