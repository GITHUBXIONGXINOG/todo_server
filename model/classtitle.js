//1.创建mongoose模块
const mongoose = require('mongoose')
//2.创建分类集合规则

const taskClassSchema = mongoose.Schema({
    taskClass: String,//task分类
    author: {//关联user集合,存储用户_id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

})
 
//3.根据规则创建集合
const ClassTitle = mongoose.model('ClassTitle',taskClassSchema)

//4.将集合规则作为模块进行导出
module.exports = {
    ClassTitle
}