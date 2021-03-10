//导入task分类构造函数
const { ClassTitle } = require('../model/classtitle')
const { User } = require('../model/db');
const  {Article} = require ('../model/article')

module.exports = async (account) => {
    console.log('初始化');
    // const {taskClass,author} = req.body.data
    // console.log(req.body);
    let user = await User.findOne({account})


    // 添加Myday分类
    await ClassTitle.create({
        taskClass:'Myday',
        author:user._id,
        static: true
    })

    //添加Important分类
    await ClassTitle.create({
        taskClass:'Important',
        author:user._id,
        static: true
    })
    //添加Tasks分类
    await ClassTitle.create({
        taskClass:'Tasks',
        author:user._id,
        static: true
    })

    let classTitle = await ClassTitle.find({ author: user._id})

    await Article.create({//myday
        task: null,
        author: user._id,
        classtitle: classTitle[0]._id,
        pulishDate: Date.now(),
        content: '',
        complete: false ,
        important : false
    }).catch((err)=>{
        console.log(err);
    })
    await Article.create({//important
        task: null,
        author: user._id,
        classtitle: classTitle[1]._id,
        pulishDate: Date.now(),
        content: '',
        complete: false ,
        important : false
    }).catch((err)=>{
        console.log(err);
    })
    await Article.create({//tasks
        task: null,
        author: user._id,
        classtitle: classTitle[2]._id,
        pulishDate: Date.now(),
        content: '',
        complete: false ,
        important : false
    }).catch((err)=>{
        console.log(err);
    })


    // res.send({'status': 1000,'message':'分类添加成功'})
}