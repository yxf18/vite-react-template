## 项目介绍
爬取目标网址信息并展示

[项目原型地址](https://mastergo.com/prototyping/156291660667183?fileOpenFrom=home&page_id=M&shareId=156291660667183)


## 技术栈
React、[Route Router19](https://reactrouter.com/home)、Ant Design、Vite、TypeScript、
(Mobx](https://github.com/mobxjs/mobx)、[@emotion/react](https://emotion.sh/docs/introduction)、Axios、[tailwindcss](https://www.tailwindcss.cn/docs/installation)

## 规范化
eslint、prettier、commintlint

如何绕过commitlint(不推荐使用，除非紧急情况需要绕过校验规则)
```bash
git commit -m "xxx" --no-verify
```

## 项目脚本
```bash
yarn // 安装依赖
npm run dev // 启动项目
npm run build // 打包项目
npm run lint // 代码检查
```

## 分支说明
- main 主分支 (发布)
- dev 开发分支 (开发)
- dev-xxx 个人分支

## 其他说明
> <font color="red">node版本：20.x</font>