/*Schema、Model、Entity或者Documents的关系请牢记，
Schema生成Model，Model创造Entity，
Model和Entity都可对数据库操作造成影响
，但Model比Entity更具操作性。*/
 
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
// mongoose.connect('mongodb://root:123456@81.70.93.91:27017/todo',{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connect('mongodb://root:123456@81.70.93.91:27017/todo?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',{useNewUrlParser: true,useUnifiedTopology: true})
//  mongodb://root:123456@81.70.93.91:27017
//mongodb://root:123456@81.70.93.91:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false
// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
//登录约束
const loginSchema = mongoose.Schema({
    account : String,//用户名
    password : String,//密码


});
//task约束
const taskSchema = mongoose.Schema({
    task: String,//task内容
    taskClass: String,//task分类
    steps: Object,//步骤
    today: Boolean,//是否添加到今天
    pick: String,//选中
    files: Object,//文件
    note: String, //备注
})
//task分类
// const taskClassSchema = mongoose.Schema({
//     taskClass: String,//task分类
//     author: {//关联user集合
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
// })
//
/************** 定义模型Model **************/

const User = mongoose.model('Users',loginSchema);
const Task = mongoose.model('Task',taskSchema);
// const ClassTitle = mongoose.model('ClassTitle',taskClassSchema)
//暴露 
module.exports = {
    User,
    Task,
    // ClassTitle,
};