window.__ModuleLoader__.load({
  id: "dsh-thinking-pill",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_react = require("react");

// src/client/styles.ts
var CSS = `
.re-effort {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  min-width: 0;
  gap: 8px;
  color: var(--dsw-alias-label-secondary);
  user-select: none;
  box-sizing: border-box;
}
.re-effort-slider[data-floor] .re-effort-canvas { opacity: 1 !important; }
.re-effort-caption {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
  color: var(--dsw-alias-label-primary, #15171b);
  font-size: 13px;
  line-height: 1.2;
}
.re-effort-caption-label {
  flex: none;
  color: inherit;
  font-weight: 500;
}
.re-effort-caption-value {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsw-alias-label-primary, #15171b);
  font-weight: 600;
}
.re-effort-caption-value.is-top {
  color: #8a2be8;
}
body[data-ds-dark-theme] .re-effort-caption {
  color: var(--dsw-alias-label-primary, #f2f4f8);
}
body[data-ds-dark-theme] .re-effort-caption-value {
  color: var(--dsw-alias-label-primary, #f2f4f8);
}
body[data-ds-dark-theme] .re-effort-caption-value.is-top {
  color: #c85cff;
}
.re-effort-slider {
  --re-progress: 50%;
  --re-inset: 12px;
  --re-track-0: #4a2a08;
  --re-track-1: #e8b03a;
  --re-track-2: #f6c85a;
  --re-glow: #ffc14d;
  --re-warm: 0;
  --re-purple: 0;
  --re-floor: 0;
  position: relative;
  width: 100%;
  height: 22px;
  flex: 1 1 auto;
  border-radius: 7px;
  isolation: isolate;
  transition: filter 180ms ease;
}
.re-effort-track {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  background: linear-gradient(100deg, var(--re-track-0) 0%, var(--re-track-1) 58%, var(--re-track-2) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 232, 190, .18),
    inset 0 -1px 0 rgba(0, 0, 0, .5),
    0 3px 10px rgba(42, 18, 4, .34);
}
.re-effort-track::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 45%, rgba(255, 236, 190, .14), transparent 24%),
    linear-gradient(90deg, rgba(0, 0, 0, .28), transparent 42%, color-mix(in srgb, var(--re-glow) 18%, transparent));
  pointer-events: none;
}
.re-effort-ticks {
  position: absolute;
  z-index: 4;
  inset: 0;
  pointer-events: none;
}
.re-effort-tick {
  position: absolute;
  top: 50%;
  width: 5px;
  height: 5px;
  border: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .18);
  transform: translate(-50%, -50%);
}
.re-effort-tick.is-current {
  width: 6px;
  height: 6px;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .22), 0 0 6px rgba(255,255,255,.7);
}
.re-effort-fx {
  position: absolute;
  z-index: 1;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}
.re-effort-canvas {
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  image-rendering: pixelated;
  mix-blend-mode: screen;
  transition: filter 140ms ease;
}
.re-effort-flare {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: var(--re-progress);
  width: 78px;
  height: 46px;
  border-radius: 50%;
  background: radial-gradient(ellipse at 100% 50%, rgba(255,255,255,.96) 0 4%, color-mix(in srgb, var(--re-glow) 82%, #fff) 11%, color-mix(in srgb, var(--re-glow) 50%, transparent) 28%, color-mix(in srgb, var(--re-glow) 20%, transparent) 49%, transparent 74%);
  filter: blur(2px) saturate(1.25);
  mix-blend-mode: screen;
  transform: translate(-100%, -50%);
  transition: left 70ms linear, filter 140ms ease;
  pointer-events: none;
}
.re-effort-flare::before,
.re-effort-flare::after {
  content: "";
  position: absolute;
  inset: 50% auto auto 100%;
  border-radius: 999px;
  transform: translate(-50%, -50%);
}
.re-effort-flare::before {
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--re-glow) 42%, transparent), #fff6e8, color-mix(in srgb, var(--re-glow) 70%, transparent), transparent);
  box-shadow: 0 0 7px var(--re-glow), 0 0 13px color-mix(in srgb, var(--re-glow) 64%, transparent);
}
.re-effort-flare::after {
  width: 1px;
  height: 20px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--re-glow) 84%, #fff), transparent);
  box-shadow: 0 0 7px var(--re-glow);
}
.re-effort-knob {
  position: absolute;
  z-index: 4;
  top: 0;
  bottom: 0;
  left: var(--re-progress);
  width: 18px;
  height: auto;
  border: 0;
  border-radius: 4px;
  background: #fff;
  box-shadow:
    0 0 0 1px rgba(0,0,0,.08),
    0 1px 3px rgba(0,0,0,.2);
  transform: translateX(-50%);
  transition: left 190ms cubic-bezier(.22,1,.36,1), transform 160ms ease, box-shadow 180ms ease;
  pointer-events: none;
}
.re-effort-input {
  position: absolute;
  z-index: 5;
  inset: -5px 0;
  width: 100%;
  height: calc(100% + 10px);
  margin: 0;
  opacity: 0;
  cursor: grab;
  touch-action: none;
}
.re-effort-input:active { cursor: grabbing; }
.re-effort-input:focus-visible + .re-effort-knob {
  outline: 2px solid var(--dsw-static-blue-400);
  outline-offset: 2px;
}
.re-effort.is-dragging .re-effort-canvas {
  filter: saturate(1.45) brightness(1.28) contrast(1.06);
}
.re-effort.is-dragging .re-effort-flare {
  filter: blur(1.5px) saturate(1.6) brightness(1.42);
  transition: none;
}
.re-effort.is-dragging .re-effort-knob {
  transform: translateX(-50%) scale(1.04);
  transition: none;
  box-shadow:
    0 0 0 3px color-mix(in srgb, var(--re-glow) 28%, transparent),
    0 0 20px color-mix(in srgb, var(--re-glow) 78%, transparent),
    0 0 31px color-mix(in srgb, var(--re-glow) 52%, transparent),
    0 3px 8px rgba(0,0,0,.32);
}
.re-effort-slider[data-top] .re-effort-track {
  animation: re-effort-dark-breathe 1.9s ease-in-out infinite;
}
.re-effort-slider[data-top] .re-effort-knob {
  box-shadow:
    0 0 0 1px rgba(255,255,255,.55),
    0 0 14px color-mix(in srgb, var(--re-glow) 70%, transparent),
    0 1px 3px rgba(0,0,0,.22);
}
.re-effort-slider[data-top] .re-effort-ticks {
  display: none;
}
.re-effort-slider[data-floor] .re-effort-track {
  background: #ececee;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.9),
    inset 0 0 0 1px rgba(160,164,176,.18);
  animation: none;
}
.re-effort-slider[data-floor] .re-effort-track::after,
.re-effort-slider[data-floor] .re-effort-track::before,
.re-effort-slider[data-floor] .re-effort-flare,
.re-effort-slider[data-floor] .re-effort-canvas {
  opacity: 0;
}
.re-effort-slider[data-floor] .re-effort-tick {
  background: #8b8f99;
  box-shadow: none;
}
.re-effort-slider[data-floor] .re-effort-tick.is-current {
  background: #6d717a;
}
.re-effort.is-error .re-effort-slider {
  outline: 1px solid var(--dsw-alias-state-error-secondary);
  outline-offset: 2px;
}
.re-effort.is-busy { opacity: .72; }
.re-effort-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.re-model-root {
  position: relative;
  display: inline-flex;
  min-width: 0;
}
.re-model-trigger {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  max-width: 230px;
  height: 28px;
  padding: 0 8px 0 10px;
  border: 0;
  border-radius: 9px;
  color: var(--dsw-alias-label-primary, #15171b);
  background: transparent;
  font: inherit;
  cursor: pointer;
  transition: background 140ms ease;
}
.re-model-trigger:hover,
.re-model-trigger[aria-expanded="true"] {
  background: var(--dsw-alias-fill-tertiary, rgba(120,125,140,.1));
}
.re-model-trigger:disabled { cursor: not-allowed; opacity: .5; }
.re-model-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1;
}
.re-model-effort {
  flex: 0 0 auto;
  color: var(--dsw-static-deepseek-500, #4d70ff);
  font-size: 12px;
  line-height: 1;
}
.re-model-chevron {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  margin: -3px 1px 0 3px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  opacity: .55;
  transform: rotate(45deg);
  transition: transform 150ms ease, margin 150ms ease;
}
.re-model-trigger[aria-expanded="true"] .re-model-chevron {
  margin-top: 3px;
  transform: rotate(225deg);
}
.re-model-menu {
  position: absolute;
  right: 0;
  bottom: calc(100% + 8px);
  z-index: 1200;
  width: min(312px, calc(100vw - 32px));
  overflow: hidden;
  border: 1px solid var(--dsw-alias-stroke-secondary, rgba(121,126,145,.2));
  border-radius: 16px;
  color: var(--dsw-alias-label-primary, #15171b);
  background: var(--dsw-alias-bg-elevated, #fff);
  box-shadow: 0 14px 42px rgba(18, 24, 42, .18), 0 3px 10px rgba(18, 24, 42, .08);
  animation: re-menu-in 150ms cubic-bezier(.22,1,.36,1);
}
.re-advanced {
  padding: 14px;
}
.re-menu-separator {
  height: 1px;
  background: var(--dsw-alias-stroke-secondary, rgba(121,126,145,.16));
}
.re-model-row,
.re-model-option,
.re-model-back {
  width: 100%;
  border: 0;
  color: inherit;
  background: transparent;
  font: inherit;
  cursor: pointer;
}
.re-model-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 8px;
  min-height: 45px;
  padding: 0 14px;
  text-align: left;
}
.re-model-row:hover,
.re-model-option:hover,
.re-model-back:hover { background: var(--dsw-alias-fill-tertiary, rgba(120,125,140,.09)); }
.re-model-row-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; }
.re-model-row-effort { color: var(--dsw-static-deepseek-500, #4d70ff); font-size: 12px; }
.re-row-chevron { font-size: 20px; line-height: 1; opacity: .42; }
.re-model-pane { max-height: min(390px, 60vh); overflow-y: auto; padding: 7px; }
.re-model-back {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 0 8px;
  border-radius: 8px;
  text-align: left;
  color: var(--dsw-alias-label-secondary, #686c75);
  font-size: 12px;
}
.re-model-group-title { padding: 10px 9px 5px; color: var(--dsw-alias-label-tertiary, #9296a0); font-size: 11px; }
.re-model-option {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 20px;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  padding: 7px 9px;
  border-radius: 9px;
  text-align: left;
}
.re-model-option-copy { min-width: 0; }
.re-model-option-name { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
.re-model-option-desc { display: block; margin-top: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-tertiary, #9296a0); font-size: 10px; }
.re-model-check { color: var(--dsw-static-deepseek-500, #4d70ff); font-size: 15px; text-align: center; }
.re-model-status { padding: 14px; color: var(--dsw-alias-label-tertiary, #9296a0); font-size: 12px; text-align: center; }
.re-model-error { margin: 8px; padding: 8px 10px; border-radius: 8px; color: var(--dsw-alias-state-error-primary, #c83e4d); background: var(--dsw-alias-state-error-tertiary, rgba(220,55,70,.08)); font-size: 11px; }
.re-setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(121,126,145,.18));
}
.re-setting-copy { min-width: 0; }
.re-setting-title {
  color: var(--dsw-alias-label-primary, #15171b);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.re-setting-description {
  margin-top: 3px;
  color: var(--dsw-alias-label-tertiary, #9296a0);
  font-size: 12px;
  line-height: 18px;
}
.re-setting-control { display: inline-flex; align-items: center; gap: 10px; flex: none; }
.re-setting-state { color: var(--dsw-alias-label-secondary, #686c75); font-size: 13px; }
.re-setting-switch {
  position: relative;
  width: 38px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--dsw-alias-fill-quaternary, #c7cbd3);
  cursor: pointer;
  transition: background 150ms ease;
}
.re-setting-switch:hover { filter: brightness(.97); }
.re-setting-switch:disabled { cursor: not-allowed; opacity: .45; }
.re-setting-switch:focus-visible {
  outline: 2px solid var(--dsw-static-blue-400, #5d83ff);
  outline-offset: 2px;
}
.re-setting-switch.is-on { background: var(--dsw-alias-state-business-primary, #4f73ff); }
.re-setting-switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.2);
  transition: transform 170ms cubic-bezier(.22,1,.36,1);
}
.re-setting-switch.is-on .re-setting-switch-knob { transform: translateX(16px); }
body[data-ds-dark-theme] .re-model-menu {
  border-color: rgba(136, 145, 180, .2);
  color: var(--dsw-alias-label-primary, #f2f4f8);
  background: var(--dsw-alias-bg-elevated, #202126);
  box-shadow: 0 18px 46px rgba(0,0,0,.48), 0 3px 12px rgba(0,0,0,.32);
}
body[data-ds-dark-theme] .re-model-trigger { color: var(--dsw-alias-label-primary, #f2f4f8); }
@keyframes re-menu-in {
  from { opacity: 0; transform: translateY(5px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
body:not([data-ds-dark-theme]) .re-effort-slider {
  filter: none;
}
body:not([data-ds-dark-theme]) .re-effort-track {
  background: linear-gradient(90deg, #fff6e8 0%, color-mix(in srgb, var(--re-track-1) 55%, #fff) 42%, var(--re-track-2) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.9),
    inset 0 0 0 1px rgba(176,120,48,.16),
    0 3px 10px rgba(140,78,18,.12);
}
body:not([data-ds-dark-theme]) .re-effort-track::before {
  content: "";
  position: absolute;
  z-index: 0;
  inset: 0 auto 0 0;
  width: var(--re-progress);
  border-radius: inherit;
  background: linear-gradient(90deg, #fff8ee 0%, color-mix(in srgb, var(--re-track-1) 70%, #fff) 42%, var(--re-track-2) 100%);
  transition: width 190ms cubic-bezier(.22,1,.36,1);
}
body:not([data-ds-dark-theme]) .re-effort-slider[data-top] .re-effort-track::before {
  background: linear-gradient(90deg, #f7efff 0%, #c9a6ff 42%, #9a2cf0 100%);
}
body:not([data-ds-dark-theme]) .re-effort.is-dragging .re-effort-track::before {
  transition: none;
}
body:not([data-ds-dark-theme]) .re-effort-track::after {
  z-index: 1;
  background: linear-gradient(90deg, rgba(255,255,255,.48), transparent 34%, color-mix(in srgb, var(--re-glow) 10%, transparent));
}
body:not([data-ds-dark-theme]) .re-effort-tick {
  background: #fff;
  box-shadow: 0 0 0 1px rgba(80, 64, 32, .28);
}
body:not([data-ds-dark-theme]) .re-effort-tick.is-current {
  background: #fff;
}
body:not([data-ds-dark-theme]) .re-effort-slider[data-floor] .re-effort-track {
  background: #ececee;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.95),
    inset 0 0 0 1px rgba(160,164,176,.2);
}
body:not([data-ds-dark-theme]) .re-effort-slider[data-floor] .re-effort-tick {
  background: #8b8f99;
  box-shadow: none;
}
body:not([data-ds-dark-theme]) .re-effort-canvas {
  opacity: .78;
  mix-blend-mode: multiply;
}
body:not([data-ds-dark-theme]) .re-effort-flare {
  background: radial-gradient(ellipse at 100% 50%, rgba(255,255,255,.98) 0 5%, color-mix(in srgb, var(--re-glow) 72%, #fff) 13%, color-mix(in srgb, var(--re-glow) 42%, transparent) 31%, color-mix(in srgb, var(--re-glow) 16%, transparent) 53%, transparent 75%);
  filter: blur(2px) saturate(1.12);
}
body:not([data-ds-dark-theme]) .re-effort-flare::before {
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--re-glow) 34%, transparent), #fff, color-mix(in srgb, var(--re-glow) 58%, transparent), transparent);
  box-shadow: 0 0 7px color-mix(in srgb, var(--re-glow) 50%, transparent), 0 0 13px color-mix(in srgb, var(--re-glow) 38%, transparent);
}
body:not([data-ds-dark-theme]) .re-effort-flare::after {
  background: linear-gradient(180deg, transparent, rgba(255,255,255,.94), transparent);
  box-shadow: 0 0 7px color-mix(in srgb, var(--re-glow) 44%, transparent);
}
body:not([data-ds-dark-theme]) .re-effort-knob {
  border-color: transparent;
  box-shadow:
    0 0 0 1px rgba(0,0,0,.06),
    0 1px 3px rgba(70, 40, 8, .18);
}
body:not([data-ds-dark-theme]) .re-effort-slider[data-top] .re-effort-track {
  animation-name: re-effort-light-breathe;
}
body:not([data-ds-dark-theme]) .re-effort-slider[data-top] .re-effort-knob,
body:not([data-ds-dark-theme]) .re-effort.is-dragging .re-effort-knob {
  box-shadow:
    0 0 0 1px rgba(255,255,255,.7),
    0 0 12px color-mix(in srgb, var(--re-glow) 36%, transparent),
    0 1px 3px rgba(70, 40, 8, .18);
}
@keyframes re-effort-dark-breathe {
  0%, 100% { box-shadow: inset 0 1px 0 rgba(255, 228, 190, .16), 0 3px 10px rgba(42, 16, 4, .4); }
  50% { box-shadow: inset 0 1px 0 rgba(255, 214, 170, .24), 0 0 21px color-mix(in srgb, var(--re-glow) 50%, transparent); }
}
@keyframes re-effort-light-breathe {
  0%, 100% { box-shadow: inset 0 1px 0 rgba(255,255,255,.9), inset 0 0 0 1px rgba(176,120,48,.16), 0 3px 10px rgba(140,78,18,.12); }
  50% { box-shadow: inset 0 1px 0 rgba(255,255,255,.96), inset 0 0 0 1px color-mix(in srgb, var(--re-glow) 28%, transparent), 0 0 19px color-mix(in srgb, var(--re-glow) 24%, transparent); }
}
.re-adapt {
  padding: 10px 14px 12px;
}
.re-adapt-copy { min-width: 0; }
.re-adapt-title {
  color: var(--dsw-alias-label-primary, #15171b);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
}
.re-adapt-desc {
  margin-top: 3px;
  color: var(--dsw-alias-label-tertiary, #9296a0);
  font-size: 11px;
  line-height: 1.55;
}
.re-adapt-open {
  margin-top: 8px;
  padding: 5px 10px;
  border: 0;
  border-radius: 8px;
  color: #fff;
  background: var(--dsw-static-deepseek-500, #4d70ff);
  font-size: 12px;
  cursor: pointer;
}
.re-adapt-open:hover { filter: brightness(1.06); }
.re-adapt-panel {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid var(--dsw-alias-stroke-secondary, rgba(121,126,145,.2));
  border-radius: 10px;
  background: var(--dsw-alias-bg-page, #f7f8fa);
}
body[data-ds-dark-theme] .re-adapt-panel {
  background: rgba(20, 22, 30, .5);
}
.re-adapt-scroll {
  max-height: min(260px, 40vh);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-right: 4px;
  scrollbar-width: thin;
}
.re-adapt-panel-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, #686c75);
}
.re-adapt-arrow { color: var(--dsw-static-deepseek-500, #4d70ff); font-weight: 500; }
.re-adapt-yaml {
  margin: 9px 0 0;
  padding: 8px 10px;
  overflow: auto;
  border-radius: 8px;
  color: var(--dsw-alias-label-secondary, #686c75);
  background: rgba(120, 125, 140, .08);
  font: 11px/1.6 ui-monospace, SFMono-Regular, Consolas, monospace;
}
.re-adapt-steps {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  color: var(--dsw-alias-label-tertiary, #9296a0);
  font-size: 11px;
  line-height: 1.55;
}
.re-adapt-steps code {
  padding: 1px 4px;
  border-radius: 4px;
  background: var(--dsw-alias-fill-tertiary, rgba(120,125,140,.12));
}
.re-adapt-warning {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--dsw-alias-state-warning-primary, #b7791f);
  background: var(--dsw-alias-state-warning-tertiary, rgba(213, 148, 44, .1));
  font-size: 11px;
  line-height: 1.6;
}
.re-adapt-label {
  margin-top: 10px;
  color: var(--dsw-alias-label-secondary, #686c75);
  font-size: 11px;
  font-weight: 500;
}
.re-adapt-step-title {
  font-weight: 500;
  color: var(--dsw-alias-label-secondary, #686c75);
}
.re-adapt-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
.re-adapt-apply,
.re-adapt-cancel {
  padding: 5px 12px;
  border: 0;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
}
.re-adapt-apply {
  color: #fff;
  background: var(--dsw-static-deepseek-500, #4d70ff);
}
.re-adapt-cancel {
  color: var(--dsw-alias-label-secondary, #686c75);
  background: var(--dsw-alias-fill-tertiary, rgba(120,125,140,.12));
}
.re-adapt-apply:disabled,
.re-adapt-cancel:disabled { cursor: wait; opacity: .6; }
@media (prefers-reduced-motion: reduce) {
  .re-effort-slider[data-top] .re-effort-track { animation: none; }
  .re-effort-knob,
  .re-effort-flare,
  body:not([data-ds-dark-theme]) .re-effort-track::before { transition: none; }
  .re-model-menu { animation: none; }
}
/* ===== fork: 思考强度胶囊（点阵字 + 粒子洪流，无三角手柄） ===== */
.re-effort { display: block; width: 100%; padding: 0; gap: 0; }
.re-effort-caption { display: none !important; }
.re-effort-slider {
  position: relative;
  width: 100%;
  height: 36px;
  border-radius: 18px;
  background-color: rgba(66, 68, 72, 0.94);
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 45%, rgba(0, 0, 0, 0.20) 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.26);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -12px 20px -14px rgba(0, 0, 0, 0.75),
    0 12px 28px -16px rgba(0, 0, 0, 0.85);
  overflow: hidden;
  isolation: isolate;
}
body:not([data-ds-dark-theme]) .re-effort-slider {
  background-color: rgba(244, 245, 247, 0.96);
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(15, 20, 26, 0.03) 50%, rgba(15, 20, 26, 0.06) 100%);
  border-color: rgba(15, 20, 26, 0.18);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 -12px 20px -14px rgba(15, 20, 26, 0.22),
    0 10px 24px -16px rgba(15, 20, 26, 0.5);
}
.re-effort-track, .re-effort-track::before, .re-effort-track::after,
.re-effort-ticks, .re-effort-tick, .re-effort-knob,
.re-effort-flare, .re-effort-flare::before, .re-effort-flare::after, .re-effort-glow {
  display: none !important;
  background: none !important;
  box-shadow: none !important;
  animation: none !important;
}
.re-effort-fx { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; }
.re-effort-canvas { position: absolute; inset: 0; width: 100% !important; height: 100% !important; display: block; }
.re-effort-input {
  position: absolute; inset: 0; width: 100%; height: 100%; margin: 0;
  opacity: 0; cursor: default; touch-action: none;
  -webkit-appearance: none; appearance: none; background: transparent;
}
.re-effort.is-dragging .re-effort-canvas, .re-effort.is-dragging .re-effort-flare { animation: none !important; filter: none !important; transform: none !important; }
`;

// src/client/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ADAPT_CHANNEL = "/dsh-reasoning-effort";
var LEVEL_NAMES = {
  off: "\u5173\u95ED",
  minimal: "\u6781\u4F4E",
  low: "\u4F4E",
  medium: "\u4E2D",
  high: "\u9AD8",
  xhigh: "\u6781\u9AD8",
  max: "\u6700\u5927"
};
function levelName(level) {
  return LEVEL_NAMES[level] ?? level;
}
function levelsText(levels) {
  return levels.length === 0 ? "\u65E0\u6863\u4F4D" : levels.map((level) => levelName(level)).join(" / ");
}
function makeAdaptationService(rpc) {
  if (rpc === void 0) return null;
  const call = async (endpoint, payload) => {
    try {
      const result = await rpc.call(ADAPT_CHANNEL, endpoint, payload);
      return result.ok ? result.value : null;
    } catch {
      return null;
    }
  };
  return {
    diagnose: (provider, model) => call("diagnose", { provider, model })
  };
}
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      textarea.remove();
      return ok;
    } catch {
      return false;
    }
  }
}
var SLOT = "conversation.input.model";
var inject = ["slots", "modelDirectories", "connection"];
function currentModel(state) {
  if (state.current === null) return void 0;
  const group = state.groups.find((candidate) => candidate.id === state.current?.provider);
  return group?.models.find((candidate) => candidate.id === state.current?.model);
}
function sliderLevels(state) {
  const efforts = currentModel(state)?.reasoning?.efforts;
  return efforts !== void 0 && efforts.length >= 2 ? efforts : [];
}
function effortIndex(levels, id) {
  return levels.findIndex((level) => level.id === id);
}
function clampIndex(value, count) {
  return Math.max(0, Math.min(count - 1, Math.round(value)));
}
function effectiveEffortIndex(levels, state) {
  const reasoning = currentModel(state)?.reasoning;
  const current = effortIndex(levels, state.current?.reasoningEffort);
  if (current >= 0) return current;
  const fallback = effortIndex(levels, reasoning?.defaultEffort);
  if (fallback >= 0) return fallback;
  return Math.floor((levels.length - 1) / 2);
}
function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}
function mixChannel(from, to, amount) {
  return Math.round(from + (to - from) * amount);
}
function parseHex(color) {
  const hex = color.replace("#", "");
  return [
    Number.parseInt(hex.slice(0, 2), 16),
    Number.parseInt(hex.slice(2, 4), 16),
    Number.parseInt(hex.slice(4, 6), 16)
  ];
}
function mixHex(from, to, amount) {
  const a = parseHex(from);
  const b = parseHex(to);
  return `#${[0, 1, 2].map((index) => mixChannel(a[index], b[index], amount).toString(16).padStart(2, "0")).join("")}`;
}
function mixStops(from, to, amount) {
  return {
    c0: mixHex(from.c0, to.c0, amount),
    c1: mixHex(from.c1, to.c1, amount),
    c2: mixHex(from.c2, to.c2, amount),
    glow: mixHex(from.glow, to.glow, amount)
  };
}
function effortCaption(level) {
  const raw = level !== void 0 && /^[\x20-\x7E]+$/.test(level.name) ? level.name : level?.id ?? "";
  if (/^max$/i.test(raw)) return "MAX";
  if (raw.length === 0) return "";
  return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
}
function sliderPalette(preview, count, dragging) {
  const last = Math.max(1, count - 1);
  const t = count < 2 ? 0 : clamp01(preview / last);
  const snappedTop = !dragging && preview >= last - 1e-3;
  const snappedFloor = !dragging && preview <= 0.02;
  const floor = snappedFloor ? 1 : dragging && t < 0.14 ? 1 - t / 0.14 : 0;
  const warm = count <= 2 ? 1 : clamp01(Math.min(preview, last - 1) / Math.max(1, last - 1));
  const purple = snappedTop ? 1 : t < 0.82 ? 0 : clamp01((t - 0.82) / 0.18);
  const grey = { c0: "#e4e4e8", c1: "#ececee", c2: "#f3f3f5", glow: "#d4d4d8" };
  const warmLow = { c0: "#4a2a08", c1: "#e8b03a", c2: "#f6c85a", glow: "#ffc14d" };
  const warmHigh = { c0: "#3a1604", c1: "#e07010", c2: "#ff8a12", glow: "#ff9a2a" };
  const purpleTop = { c0: "#1c0624", c1: "#8a14e8", c2: "#d24cff", glow: "#c85cff" };
  const mixed = mixStops(mixStops(mixStops(warmLow, warmHigh, warm), purpleTop, purple), grey, floor);
  return { ...mixed, warm, purple, floor };
}

const DOT_FONT = {
	'A': '01110/10001/10001/11111/10001/10001/10001',
	'B': '11110/10001/10001/11110/10001/10001/11110',
	'C': '01110/10001/10000/10000/10000/10001/01110',
	'D': '11110/10001/10001/10001/10001/10001/11110',
	'E': '11111/10000/10000/11110/10000/10000/11111',
	'F': '11111/10000/10000/11110/10000/10000/10000',
	'G': '01110/10001/10000/10111/10001/10001/01111',
	'H': '10001/10001/10001/11111/10001/10001/10001',
	'I': '11111/00100/00100/00100/00100/00100/11111',
	'J': '00111/00010/00010/00010/00010/10010/01100',
	'K': '10001/10010/10100/11000/10100/10010/10001',
	'L': '10000/10000/10000/10000/10000/10000/11111',
	'M': '10001/11011/10101/10101/10001/10001/10001',
	'N': '10001/11001/10101/10011/10001/10001/10001',
	'O': '01110/10001/10001/10001/10001/10001/01110',
	'P': '11110/10001/10001/11110/10000/10000/10000',
	'Q': '01110/10001/10001/10001/10101/10010/01101',
	'R': '11110/10001/10001/11110/10100/10010/10001',
	'S': '01111/10000/10000/01110/00001/00001/11110',
	'T': '11111/00100/00100/00100/00100/00100/00100',
	'U': '10001/10001/10001/10001/10001/10001/01110',
	'V': '10001/10001/10001/10001/10001/01010/00100',
	'W': '10001/10001/10001/10101/10101/11011/10001',
	'X': '10001/10001/01010/00100/01010/10001/10001',
	'Y': '10001/10001/01010/00100/00100/00100/00100',
	'Z': '11111/00001/00010/00100/01000/10000/11111',
	'0': '01110/10001/10011/10101/11001/10001/01110',
	'1': '00100/01100/00100/00100/00100/00100/01110',
	'2': '01110/10001/00001/00010/00100/01000/11111',
	'3': '11111/00010/00100/00010/00001/10001/01110',
	'4': '00010/00110/01010/10010/11111/00010/00010',
	'5': '11111/10000/11110/00001/00001/10001/01110',
	'6': '00110/01000/10000/11110/10001/10001/01110',
	'7': '11111/00001/00010/00100/01000/01000/01000',
	'8': '01110/10001/10001/01110/10001/10001/01110',
	'9': '01110/10001/10001/01111/00001/00010/01100',
	' ': '00000/00000/00000/00000/00000/00000/00000',
	'-': '00000/00000/00000/11111/00000/00000/00000',
	'.': '00000/00000/00000/00000/00000/00110/00110',
	'/': '00001/00010/00010/00100/01000/01000/10000',
	'?': '01110/10001/00001/00010/00100/00000/00100',
	};

const DOT_SHORT = {
  off: 'OFF', none: 'OFF', minimal: 'MIN', min: 'MIN',
  low: 'LOW', light: 'LOW', medium: 'MED', med: 'MED', mid: 'MED',
  high: 'HIGH', xhigh: 'XHIGH', 'extra-high': 'XHIGH', max: 'MAX', maximum: 'MAX', ultra: 'MAX', extreme: 'MAX'
};

function levelLabel(raw) {
  const key = String(raw === undefined || raw === null ? '' : raw).trim().toLowerCase();
  if (key === '') return 'MED';
  if (DOT_SHORT[key] !== undefined) return DOT_SHORT[key];
  const letters = key.toUpperCase().replace(/[^A-Z0-9]/g, '');
  return letters === '' ? 'MED' : letters.slice(0, 6);
}

const dotRand = (seed) => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};

function idxMix(from, to, amount) {
  const k = Math.max(0, Math.min(1, amount));
  return [
    Math.round(from[0] + (to[0] - from[0]) * k),
    Math.round(from[1] + (to[1] - from[1]) * k),
    Math.round(from[2] + (to[2] - from[2]) * k)
  ];
}

let tiHandleRatio = 0.5;
let tiLevelCount = 4;
let tiDotDump = 0;
let tiLabelMax = 4;
let tiCommitLevel = null;
let tiTrack = { left: 0.3, right: 1, count: 4 };


function drawRadiation(context, width, height, time, state) {
  const progress = Math.max(0, Math.min(1, typeof state.progress === 'number' ? state.progress : 0));
  const eased = progress * progress * (3 - 2 * progress);
  const isDark = document.body.hasAttribute('data-ds-dark-theme');
  const ink = isDark ? [247, 251, 254] : [14, 18, 24];
  const faded = isDark ? [150, 162, 174] : [122, 130, 140];
  context.clearRect(0, 0, width, height);

  const text = levelLabel(state.label);
  const step = Math.max(1.6, (height * 0.40) / 7);
  const dot = step * 0.82;
  const gap = step * 0.95;
  const padLeft = Math.max(9, height * 0.36);
  const labelTop = (height - (7 * step - step * 0.5)) / 2;
  const tone = idxMix(faded, ink, Math.min(1, 0.2 + 0.9 * eased));
  context.fillStyle = 'rgba(' + tone[0] + ',' + tone[1] + ',' + tone[2] + ',' + (0.7 + 0.28 * eased).toFixed(3) + ')';
  context.shadowColor = 'rgba(' + tone[0] + ',' + tone[1] + ',' + tone[2] + ',' + (0.18 + 0.4 * eased).toFixed(3) + ')';
  context.shadowBlur = 2;
  let penX = padLeft;
  for (let index = 0; index < text.length; index += 1) {
    const rows = (DOT_FONT[text[index]] || DOT_FONT[' ']).split('/');
    for (let row = 0; row < rows.length; row += 1) {
      for (let col = 0; col < 5; col += 1) {
        if (rows[row][col] !== '1') continue;
        context.beginPath();
        context.arc(penX + col * step + step / 2, labelTop + row * step + step / 2, dot / 2, 0, Math.PI * 2);
        context.fill();
      }
    }
    penX += 5 * step + gap;
  }
  context.shadowBlur = 0;

  const reservedW = Math.max(penX - padLeft, tiLabelMax * (5 * step + gap));
  const fieldStart = padLeft + reservedW + step * 0.7;
  const trackEnd = width - padLeft * 1.15;
  const span = Math.max(10, trackEnd - fieldStart);
  const levelCount = Math.max(2, tiLevelCount);
  const curLevel = Math.round(Math.max(0, Math.min(1, progress)) * (levelCount - 1));
  const trackStart = fieldStart + Math.max(6, step * 1.3);
  const trackSpan = Math.max(10, trackEnd - trackStart);
  const dotAt = (i) => trackStart + trackSpan * (i / (levelCount - 1));
  const maxed = progress >= 0.995;
  const levelX = maxed ? trackEnd : dotAt(curLevel);
  const fieldEnd = levelX;
  tiTrack = { left: trackStart / width, right: trackEnd / width, count: levelCount };
  const nowMs = (typeof time === 'number' ? time : Date.now());
  tiHandleRatio = width > 0 ? levelX / width : 1;
  const levelSpan = Math.max(8, levelX - fieldStart);
  const live = Math.max(0, fieldEnd - fieldStart);
  const half = height / 2;
  const bright = idxMix(faded, ink, 0.34 + 0.66 * eased);

  const rowH = Math.max(2.2, height / 13);
  const rows = Math.max(3, Math.floor((height - 4) / rowH));
  const colW = Math.max(1.6, step * 0.62);
  const cols = Math.max(2, Math.ceil(live / colW));
  const keep = Math.max(0, Math.min(0.82, 0.14 + 0.7 * eased));
  const roundable = typeof context.roundRect === 'function';
  const dotR = Math.max(0.7, step * 0.3);

  for (let row = 0; row < rows && live > 10; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const seed = row * 131 + col * 17 + 5;
      const r1 = dotRand(seed * 1.7);
      const r2 = dotRand(seed * 3.1 + 0.7);
      const r3 = dotRand(seed * 5.7 + 1.9);
      const r4 = dotRand(seed * 7.3 + 2.6);
      const cellX = fieldStart + col * colW + (row % 2 === 0 ? 0 : colW * 0.5);
      const pace = 0.3 + r2 * 0.7;
      const speed = 14 + 320 * eased * eased * pace;
      const drift = (time * 0.001 * speed) % live;
      const x = fieldStart + ((cellX - fieldStart + drift) % live) + (r3 - 0.5) * colW * 0.9;
      const frac = Math.min(1, Math.max(0, (x - fieldStart) / live));
      const ramp = Math.min(1, Math.max(0, (x - fieldStart) / levelSpan));
      const head = Math.min(1, ramp / 0.1);
      const density = head * (0.78 + 0.22 * Math.pow(ramp, 0.8));
      if (r1 > keep * density) continue;
      const jitterY = rowH * (0.5 + 0.9 * (1 - frac)) * (r4 - 0.5) * 2;
      const y = 2 + row * rowH + rowH * 0.5 + jitterY;
      if (y < 1 || y > height - 1) continue;
      const vFade = Math.max(0, 1 - Math.abs(y - half) / (half * 1.12));
      const shimmer = 0.72 + 0.28 * Math.sin(time * 0.0032 + seed + frac * 4);
      const tailDim = 1;
      const alpha = Math.max(0, Math.min(1,
        (0.86 + 0.14 * Math.pow(ramp, 0.8)) * (0.62 + 0.38 * eased) * 1.05 *
        (0.55 + 0.45 * vFade) * shimmer * (0.55 + 0.45 * r2) * tailDim));
      if (alpha <= 0.012) continue;
      const stretch = Math.pow(ramp, 1.9) * (0.5 + 4.4 * eased);
      const len = Math.min(colW * 3.8, colW * (1.8 + 1.9 * ramp) * (0.82 + 0.36 * r3));
      const barH = Math.max(0.9, rowH * (0.17 + 0.13 * eased * frac) * (0.72 + 0.56 * r2));
      const hot = ramp > 0.6 ? Math.min(1, (ramp - 0.6) / 0.3) : 0;
      const tint = hot > 0 ? idxMix(bright, ink, 0.55 * hot) : bright;
      const a2 = Math.min(1, alpha * (0.86 + 0.34 * ramp));
      context.fillStyle = 'rgba(' + tint[0] + ',' + tint[1] + ',' + tint[2] + ',' + a2.toFixed(3) + ')';
      if (len < barH * 1.35) {
        context.beginPath();
        context.arc(x, y, dotR * (0.75 + 0.6 * r3) * (1 + 1.2 * (1 - ramp)), 0, Math.PI * 2);
        context.fill();
      } else if (roundable && len > barH * 2.6) {
        context.beginPath();
        context.roundRect(x, y - barH / 2, len, barH, barH / 2);
        context.fill();
      } else {
        context.fillRect(x, y - barH / 2, len, barH);
      }
    }
  }

  const tickR = Math.max(1.2, height * 0.036);
  for (let i = curLevel + 1; i < levelCount; i += 1) {
    const cx = dotAt(i);
    context.beginPath();
    context.arc(cx, height / 2, tickR, 0, Math.PI * 2);
    context.fillStyle = 'rgba(' + ink[0] + ',' + ink[1] + ',' + ink[2] + ',0.3)';
    context.fill();
  }
}

function EffortSlider({ directory }) {
  const directoryState = (0, import_react.useSyncExternalStore)(
    (notify) => directory.store.subscribe(notify),
    () => directory.store.getSnapshot()
  );
  const levels = sliderLevels(directoryState);
  const [effort, setEffort] = (0, import_react.useState)("");
  const [preview, setPreview] = (0, import_react.useState)(0);
  const [committing, setCommitting] = (0, import_react.useState)(false);
  const [dragging, setDragging] = (0, import_react.useState)(false);
  const [localError, setLocalError] = (0, import_react.useState)(null);
  const canvasRef = (0, import_react.useRef)(null);
  const inputRef = (0, import_react.useRef)(null);
  const committedRef = (0, import_react.useRef)("");
  const committingRef = (0, import_react.useRef)(false);
  const previewRef = (0, import_react.useRef)(0);
  const draggingRef = (0, import_react.useRef)(false);
  const pointerActiveRef = (0, import_react.useRef)(false);
  const activePointerIdRef = (0, import_react.useRef)(null);
  const globalPointerMoveRef = (0, import_react.useRef)(null);
  const globalPointerEndRef = (0, import_react.useRef)(null);
  const globalPointerCancelRef = (0, import_react.useRef)(null);
  const radiationRef = (0, import_react.useRef)({ progress: 0.5, dragging: false, warm: 0.5, purple: 0, floor: 1 });
  const redrawRef = (0, import_react.useRef)(null);
  const available = directoryState.current !== null && levels.length >= 2;
  const busy = committing || directoryState.status === "selecting";
  const error = localError ?? directoryState.error;
  (0, import_react.useEffect)(() => {
    if (!available || committingRef.current || draggingRef.current) return;
    const index = effectiveEffortIndex(levels, directoryState);
    const next = levels[index]?.id ?? "";
    committedRef.current = next;
    previewRef.current = index;
    setEffort(next);
    setPreview(index);
    setLocalError(null);
  }, [available, levels, directoryState]);
  (0, import_react.useEffect)(() => {
    directory.load().catch(() => void 0);
  }, [directory]);
  (0, import_react.useEffect)(() => {
    const palette2 = sliderPalette(preview, levels.length, dragging);
    previewRef.current = preview;
    radiationRef.current.progress = levels.length >= 2 ? preview / (levels.length - 1) : 0.5;
    radiationRef.current.warm = palette2.warm;
    radiationRef.current.purple = palette2.purple;
    radiationRef.current.floor = palette2.floor;
    radiationRef.current.dragging = dragging;
    const levelForLabel = levels[clampIndex(preview, levels.length)];
    radiationRef.current.label = levelForLabel?.id ?? levelForLabel?.name ?? '';
    tiLevelCount = Math.max(2, levels.length);
    tiLabelMax = levels.reduce((max, item) => {
      const text = levelLabel(item?.id ?? item?.name ?? '');
      return Math.max(max, text.length);
    }, 2);
    redrawRef.current?.();
  }, [preview, levels.length, dragging]);
  (0, import_react.useEffect)(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const context = canvas.getContext("2d");
    if (context === null) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1;
    let height = 1;
    let frame = 0;
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = (time = performance.now()) => {
      drawRadiation(context, width, height, time, radiationRef.current);
    };
    const loop = (time) => {
      draw(time);
      frame = window.requestAnimationFrame(loop);
    };
    const redraw = () => {
      if (reducedMotion.matches) draw();
    };
    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    const themeObserver = new MutationObserver(() => draw());
    resizeObserver.observe(canvas);
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
    redrawRef.current = redraw;
    resize();
    draw();
    if (!reducedMotion.matches) frame = window.requestAnimationFrame(loop);
    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      redrawRef.current = null;
    };
  }, []);
  const rollback = (0, import_react.useCallback)(() => {
    const previous = committedRef.current;
    previewRef.current = Math.max(0, effortIndex(levels, previous));
    pointerActiveRef.current = false;
    activePointerIdRef.current = null;
    draggingRef.current = false;
    setEffort(previous);
    setPreview(Math.max(0, effortIndex(levels, previous)));
    setDragging(false);
  }, [levels]);
  const commit = (0, import_react.useCallback)(async (raw) => {
    if (committingRef.current) return;
    committingRef.current = true;
    const previous = committedRef.current;
    setDragging(false);
    setCommitting(true);
    setLocalError(null);
    const optimisticIndex = clampIndex(raw, levels.length);
    const optimistic = levels[optimisticIndex]?.id;
    if (optimistic !== void 0) {
      previewRef.current = optimisticIndex;
      setPreview(optimisticIndex);
      setEffort(optimistic);
    }
    try {
      const models = await directory.load();
      const fresh = {
        current: models.current,
        routable: models.routable,
        groups: models.groups,
        failures: models.failures,
        status: "ready",
        error: null
      };
      const freshLevels = sliderLevels(fresh);
      const index = clampIndex(raw, freshLevels.length);
      const next = freshLevels[index]?.id;
      if (next === void 0) throw new Error("\u5F53\u524D\u6A21\u578B\u672A\u63D0\u4F9B\u63A8\u7406\u5F3A\u5EA6\u6863\u4F4D");
      previewRef.current = index;
      setPreview(index);
      setEffort(next);
      await directory.select({
        provider: models.current.provider,
        model: models.current.model,
        reasoningEffort: next
      });
      const snapshot = directory.store.getSnapshot();
      const accepted = effortIndex(freshLevels, snapshot.current?.reasoningEffort);
      const settled = accepted >= 0 ? accepted : index;
      const settledId = freshLevels[settled]?.id ?? next;
      committedRef.current = settledId;
      previewRef.current = settled;
      setEffort(settledId);
      setPreview(settled);
    } catch (cause) {
      const restore = Math.max(0, effortIndex(levels, previous));
      committedRef.current = previous;
      previewRef.current = restore;
      setEffort(previous);
      setPreview(restore);
      setLocalError(cause instanceof Error ? cause.message : String(cause));
    } finally {
      committingRef.current = false;
      setCommitting(false);
    }
  }, [directory, levels]);
  tiCommitLevel = commit;
  const rawFromPointer = (input, clientX) => {
    const bounds = input.getBoundingClientRect();
    if (bounds.width <= 0 || levels.length < 2) return previewRef.current;
    return Math.max(
      0,
      Math.min(levels.length - 1, (clientX - bounds.left) / bounds.width * (levels.length - 1))
    );
  };
  const showPointerPreview = (raw) => {
    previewRef.current = raw;
    setPreview(raw);
    setEffort(levels[clampIndex(raw, levels.length)]?.id ?? "");
  };
  const beginDragging = (input, pointerId, clientX) => {
    pointerActiveRef.current = true;
    activePointerIdRef.current = pointerId;
    draggingRef.current = true;
    setDragging(true);
    showPointerPreview(rawFromPointer(input, clientX));
    try {
      if (!input.hasPointerCapture(pointerId)) input.setPointerCapture(pointerId);
    } catch {
    }
  };
  const moveDragging = (input, pointerId, clientX) => {
    if (!pointerActiveRef.current || activePointerIdRef.current !== pointerId) return;
    showPointerPreview(rawFromPointer(input, clientX));
  };
  const stopDragging = (input, pointerId, clientX) => {
    if (!pointerActiveRef.current) return;
    if (pointerId !== void 0 && activePointerIdRef.current !== pointerId) return;
    const raw = clientX === void 0 ? previewRef.current : rawFromPointer(input, clientX);
    pointerActiveRef.current = false;
    activePointerIdRef.current = null;
    draggingRef.current = false;
    if (pointerId !== void 0 && input.hasPointerCapture(pointerId)) {
      input.releasePointerCapture(pointerId);
    }
    showPointerPreview(raw);
    void commit(raw);
  };
  globalPointerMoveRef.current = (event) => {
    const input = inputRef.current;
    if (input !== null) moveDragging(input, event.pointerId, event.clientX);
  };
  globalPointerEndRef.current = (event) => {
    const input = inputRef.current;
    if (input !== null) stopDragging(input, event.pointerId, event.clientX);
  };
  globalPointerCancelRef.current = (event) => {
    if (activePointerIdRef.current !== event.pointerId) return;
    rollback();
  };
  (0, import_react.useEffect)(() => {
    const move = (event) => globalPointerMoveRef.current?.(event);
    const end = (event) => globalPointerEndRef.current?.(event);
    const cancel = (event) => globalPointerCancelRef.current?.(event);
    window.addEventListener("pointermove", move, true);
    window.addEventListener("pointerup", end, true);
    window.addEventListener("pointercancel", cancel, true);
    return () => {
      window.removeEventListener("pointermove", move, true);
      window.removeEventListener("pointerup", end, true);
      window.removeEventListener("pointercancel", cancel, true);
    };
  }, []);
  const onKeyDown = (event) => {
    const current = clampIndex(Number(event.currentTarget.value), levels.length);
    let target;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown" || event.key === "PageDown") {
      target = Math.max(0, current - 1);
    } else if (event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "PageUp") {
      target = Math.min(levels.length - 1, current + 1);
    } else if (event.key === "Home") {
      target = 0;
    } else if (event.key === "End") {
      target = levels.length - 1;
    }
    if (target === void 0) return;
    event.preventDefault();
    void commit(target);
  };
  if (!available) return null;
  const count = levels.length;
  const effortName = levels[effortIndex(levels, effort)]?.name ?? effort;
  const t = count <= 1 ? 0 : preview / (count - 1);
  const palette = sliderPalette(preview, count, dragging);
  const isTop = palette.purple >= 0.98 || !dragging && t >= 0.999;
  const isFloor = palette.floor >= 0.85;
  const caption = effortCaption(levels[Math.round(preview)] ?? levels[effortIndex(levels, effort)]);
  const style = {
    "--re-t": String(t),
    "--re-progress": `calc(var(--re-inset) + (100% - 2 * var(--re-inset)) * ${t})`,
    "--re-track-0": palette.c0,
    "--re-track-1": palette.c1,
    "--re-track-2": palette.c2,
    "--re-glow": palette.glow,
    "--re-warm": String(palette.warm),
    "--re-purple": String(palette.purple),
    "--re-floor": String(palette.floor)
  };
  const title = error === null ? `\u601D\u8003\u5F3A\u5EA6 ${caption}` : `\u63A8\u7406\u5F3A\u5EA6\u8BBE\u7F6E\u5931\u8D25\uFF1A${error}`;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: `re-effort${dragging ? " is-dragging" : ""}${busy ? " is-busy" : ""}${error === null ? "" : " is-error"}${isFloor ? " is-floor" : ""}${isTop ? " is-top" : ""}`,
      title,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-effort-caption", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-effort-caption-label", children: "\u601D\u8003\u5F3A\u5EA6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `re-effort-caption-value${isTop ? " is-top" : ""}`, children: caption })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: "re-effort-slider",
            "data-top": isTop ? "true" : void 0,
            "data-floor": isFloor ? "true" : void 0,
            style,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-effort-track", "aria-hidden": "true" }),
              isTop ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-effort-ticks", "aria-hidden": "true", children: levels.map((level, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  className: `re-effort-tick${Math.round(preview) === index ? " is-current" : ""}`,
                  style: { left: `calc(var(--re-inset) + (100% - 2 * var(--re-inset)) * ${index / (count - 1)})` }
                },
                level.id
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-effort-fx", "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: canvasRef, className: "re-effort-canvas" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-effort-flare" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "input",
                {
                  ref: inputRef,
                  className: "re-effort-input",
                  type: "range",
                  min: "0",
                  max: count - 1,
                  step: "0.01",
                  value: preview,
                  disabled: busy,
                  "aria-label": "\u63A8\u7406\u5F3A\u5EA6",
                  "aria-valuetext": effortName,
                  onChange: (event) => {
                    const raw = Number(event.currentTarget.value);
                    showPointerPreview(raw);
                  },
                  onPointerDown: (event) => {
                    event.preventDefault();
                    event.currentTarget.focus();
                    beginDragging(event.currentTarget, event.pointerId, event.clientX);
                  },
                  onPointerMove: (event) => moveDragging(event.currentTarget, event.pointerId, event.clientX),
                  onPointerUp: (event) => stopDragging(event.currentTarget, event.pointerId, event.clientX),
                  onPointerCancel: (event) => {
                    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                      event.currentTarget.releasePointerCapture(event.pointerId);
                    }
                    rollback();
                  },
                  onBlur: (event) => {
                    stopDragging(event.currentTarget);
                  },
                  onKeyDown
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-effort-knob", "aria-hidden": "true" })
            ]
          }
        ),
        error === null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-effort-sr", role: "status", children: error })
      ]
    }
  );
}
function AdvancedModelSelect({
  locked,
  available,
  controller,
  directory,
  load,
  select,
  adapt
}) {
  const state = (0, import_react.useSyncExternalStore)(
    (notify) => directory.subscribe(notify),
    () => directory.getSnapshot()
  );
  const [open, setOpen] = (0, import_react.useState)(false);
  const [modelsOpen, setModelsOpen] = (0, import_react.useState)(false);
  const [guidance, setGuidance] = (0, import_react.useState)(null);
  const [guidanceBusy, setGuidanceBusy] = (0, import_react.useState)(false);
  const [panelOpen, setPanelOpen] = (0, import_react.useState)(false);
  const [copied, setCopied] = (0, import_react.useState)(false);
  const rootRef = (0, import_react.useRef)(null);
  const triggerRef = (0, import_react.useRef)(null);
  const choice = currentModel(state);
  const levels = sliderLevels(state);
  const effortName = levels[effectiveEffortIndex(levels, state)]?.name ?? "\u9ED8\u8BA4";
  const modelLabel = choice?.name ?? state.current?.model ?? "\u9009\u62E9\u6A21\u578B";
  const busy = state.status === "loading" || state.status === "selecting";
  (0, import_react.useEffect)(() => {
    if (!available) return;
    load();
  }, [available, load]);
  (0, import_react.useEffect)(() => {
    if (!open) return;
    const closeOutside = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
        setModelsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOutside);
    return () => document.removeEventListener("mousedown", closeOutside);
  }, [open]);
  const provider = state.current?.provider;
  const modelId = state.current?.model;
  (0, import_react.useEffect)(() => {
    if (adapt === null || provider === void 0 || modelId === void 0) {
      setGuidance(null);
      setPanelOpen(false);
      return;
    }
    let cancelled = false;
    setGuidanceBusy(true);
    adapt.diagnose(provider, modelId).then((result) => {
      if (cancelled) return;
      setGuidance(result);
      setGuidanceBusy(false);
      if (result === null || !result.needsGuide) setPanelOpen(false);
    }, () => {
      if (cancelled) return;
      setGuidance(null);
      setGuidanceBusy(false);
    });
    return () => {
      cancelled = true;
    };
  }, [adapt, provider, modelId]);
  if (!available) return null;
  const close = (restoreFocus = false) => {
    setOpen(false);
    setModelsOpen(false);
    if (restoreFocus) queueMicrotask(() => triggerRef.current?.focus());
  };
  const onKeyDown = (event) => {
    if (event.key !== "Escape" || !open) return;
    event.preventDefault();
    if (modelsOpen) setModelsOpen(false);
    else close(true);
  };
  const chooseModel = async (provider2, model, defaultEffort) => {
    if (state.current?.provider === provider2 && state.current.model === model) {
      setModelsOpen(false);
      return;
    }
    const accepted = await select({
      provider: provider2,
      model,
      ...defaultEffort === void 0 ? {} : { reasoningEffort: defaultEffort }
    });
    if (accepted) setModelsOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ref: rootRef, className: "re-model-root", onKeyDown, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref: triggerRef,
        type: "button",
        className: "re-model-trigger",
        "aria-label": `\u6A21\u578B ${modelLabel}\uFF0C\u63A8\u7406\u5F3A\u5EA6 ${effortName}`,
        "aria-haspopup": "menu",
        "aria-expanded": open,
        title: `${modelLabel} \xB7 ${effortName}`,
        disabled: locked,
        onClick: () => {
          if (open) close();
          else {
            setOpen(true);
            setModelsOpen(false);
            load();
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-model-name", children: modelLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-model-effort", children: effortName }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-model-chevron", "aria-hidden": "true" })
        ]
      }
    ),
    open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-model-menu", role: "menu", "aria-label": "\u6A21\u578B\u4E0E\u63A8\u7406\u5F3A\u5EA6", "aria-busy": busy, children: modelsOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-model-pane", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "re-model-back", onClick: () => setModelsOpen(false), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: "\u2039" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u9009\u62E9\u6A21\u578B" })
      ] }),
      state.status === "loading" && state.groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-model-status", children: "\u6B63\u5728\u52A0\u8F7D\u6A21\u578B\u2026" }) : null,
      state.groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-model-group-title", children: group.name }),
        group.models.map((model) => {
          const selected = state.current?.provider === group.id && state.current.model === model.id;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              type: "button",
              role: "menuitemradio",
              "aria-checked": selected,
              className: "re-model-option",
              disabled: busy,
              onClick: () => void chooseModel(group.id, model.id, model.reasoning?.defaultEffort),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "re-model-option-copy", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-model-option-name", children: model.name }),
                  model.description === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-model-option-desc", children: model.description })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-model-check", "aria-hidden": "true", children: selected ? "\u2713" : "" })
              ]
            },
            model.id
          );
        })
      ] }, group.id)),
      state.status === "ready" && state.groups.every((group) => group.models.length === 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-model-status", children: "\u6CA1\u6709\u53EF\u7528\u6A21\u578B" }) : null,
      state.error === null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-model-error", children: state.error })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-advanced", children: levels.length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EffortSlider, { directory: controller }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-model-status", children: "\u5F53\u524D\u6A21\u578B\u672A\u63D0\u4F9B\u63A8\u7406\u5F3A\u5EA6\u6863\u4F4D" }) }),
      guidance !== null && guidance.needsGuide ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-adapt", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-adapt-copy", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-adapt-title", children: guidance.reason === "missing" ? "\u5F53\u524D\u6A21\u578B\u672A\u63D0\u4F9B\u63A8\u7406\u5F3A\u5EA6\u6863\u4F4D" : "\u6863\u4F4D\u58F0\u660E\u4E0E\u77E5\u8BC6\u5E93\u4E0D\u4E00\u81F4" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-adapt-desc", children: guidance.matched ? `\u77E5\u8BC6\u5E93\u8BB0\u5F55\u8BE5\u6A21\u578B\u652F\u6301 ${levelsText(guidance.expected)}\uFF0C\u76EE\u5F55\u5F53\u524D\u4E3A ${levelsText(guidance.current)}\u3002${guidance.note ?? ""}` : `\u76EE\u5F55\u5F53\u524D\u4E3A ${levelsText(guidance.current)}\u3002${guidance.note ?? ""}` })
        ] }),
        panelOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-adapt-panel", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-adapt-scroll", children: [
            guidance.matched ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-adapt-panel-line", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-adapt-arrow", children: levelsText(guidance.current) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: "\u2192" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-adapt-arrow", children: levelsText(guidance.expected) })
            ] }) : null,
            guidance.warning === null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-adapt-warning", children: guidance.warning }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-adapt-label", children: "\u8981\u7C98\u8D34\u7684\u5185\u5BB9" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { className: "re-adapt-yaml", children: guidance.snippet }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-adapt-steps", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
                "1. \u6253\u5F00 settings.yaml",
                guidance.settingsPath === null ? "" : `\uFF08${guidance.settingsPath}\uFF09`,
                "\uFF0C \u5728 ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: guidance.entryPath }),
                " \u5217\u8868\u91CC\u627E\u5230 ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: guidance.entryLine }),
                "\uFF1B"
              ] }),
              guidance.mode === "replace" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
                "2. \u628A\u539F\u6709 ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: guidance.entryLine }),
                " \u6761\u76EE\u6574\u4F53\u66FF\u6362\u4E3A\u590D\u5236\u7684\u5185\u5BB9\uFF08\u4E0D\u8981\u590D\u5236\u51FA\u7B2C\u4E8C\u4E2A ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "llm-pi-ai:" }),
                " \u6839\uFF09\uFF1B"
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
                "2. \u8BE5\u884C\u672B\u5C3E\u56DE\u8F66\uFF0C\u7C98\u8D34\u4E0A\u9762\u590D\u5236\u7684\u5185\u5BB9\uFF08\u7F29\u8FDB\u4E0E ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "id" }),
                " \u5DEE 2 \u4E2A\u7A7A\u683C\uFF1B\u4E0D\u8981\u590D\u5236\u51FA\u7B2C\u4E8C\u4E2A ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "llm-pi-ai:" }),
                " \u6839\uFF09\uFF1B"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3. \u4FDD\u5B58\u540E\u81EA\u52A8\u751F\u6548\uFF1B\u6ED1\u5757\u672A\u51FA\u73B0\u5219\u91CD\u542F Web Host \u5E76\u5237\u65B0\u9875\u9762\u3002" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "re-adapt-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                type: "button",
                className: "re-adapt-apply",
                onClick: () => {
                  void copyText(guidance.snippet).then((ok) => setCopied(ok));
                },
                children: copied ? "\u5DF2\u590D\u5236 \u2713" : "\u590D\u5236\u5B57\u6BB5\u5757"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "re-adapt-cancel", onClick: () => setPanelOpen(false), children: "\u6536\u8D77" })
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "re-adapt-open", onClick: () => {
          setCopied(false);
          setPanelOpen(true);
        }, children: guidanceBusy ? "\u68C0\u6D4B\u4E2D\u2026" : "\u67E5\u770B\u6863\u4F4D\u58F0\u660E\u6307\u5F15" })
      ] }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-menu-separator" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "button",
        {
          type: "button",
          role: "menuitem",
          className: "re-model-row",
          disabled: busy,
          onClick: () => setModelsOpen(true),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-model-row-name", children: modelLabel }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-model-row-effort", children: effortName }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "re-row-chevron", "aria-hidden": "true", children: "\u203A" })
          ]
        }
      ),
      state.error === null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "re-model-error", children: state.error })
    ] }) }) : null
  ] });
}
var SeatBoundary = (function () {
  var Base = import_react.Component;
  if (typeof Base !== 'function') return AdvancedModelSelect;
  return class SeatBoundary extends Base {
    constructor(props) {
      super(props);
      this.state = { failed: false };
    }
    static getDerivedStateFromError() {
      return { failed: true };
    }
    componentDidCatch(error) {
    }
    render() {
      if (this.state.failed) {
        return import_jsx_runtime.jsx('span', {
          className: 're-effort-sr',
          role: 'status',
          children: '思考强度不可用'
        });
      }
      return import_jsx_runtime.jsx(AdvancedModelSelect, this.props);
    }
  };
})();

function apply(ctx) {
  // 档位就是轨道上的圆点：按住拖动或点圆点都吸附到最近的圆点
  let tiDrag = null;
  const setNativeValue = (input, value) => {
    const desc = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    if (desc && desc.set) desc.set.call(input, value);
    else input.value = value;
  };
  const indexAt = (clientX, rect) => {
    const t = tiTrack;
    const ratio = (clientX - rect.left) / Math.max(1, rect.width);
    const frac = (ratio - t.left) / Math.max(1e-6, t.right - t.left);
    const count = Math.max(2, t.count);
    return Math.max(0, Math.min(count - 1, Math.round(frac * (count - 1))));
  };
  const commitIndex = (input, index) => {
    if (input.value === String(index)) return false;
    setNativeValue(input, String(index));
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  };
  const onDown = (event) => {
    try {
      const target = event.target;
      if (!target || typeof target.closest !== 'function') return;
      const slider = target.closest('.re-effort-slider');
      if (!slider) return;
      const rect = slider.getBoundingClientRect();
      if (!rect || rect.width <= 0) return;
      const input = slider.querySelector('.re-effort-input');
      if (!input) return;
      event.preventDefault();
      event.stopPropagation();
      const index = indexAt(event.clientX, rect);
      commitIndex(input, index);
      tiDrag = { input, rect, index };
    } catch (err) { tiDrag = null; }
  };
  const onMove = (event) => {
    const drag = tiDrag;
    if (!drag || !drag.input) return;
    try {
      const index = indexAt(event.clientX, drag.rect);
      if (index === drag.index) return;
      drag.index = index;
      commitIndex(drag.input, index);
    } catch (err) { /* ignore */ }
  };
  const onUp = () => {
    const drag = tiDrag;
    tiDrag = null;
    if (!drag || typeof tiCommitLevel !== 'function') return;
    try {
      tiCommitLevel(drag.index);
    } catch (err) { /* ignore */ }
  };
  const onDialInput = (event) => {
    try {
      const target = event.target;
      if (!target || typeof target.closest !== 'function') return;
      if (!target.closest('.re-effort-slider')) return;
    } catch (err) { /* ignore */ }
  };
  try {
    // 热重载会重复执行 apply，旧监听器必须先摘掉，否则旧守卫会继续拦截指针事件
    if (typeof globalThis.__tiGuardCleanup === 'function') {
      try { globalThis.__tiGuardCleanup(); } catch (err) { /* ignore */ }
    }
    document.addEventListener('pointerdown', onDown, true);
    document.addEventListener('pointerup', onUp, true);
    document.addEventListener('pointermove', onMove, true);
    document.addEventListener('pointercancel', onUp, true);
    document.addEventListener('input', onDialInput, true);
    globalThis.__tiGuardCleanup = () => {
      document.removeEventListener('pointerdown', onDown, true);
      document.removeEventListener('pointerup', onUp, true);
      document.removeEventListener('pointermove', onMove, true);
      document.removeEventListener('pointercancel', onUp, true);
      document.removeEventListener('input', onDialInput, true);
    };
  } catch (err) { /* ignore */ }
  try {
  } catch (err) { /* ignore */ }
  const modelDirectories = ctx.get("modelDirectories");
  if (modelDirectories === void 0) {
    console.warn("[thinking-pill] modelDirectories service missing; the pill cannot mount.");
    return;
  }
  const connection = ctx.get("connection");
  const adapt = makeAdaptationService(connection?.rpc);
  ctx.effect(() => {
    const style = document.createElement("style");
    style.dataset.plugin = "dsh-reasoning-effort";
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => style.remove();
  }, "reasoning-effort: styles");
  ctx.slots.register(
    {
      name: SLOT,
      priority: -100,
      inject: (sessionId) => {
        const controller = modelDirectories.directoryFor(sessionId);
        return {
          available: true,
          controller,
          directory: controller.store,
          load: () => controller.load().then(() => void 0, () => void 0),
          select: (selection) => controller.select(selection).then(() => true, () => false),
          adapt
        };
      }
    },
    SeatBoundary
  );
}

    return module.exports;
  },
});
