const fs = require('fs')
const {Article} =  require('../model/article')
const path = require('path')
const formidable = require('formidable')
module.exports = ((req, res) => {
    console.log('上传信息');
    // console.log(req);
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2.配置上传文件的存放位置
    form.uploadDir = path.join(__dirname,  '../', 'public', 'uploads');
    // 3.保留上传文件的后缀
    form.keepExtensions = true;
    // 4.解析表单
    form.parse(req, async (err, fields, files) => {
        // 1.err错误对象 如果表单解析失败 err里面存储错误信息 如果表单解析成功 err将会是null
        // 2.fields 对象类型 保存普通表单数据
        // 3.files 对象类型 保存了和上传文件相关的数据
        // res.send(files.cover.path.split('public')[1])
        console.log('------------------------------------');
        // console.log(fields);
        // console.log(files);
        // console.log(fields.currentTaskId);
        // console.log(files);
        //使用split进行切割
        console.log(files.file.path.split('public')[1]);
        console.log(fields.taskId);
        // console.log(req.session);
   
        await Article.updateOne({ _id: fields.taskId }, {
            $push: {
                imgList: "http://localhost:3000"+files.file.path.split('public')[1]
            }
        })
        await Article.find({ _id: fields.taskId }).then((req,res)=>{
            console.log(req);
        })
    })
    // res.send('ok');
})