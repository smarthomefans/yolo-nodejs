# SmartHomeFans darknet

Darknet.JS express封装版本


## 使用方法


发送请求地址：`<ip>:3000/yolo` , `Content-type` 为 `application/x-www-form-urlencoded` 或`application/json` 

参数：
* image: 图片的Base64编码信息
* no_delete: 不删除上传的图片，默认删除， 传`true`图片将会保留 ,访问`ip:3000/static` 可以查看

## Docker

`darknet`的配置文件在`/yolo-nodejs/conf`目录下面，默认参数使用的是`tiny`版本的，如果自己有更高的精度需求可以自行修改

```
docker build -t smarthomefans/yolo-nodejs:1.0.0 .
```



## 感谢
* [darknet](https://github.com/pjreddie/darknet)
* [darknet.js](https://github.com/bennetthardwick/darknet.js)