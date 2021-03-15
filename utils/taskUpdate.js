const { Article } = require('../model/article')
module.exports = async (req, res) => {
    console.log('状态更新');
    let data = JSON.parse(req.query.data)
    // console.log(data);
    await Article.updateOne({ _id: data._id }, {
        $set: {
            time: data.time,
            complete: data.complete,
            important: data.important,
            task: data.task,
            classtitle: data.classtitle,
            title: data.title,
            content: data.content
        }, function(err) {
            console.log(err);
        }
    })
    res.send({ 'status': '1000', 'message': '更新数据成功' })
}


