let COS = require('cos-nodejs-sdk-v5')
 //初始化
 var cos = new COS({
    SecretId: 'AKIDiEZdiZzVwFLCoBKCnLSM1Sm35rOhKX4e',
    SecretKey: 'UigdO6YlrgGZhcdTc6OPlBshGamMhcgC'
});
//查询存储桶列表
cos.getService(function (err, data) {
    console.log('查询存储桶列表');
    console.log(data && data.Buckets);
});
//查询对象列表
cos.getBucket({
    Bucket: 'todo-1258496109', /* 必须 */
    Region: 'ap-chengdu',     /* 必须 */
}, function (err, data) {
    console.log('查询对象列表');
    console.log(err || data.Contents);
});
//删除对象
// cos.deleteObject({
//     Bucket: 'todo-1258496109', /* 必须 */
//     Region: 'ap-chengdu',     /* 必须 */
//     Key: ''       /* 必须 */
// }, function(err, data) {
//     console.log(err || data);
// });
module.exports = {
    cos
}