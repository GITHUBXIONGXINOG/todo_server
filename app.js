// 引入编写好的api
const api = require('./api'); 
// 引入文件模块
// const fs = require('fs');
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
// app.use('*',(req,res)=>{
//     if (req.url != '/login' && !req.session.account) {
//         console.log('用户未登录');
//         console.log(req.url);
//         res.redirect('/home/myday')
//         res.send({ 'status': 1000, 'message': '成功登录'});
//         next()
//     } else {
//         console.log('用户登录');
//         console.log(req.url);
//         console.log(req.session.account);
//         //用户是登录状态,将请求放行
//         next()
//     }
// })

app.use(api);
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
// app.use(express.static(path.resolve(__dirname, './dist')))
// 因为是单页应用 所有请求都走/dist/index.html
// app.get('*', function(req, res) {
//     const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
//     res.send(html)
// })
// 监听3000端口
app.listen(3000);
console.log('success listen 3000');