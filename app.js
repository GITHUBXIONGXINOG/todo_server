// 引入编写好的api
const api = require('./api'); 
 
// 引入处理路径的模块
// const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser')
// 引入Express
const express = require('express');
//导入express-session模块
const session  = require('express-session')

const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//配置session
app.use(session({
    secret: 'secret key',
    name:'loginCookie',
    cookie: {maxAge: 60000,httpOnly: false},
    resave: false,
}))

app.use((err,req,res,next)=>{
    console.log(err) 
    next()   
})
 
app.use(api);
 
// 监听3000端口
app.listen(3000);
console.log('success listen 3000');