# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation
記得第一步一定是安裝相關套件
```bash
$ yarn install
```

### Local Development
使用一下指令進入開發板，所有修改都能即時看到。
```bash
$ yarn run start
```

### Build

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
