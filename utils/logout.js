module.exports = async (req, res) => {
 // 清除浏览器保存的userid的cookie
//  delete req.session.loginCookie
req.session.destroy(function(err) { /*销毁 session*/ })
console.log(req.session);
 // 返回数据
 res.send({code: 0})
}