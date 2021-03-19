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
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//配置session
app.use(session({
    secret: 'secret key',
    name:'loginCookie',
    cookie: {maxAge: 6000000},
    resave: false,
    saveUninitialized: false
}))
//错误处理中间件
app.use((err,req,res,next)=>{
    console.log(err) 
    next()   
})
//允许跨域
app.use((req,res,next)=>{
    res.set('Access-Control-Allow-Origin', '*');
    next()
})

app.use((req,res,next)=>{
    // var url = req.originalUrl;//获取浏览器中当前访问的nodejs路由地址；
    // console.log(url);
    // var userCookies=req.cookies.userCookies; //获取客户端存取的cookie,userCookies为cookie的名称；//有时拿不到cookie值，可能是因为拦截器位置放错，获取该cookie的方式是依赖于nodejs自带的cookie模块，//因此，获取cookie必须在1,2步之后才能使用，否则拿到的cookie就是undefined.
    // console.log(req);
    // console.log("123"+url);
    // console.log("app获得cookie"+req.cookies.userCookies+"真假11111："+(req.cookies.userCookies==undefined));
 
    // if(url=='/login'&&!(userCookies==undefined)){ //通过判断控制用户登录后不能访问登录页面；
    //    res.redirect('/home');//页面重定向；
    // }
    // console.log('登录拦截');
    // console.log(req.cookies);
    // console.log(req.headers.cookie);
    // if (req.headers.cookie) {
    //     // res.send({ 'status': 1000, 'message': '登录成功'})
    // }
    // console.log(req.session);
    // res.location('/home');//页面重定向；
    // res.statusCode = 302
    // res.end()
    next();
}) 
 
app.use(api);
//设置静态资源文件 
app.use(express.static(__dirname + '/public'));
// 监听3000端口
app.listen(3000);
console.log('success listen 3000');