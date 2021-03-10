//1.创建mongoose模块
const mongoose = require('mongoose')
//2.创建文章集合规则
const articleSchema = new mongoose.Schema({
    task: {//输入文字内容
        type: String,
    },
    author: {//关联user集合,存储用户_id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    classtitle: {//关联分类集合,存储分类_id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClassTitle'
    },
    pulishDate: {//创建时间
        type: Date,
        default: Date.now
    },
    content: {//备注
        type: Object
    },
    complete: {//完成状态
        type: Boolean,
        default: false
    },
    important: {//重要
        type: Boolean,
        default: false
    }
})
//3.根据规则创建集合
const Article = mongoose.model('Article',articleSchema)

//4.将集合规则作为模块进行导出
module.exports = {
    Article
}