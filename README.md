* npm install
* npm start

# Docker CMD
* 開啟 docker desktop
* 檢查容器 (運行中)docker ps
* 檢查容器docker ps -a
* 啟動容器docker start sql2
* 執行套件pip install flask-cors

# GIT 方式
打開到你的專案目錄：
```bash
cd /path/to/your/project
```
初始化一個新的 Git 儲存庫：
```bash
git init
```
添加你的專案檔案到儲存庫：
```bash
git add .
```
提交你的變更：
```bash
git commit -m "Initial commit"
```
在 GitHub 上建立一個新的儲存庫，並將其設定為你的本地儲存庫的遠端儲存庫：
```bash
git remote add origin (URL連結)
git branch -M main
```
將你的變更推送到 GitHub：
```bash
git push 
```
檢查現有的遠端 URL：
```bash
git remote -v
```
更新現有的遠端 URL：
```bash
git remote set-url origin　(URL連結)
```
推送更改到遠端儲存庫：
```bash
git push origin　(分支main)
```
移除現有的遠端git：
```bash
remote remove origin
```
重新添加
```bash
git remote add origin　(URL連結)
```

# GIT 開分支、切分支、合併分支
1. 創建並切換分支
* git checkout -b develop
2. 從其他分支切換回main分支
* git checkout main
3. 通常會先開一個develop 分支出來，再從develop分支衍生去開其他功能分支
* 推送變更到遠端儲存庫develop：git push origin develop

# 指令推送至github
1. 添加新的遠端儲存庫： 如果你還沒有添加新的遠端儲存庫，請先添加：
git remote add new-origin https://github.com/chengcheng3523/Flask-API.git

2. 檢查當前分支： 確保你在你想要推送的分支上(vscode左下角有當前分支名稱)，例如 develop：
git branch

3. 推送變更到新的遠端儲存庫： 將當前分支推送到新的遠端儲存庫：
git push new-origin develop

# 執行套件
pip install flask-marshmallow