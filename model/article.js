//1.创建mongoose模块
const mongoose = require('mongoose')
//2.创建文章集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength:20,
        minlength: 4,
        required: [true,'请填写文章标题']
    },
    author:{//存储作者的_id
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Users', //关联文章集合和用户集合
        required: [true,'请传递作者']
    },
    pulishDate: {
        type: Date,
        default: DataCue.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
})
//3.根据规则创建集合
const Article = mongoose.model('Article')

//4.将集合规则作为模块进行导出
module.exports = {
    Article
}