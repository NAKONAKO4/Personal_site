# GitHub Pages 部署指南

按照以下步骤将你的项目部署到GitHub Pages：

## 📋 准备工作

确保你已经：
- [x] 项目构建成功 (`npm run build`)
- [x] 代码已提交到Git仓库

## 🚀 部署步骤

### 1. 创建GitHub仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库命名建议：`physical-intelligence-clone`
4. 设置为 **Public**（GitHub Pages 免费版需要公开仓库）
5. **不要**初始化 README、.gitignore 或 license（我们已经有了）
6. 点击 "Create repository"

### 2. 连接本地仓库到GitHub

在你的项目目录中运行：

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/physical-intelligence-clone.git

# 推送代码到GitHub
git branch -M main
git push -u origin main
```

**替换 `YOUR_USERNAME` 为你的GitHub用户名**

### 3. 配置GitHub Pages

1. 在GitHub仓库页面，点击 **Settings** 标签
2. 在左侧菜单中找到 **Pages**
3. 在 "Source" 部分：
   - 选择 **Deploy from a branch** → **GitHub Actions**
4. 保存设置

### 4. 启用GitHub Actions

1. 在仓库页面点击 **Actions** 标签
2. 如果看到需要启用workflows的提示，点击 **"I understand my workflows, go ahead and enable them"**
3. GitHub Actions会自动检测到我们的 `.github/workflows/deploy.yml` 文件

### 5. 自动部署

当你推送代码到 `main` 分支时：

1. GitHub Actions 会自动运行
2. 构建你的Next.js应用
3. 部署到GitHub Pages

第一次部署大概需要2-5分钟。

### 6. 访问网站

部署完成后，你的网站将在以下地址可用：

```
https://YOUR_USERNAME.github.io/physical-intelligence-clone
```

## 📝 后续更新

每次你推送新代码到 `main` 分支，网站都会自动更新：

```bash
# 修改代码后
git add .
git commit -m "Your update message"
git push origin main
```

## 🔧 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `public/CNAME` 文件
2. 文件内容为你的域名（如：`mydomain.com`）
3. 在域名提供商处设置DNS记录指向GitHub Pages

## 🐛 故障排除

### 构建失败
- 检查Actions页面的错误日志
- 确保本地 `npm run build` 成功
- 检查是否有语法错误

### 404错误
- 确保仓库名称和配置匹配
- 检查 `next.config.mjs` 中的 `basePath` 设置

### 样式丢失
- 确保 `assetPrefix` 配置正确
- 检查控制台是否有资源加载错误

## 📞 需要帮助？

如果遇到问题：
1. 检查GitHub Actions的构建日志
2. 确认仓库设置正确
3. 查看GitHub Pages的官方文档

---

**提示**: 第一次部署可能需要几分钟才能看到网站，请耐心等待！ 