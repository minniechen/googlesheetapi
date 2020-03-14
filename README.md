# googlesheetapi
此项目的token未上传，需要自己根据官网操作获取对应的credential。

Step1: 获取Google 账号里面 service account Credential 并下载保存。

1. 参考google api练习网站，调用API操作常用的功能，如获取sheet名称，更新数据API：https://developers.google.com/sheets/api/quickstart/nodejs

2. 访问Google网站，参考文档创建新的service account credential并下载：https://console.developers.google.com/

3. 新创建个Googlesheet, 并设置分享权限Editor给第一点提到account email address。

Step2: 初始化项目

mkdir demo // 创建新文件夹

cd demo  // 访问对应的文件夹

npm init --yes // 初始化项目

Note:

npm init [-f|--force|-y|--yes]

init指令会询问一系列的问题，并将你的配置写成一个package.json文件。如果使用了-f|--force|-y|--yes这些参数，那么会生成一个默认的package.json文件。

Step3: 打开项目并安装Google API依赖包

npm install googleapis --save

Note:

在没有其他参数时这个指令会安装所有package.json文件中配置的依赖包。

npm install <packages-name> //安装这个包的最新版本

npm install <packages-name> -g //全局安装这个包的最新版本

npm install <packages-name> --sav //安装这个包的最新版本并写入package.json文件的dependencies字段。

npm install <packages-name> --sav-dev //安装这个包的最新版本并写入package.json文件的devDependencies字段。

Step4: 把step1里面生成的credential文件放到当前项目文件夹demo。

Step5: 新创建个js文件，命名“demo.js”。主要实现2个方法：获取sheet title和更新sheet里面行或列的value。
