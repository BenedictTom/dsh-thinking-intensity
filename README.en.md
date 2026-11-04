# dsh-thinking-pill

A DeepSeek Harness (DSH) web-profile plugin that turns the composer's model entry into a **thinking-intensity pill** — dot-matrix effort names (`OFF` / `LOW` / `MED` / `HIGH`…) on the left, a particle stream on the right that grows with the effort level.

## What it does

- **Real effort levels.** The ladder comes from the `reasoning.efforts` the current model publishes in the DSH model directory; moving the pill writes the session model selection (`selectModel`), so it is not a local animation.
- **The stream stops at the current level.** Particles are emitted at the port and spread right up to the dot of the selected level.
- **Passed levels stay invisible.** Levels already behind — and the current one — are not drawn, only the ones still ahead. The top level draws no dot at all.
- **Sparse to dense.** The whole track uses short horizontal streaks: scattered on the left, longer and denser towards the right, so the tail reads as a data stream.
- **Follows the appearance.** Ink and background are picked for dark or light from `body[data-ds-dark-theme]`, and the canvas repaints on theme change.

## Install

Requires a working DSH web profile (verified on runtime `0.2.1-rc.4`).

```sh
dsh plugin add BenedictTom/dsh-thinking-intensity
```

Local development: install this directory into a profile with `plugin_manager`'s `install_bundle`. The package is installed as a `link:`, so editing `lib/` and refreshing the page is enough.

## How it works

- Takes over the `conversation.input.model` seat (`priority: -100`) and draws its own trigger plus the effort pill instead of the native one-line picker.
- Uses the client service `modelDirectories`: `directoryFor(sessionId).store` reads the current selection and ladder, `.select({ provider, model, reasoningEffort })` commits; failures (`session/writer-held`) roll back and surface a hint.
- Pointer events are captured at the capture phase and snapped to the nearest level dot; the commit happens once on release, so the host does not treat the gesture as a click outside its menu.
- The seat is wrapped in an error boundary: a render failure degrades to a one-line notice instead of removing the model entry.

## Layout

| Path | Purpose |
|---|---|
| `lib/client/index.js` | client bundle (build output; edited directly in this repo) |
| `lib/host.js` | host half, empty (everything runs in the browser) |
| `cordis.patch.yml` | bundle patch inserting the `thinking-pill` entry |

## License

[MIT](LICENSE). Based on [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) (MIT © HanaAyane); the visuals and interaction were rebuilt.