/*
  Universal (fusion) crafting — any item in items.js can be spent as material
  to obtain another item, using total trade value (sell/buy-based) with markup.
*/

import { items } from "./items.js";

/** @param {string} s */
export function normalizeItemSlug(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

/**
 * Approximate "material value" for fusion checks (prevents free/zero loops).
 * @param {object|undefined} it
 */
export function itemFusionValue(it) {
  if (!it) return 0;
  const sell = Number(it.sellPrice) || 0;
  const buy = Number(it.buyPrice) || 0;
  return Math.max(1, sell, Math.floor(buy * 0.2));
}

/**
 * Total fusion budget required to obtain qty of target item.
 * @param {object} targetItem
 * @param {number} qty
 */
export function fusionBudgetRequired(targetItem, qty) {
  const q = Math.max(1, Math.floor(Number(qty) || 1));
  const base = itemFusionValue(targetItem);
  // Slight markup so melting items is not strictly profitable at sell prices.
  return Math.ceil(base * 1.22 * q);
}

/**
 * Find item by id slug or normalized display name.
 * @param {string} slug
 */
export function findItemBySlug(slug) {
  const raw = String(slug || "").trim().toLowerCase();
  if (!raw) return null;

  if (items[raw]) return items[raw];

  const norm = normalizeItemSlug(raw);
  if (norm && items[norm]) return items[norm];

  for (const it of Object.values(items)) {
    if (!it?.id) continue;
    if (it.id.toLowerCase() === raw || normalizeItemSlug(it.id) === norm) return it;
  }

  for (const it of Object.values(items)) {
    if (!it?.name) continue;
    if (normalizeItemSlug(it.name) === norm) return it;
  }

  // Single-token substring on id (last resort)
  if (norm.length >= 4) {
    const hits = Object.values(items).filter(
      (it) => it?.id && normalizeItemSlug(it.id).includes(norm)
    );
    if (hits.length === 1) return hits[0];
  }

  return null;
}

/**
 * @typedef {{ itemId: string, qty: number }} FusionMat
 */

/**
 * @param {string[]} args after command, starting with fuse|fusion
 * @returns {{ error?: string, outputQty: number, target: object, materials: FusionMat[] } | null}
 *   null = not a fusion command
 */
export function parseFusionArgs(args) {
  const head = (args[0] || "").toLowerCase();
  if (head !== "fuse" && head !== "fusion") return null;

  const rest = args.slice(1);
  const mi = rest.indexOf("mat");
  if (mi < 1) {
    return { error: "usage" };
  }

  const headTokens = rest.slice(0, mi);
  const matTokens = rest.slice(mi + 1);

  if (matTokens.length < 2 || matTokens.length % 2 !== 0) {
    return { error: "badMaterials" };
  }

  let outputQty = 1;
  const outParts = [];
  for (const t of headTokens) {
    const tl = String(t).toLowerCase();
    if (/^x\d+$/.test(tl)) {
      outputQty = Math.max(1, parseInt(tl.slice(1), 10) || 1);
    } else {
      outParts.push(t);
    }
  }

  const outputSlug = outParts.join("_").toLowerCase();
  const target = findItemBySlug(outputSlug);
  if (!target) {
    return { error: "badTarget", slug: outputSlug };
  }

  /** @type {FusionMat[]} */
  const materials = [];
  for (let i = 0; i < matTokens.length; i += 2) {
    const idRaw = String(matTokens[i]).toLowerCase();
    const qty = parseInt(matTokens[i + 1], 10);
    if (!idRaw || !Number.isFinite(qty) || qty < 1) {
      return { error: "badMaterials" };
    }
    const matItem = findItemBySlug(idRaw);
    if (!matItem) {
      return { error: "badMaterialId", itemId: idRaw };
    }
    materials.push({ itemId: matItem.id, qty });
  }

  return { outputQty, target, materials };
}

/**
 * @param {object} target
 * @param {number} outputQty
 * @param {FusionMat[]} materials
 * @param {Record<string, number>} bag
 * @returns {{ ok: true } | { ok: false, error: string, detail?: string }}
 */
export function validateFusion(target, outputQty, materials, bag) {
  const q = Math.max(1, Math.floor(Number(outputQty) || 1));

  if (!materials.length) {
    return { ok: false, error: "noMaterials" };
  }

  const totalMatSlots = materials.reduce((s, m) => s + m.qty, 0);
  if (totalMatSlots > 999) {
    return { ok: false, error: "tooMany" };
  }

  for (const m of materials) {
    if (m.itemId === target.id) {
      return { ok: false, error: "cannotUseTarget" };
    }
    const have = bag[m.itemId] || 0;
    // m.qty = total stacks consumed for this entire fuse (all outputs in one command).
    if (have < m.qty) {
      return {
        ok: false,
        error: "notEnough",
        detail: `${m.itemId}:${have}/${m.qty}`,
      };
    }
  }

  let offered = 0;
  for (const m of materials) {
    const it = items[m.itemId];
    offered += itemFusionValue(it) * m.qty;
  }

  const need = fusionBudgetRequired(target, q);
  if (offered < need) {
    return {
      ok: false,
      error: "lowValue",
      detail: String(need),
      offered: String(offered),
    };
  }

  return { ok: true };
}
