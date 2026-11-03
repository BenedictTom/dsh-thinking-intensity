/**
 * Browser half of the thinking-intensity bundle.
 *
 * A compact dark pill in the composer tool row, left of the model selector.
 * Left: a 5x7 dot-matrix word for the current reasoning effort drawn from real
 * dots, never a text font. Right: the particle field — a nozzle of floating
 * specks at OFF/LOW, stretched into short horizontal light bars that flood the
 * space at HIGH. No handle: the whole pill is the track.
 *
 * The value is not local. It reads the live reasoning effort of the session's
 * current model through the `modelDirectories` Client service and writes the
 * selected ladder step back with `directory.select(...)`, so the next request
 * really runs at that effort.
 */
window.__ModuleLoader__.load({
	id: 'dsh-thinking-intensity',
	factory(require) {
		const React = require('react');
		const h = React.createElement;

		/* ---------- geometry (CSS px) ---------- */
		const PILL_W = 220;
		const PILL_H = 28;
		const PAD_LEFT = 9;
		const PAD_RIGHT = 8;
		const MAX_PARTICLES = 200;
		const LOW_TONE = 0.14;   // 低于此强度：仍保留发射口噪点墙
		const NS = 'thinking-intensity';

		/* ---------- 5x7 点阵字模 ---------- */
		const FONT = {
			A: '01110/10001/10001/11111/10001/10001/10001',
			B: '11110/10001/10001/11110/10001/10001/11110',
			C: '01110/10001/10000/10000/10000/10001/01110',
			D: '11110/10001/10001/10001/10001/10001/11110',
			E: '11111/10000/10000/11110/10000/10000/11111',
			F: '11111/10000/10000/11110/10000/10000/10000',
			G: '01110/10001/10000/10111/10001/10001/01111',
			H: '10001/10001/10001/11111/10001/10001/10001',
			I: '11111/00100/00100/00100/00100/00100/11111',
			J: '00111/00010/00010/00010/00010/10010/01100',
			K: '10001/10010/10100/11000/10100/10010/10001',
			L: '10000/10000/10000/10000/10000/10000/11111',
			M: '10001/11011/10101/10101/10001/10001/10001',
			N: '10001/11001/10101/10011/10001/10001/10001',
			O: '01110/10001/10001/10001/10001/10001/01110',
			P: '11110/10001/10001/11110/10000/10000/10000',
			Q: '01110/10001/10001/10001/10101/10010/01101',
			R: '11110/10001/10001/11110/10100/10010/10001',
			S: '01111/10000/10000/01110/00001/00001/11110',
			T: '11111/00100/00100/00100/00100/00100/00100',
			U: '10001/10001/10001/10001/10001/10001/01110',
			V: '10001/10001/10001/10001/10001/01010/00100',
			W: '10001/10001/10001/10101/10101/11011/10001',
			X: '10001/10001/01010/00100/01010/10001/10001',
			Y: '10001/10001/01010/00100/00100/00100/00100',
			Z: '11111/00001/00010/00100/01000/10000/11111',
			0: '01110/10001/10011/10101/11001/10001/01110',
			1: '00100/01100/00100/00100/00100/00100/01110',
			2: '01110/10001/00001/00010/00100/01000/11111',
			3: '11111/00010/00100/00010/00001/10001/01110',
			4: '00010/00110/01010/10010/11111/00010/00010',
			5: '11111/10000/11110/00001/00001/10001/01110',
			6: '00110/01000/10000/11110/10001/10001/01110',
			7: '11111/00001/00010/00100/01000/01000/01000',
			8: '01110/10001/10001/01110/10001/10001/01110',
			9: '01110/10001/10001/01111/00001/00010/01100',
			' ': '00000/00000/00000/00000/00000/00000/00000',
			'-': '00000/00000/00000/11111/00000/00000/00000',
			'.': '00000/00000/00000/00000/00000/00110/00110',
			'/': '00001/00010/00010/00100/01000/01000/10000',
			'?': '01110/10001/00001/00010/00100/00000/00100',
		};

		const DOT_STEP = 2.4;
		const DOT_R = 0.75;

		/* ---------- 粒子色板：参考图是低饱和灰阶，高强度转白 ---------- */
		const TONES = [
			{ low: [176, 184, 191], high: [255, 255, 255] },
			{ low: [138, 146, 154], high: [212, 221, 227] },
			{ low: [206, 213, 219], high: [172, 181, 188] },
		];
		const mixChannel = (a, b, t) => Math.round(a + (b - a) * t);

		const CSS = `
.ti-float{position:absolute;top:-6px;right:10px;transform:translateY(-100%);padding-bottom:0;pointer-events:none}
.ti-root{display:inline-flex;align-items:center;height:100%;padding:0 2px;user-select:none;-webkit-user-select:none;pointer-events:auto}
.ti-pill{
	--ti-k:0;
	position:relative;
	width:${PILL_W}px;height:${PILL_H}px;border-radius:${PILL_H / 2}px;
	background:linear-gradient(180deg, rgba(76,80,84,.94) 0%, rgba(56,59,62,.96) 100%);
	border:1.5px solid rgba(255,255,255,.22);
	box-shadow:
		inset 0 1px 0 rgba(255,255,255,.16),
		inset 0 -6px 12px -8px rgba(0,0,0,.6),
		0 8px 20px -10px rgba(0,0,0,.75),
		0 0 calc(3px + var(--ti-k) * 14px) rgba(226,238,246,calc(var(--ti-k) * .16));
	backdrop-filter:blur(10px) saturate(115%);
	-webkit-backdrop-filter:blur(10px) saturate(115%);
	cursor:ew-resize;
	touch-action:none;
	outline:none;
}
.ti-pill[data-static="1"]{cursor:default}
.ti-pill:focus-visible{box-shadow:0 0 0 2px rgba(226,238,246,.55),0 8px 20px -10px rgba(0,0,0,.75)}
.ti-pill[data-drag="1"]{border-color:rgba(255,255,255,.42)}
.ti-pill[data-error="1"]{border-color:rgba(255,138,138,.75);box-shadow:0 0 0 1px rgba(255,120,120,.35),0 8px 20px -10px rgba(0,0,0,.75)}
.ti-pill[data-pending="1"]{opacity:.82}
.ti-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:${PILL_H / 2}px;pointer-events:none}
.ti-label{position:absolute;left:${PAD_LEFT}px;top:50%;transform:translateY(-50%);pointer-events:none}
.ti-cursor{
	position:absolute;top:4px;bottom:4px;width:1.5px;margin-left:-0.75px;border-radius:1px;
	background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.85) 22%,rgba(255,255,255,.85) 78%,rgba(255,255,255,0) 100%);
	opacity:.3;transition:opacity .16s ease;pointer-events:none;
}
.ti-pill:hover .ti-cursor,.ti-pill:focus-visible .ti-cursor,.ti-pill[data-drag="1"] .ti-cursor{opacity:.85}
`;

		/* ---------- 点阵绘制：每个亮点都是一颗圆点，不是文字 ---------- */
		function paintDotText(canvas, text, palette) {
			const chars = Array.from(String(text || '').toUpperCase());
			const rows = 7;
			const cols = Math.max(1, chars.length * 6 - 1);
			const w = cols * DOT_STEP;
			const ht = rows * DOT_STEP;
			const dpr = Math.min(2, window.devicePixelRatio || 1);
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(ht * dpr);
			canvas.style.width = w + 'px';
			canvas.style.height = ht + 'px';
			const g = canvas.getContext('2d');
			if (!g) return w;
			g.setTransform(dpr, 0, 0, dpr, 0, 0);
			g.clearRect(0, 0, w, ht);
			const path = new Path2D();
			for (let i = 0; i < chars.length; i += 1) {
				const glyph = FONT[chars[i]] || FONT['?'];
				if (!glyph) continue;
				const parts = glyph.split('/');
				for (let r = 0; r < rows && r < parts.length; r += 1) {
					const bits = parts[r];
					for (let c = 0; c < 5 && c < bits.length; c += 1) {
						if (bits[c] !== '1') continue;
						const cx = (i * 6 + c) * DOT_STEP + DOT_STEP / 2;
						const cy = r * DOT_STEP + DOT_STEP / 2;
						path.moveTo(cx + DOT_R, cy);
						path.arc(cx, cy, DOT_R, 0, Math.PI * 2);
					}
				}
			}
			g.fillStyle = palette.core;
			g.shadowColor = palette.glow;
			g.shadowBlur = palette.blur;
			g.fill(path);
			g.shadowBlur = 0;
			g.fillStyle = palette.head;
			g.fill(path);
			return w;
		}

		/* ---------- 档位文字：MED / XHIGH 这类短标签 ---------- */
		const SHORT = {
			off: 'OFF',
			none: 'OFF',
			minimal: 'MIN',
			low: 'LOW',
			medium: 'MED',
			med: 'MED',
			high: 'HIGH',
			xhigh: 'XHIGH',
			maximum: 'MAX',
			max: 'MAX',
		};

		function effortLabel(effort) {
			if (!effort) return 'AUTO';
			const id = String(effort.id || '').toLowerCase();
			const name = String(effort.name || effort.id || '');
			if (SHORT[id]) return SHORT[id];
			const key = name.toLowerCase();
			if (SHORT[key]) return SHORT[key];
			return name.toUpperCase().slice(0, 6);
		}

		/* ---------- 目录访问：失败不抛给 React ---------- */
		function readService(scope, key) {
			if (!scope) return null;
			try {
				if (typeof scope.get === 'function') {
					const direct = scope.get(key, false);
					if (direct) return direct;
				}
			} catch (err) {
				/* cordis 的严格 get 会抛错，继续尝试反射 */
			}
			try {
				if (scope.reflect && typeof scope.reflect.get === 'function') {
					return scope.reflect.get(key, false) || null;
				}
			} catch (err) {
				/* 服务未注册 */
			}
			return null;
		}

		function ladderOf(snapshot) {
			const current = snapshot && snapshot.current;
			if (!current) return { ids: [], labels: [], index: 0, entry: null };
			const groups = (snapshot && snapshot.groups) || [];
			let entry = null;
			for (let i = 0; i < groups.length; i += 1) {
				const models = groups[i].models || [];
				for (let j = 0; j < models.length; j += 1) {
					if (models[j].id === current.model && groups[i].id === current.provider) {
						entry = models[j];
						break;
					}
				}
				if (entry) break;
			}
			const reasoning = entry && entry.reasoning;
			const efforts = (reasoning && reasoning.efforts) || [];
			if (!efforts.length) return { ids: [], labels: [], index: 0, entry };
			const ids = efforts.map((effort) => effort.id);
			const labels = efforts.map(effortLabel);
			const effective = current.reasoningEffort === undefined
				? reasoning.defaultEffort
				: current.reasoningEffort;
			let index = effective === undefined ? 0 : ids.indexOf(effective);
			if (index < 0) index = 0;
			return { ids, labels, index, entry };
		}

		function IntensityPill(props) {
			const translate = props.translate;
			const locale = props.locale;
			const scope = props.scope || null;
			const sessionId = props.sessionId
				|| (props.session && (props.session.id || props.session.sessionId))
				|| null;

			const [snapshot, setSnapshot] = React.useState(null);
			const [drag, setDrag] = React.useState(null);
			const [rev, setRev] = React.useState(0);
			const [failure, setFailure] = React.useState(null);

			const rootRef = React.useRef(null);
			const canvasRef = React.useRef(null);
			const textRef = React.useRef(null);
			const cursorRef = React.useRef(null);
			const dirRef = React.useRef(null);
			const dragRef = React.useRef(null);
			const labelWRef = React.useRef(42);
			const levelRef = React.useRef(0);
			const pendingRef = React.useRef(false);
			const failTimerRef = React.useRef(0);

			void rev; // 语言切换时重绘点阵与 aria

			const t = (key, fallback) => {
				try {
					const out = typeof translate === 'function' ? translate(NS + '.' + key) : undefined;
					return typeof out === 'string' && out && out !== NS + '.' + key ? out : fallback;
				} catch (err) {
					return fallback;
				}
			};

			const ladder = ladderOf(snapshot);
			const count = ladder.ids.length;
			const steps = count > 1 ? count - 1 : 0;
			const live = count > 0;
			const index = drag !== null ? drag.index : ladder.index;
			const level = steps > 0 ? index / steps : 0;
			levelRef.current = level;
			const label = live ? ladder.labels[Math.min(index, count - 1)] : 'AUTO';
			const pending = pendingRef.current;

			React.useEffect(() => {
				if (!locale || typeof locale.subscribe !== 'function') return undefined;
				return locale.subscribe(() => setRev((n) => n + 1));
			}, [locale]);

			/* 订阅当前会话的模型目录 */
			React.useEffect(() => {
				if (!sessionId) return undefined;
				const directories = readService(scope, 'modelDirectories');
				if (!directories || typeof directories.directoryFor !== 'function') {
					if (typeof console !== 'undefined' && console.warn) {
						console.warn('[thinking-intensity] modelDirectories unavailable: pill stays visual-only');
					}
					return undefined;
				}
				let directory = null;
				try {
					directory = directories.directoryFor(sessionId);
				} catch (err) {
					directory = null;
				}
				if (!directory) return undefined;
				dirRef.current = directory;
				const store = directory.store;
				if (!store || typeof store.getSnapshot !== 'function') return undefined;
				const sync = () => {
					try {
						setSnapshot(store.getSnapshot());
					} catch (err) {
						/* 目录已随会话销毁 */
					}
				};
				sync();
				const off = typeof store.subscribe === 'function' ? store.subscribe(sync) : null;
				try {
					if (typeof directory.load === 'function') directory.load().catch(() => {});
				} catch (err) {
					/* 目录加载失败由 store.status 呈现 */
				}
				return () => {
					dirRef.current = null;
					if (typeof off === 'function') off();
				};
			}, [scope, sessionId]);

			/* 点阵文字：宽度回流给粒子场 */
			React.useEffect(() => {
				const canvas = textRef.current;
				if (!canvas) return;
				const w = paintDotText(canvas, label, {
					core: '#e7edf1',
					head: '#ffffff',
					glow: 'rgba(226,240,250,0.55)',
					blur: 4,
				});
				labelWRef.current = typeof w === 'number' ? w : 42;
			}, [label, rev]);

			React.useEffect(() => () => {
				if (failTimerRef.current) window.clearTimeout(failTimerRef.current);
			}, []);

			/* 粒子场 */
			React.useEffect(() => {
				const root = rootRef.current;
				const canvas = canvasRef.current;
				if (!root || !canvas) return undefined;

				const still = typeof window.matchMedia === 'function'
					&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;

				let g = null;
				let W = PILL_W;
				let raf = 0;
				let last = performance.now();
				let eased = levelRef.current;
				let palAt = -1;
				let pal = TONES.map((tone) => 'rgb(' + tone.low.join(',') + ')');
				const ps = [];

				const fieldLeft = () => Math.min(W * 0.62, PAD_LEFT + labelWRef.current + 7);
				// 粒子场只铺到当前档位所在的那一段，末端随档位伸缩
				const fieldEnd = (level) => {
					const head = fieldLeft();
					const span = Math.max(0, W - PAD_RIGHT - head);
					return head + Math.max(14, span * Math.max(0, Math.min(1, level)));
				};

				const measure = () => {
					W = Math.max(120, canvas.clientWidth || PILL_W);
					const dpr = Math.min(2, window.devicePixelRatio || 1);
					canvas.width = Math.round(W * dpr);
					canvas.height = Math.round(PILL_H * dpr);
					g = canvas.getContext('2d');
					if (g) g.setTransform(dpr, 0, 0, dpr, 0, 0);
					ps.length = 0;
				};

				const spawn = (k, recycle, endX) => ({
					x: recycle
						? fieldLeft() + Math.random() * 5
						: fieldLeft() + Math.random() * Math.max(2, (endX - fieldLeft()) * 0.85),
					y: PILL_H / 2 + (Math.random() + Math.random() - 1) * (7 + 4 * k),
					vx: 2 + Math.random() * 8,
					vy: (Math.random() - 0.5) * (3 + 24 * k),
					life: 1,
					decay: 0.11 + Math.random() * 0.16 + k * (1.4 + Math.random() * 1.5),
					size: 0.9 + Math.random() * 1.1,
					tone: (Math.random() * 3) | 0,
					phase: Math.random() * Math.PI * 2,
					seed: Math.random(),
				});

				const draw = (k, endX) => {
					if (!g) return;
					const head = fieldLeft();
					const right = endX;
					const fade = Math.max(10, Math.min(26, (endX - head) * 0.3));
					const mid = PILL_H / 2;
					g.clearRect(0, 0, W, PILL_H);

					// 发射口柔光
					const halo = g.createRadialGradient(head, mid, 0, head, mid, 11 + 14 * k);
					halo.addColorStop(0, 'rgba(232,242,248,' + (0.04 + 0.15 * k).toFixed(3) + ')');
					halo.addColorStop(1, 'rgba(232,242,248,0)');
					g.fillStyle = halo;
					g.fillRect(0, 0, W, PILL_H);

					// 低强度：轨道刻度点 + 发射口点阵噪点墙
					const calm = Math.max(0, 1 - k / LOW_TONE);
					if (calm > 0.04) {
						g.globalAlpha = calm * 0.32;
						g.fillStyle = '#cfd7dc';
						const span = right - head;
						const ticks = [0.42, 0.58, 0.74, 0.9];
						for (let i = 0; i < ticks.length; i += 1) {
							g.beginPath();
							g.arc(head + span * ticks[i], mid, 1.05, 0, Math.PI * 2);
							g.fill();
						}
						const seedBase = Math.floor(performance.now() / 240);
						g.fillStyle = '#c3ccd2';
						g.globalAlpha = calm * 0.5;
						for (let i = 0; i < 18; i += 1) {
							const seed = (seedBase * 37 + i * 91) % 1000;
							const px = head - 1 + ((seed * 7) % 10);
							const py = 3 + ((seed * 13) % (PILL_H - 6));
							g.fillRect(px, py, 1.1, 1.1);
						}
					}

					g.globalCompositeOperation = 'lighter';
					for (let i = 0; i < ps.length; i += 1) {
						const p = ps[i];
						const rise = Math.min(1, (1 - p.life) / 0.1);
						const fall = Math.min(1, p.life / 0.35);
						const tail = Math.max(0, Math.min(1, (endX - p.x) / fade + 0.15));
						const alpha = rise * fall * (0.32 + 0.68 * k) * (0.55 + 0.45 * p.seed) * tail;
						if (alpha <= 0.01) continue;
						const len = Math.min(12, Math.max(1, p.vx * 0.026));
						g.globalAlpha = Math.min(1, alpha);
						g.fillStyle = pal[p.tone];
						if (len < 1.8) {
							g.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
						} else {
							g.strokeStyle = pal[p.tone];
							g.lineWidth = 1 + Math.min(0.6, len * 0.05);
							g.lineCap = 'butt';
							g.beginPath();
							g.moveTo(p.x, p.y);
							g.lineTo(p.x - len, p.y);
							g.stroke();
							g.globalAlpha = Math.min(1, alpha * 1.25);
							g.fillStyle = '#ffffff';
							g.fillRect(p.x - 0.6, p.y - 0.7, 1.2, 1.4);
						}
					}
					g.globalAlpha = 1;
					g.globalCompositeOperation = 'source-over';
				};

				const frame = (now) => {
					const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
					last = now;

					const target = levelRef.current;
					eased += (target - eased) * (1 - Math.exp(-dt * 11));
					if (Math.abs(target - eased) < 0.0008) eased = target;
					const k = Math.pow(eased, 1.85);

					if (Math.abs(k - palAt) > 0.05) {
						palAt = k;
						pal = TONES.map((tone) => 'rgb('
							+ mixChannel(tone.low[0], tone.high[0], k) + ','
							+ mixChannel(tone.low[1], tone.high[1], k) + ','
							+ mixChannel(tone.low[2], tone.high[2], k) + ')');
					}

					const endX = fieldEnd(eased);
					const fieldLen = Math.max(14, endX - fieldLeft());
					// 密度随档位缓降：低档粒子更多、满档反而更克制
					const density = 1.5 - 0.65 * eased;
					const targetCount = Math.max(18, Math.min(MAX_PARTICLES, Math.round(fieldLen * density)));
					while (ps.length < targetCount) {
						const fresh = spawn(k, false, endX);
						fresh.life = 0.55 + Math.random() * 0.45;
						ps.push(fresh);
					}

					const speedBase = 5 + 560 * Math.pow(k, 1.6);
					const move = still ? 0 : 1;
					for (let i = ps.length - 1; i >= 0; i -= 1) {
						const p = ps[i];
						const want = speedBase * (0.45 + p.seed * 0.9);
						p.vx += (want - p.vx) * (1 - Math.exp(-dt * (2.5 + 6 * k)));
						p.x += p.vx * dt * move;
						p.y += (p.vy * (1 - 0.6 * k)
							+ Math.sin(now / 700 + p.phase) * (1 - k) * 4) * dt * move;
						if (!still) p.life -= dt * p.decay;
						if (p.life <= 0 || p.x > endX + 2) {
							if (ps.length > targetCount) {
								ps.splice(i, 1);
							} else {
								ps[i] = spawn(k, true, endX);
							}
						}
					}

					draw(k, endX);

					if (cursorRef.current) {
						cursorRef.current.style.left = endX.toFixed(2) + 'px';
					}
					root.style.setProperty('--ti-k', k.toFixed(3));
					raf = window.requestAnimationFrame(frame);
				};

				measure();
				raf = window.requestAnimationFrame(frame);

				let ro = null;
				if (typeof ResizeObserver === 'function') {
					ro = new ResizeObserver(() => measure());
					ro.observe(canvas);
				}
				return () => {
					window.cancelAnimationFrame(raf);
					if (ro) ro.disconnect();
					ps.length = 0;
				};
			}, []);

			const flashFailure = (message) => {
				pendingRef.current = false;
				setFailure(message);
				if (failTimerRef.current) window.clearTimeout(failTimerRef.current);
				failTimerRef.current = window.setTimeout(() => setFailure(null), 1600);
			};

			const commitIndex = (nextIndex) => {
				const directory = dirRef.current;
				const current = snapshot && snapshot.current;
				if (!live || !directory || !current || typeof directory.select !== 'function') return;
				const target = Math.max(0, Math.min(count - 1, nextIndex));
				const effort = ladder.ids[target];
				const selection = {
					provider: current.provider,
					model: current.model,
					reasoningEffort: effort,
				};
				pendingRef.current = true;
				let promise = null;
				try {
					promise = directory.select(selection);
				} catch (err) {
					flashFailure(String(err && err.message ? err.message : err));
					return;
				}
				if (!promise || typeof promise.then !== 'function') {
					pendingRef.current = false;
					return;
				}
				promise.then((result) => {
					pendingRef.current = false;
					if (result && result.ok === false) {
						const code = result.error && result.error.code ? result.error.code : 'select/failed';
						if (typeof console !== 'undefined' && console.warn) {
							console.warn('[thinking-intensity] select failed:', result.error || code);
						}
						flashFailure(
							code === 'session/writer-held' ? t('busy', '会话被占用') : code,
						);
					}
				}).catch((err) => {
					flashFailure(String(err && err.message ? err.message : err));
				});
			};

			const indexFromClientX = (clientX) => {
				const root = rootRef.current;
				if (!root) return index;
				const rect = root.getBoundingClientRect();
				if (!rect.width) return index;
				const head = Math.min(rect.width * 0.62, PAD_LEFT + labelWRef.current + 7);
				const span = Math.max(1, rect.width - PAD_RIGHT - head);
				const ratio = Math.max(0, Math.min(1, (clientX - rect.left - head) / span));
				return Math.round(ratio * steps);
			};

			const onPointerDown = (event) => {
				if (!live) return;
				if (event.pointerType === 'mouse' && event.button !== 0) return;
				const root = rootRef.current;
				if (!root) return;
				const next = indexFromClientX(event.clientX);
				dragRef.current = { id: event.pointerId };
				setDrag({ index: next });
				if (root.setPointerCapture) {
					try { root.setPointerCapture(event.pointerId); } catch (err) { /* 合成事件无捕获 */ }
				}
				if (root.focus) root.focus();
				event.preventDefault();
			};

			const onPointerMove = (event) => {
				const current = dragRef.current;
				if (!current || current.id !== event.pointerId) return;
				const next = indexFromClientX(event.clientX);
				setDrag((prev) => (prev && prev.index === next ? prev : { index: next }));
			};

			const endDrag = (event) => {
				const current = dragRef.current;
				if (!current) return;
				dragRef.current = null;
				const root = rootRef.current;
				if (root && root.releasePointerCapture) {
					try { root.releasePointerCapture(current.id); } catch (err) { /* 已释放 */ }
				}
				const next = event && typeof event.clientX === 'number'
					? indexFromClientX(event.clientX)
					: (drag ? drag.index : ladder.index);
				setDrag(null);
				if (next !== ladder.index) commitIndex(next);
			};

			const onKeyDown = (event) => {
				if (!live) return;
				let next = null;
				switch (event.key) {
					case 'ArrowRight': case 'ArrowUp': next = index + 1; break;
					case 'ArrowLeft': case 'ArrowDown': next = index - 1; break;
					case 'Home': next = 0; break;
					case 'End': next = count - 1; break;
					case 'PageUp': next = index + 1; break;
					case 'PageDown': next = index - 1; break;
					case 'Enter': case ' ': next = (index + 1) % count; break;
					default: return;
				}
				event.preventDefault();
				const target = Math.max(0, Math.min(count - 1, next));
				setDrag({ index: target });
				commitIndex(target);
			};

			return h('div', { className: 'ti-float' },
				h('style', null, CSS),
				h('div', { className: 'ti-root' },
				h('div', {
					ref: rootRef,
					className: 'ti-pill',
					role: 'slider',
					tabIndex: live ? 0 : -1,
					'data-static': live ? '0' : '1',
					'data-drag': drag !== null ? '1' : '0',
					'data-error': failure ? '1' : '0',
					'data-pending': pending ? '1' : '0',
					'aria-label': t('label', '思考强度'),
					'aria-orientation': 'horizontal',
					'aria-disabled': live ? 'false' : 'true',
					'aria-valuemin': 0,
					'aria-valuemax': steps > 0 ? steps : 0,
					'aria-valuenow': steps > 0 ? index : 0,
					'aria-valuetext': failure ? failure : label,
					title: failure || (live ? label : t('unsupported', '当前模型未提供推理档位')),
					onPointerDown,
					onPointerMove,
					onPointerUp: endDrag,
					onPointerCancel: endDrag,
					onKeyDown,
				},
					h('canvas', { ref: canvasRef, className: 'ti-canvas', 'aria-hidden': true }),
					h('canvas', { ref: textRef, className: 'ti-label', 'aria-hidden': true }),
					h('div', { ref: cursorRef, className: 'ti-cursor', 'aria-hidden': true })
					)
				)
			);
		}

		const DICT_EN = {
			'thinking-intensity.label': 'Thinking intensity',
			'thinking-intensity.title': 'Thinking intensity',
			'thinking-intensity.unsupported': 'This model provides no reasoning levels',
			'thinking-intensity.busy': 'session in use',
		};
		const DICT_ZH = {
			'thinking-intensity.label': '思考强度',
			'thinking-intensity.title': '思考强度',
			'thinking-intensity.unsupported': '当前模型未提供推理档位',
			'thinking-intensity.busy': '会话被占用',
		};

		return {
			inject: ['slots'],
			apply(ctx) {
				let translate = null;

				const locale = readService(ctx, 'locale');
				if (locale && typeof locale.register === 'function' && typeof locale.bind === 'function') {
					ctx.effect(() => {
						const disposers = [];
						try {
							disposers.push(locale.register(NS, 'en', DICT_EN));
							disposers.push(locale.register(NS, 'zh', DICT_ZH));
							translate = locale.bind(NS);
						} catch (err) {
							translate = null;
							if (typeof console !== 'undefined' && console.warn) {
								console.warn('[thinking-intensity] locale dictionary skipped:', err);
							}
						}
						return () => {
							for (let i = 0; i < disposers.length; i += 1) {
								try { disposers[i](); } catch (err) { /* 已释放 */ }
							}
							translate = null;
						};
					});
				}

				const Pill = (props) => h(IntensityPill, Object.assign({}, props, {
					scope: ctx,
					locale: locale || null,
					translate: (key) => (typeof translate === 'function' ? translate(key) : undefined),
				}));

				ctx.slots.inject('conversation.input.overlay', () => ctx.slots.register({
					name: 'conversation.input.overlay',
					id: 'thinking-intensity',
					order: 10,
					label: () => {
						try {
							const out = typeof translate === 'function' ? translate(NS + '.title') : undefined;
							return typeof out === 'string' && out ? out : 'Thinking intensity';
						} catch (err) {
							return 'Thinking intensity';
						}
					},
				}, Pill));
			},
		};
	},
});