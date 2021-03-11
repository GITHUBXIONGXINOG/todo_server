module.exports = async (req, res) => {
 // 清除浏览器保存的userid的cookie
 
console.log('退出登录,销毁session');
req.session.destroy(function(err) {
    // cannot access session here
    console.log(err);
  })
 // 返回数据
 res.send({code: 0})
}