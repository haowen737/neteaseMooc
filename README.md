# neteaseMooc
## 网易前端微专业-Mini项目实战

### 封装的组件

#### 轮播图 参数：

| 参数 | 说明 |
| :------------- | :------------- | :----- |
| imgs | 参与轮播的图片 |
| container | 轮播图的外层容器 |
| control | 轮播图的控制 |

#### http请求

调用方式Haowen.http('url', data)
使用promise的风格，简陋版本

#### 其他说明
1. pagination，tabinfo等状态全局管理，query时直接读取$store中的tab和pagination信息

2. 遍历渲染的html模板在template.js中

3. 一些页面的配置config.js下（nav，轮播图的图片路径）

#### 未完成部分：
1. tab中的查看课程详情
2. 机构介绍视频
3. 登陆关注完成度60%
