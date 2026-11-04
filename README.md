# dsh-thinking-pill

DeepSeek Harness（DSH）Web Profile 插件：把输入框里的模型入口换成一枚**思考强度胶囊**——左边是用光点画的档位名（`OFF` / `LOW` / `MED` / `HIGH`…），右边是一道随档位铺开的粒子洪流。

## 它做什么

- **档位是真的**：档位表来自当前模型在 DSH 模型目录里公开的 `reasoning.efforts`；拨动后写回会话模型选择（`selectModel`），不是本地装饰。
- **粒子只铺到当前档位**：流场从发射口径直延伸当前档位所在的圆点，越过即止。
- **已过档位点不画**：滑过的点和当前点都隐藏，只留尚未到达的档位点；最高档不留任何点。
- **由疏到密**：整条轨道统一是短横条，左端稀疏离散，越往右条长与密度同步抬升，形成横向光条的数据流。
- **跟随外观**：按 `body[data-ds-dark-theme]` 取深/浅两套墨色与底色，切换主题即时重绘。

## 安装

需要已能运行的 DSH web profile（本机验证于 runtime `0.2.1-rc.4`）。

```sh
dsh plugin add BenedictTom/dsh-thinking-intensity
```

本地开发：用 `plugin_manager` 的 `install_bundle` 把本目录装进 profile 即可；本包以 `link:` 形式安装，改完 `lib/` 刷新页面生效。

## 工作原理

- 接管 `conversation.input.model` 座位（`priority: -100`），自绘触发按钮与档位胶囊，替代原生的一行选择器。
- 走客户端服务 `modelDirectories`：`directoryFor(sessionId).store` 读当前选择与档位表，`.select({ provider, model, reasoningEffort })` 提交；失败（如 `session/writer-held`）会回滚并提示。
- 指针事件在捕获阶段接管，吸附到最近的档位圆点；松手才提交一次，避免被宿主判定为「点击菜单外部」而收起。
- 座位外包了一层错误边界：渲染异常只降级成一行提示，不会连带把模型入口弄没。

## 目录

| 路径 | 说明 |
|---|---|
| `lib/client/index.js` | 客户端 bundle（构建产物，本仓库直接在此修改） |
| `lib/host.js` | 宿主半边，空实现（功能全在浏览器侧） |
| `cordis.patch.yml` | bundle patch，插入 `thinking-pill` 条目 |

## 许可

[MIT](LICENSE)。本仓库基于上游 [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort)（MIT © HanaAyane）改造，视觉与交互已重做。