/**
 * Host half: reasoning-effort guidance plus opt-out knowledge-base auto-apply.
 *
 * The slider can only offer what the DSH model directory exposes, and the
 * request path validates every submitted effort against that same directory
 * (`UNSUPPORTED_REASONING_EFFORT` otherwise). This half diagnoses custom-provider
 * models the directory under-describes and returns copy-ready
 * `reasoningEfforts` declarations (exact when the knowledge base knows the
 * model, a filled template otherwise) for the user to paste into
 * `settings.yaml`. Built-in catalog models are trusted as-is and never
 * flagged.
 *
 * Auto-apply (default on, `dsh-reasoning-effort.autoApply: false` to disable)
 * fills only bare, hand-declared model entries that match the knowledge base.
 * The write is one atomic mutation per pass, never replaces an explicit
 * `reasoningEfforts`, and carries `compat` only onto `openai-completions`
 * routes. Optimistic revisions and post-write verification prevent a stale or
 * structurally incomplete edit from being retained.
 *
 * @module dsh-reasoning-effort
 */
import type { Context } from '@deepseek-ai/cordis';
import { type KnowledgeEntry } from './knowledge.js';
export declare const name = "dsh-reasoning-effort";
/**
 * Hard dependencies: the loader waits for these services before calling
 * `apply`, so the row never races the boot order of the base bundle rows.
 * `connection` is deliberately absent — only Web profiles provide it, so the
 * RPC channel is mounted through `ctx.inject` instead of blocking this row.
 */
export declare const inject: string[];
interface StoreShape {
    entries?: KnowledgeEntry[];
    autoApply?: boolean;
}
type JsonObject = Record<string, any>;
interface HostSettingsService {
    readonly writable: boolean;
    get(ns: string): unknown;
    register(ns: string, schema: unknown, options?: JsonObject): SettingsScopeLike;
    describe(): Array<{
        ns: string;
        revision: number;
        user?: unknown;
    }>;
    prepareDocument(): Promise<string | undefined>;
    mutate(ns: string, ops: JsonObject[], expectedRevision?: number): Promise<void>;
}
interface SettingsScopeLike {
    get(): unknown;
}
interface AutoApplyRoute {
    route: string;
    modelsBefore: unknown[];
    modelsAfter: unknown[];
}
export interface AutoApplyPlan {
    ops: JsonObject[];
    rollbackOps: JsonObject[];
    appliedTo: string[];
    routes: AutoApplyRoute[];
}
/**
 * Build one minimal atomic mutation. A whole `models` array is the smallest
 * safe settings path because DSH path mutations address object keys, not array
 * indices; the copied array preserves entry order and every unrelated field.
 */
export declare function buildAutoApplyPlan(userSection: unknown, knowledge: readonly KnowledgeEntry[]): AutoApplyPlan | undefined;
/** Verify exactly the arrays covered by a plan, without rejecting unrelated concurrent edits. */
export declare function validateAutoApplyPlan(userSection: unknown, plan: AutoApplyPlan, state?: 'after' | 'before'): boolean;
/** Execute one atomic, revision-guarded auto-apply pass. */
export declare function executeAutoApply(settingsService: HostSettingsService, storeShape: StoreShape): Promise<string[]>;
export declare function apply(ctx: Context): void;
export {};
