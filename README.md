# dsh-thinking-intensity

A pill-shaped thinking-intensity control that floats at the top-right of the DSH composer. A dot-matrix label shows the session's current reasoning effort, and a particle field to its right grows with that effort — sparse floating dots at the low end, dense horizontal scan lines at the high end.

Dragging the pill (or pressing arrow keys on it) writes the new effort back to the session, so the next request really is sent at that reasoning effort. It is not a local visual setting.

## What it does

- **Dot-matrix label.** The label is drawn dot by dot on a canvas from a built-in 5×7 font — no webfont, no font file. It shows the effort id in upper case: `OFF`, `LOW`, `MED`, `HIGH`, `XHIGH`, `MAX`, `MIN`.
- **Particle field.** The field ends where the current effort sits on the model's ladder: the higher the effort, the further right the field reaches. Low effort leaves a short spray of slow, floating dots; high effort stretches every particle into a short horizontal light bar, which reads as a data flood running right.
- **Real effort.** The pill reads the session's model selection and its `reasoning.efforts` ladder, and writes back through the model directory service. Changing it here is the same as changing it in the model menu.
- **Models without a ladder** show `AUTO` and are not draggable — there is nothing to pick.
- **Keyboard.** `←`/`→` step one level, `Home`/`End` jump to the ends, `Enter`/`Space` toggle between the first and last level. The pill is a `role="slider"` with `aria-valuenow` / `aria-valuetext`.
- **Failures are visible.** If the session refuses the change (for example while another writer holds the session), the pill shows a red ring and the diagnostic code in its tooltip, then settles back to the real value after ~1.6 s.
- **Reduced motion.** With `prefers-reduced-motion` the particles stop drifting and the field becomes a still dot matrix.
- **Locale.** English and Chinese strings are registered through the client locale service.

## Requirements

- DeepSeek Harness with client plugin support (the Web GUI).
- A model whose catalog entry declares reasoning efforts. On DeepSeek Harness' own providers, `deepseek-v4.1-flash` and friends expose `off/low/medium/high`.

## Install

From the plugin market: search for **Thinking Intensity**.

Or from a shell:

```sh
dsh plugin add lxj5820/dsh-thinking-intensity
```

The bundle inserts one row (`thinking-intensity`) into the Web composition. The host half is empty on purpose — all of the behaviour is in the browser bundle, registered on the `conversation.input.overlay` slot.

## Notes

- The pill is per session: it follows the session you are looking at, not a global default.
- It never touches the default model selection — only the current session's.
- The label, field length and colour ramp are all derived from the ladder index, so a model with two efforts gets a two-step pill and one with five gets five steps.

## License

MIT. See [LICENSE](LICENSE).