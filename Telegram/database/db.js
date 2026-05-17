import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PATHS = {
  users:    path.join(__dirname, "users.json"),
  monsters: path.join(__dirname, "monsters.json"),
  items:    path.join(__dirname, "items.json"),
  rewards:  path.join(__dirname, "rewards.json"),
};

if (!fs.existsSync(PATHS.users)) {
  fs.writeFileSync(PATHS.users, JSON.stringify({}, null, 2));
}

const load     = (p) => JSON.parse(fs.readFileSync(p, "utf-8"));
const save     = (p, data) => fs.writeFileSync(p, JSON.stringify(data, null, 2));
const loadUsers = () => load(PATHS.users);
const saveUsers = (data) => save(PATHS.users, data);

export const getMonsters = () => load(PATHS.monsters);
export const getItems    = () => load(PATHS.items);
export const getRewards  = () => load(PATHS.rewards);

const defaultUser = (id, name) => ({
  id,
  name,
  level:     1,
  exp:       0,
  expNeeded: 100,
  money:     500,
  hp:        100,
  maxHp:     100,
  atk:       10,
  def:       5,
  inventory: [],
  daily:     null,
  createdAt: Date.now(),
});

const expNeeded = (level) => Math.floor(100 * Math.pow(1.5, level - 1));

export const db = {

  getUser(id, name) {
    const data = loadUsers();
    if (!data[id]) {
      data[id] = defaultUser(String(id), name || "Unknown");
      saveUsers(data);
    }
    return data[id];
  },

  saveUser(user) {
    const data = loadUsers();
    data[user.id] = user;
    saveUsers(data);
  },

  addExp(id, amount) {
    const data = loadUsers();
    const user = data[id];
    if (!user) return null;

    user.exp += amount;
    const results = { levelUp: false, levels: 0 };

    while (user.exp >= user.expNeeded) {
      user.exp      -= user.expNeeded;
      user.level    += 1;
      user.expNeeded = expNeeded(user.level);
      user.maxHp    += 10;
      user.hp        = user.maxHp;
      user.atk      += 2;
      user.def      += 1;
      results.levelUp = true;
      results.levels += 1;
    }

    data[id] = user;
    saveUsers(data);
    return results;
  },

  addMoney(id, amount) {
    const data = loadUsers();
    const user = data[id];
    if (!user) return null;
    user.money = Math.max(0, user.money + amount);
    data[id] = user;
    saveUsers(data);
    return user.money;
  },

  setHp(id, amount) {
    const data = loadUsers();
    const user = data[id];
    if (!user) return null;
    user.hp = Math.min(user.maxHp, Math.max(0, amount));
    data[id] = user;
    saveUsers(data);
    return user.hp;
  },

  addItem(id, item) {
    const data = loadUsers();
    const user = data[id];
    if (!user) return null;
    const existing = user.inventory.find((i) => i.name === item.name);
    if (existing) {
      existing.qty += item.qty || 1;
    } else {
      user.inventory.push({ ...item, qty: item.qty || 1 });
    }
    data[id] = user;
    saveUsers(data);
  },

  removeItem(id, itemName, qty = 1) {
    const data = loadUsers();
    const user = data[id];
    if (!user) return false;
    const idx = user.inventory.findIndex((i) => i.name === itemName);
    if (idx === -1) return false;
    user.inventory[idx].qty -= qty;
    if (user.inventory[idx].qty <= 0) user.inventory.splice(idx, 1);
    data[id] = user;
    saveUsers(data);
    return true;
  },

  setDaily(id) {
    const data = loadUsers();
    data[id].daily = Date.now();
    saveUsers(data);
  },

  canDaily(id) {
    const data = loadUsers();
    const user = data[id];
    if (!user?.daily) return true;
    return Date.now() - user.daily >= 24 * 60 * 60 * 1000;
  },

  leaderboard(limit = 10) {
    const data = loadUsers();
    return Object.values(data)
      .sort((a, b) => b.level - a.level || b.exp - a.exp)
      .slice(0, limit);
  },

  all() {
    return loadUsers();
  },
};
