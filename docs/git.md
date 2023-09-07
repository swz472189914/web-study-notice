# Git 命令

1. `git init <directory>` 初始化本体仓库(可选，如果不指定，将使用当前目录)
2. `git clone <url>` 克隆一个远程仓库
3. `git add <file>` 添加文件到暂存区
4. `git add .` 要添加当前目录中的所有文件
5. `git commit -m "<message>"` 提交更改
6. `git commit -a -m "<message>"# orgit commit -am "<message>"` 对跟踪文件所做的所有更改并提交
7. `git reset <file>` 从暂存区删除一个文件
8. `git mv <current path> <new path>` 移动或重命名文件
9. `git rm <file>` 从存储库中删除文件
10. `git rm --cached <file>` 从暂存区中删除
11. `git branch` 显示分支(-a：显示所有分支（本地和远程）;-r：显示远程分支;-v：显示最后一次提交的分支)
12. `git branch <branch>` 创建一个分支
13. `git checkout -b <branch>` 创建一个分支并使用 checkout 命令切换到它
14. `git checkout <branch>` 切换到一个分支
15. `git branch -d <branch>` 删除一个分支
16. `git branch -D <branch>` 使用 -D 标志强制删除分支
17. `git merge <branch to merge into HEAD>` 合并分支(--no-ff：即使合并解析为快进，也创建合并提交;--squash：将指定分支中的所有提交压缩为单个提交)
18. `git rebase <branch to rebase from>` 变基分支
19. `git checkout <commit id>` 查看之前的提交
20. `git revert <commit id>` 恢复提交
21. `git reset <commit id>` 重置提交
22. `git reset --hard <commit id>` 添加 --hard 标志来删除所有更改
23. `git status` 查看存储库的状态
24. `git log` 显示提交历史
25. `git diff\` 显示对未暂存文件的更改
26. `git diff --staged` 使用 --staged 标志来显示对暂存文件的更改
27. `git diff <commit id 01> <commit id 02>` 显示两次提交之间的变化
28. `git stash` stash 允许您在不提交更改的情况下临时存储更改
29. `git stash save "<message>"` 将消息添加到存储中
30. `git stash list` 列出存储
31. `git stash apply <stash id>` 申请一个藏匿处,应用存储不会将其从存储列表中删除
32. `git stash drop <stash id>` 删除一个藏匿处
33. `git stash clear` 删除所有藏匿处
34. `git stash pop <stash id>` 应用和删除存储
35. `git stash show <stash id>` 显示存储中的更改
36. `git remote add <remote name> <url>` 添加远程仓库
37. `git remote` 显示远程仓库
38. `git remote -v` 显示远程存储库的 URL
39. `git remote remove <remote name>` 删除远程仓库
40. `git remote rename <old name> <new name>` 重命名远程存储库
41. `git fetch <remote name>` 从远程存储库中获取更改
42. `git fetch <remote name> <branch>` 从特定分支获取更改
43. `git pull <remote name> <branch>` 从远程存储库中拉取更改
44. `git push <remote name>` 将更改推送到远程存储库
45. `git push <remote name> <branch>` 将更改推送到特定分支

#  Git属性
1. 默认分支名称：main
2. 默认远程名称：origin
3. 当前分支参考：HEAD
4. HEAD 的父级：HEAD^ 或 HEAD~1
5. HEAD 的祖父母：HEAD^^ 或 HEAD~2