/**
 * Resolve crafting material display + meta from inventory sources
 * (items.js plus fish / wood / ore / herb gathering DBs).
 */

import { items } from "./items.js";
import { fishList } from "./fish.js";
import { woods } from "./woods.js";
import { ores } from "./ores.js";
import { herbs } from "./herbs.js";

/** @param {string} itemId */
export function resolveCraftMaterial(itemId) {
  if (!itemId) return null;
  if (items[itemId]) return items[itemId];
  if (fishList[itemId]) return fishList[itemId];
  if (woods[itemId]) return woods[itemId];
  if (ores[itemId]) return ores[itemId];
  if (herbs[itemId]) return herbs[itemId];
  return null;
}

/** @param {string} itemId */
export function getCraftMaterialName(itemId) {
  const row = resolveCraftMaterial(itemId);
  return row?.name || itemId;
}
