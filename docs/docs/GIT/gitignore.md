要在 .gitignore 中新增忽略内容，你只需打开 .gitignore 文件，在文件末尾添加要忽略的路径或规则即可。

# 示例
比如你想忽略如下内容：

```plain
# 忽略所有 .log 文件
*.log

# 忽略 node_modules 文件夹
node_modules/

# 忽略打包后的 dist 文件夹
/dist

# 忽略配置文件
static/config.js
```

---

### **✅**** 修改后注意事项**
如果你新增的内容之前已经被 Git 跟踪了，需要额外执行以下操作让它生效：

```plain
# 取消跟踪这些文件（不会删除本地文件）
git rm -r --cached <文件或目录路径>

# 重新提交
git add .gitignore
git commit -m "update .gitignore"
```

例如：

```plain
git rm -r --cached node_modules
git commit -m "Ignore node_modules"
```



