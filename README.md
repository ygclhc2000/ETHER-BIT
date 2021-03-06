# 以太坊DAPP设计与开发

## 环境配置

#### 本项目为虚拟区块链线上交易平台，在使用前，需要先安装以下脚本模块：
1. NodeJS模块（通过npm install安装）
2. Truffle脚本模块（npm install -g truffle）
3. SafeMath所在OpenZepplelin模块（npm install @openzeppelin/contracts）
4. Chai测试模块（npm install chai）

#### 同时还需要以下软件安装和操作：
1. 下载Ganache软件
2. 在GoogleChrome安装MetaMask插件，注册账号
3. 在MetaMask中新建网络（Ganache中的虚拟网络）

## 运行方式

建议用VSCode运行软件，若启动软件则需要在命令行运行npm start便可启动。
启动软件前，确保Ganache已打开并处于相应的虚拟区块链运行状态。
启动软件后，在Google Chrome登陆网址Localhost:3000，便启动了网页，可进行相关操作。
可通过Ganache软件中的秘钥，将对应的账户导入至MetaMask模块。
任何一项在页面上的交易操作将出发MetaMask弹窗，点击确认后进行交易，可看到状态更新。

## 相关信息

Ganache相关网络信息：
URL：HTTP://127.0.0.1:7545
网络ID：5777