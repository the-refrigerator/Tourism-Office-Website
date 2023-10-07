(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? (s.credentials = "include") : i.crossorigin === "anonymous" ? (s.credentials = "omit") : (s.credentials = "same-origin"), s;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const ka = "144",
  ci = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  ui = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Yc = 0,
  ro = 1,
  qc = 2,
  Kl = 1,
  jc = 2,
  ar = 3,
  Bi = 0,
  Ot = 1,
  _t = 2,
  Dn = 0,
  zi = 1,
  so = 2,
  ao = 3,
  oo = 4,
  Zc = 5,
  Ri = 100,
  $c = 101,
  Jc = 102,
  lo = 103,
  co = 104,
  Kc = 200,
  Qc = 201,
  eu = 202,
  tu = 203,
  Ql = 204,
  ec = 205,
  nu = 206,
  iu = 207,
  ru = 208,
  su = 209,
  au = 210,
  ou = 0,
  lu = 1,
  cu = 2,
  Ma = 3,
  uu = 4,
  du = 5,
  hu = 6,
  fu = 7,
  tc = 0,
  pu = 1,
  mu = 2,
  _n = 0,
  gu = 1,
  _u = 2,
  vu = 3,
  xu = 4,
  Su = 5,
  nc = 300,
  ki = 301,
  Vi = 302,
  wa = 303,
  La = 304,
  us = 306,
  Ea = 1e3,
  Vt = 1001,
  Aa = 1002,
  St = 1003,
  uo = 1004,
  ho = 1005,
  It = 1006,
  yu = 1007,
  ds = 1008,
  jn = 1009,
  bu = 1010,
  Mu = 1011,
  ic = 1012,
  wu = 1013,
  Hn = 1014,
  Gn = 1015,
  mr = 1016,
  Lu = 1017,
  Eu = 1018,
  Ui = 1020,
  Au = 1021,
  Cu = 1022,
  rn = 1023,
  Du = 1024,
  Tu = 1025,
  Xn = 1026,
  Hi = 1027,
  Pu = 1028,
  Ru = 1029,
  Nu = 1030,
  Iu = 1031,
  Fu = 1033,
  bs = 33776,
  Ms = 33777,
  ws = 33778,
  Ls = 33779,
  fo = 35840,
  po = 35841,
  mo = 35842,
  go = 35843,
  Ou = 36196,
  _o = 37492,
  vo = 37496,
  xo = 37808,
  So = 37809,
  yo = 37810,
  bo = 37811,
  Mo = 37812,
  wo = 37813,
  Lo = 37814,
  Eo = 37815,
  Ao = 37816,
  Co = 37817,
  Do = 37818,
  To = 37819,
  Po = 37820,
  Ro = 37821,
  No = 36492,
  Zn = 3e3,
  qe = 3001,
  zu = 3200,
  Uu = 3201,
  rc = 0,
  Bu = 1,
  jt = "srgb",
  Wn = "srgb-linear",
  Es = 7680,
  ku = 519,
  Ca = 35044,
  Io = "300 es",
  Da = 1035;
class ti {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const ct = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Fo = 1234567;
const cr = Math.PI / 180,
  is = 180 / Math.PI;
function vn() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (ct[r & 255] + ct[(r >> 8) & 255] + ct[(r >> 16) & 255] + ct[(r >> 24) & 255] + "-" + ct[e & 255] + ct[(e >> 8) & 255] + "-" + ct[((e >> 16) & 15) | 64] + ct[(e >> 24) & 255] + "-" + ct[(t & 63) | 128] + ct[(t >> 8) & 255] + "-" + ct[(t >> 16) & 255] + ct[(t >> 24) & 255] + ct[n & 255] + ct[(n >> 8) & 255] + ct[(n >> 16) & 255] + ct[(n >> 24) & 255]).toLowerCase();
}
function gt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Va(r, e) {
  return ((r % e) + e) % e;
}
function Vu(r, e, t, n, i) {
  return n + ((r - e) * (i - n)) / (t - e);
}
function Hu(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function ur(r, e, t) {
  return (1 - t) * r + t * e;
}
function Gu(r, e, t, n) {
  return ur(r, e, 1 - Math.exp(-t * n));
}
function Wu(r, e = 1) {
  return e - Math.abs(Va(r, e * 2) - e);
}
function Xu(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : ((r = (r - e) / (t - e)), r * r * (3 - 2 * r));
}
function Yu(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : ((r = (r - e) / (t - e)), r * r * r * (r * (r * 6 - 15) + 10));
}
function qu(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function ju(r, e) {
  return r + Math.random() * (e - r);
}
function Zu(r) {
  return r * (0.5 - Math.random());
}
function $u(r) {
  r !== void 0 && (Fo = r);
  let e = (Fo += 1831565813);
  return (e = Math.imul(e ^ (e >>> 15), e | 1)), (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)), ((e ^ (e >>> 14)) >>> 0) / 4294967296;
}
function Ju(r) {
  return r * cr;
}
function Ku(r) {
  return r * is;
}
function Ta(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function Qu(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function rs(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function ed(r, e, t, n, i) {
  const s = Math.cos,
    o = Math.sin,
    a = s(t / 2),
    l = o(t / 2),
    c = s((e + n) / 2),
    d = o((e + n) / 2),
    u = s((e - n) / 2),
    f = o((e - n) / 2),
    m = s((n - e) / 2),
    g = o((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(a * d, l * u, l * f, a * c);
      break;
    case "YZY":
      r.set(l * f, a * d, l * u, a * c);
      break;
    case "ZXZ":
      r.set(l * u, l * f, a * d, a * c);
      break;
    case "XZX":
      r.set(a * d, l * g, l * m, a * c);
      break;
    case "YXY":
      r.set(l * m, a * d, l * g, a * c);
      break;
    case "ZYZ":
      r.set(l * g, l * m, a * d, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function gn(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Be(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var td = Object.freeze({ __proto__: null, DEG2RAD: cr, RAD2DEG: is, generateUUID: vn, clamp: gt, euclideanModulo: Va, mapLinear: Vu, inverseLerp: Hu, lerp: ur, damp: Gu, pingpong: Wu, smoothstep: Xu, smootherstep: Yu, randInt: qu, randFloat: ju, randFloatSpread: Zu, seededRandom: $u, degToRad: Ju, radToDeg: Ku, isPowerOfTwo: Ta, ceilPowerOfTwo: Qu, floorPowerOfTwo: rs, setQuaternionFromProperEuler: ed, normalize: Be, denormalize: gn });
class _e {
  constructor(e = 0, t = 0) {
    (_e.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (this.x = i[0] * t + i[3] * n + i[6]), (this.y = i[1] * t + i[4] * n + i[7]), this;
  }
  min(e) {
    return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this;
  }
  max(e) {
    return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this;
  }
  clamp(e, t) {
    return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), this;
  }
  clampScalar(e, t) {
    return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * i + e.x), (this.y = s * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ft {
  constructor() {
    (Ft.prototype.isMatrix3 = !0), (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, o, a, l, c) {
    const d = this.elements;
    return (d[0] = e), (d[1] = i), (d[2] = a), (d[3] = t), (d[4] = s), (d[5] = l), (d[6] = n), (d[7] = o), (d[8] = c), this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = n[4]), (t[5] = n[5]), (t[6] = n[6]), (t[7] = n[7]), (t[8] = n[8]), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      o = n[0],
      a = n[3],
      l = n[6],
      c = n[1],
      d = n[4],
      u = n[7],
      f = n[2],
      m = n[5],
      g = n[8],
      p = i[0],
      h = i[3],
      _ = i[6],
      M = i[1],
      E = i[4],
      w = i[7],
      S = i[2],
      D = i[5],
      z = i[8];
    return (s[0] = o * p + a * M + l * S), (s[3] = o * h + a * E + l * D), (s[6] = o * _ + a * w + l * z), (s[1] = c * p + d * M + u * S), (s[4] = c * h + d * E + u * D), (s[7] = c * _ + d * w + u * z), (s[2] = f * p + m * M + g * S), (s[5] = f * h + m * E + g * D), (s[8] = f * _ + m * w + g * z), this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (t[0] *= e), (t[3] *= e), (t[6] *= e), (t[1] *= e), (t[4] *= e), (t[7] *= e), (t[2] *= e), (t[5] *= e), (t[8] *= e), this;
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      d = e[8];
    return t * o * d - t * a * c - n * s * d + n * a * l + i * s * c - i * o * l;
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      d = e[8],
      u = d * o - a * c,
      f = a * l - d * s,
      m = c * s - o * l,
      g = t * u + n * f + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return (e[0] = u * p), (e[1] = (i * c - d * n) * p), (e[2] = (a * n - i * o) * p), (e[3] = f * p), (e[4] = (d * t - i * l) * p), (e[5] = (i * s - a * t) * p), (e[6] = m * p), (e[7] = (n * l - c * t) * p), (e[8] = (o * t - n * s) * p), this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return (e = t[1]), (t[1] = t[3]), (t[3] = e), (e = t[2]), (t[2] = t[6]), (t[6] = e), (e = t[5]), (t[5] = t[7]), (t[7] = e), this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (e[0] = t[0]), (e[1] = t[3]), (e[2] = t[6]), (e[3] = t[1]), (e[4] = t[4]), (e[5] = t[7]), (e[6] = t[2]), (e[7] = t[5]), (e[8] = t[8]), this;
  }
  setUvTransform(e, t, n, i, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    const n = this.elements;
    return (n[0] *= e), (n[3] *= e), (n[6] *= e), (n[1] *= t), (n[4] *= t), (n[7] *= t), this;
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      i = this.elements,
      s = i[0],
      o = i[3],
      a = i[6],
      l = i[1],
      c = i[4],
      d = i[7];
    return (i[0] = t * s + n * l), (i[3] = t * o + n * c), (i[6] = t * a + n * d), (i[1] = -n * s + t * l), (i[4] = -n * o + t * c), (i[7] = -n * a + t * d), this;
  }
  translate(e, t) {
    const n = this.elements;
    return (n[0] += e * n[2]), (n[3] += e * n[5]), (n[6] += e * n[8]), (n[1] += t * n[2]), (n[4] += t * n[5]), (n[7] += t * n[8]), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (e[t] = n[0]), (e[t + 1] = n[1]), (e[t + 2] = n[2]), (e[t + 3] = n[3]), (e[t + 4] = n[4]), (e[t + 5] = n[5]), (e[t + 6] = n[6]), (e[t + 7] = n[7]), (e[t + 8] = n[8]), e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function sc(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function gr(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Yn(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function es(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const As = { [jt]: { [Wn]: Yn }, [Wn]: { [jt]: es } },
  zt = {
    legacyMode: !0,
    get workingColorSpace() {
      return Wn;
    },
    set workingColorSpace(r) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (r, e, t) {
      if (this.legacyMode || e === t || !e || !t) return r;
      if (As[e] && As[e][t] !== void 0) {
        const n = As[e][t];
        return (r.r = n(r.r)), (r.g = n(r.g)), (r.b = n(r.b)), r;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this.workingColorSpace);
    }
  },
  ac = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 },
  tt = { r: 0, g: 0, b: 0 },
  Ut = { h: 0, s: 0, l: 0 },
  Dr = { h: 0, s: 0, l: 0 };
function Cs(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
function Tr(r, e) {
  return (e.r = r.r), (e.g = r.g), (e.b = r.b), e;
}
class De {
  constructor(e, t, n) {
    return (this.isColor = !0), (this.r = 1), (this.g = 1), (this.b = 1), t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = jt) {
    return (e = Math.floor(e)), (this.r = ((e >> 16) & 255) / 255), (this.g = ((e >> 8) & 255) / 255), (this.b = (e & 255) / 255), zt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Wn) {
    return (this.r = e), (this.g = t), (this.b = n), zt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Wn) {
    if (((e = Va(e, 1)), (t = gt(t, 0, 1)), (n = gt(n, 0, 1)), t === 0)) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = Cs(o, s, e + 1 / 3)), (this.g = Cs(o, s, e)), (this.b = Cs(o, s, e - 1 / 3));
    }
    return zt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = jt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = i[1],
        a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if ((s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))) return (this.r = Math.min(255, parseInt(s[1], 10)) / 255), (this.g = Math.min(255, parseInt(s[2], 10)) / 255), (this.b = Math.min(255, parseInt(s[3], 10)) / 255), zt.toWorkingColorSpace(this, t), n(s[4]), this;
          if ((s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))) return (this.r = Math.min(100, parseInt(s[1], 10)) / 100), (this.g = Math.min(100, parseInt(s[2], 10)) / 100), (this.b = Math.min(100, parseInt(s[3], 10)) / 100), zt.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if ((s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))) {
            const l = parseFloat(s[1]) / 360,
              c = parseFloat(s[2]) / 100,
              d = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(l, c, d, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        o = s.length;
      if (o === 3) return (this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255), (this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255), (this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255), zt.toWorkingColorSpace(this, t), this;
      if (o === 6) return (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255), (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255), (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255), zt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = jt) {
    const n = ac[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Yn(e.r)), (this.g = Yn(e.g)), (this.b = Yn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = es(e.r)), (this.g = es(e.g)), (this.b = es(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = jt) {
    return zt.fromWorkingColorSpace(Tr(this, tt), e), (gt(tt.r * 255, 0, 255) << 16) ^ (gt(tt.g * 255, 0, 255) << 8) ^ (gt(tt.b * 255, 0, 255) << 0);
  }
  getHexString(e = jt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Wn) {
    zt.fromWorkingColorSpace(Tr(this, tt), t);
    const n = tt.r,
      i = tt.g,
      s = tt.b,
      o = Math.max(n, i, s),
      a = Math.min(n, i, s);
    let l, c;
    const d = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const u = o - a;
      switch (((c = d <= 0.5 ? u / (o + a) : u / (2 - o - a)), o)) {
        case n:
          l = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / u + 2;
          break;
        case s:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = d), e;
  }
  getRGB(e, t = Wn) {
    return zt.fromWorkingColorSpace(Tr(this, tt), t), (e.r = tt.r), (e.g = tt.g), (e.b = tt.b), e;
  }
  getStyle(e = jt) {
    return zt.fromWorkingColorSpace(Tr(this, tt), e), e !== jt ? `color(${e} ${tt.r} ${tt.g} ${tt.b})` : `rgb(${(tt.r * 255) | 0},${(tt.g * 255) | 0},${(tt.b * 255) | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Ut), (Ut.h += e), (Ut.s += t), (Ut.l += n), this.setHSL(Ut.h, Ut.s, Ut.l), this;
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this;
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (this.r = Math.max(0, this.r - e.r)), (this.g = Math.max(0, this.g - e.g)), (this.b = Math.max(0, this.b - e.b)), this;
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (this.r += (e.r - this.r) * t), (this.g += (e.g - this.g) * t), (this.b += (e.b - this.b) * t), this;
  }
  lerpColors(e, t, n) {
    return (this.r = e.r + (t.r - e.r) * n), (this.g = e.g + (t.g - e.g) * n), (this.b = e.b + (t.b - e.b) * n), this;
  }
  lerpHSL(e, t) {
    this.getHSL(Ut), e.getHSL(Dr);
    const n = ur(Ut.h, Dr.h, t),
      i = ur(Ut.s, Dr.s, t),
      s = ur(Ut.l, Dr.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
De.NAMES = ac;
let di;
class oc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      di === void 0 && (di = gr("canvas")), (di.width = e.width), (di.height = e.height);
      const n = di.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), (t = di);
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if ((typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) || (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) || (typeof ImageBitmap < "u" && e instanceof ImageBitmap)) {
      const t = gr("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let o = 0; o < s.length; o++) s[o] = Yn(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? (t[n] = Math.floor(Yn(t[n] / 255) * 255)) : (t[n] = Yn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class lc {
  constructor(e = null) {
    (this.isSource = !0), (this.uuid = vn()), (this.data = e), (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? s.push(Ds(i[o].image)) : s.push(Ds(i[o]));
      } else s = Ds(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ds(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) || (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) || (typeof ImageBitmap < "u" && r instanceof ImageBitmap) ? oc.getDataURL(r) : r.data ? { data: Array.from(r.data), width: r.width, height: r.height, type: r.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let nd = 0;
class At extends ti {
  constructor(e = At.DEFAULT_IMAGE, t = At.DEFAULT_MAPPING, n = Vt, i = Vt, s = It, o = ds, a = rn, l = jn, c = 1, d = Zn) {
    super(), (this.isTexture = !0), Object.defineProperty(this, "id", { value: nd++ }), (this.uuid = vn()), (this.name = ""), (this.source = new lc(e)), (this.mipmaps = []), (this.mapping = t), (this.wrapS = n), (this.wrapT = i), (this.magFilter = s), (this.minFilter = o), (this.anisotropy = c), (this.format = a), (this.internalFormat = null), (this.type = l), (this.offset = new _e(0, 0)), (this.repeat = new _e(1, 1)), (this.center = new _e(0, 0)), (this.rotation = 0), (this.matrixAutoUpdate = !0), (this.matrix = new Ft()), (this.generateMipmaps = !0), (this.premultiplyAlpha = !1), (this.flipY = !0), (this.unpackAlignment = 4), (this.encoding = d), (this.userData = {}), (this.version = 0), (this.onUpdate = null), (this.isRenderTargetTexture = !1), (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.name = e.name), (this.source = e.source), (this.mipmaps = e.mipmaps.slice(0)), (this.mapping = e.mapping), (this.wrapS = e.wrapS), (this.wrapT = e.wrapT), (this.magFilter = e.magFilter), (this.minFilter = e.minFilter), (this.anisotropy = e.anisotropy), (this.format = e.format), (this.internalFormat = e.internalFormat), (this.type = e.type), this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), (this.rotation = e.rotation), (this.matrixAutoUpdate = e.matrixAutoUpdate), this.matrix.copy(e.matrix), (this.generateMipmaps = e.generateMipmaps), (this.premultiplyAlpha = e.premultiplyAlpha), (this.flipY = e.flipY), (this.unpackAlignment = e.unpackAlignment), (this.encoding = e.encoding), (this.userData = JSON.parse(JSON.stringify(e.userData))), (this.needsUpdate = !0), this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== nc) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ea:
          e.x = e.x - Math.floor(e.x);
          break;
        case Vt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Aa:
          Math.abs(Math.floor(e.x) % 2) === 1 ? (e.x = Math.ceil(e.x) - e.x) : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ea:
          e.y = e.y - Math.floor(e.y);
          break;
        case Vt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Aa:
          Math.abs(Math.floor(e.y) % 2) === 1 ? (e.y = Math.ceil(e.y) - e.y) : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
At.DEFAULT_IMAGE = null;
At.DEFAULT_MAPPING = nc;
class Ge {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (Ge.prototype.isVector4 = !0), (this.x = e), (this.y = t), (this.z = n), (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w !== void 0 ? e.w : 1), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), (this.w = e.w + t.w), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), (this.w += e.w * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), (this.w = e.w - t.w), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      o = e.elements;
    return (this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s), (this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s), (this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s), (this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? ((this.x = 1), (this.y = 0), (this.z = 0)) : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements,
      c = l[0],
      d = l[4],
      u = l[8],
      f = l[1],
      m = l[5],
      g = l[9],
      p = l[2],
      h = l[6],
      _ = l[10];
    if (Math.abs(d - f) < 0.01 && Math.abs(u - p) < 0.01 && Math.abs(g - h) < 0.01) {
      if (Math.abs(d + f) < 0.1 && Math.abs(u + p) < 0.1 && Math.abs(g + h) < 0.1 && Math.abs(c + m + _ - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2,
        w = (m + 1) / 2,
        S = (_ + 1) / 2,
        D = (d + f) / 4,
        z = (u + p) / 4,
        x = (g + h) / 4;
      return E > w && E > S ? (E < 0.01 ? ((n = 0), (i = 0.707106781), (s = 0.707106781)) : ((n = Math.sqrt(E)), (i = D / n), (s = z / n))) : w > S ? (w < 0.01 ? ((n = 0.707106781), (i = 0), (s = 0.707106781)) : ((i = Math.sqrt(w)), (n = D / i), (s = x / i))) : S < 0.01 ? ((n = 0.707106781), (i = 0.707106781), (s = 0)) : ((s = Math.sqrt(S)), (n = z / s), (i = x / s)), this.set(n, i, s, t), this;
    }
    let M = Math.sqrt((h - g) * (h - g) + (u - p) * (u - p) + (f - d) * (f - d));
    return Math.abs(M) < 0.001 && (M = 1), (this.x = (h - g) / M), (this.y = (u - p) / M), (this.z = (f - d) / M), (this.w = Math.acos((c + m + _ - 1) / 2)), this;
  }
  min(e) {
    return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z)), (this.w = Math.min(this.w, e.w)), this;
  }
  max(e) {
    return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z)), (this.w = Math.max(this.w, e.w)), this;
  }
  clamp(e, t) {
    return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), (this.z = Math.max(e.z, Math.min(t.z, this.z))), (this.w = Math.max(e.w, Math.min(t.w, this.w))), this;
  }
  clampScalar(e, t) {
    return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), (this.z = Math.max(e, Math.min(t, this.z))), (this.w = Math.max(e, Math.min(t, this.w))), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), (this.w = Math.floor(this.w)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), (this.w = Math.ceil(this.w)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), (this.w = Math.round(this.w)), this;
  }
  roundToZero() {
    return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)), (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), (this.z += (e.z - this.z) * t), (this.w += (e.w - this.w) * t), this;
  }
  lerpVectors(e, t, n) {
    return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), (this.z = e.z + (t.z - e.z) * n), (this.w = e.w + (t.w - e.w) * n), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), (this.w = e[t + 3]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), (e[t + 3] = this.w), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), (this.w = e.getW(t)), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), (this.w = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class $n extends ti {
  constructor(e, t, n = {}) {
    super(), (this.isWebGLRenderTarget = !0), (this.width = e), (this.height = t), (this.depth = 1), (this.scissor = new Ge(0, 0, e, t)), (this.scissorTest = !1), (this.viewport = new Ge(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new At(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding)), (this.texture.isRenderTargetTexture = !0), (this.texture.flipY = !1), (this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1), (this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null), (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : It), (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0), (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1), (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null), (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && ((this.width = e), (this.height = t), (this.depth = n), (this.texture.image.width = e), (this.texture.image.height = t), (this.texture.image.depth = n), this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width), (this.height = e.height), (this.depth = e.depth), this.viewport.copy(e.viewport), (this.texture = e.texture.clone()), (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (this.texture.source = new lc(t)), (this.depthBuffer = e.depthBuffer), (this.stencilBuffer = e.stencilBuffer), e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), (this.samples = e.samples), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class cc extends At {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), (this.isDataArrayTexture = !0), (this.image = { data: e, width: t, height: n, depth: i }), (this.magFilter = St), (this.minFilter = St), (this.wrapR = Vt), (this.generateMipmaps = !1), (this.flipY = !1), (this.unpackAlignment = 1);
  }
}
class id extends At {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), (this.isData3DTexture = !0), (this.image = { data: e, width: t, height: n, depth: i }), (this.magFilter = St), (this.minFilter = St), (this.wrapR = Vt), (this.generateMipmaps = !1), (this.flipY = !1), (this.unpackAlignment = 1);
  }
}
class Jn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0), (this._x = e), (this._y = t), (this._z = n), (this._w = i);
  }
  static slerpFlat(e, t, n, i, s, o, a) {
    let l = n[i + 0],
      c = n[i + 1],
      d = n[i + 2],
      u = n[i + 3];
    const f = s[o + 0],
      m = s[o + 1],
      g = s[o + 2],
      p = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = d), (e[t + 3] = u);
      return;
    }
    if (a === 1) {
      (e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = p);
      return;
    }
    if (u !== p || l !== f || c !== m || d !== g) {
      let h = 1 - a;
      const _ = l * f + c * m + d * g + u * p,
        M = _ >= 0 ? 1 : -1,
        E = 1 - _ * _;
      if (E > Number.EPSILON) {
        const S = Math.sqrt(E),
          D = Math.atan2(S, _ * M);
        (h = Math.sin(h * D) / S), (a = Math.sin(a * D) / S);
      }
      const w = a * M;
      if (((l = l * h + f * w), (c = c * h + m * w), (d = d * h + g * w), (u = u * h + p * w), h === 1 - a)) {
        const S = 1 / Math.sqrt(l * l + c * c + d * d + u * u);
        (l *= S), (c *= S), (d *= S), (u *= S);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = d), (e[t + 3] = u);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const a = n[i],
      l = n[i + 1],
      c = n[i + 2],
      d = n[i + 3],
      u = s[o],
      f = s[o + 1],
      m = s[o + 2],
      g = s[o + 3];
    return (e[t] = a * g + d * u + l * m - c * f), (e[t + 1] = l * g + d * f + c * u - a * m), (e[t + 2] = c * g + d * m + a * f - l * u), (e[t + 3] = d * g - a * u - l * f - c * m), e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (this._x = e), (this._y = t), (this._z = n), (this._w = i), this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (this._x = e.x), (this._y = e.y), (this._z = e.z), (this._w = e.w), this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(n / 2),
      d = a(i / 2),
      u = a(s / 2),
      f = l(n / 2),
      m = l(i / 2),
      g = l(s / 2);
    switch (o) {
      case "XYZ":
        (this._x = f * d * u + c * m * g), (this._y = c * m * u - f * d * g), (this._z = c * d * g + f * m * u), (this._w = c * d * u - f * m * g);
        break;
      case "YXZ":
        (this._x = f * d * u + c * m * g), (this._y = c * m * u - f * d * g), (this._z = c * d * g - f * m * u), (this._w = c * d * u + f * m * g);
        break;
      case "ZXY":
        (this._x = f * d * u - c * m * g), (this._y = c * m * u + f * d * g), (this._z = c * d * g + f * m * u), (this._w = c * d * u - f * m * g);
        break;
      case "ZYX":
        (this._x = f * d * u - c * m * g), (this._y = c * m * u + f * d * g), (this._z = c * d * g - f * m * u), (this._w = c * d * u + f * m * g);
        break;
      case "YZX":
        (this._x = f * d * u + c * m * g), (this._y = c * m * u + f * d * g), (this._z = c * d * g - f * m * u), (this._w = c * d * u - f * m * g);
        break;
      case "XZY":
        (this._x = f * d * u - c * m * g), (this._y = c * m * u - f * d * g), (this._z = c * d * g + f * m * u), (this._w = c * d * u + f * m * g);
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (this._x = e.x * i), (this._y = e.y * i), (this._z = e.z * i), (this._w = Math.cos(n)), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      d = t[6],
      u = t[10],
      f = n + a + u;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / m), (this._x = (d - l) * m), (this._y = (s - c) * m), (this._z = (o - i) * m);
    } else if (n > a && n > u) {
      const m = 2 * Math.sqrt(1 + n - a - u);
      (this._w = (d - l) / m), (this._x = 0.25 * m), (this._y = (i + o) / m), (this._z = (s + c) / m);
    } else if (a > u) {
      const m = 2 * Math.sqrt(1 + a - n - u);
      (this._w = (s - c) / m), (this._x = (i + o) / m), (this._y = 0.25 * m), (this._z = (l + d) / m);
    } else {
      const m = 2 * Math.sqrt(1 + u - n - a);
      (this._w = (o - i) / m), (this._x = (s + c) / m), (this._y = (l + d) / m), (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? ((n = 0), Math.abs(e.x) > Math.abs(e.z) ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n)) : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n))) : ((this._x = e.y * t.z - e.z * t.y), (this._y = e.z * t.x - e.x * t.z), (this._z = e.x * t.y - e.y * t.x), (this._w = n)), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(gt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1)) : ((e = 1 / e), (this._x = this._x * e), (this._y = this._y * e), (this._z = this._z * e), (this._w = this._w * e)), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      d = t._w;
    return (this._x = n * d + o * a + i * c - s * l), (this._y = i * d + o * l + s * a - n * c), (this._z = s * d + o * c + n * l - i * a), (this._w = o * d - n * a - i * l - s * c), this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + i * e._y + s * e._z;
    if ((a < 0 ? ((this._w = -e._w), (this._x = -e._x), (this._y = -e._y), (this._z = -e._z), (a = -a)) : this.copy(e), a >= 1)) return (this._w = o), (this._x = n), (this._y = i), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (this._w = m * o + t * this._w), (this._x = m * n + t * this._x), (this._y = m * i + t * this._y), (this._z = m * s + t * this._z), this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l),
      d = Math.atan2(c, a),
      u = Math.sin((1 - t) * d) / c,
      f = Math.sin(t * d) / c;
    return (this._w = o * u + this._w * f), (this._x = n * u + this._x * f), (this._y = i * u + this._y * f), (this._z = s * u + this._z * f), this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return (this._x = e[t]), (this._y = e[t + 1]), (this._z = e[t + 2]), (this._w = e[t + 3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._w), e;
  }
  fromBufferAttribute(e, t) {
    return (this._x = e.getX(t)), (this._y = e.getY(t)), (this._z = e.getZ(t)), (this._w = e.getW(t)), this;
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class C {
  constructor(e = 0, t = 0, n = 0) {
    (C.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), (this.x = e), (this.y = t), (this.z = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Oo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Oo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (this.x = s[0] * t + s[3] * n + s[6] * i), (this.y = s[1] * t + s[4] * n + s[7] * i), (this.z = s[2] * t + s[5] * n + s[8] * i), this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o), (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o), (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o), this;
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = l * t + o * i - a * n,
      d = l * n + a * t - s * i,
      u = l * i + s * n - o * t,
      f = -s * t - o * n - a * i;
    return (this.x = c * l + f * -s + d * -a - u * -o), (this.y = d * l + f * -o + u * -s - c * -a), (this.z = u * l + f * -a + c * -o - d * -s), this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (this.x = s[0] * t + s[4] * n + s[8] * i), (this.y = s[1] * t + s[5] * n + s[9] * i), (this.z = s[2] * t + s[6] * n + s[10] * i), this.normalize();
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z)), this;
  }
  max(e) {
    return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z)), this;
  }
  clamp(e, t) {
    return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), (this.z = Math.max(e.z, Math.min(t.z, this.z))), this;
  }
  clampScalar(e, t) {
    return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), (this.z = Math.max(e, Math.min(t, this.z))), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this;
  }
  roundToZero() {
    return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), (this.z += (e.z - this.z) * t), this;
  }
  lerpVectors(e, t, n) {
    return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), (this.z = e.z + (t.z - e.z) * n), this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (this.x = i * l - s * a), (this.y = s * o - n * l), (this.z = n * a - i * o), this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ts.copy(this).projectOnVector(e), this.sub(Ts);
  }
  reflect(e) {
    return this.sub(Ts.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(gt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (this.x = i * Math.sin(n)), (this.y = Math.cos(t) * e), (this.z = i * Math.cos(n)), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ts = new C(),
  Oo = new Jn();
class Kn {
  constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const d = e[l],
        u = e[l + 1],
        f = e[l + 2];
      d < t && (t = d), u < n && (n = u), f < i && (i = f), d > s && (s = d), u > o && (o = u), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(s, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const d = e.getX(l),
        u = e.getY(l),
        f = e.getZ(l);
      d < t && (t = d), u < n && (n = u), f < i && (i = f), d > s && (s = d), u > o && (o = u), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(s, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = On.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let o = 0, a = s.count; o < a; o++) On.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(On);
      } else n.boundingBox === null && n.computeBoundingBox(), Ps.copy(n.boundingBox), Ps.applyMatrix4(e.matrixWorld), this.union(Ps);
    const i = e.children;
    for (let s = 0, o = i.length; s < o; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, On), On.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x)) : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)), e.normal.y > 0 ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y)) : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)), e.normal.z > 0 ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z)) : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Ji), Pr.subVectors(this.max, Ji), hi.subVectors(e.a, Ji), fi.subVectors(e.b, Ji), pi.subVectors(e.c, Ji), yn.subVectors(fi, hi), bn.subVectors(pi, fi), zn.subVectors(hi, pi);
    let t = [0, -yn.z, yn.y, 0, -bn.z, bn.y, 0, -zn.z, zn.y, yn.z, 0, -yn.x, bn.z, 0, -bn.x, zn.z, 0, -zn.x, -yn.y, yn.x, 0, -bn.y, bn.x, 0, -zn.y, zn.x, 0];
    return !Rs(t, hi, fi, pi, Pr) || ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Rs(t, hi, fi, pi, Pr)) ? !1 : (Rr.crossVectors(yn, bn), (t = [Rr.x, Rr.y, Rr.z]), Rs(t, hi, fi, pi, Pr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return On.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), (e.radius = this.getSize(On).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(cn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const cn = [new C(), new C(), new C(), new C(), new C(), new C(), new C(), new C()],
  On = new C(),
  Ps = new Kn(),
  hi = new C(),
  fi = new C(),
  pi = new C(),
  yn = new C(),
  bn = new C(),
  zn = new C(),
  Ji = new C(),
  Pr = new C(),
  Rr = new C(),
  Un = new C();
function Rs(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    Un.fromArray(r, s);
    const a = i.x * Math.abs(Un.x) + i.y * Math.abs(Un.y) + i.z * Math.abs(Un.z),
      l = e.dot(Un),
      c = t.dot(Un),
      d = n.dot(Un);
    if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > a) return !1;
  }
  return !0;
}
const rd = new Kn(),
  zo = new C(),
  Nr = new C(),
  Ns = new C();
class Ha {
  constructor(e = new C(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : rd.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++) i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), (this.radius = this.radius * e.getMaxScaleOnAxis()), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    Ns.subVectors(e, this.center);
    const t = Ns.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.add(Ns.multiplyScalar(i / n)), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return this.center.equals(e.center) === !0 ? Nr.set(0, 0, 1).multiplyScalar(e.radius) : Nr.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(zo.copy(e.center).add(Nr)), this.expandByPoint(zo.copy(e.center).sub(Nr)), this;
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const un = new C(),
  Is = new C(),
  Ir = new C(),
  Mn = new C(),
  Fs = new C(),
  Fr = new C(),
  Os = new C();
class uc {
  constructor(e = new C(), t = new C(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, un)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = un.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (un.copy(this.direction).multiplyScalar(t).add(this.origin), un.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Is.copy(e).add(t).multiplyScalar(0.5), Ir.copy(t).sub(e).normalize(), Mn.copy(this.origin).sub(Is);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Ir),
      a = Mn.dot(this.direction),
      l = -Mn.dot(Ir),
      c = Mn.lengthSq(),
      d = Math.abs(1 - o * o);
    let u, f, m, g;
    if (d > 0)
      if (((u = o * l - a), (f = o * a - l), (g = s * d), u >= 0))
        if (f >= -g)
          if (f <= g) {
            const p = 1 / d;
            (u *= p), (f *= p), (m = u * (u + o * f + 2 * a) + f * (o * u + f + 2 * l) + c);
          } else (f = s), (u = Math.max(0, -(o * f + a))), (m = -u * u + f * (f + 2 * l) + c);
        else (f = -s), (u = Math.max(0, -(o * f + a))), (m = -u * u + f * (f + 2 * l) + c);
      else f <= -g ? ((u = Math.max(0, -(-o * s + a))), (f = u > 0 ? -s : Math.min(Math.max(-s, -l), s)), (m = -u * u + f * (f + 2 * l) + c)) : f <= g ? ((u = 0), (f = Math.min(Math.max(-s, -l), s)), (m = f * (f + 2 * l) + c)) : ((u = Math.max(0, -(o * s + a))), (f = u > 0 ? s : Math.min(Math.max(-s, -l), s)), (m = -u * u + f * (f + 2 * l) + c));
    else (f = o > 0 ? -s : s), (u = Math.max(0, -(o * f + a))), (m = -u * u + f * (f + 2 * l) + c);
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(Ir).multiplyScalar(f).add(Is), m;
  }
  intersectSphere(e, t) {
    un.subVectors(e.center, this.origin);
    const n = un.dot(this.direction),
      i = un.dot(un) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const o = Math.sqrt(s - i),
      a = n - o,
      l = n + o;
    return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, a, l;
    const c = 1 / this.direction.x,
      d = 1 / this.direction.y,
      u = 1 / this.direction.z,
      f = this.origin;
    return c >= 0 ? ((n = (e.min.x - f.x) * c), (i = (e.max.x - f.x) * c)) : ((n = (e.max.x - f.x) * c), (i = (e.min.x - f.x) * c)), d >= 0 ? ((s = (e.min.y - f.y) * d), (o = (e.max.y - f.y) * d)) : ((s = (e.max.y - f.y) * d), (o = (e.min.y - f.y) * d)), n > o || s > i || ((s > n || n !== n) && (n = s), (o < i || i !== i) && (i = o), u >= 0 ? ((a = (e.min.z - f.z) * u), (l = (e.max.z - f.z) * u)) : ((a = (e.max.z - f.z) * u), (l = (e.min.z - f.z) * u)), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, un) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Fs.subVectors(t, e), Fr.subVectors(n, e), Os.crossVectors(Fs, Fr);
    let o = this.direction.dot(Os),
      a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Mn.subVectors(this.origin, e);
    const l = a * this.direction.dot(Fr.crossVectors(Mn, Fr));
    if (l < 0) return null;
    const c = a * this.direction.dot(Fs.cross(Mn));
    if (c < 0 || l + c > o) return null;
    const d = -a * Mn.dot(Os);
    return d < 0 ? null : this.at(d / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class We {
  constructor() {
    (We.prototype.isMatrix4 = !0), (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, o, a, l, c, d, u, f, m, g, p, h) {
    const _ = this.elements;
    return (_[0] = e), (_[4] = t), (_[8] = n), (_[12] = i), (_[1] = s), (_[5] = o), (_[9] = a), (_[13] = l), (_[2] = c), (_[6] = d), (_[10] = u), (_[14] = f), (_[3] = m), (_[7] = g), (_[11] = p), (_[15] = h), this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new We().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = n[4]), (t[5] = n[5]), (t[6] = n[6]), (t[7] = n[7]), (t[8] = n[8]), (t[9] = n[9]), (t[10] = n[10]), (t[11] = n[11]), (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), (t[15] = n[15]), this;
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / mi.setFromMatrixColumn(e, 0).length(),
      s = 1 / mi.setFromMatrixColumn(e, 1).length(),
      o = 1 / mi.setFromMatrixColumn(e, 2).length();
    return (t[0] = n[0] * i), (t[1] = n[1] * i), (t[2] = n[2] * i), (t[3] = 0), (t[4] = n[4] * s), (t[5] = n[5] * s), (t[6] = n[6] * s), (t[7] = 0), (t[8] = n[8] * o), (t[9] = n[9] * o), (t[10] = n[10] * o), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      d = Math.cos(s),
      u = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * d,
        m = o * u,
        g = a * d,
        p = a * u;
      (t[0] = l * d), (t[4] = -l * u), (t[8] = c), (t[1] = m + g * c), (t[5] = f - p * c), (t[9] = -a * l), (t[2] = p - f * c), (t[6] = g + m * c), (t[10] = o * l);
    } else if (e.order === "YXZ") {
      const f = l * d,
        m = l * u,
        g = c * d,
        p = c * u;
      (t[0] = f + p * a), (t[4] = g * a - m), (t[8] = o * c), (t[1] = o * u), (t[5] = o * d), (t[9] = -a), (t[2] = m * a - g), (t[6] = p + f * a), (t[10] = o * l);
    } else if (e.order === "ZXY") {
      const f = l * d,
        m = l * u,
        g = c * d,
        p = c * u;
      (t[0] = f - p * a), (t[4] = -o * u), (t[8] = g + m * a), (t[1] = m + g * a), (t[5] = o * d), (t[9] = p - f * a), (t[2] = -o * c), (t[6] = a), (t[10] = o * l);
    } else if (e.order === "ZYX") {
      const f = o * d,
        m = o * u,
        g = a * d,
        p = a * u;
      (t[0] = l * d), (t[4] = g * c - m), (t[8] = f * c + p), (t[1] = l * u), (t[5] = p * c + f), (t[9] = m * c - g), (t[2] = -c), (t[6] = a * l), (t[10] = o * l);
    } else if (e.order === "YZX") {
      const f = o * l,
        m = o * c,
        g = a * l,
        p = a * c;
      (t[0] = l * d), (t[4] = p - f * u), (t[8] = g * u + m), (t[1] = u), (t[5] = o * d), (t[9] = -a * d), (t[2] = -c * d), (t[6] = m * u + g), (t[10] = f - p * u);
    } else if (e.order === "XZY") {
      const f = o * l,
        m = o * c,
        g = a * l,
        p = a * c;
      (t[0] = l * d), (t[4] = -u), (t[8] = c * d), (t[1] = f * u + p), (t[5] = o * d), (t[9] = m * u - g), (t[2] = g * u - m), (t[6] = a * d), (t[10] = p * u + f);
    }
    return (t[3] = 0), (t[7] = 0), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(sd, e, ad);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), wn.crossVectors(n, wt), wn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? (wt.x += 1e-4) : (wt.z += 1e-4), wt.normalize(), wn.crossVectors(n, wt)), wn.normalize(), Or.crossVectors(wt, wn), (i[0] = wn.x), (i[4] = Or.x), (i[8] = wt.x), (i[1] = wn.y), (i[5] = Or.y), (i[9] = wt.y), (i[2] = wn.z), (i[6] = Or.z), (i[10] = wt.z), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      o = n[0],
      a = n[4],
      l = n[8],
      c = n[12],
      d = n[1],
      u = n[5],
      f = n[9],
      m = n[13],
      g = n[2],
      p = n[6],
      h = n[10],
      _ = n[14],
      M = n[3],
      E = n[7],
      w = n[11],
      S = n[15],
      D = i[0],
      z = i[4],
      x = i[8],
      A = i[12],
      O = i[1],
      Z = i[5],
      ue = i[9],
      B = i[13],
      R = i[2],
      q = i[6],
      $ = i[10],
      J = i[14],
      W = i[3],
      N = i[7],
      U = i[11],
      te = i[15];
    return (s[0] = o * D + a * O + l * R + c * W), (s[4] = o * z + a * Z + l * q + c * N), (s[8] = o * x + a * ue + l * $ + c * U), (s[12] = o * A + a * B + l * J + c * te), (s[1] = d * D + u * O + f * R + m * W), (s[5] = d * z + u * Z + f * q + m * N), (s[9] = d * x + u * ue + f * $ + m * U), (s[13] = d * A + u * B + f * J + m * te), (s[2] = g * D + p * O + h * R + _ * W), (s[6] = g * z + p * Z + h * q + _ * N), (s[10] = g * x + p * ue + h * $ + _ * U), (s[14] = g * A + p * B + h * J + _ * te), (s[3] = M * D + E * O + w * R + S * W), (s[7] = M * z + E * Z + w * q + S * N), (s[11] = M * x + E * ue + w * $ + S * U), (s[15] = M * A + E * B + w * J + S * te), this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (t[0] *= e), (t[4] *= e), (t[8] *= e), (t[12] *= e), (t[1] *= e), (t[5] *= e), (t[9] *= e), (t[13] *= e), (t[2] *= e), (t[6] *= e), (t[10] *= e), (t[14] *= e), (t[3] *= e), (t[7] *= e), (t[11] *= e), (t[15] *= e), this;
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      d = e[2],
      u = e[6],
      f = e[10],
      m = e[14],
      g = e[3],
      p = e[7],
      h = e[11],
      _ = e[15];
    return g * (+s * l * u - i * c * u - s * a * f + n * c * f + i * a * m - n * l * m) + p * (+t * l * m - t * c * f + s * o * f - i * o * m + i * c * d - s * l * d) + h * (+t * c * u - t * a * m - s * o * u + n * o * m + s * a * d - n * c * d) + _ * (-i * a * d - t * l * u + t * a * f + i * o * u - n * o * f + n * l * d);
  }
  transpose() {
    const e = this.elements;
    let t;
    return (t = e[1]), (e[1] = e[4]), (e[4] = t), (t = e[2]), (e[2] = e[8]), (e[8] = t), (t = e[6]), (e[6] = e[9]), (e[9] = t), (t = e[3]), (e[3] = e[12]), (e[12] = t), (t = e[7]), (e[7] = e[13]), (e[13] = t), (t = e[11]), (e[11] = e[14]), (e[14] = t), this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z)) : ((i[12] = e), (i[13] = t), (i[14] = n)), this;
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      d = e[8],
      u = e[9],
      f = e[10],
      m = e[11],
      g = e[12],
      p = e[13],
      h = e[14],
      _ = e[15],
      M = u * h * c - p * f * c + p * l * m - a * h * m - u * l * _ + a * f * _,
      E = g * f * c - d * h * c - g * l * m + o * h * m + d * l * _ - o * f * _,
      w = d * p * c - g * u * c + g * a * m - o * p * m - d * a * _ + o * u * _,
      S = g * u * l - d * p * l - g * a * f + o * p * f + d * a * h - o * u * h,
      D = t * M + n * E + i * w + s * S;
    if (D === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const z = 1 / D;
    return (e[0] = M * z), (e[1] = (p * f * s - u * h * s - p * i * m + n * h * m + u * i * _ - n * f * _) * z), (e[2] = (a * h * s - p * l * s + p * i * c - n * h * c - a * i * _ + n * l * _) * z), (e[3] = (u * l * s - a * f * s - u * i * c + n * f * c + a * i * m - n * l * m) * z), (e[4] = E * z), (e[5] = (d * h * s - g * f * s + g * i * m - t * h * m - d * i * _ + t * f * _) * z), (e[6] = (g * l * s - o * h * s - g * i * c + t * h * c + o * i * _ - t * l * _) * z), (e[7] = (o * f * s - d * l * s + d * i * c - t * f * c - o * i * m + t * l * m) * z), (e[8] = w * z), (e[9] = (g * u * s - d * p * s - g * n * m + t * p * m + d * n * _ - t * u * _) * z), (e[10] = (o * p * s - g * a * s + g * n * c - t * p * c - o * n * _ + t * a * _) * z), (e[11] = (d * a * s - o * u * s - d * n * c + t * u * c + o * n * m - t * a * m) * z), (e[12] = S * z), (e[13] = (d * p * i - g * u * i + g * n * f - t * p * f - d * n * h + t * u * h) * z), (e[14] = (g * a * i - o * p * i - g * n * l + t * p * l + o * n * h - t * a * h) * z), (e[15] = (o * u * i - d * a * i + d * n * l - t * u * l - o * n * f + t * a * f) * z), this;
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (t[0] *= n), (t[4] *= i), (t[8] *= s), (t[1] *= n), (t[5] *= i), (t[9] *= s), (t[2] *= n), (t[6] *= i), (t[10] *= s), (t[3] *= n), (t[7] *= i), (t[11] *= s), this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      d = s * a;
    return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, d * a + n, d * l - i * o, 0, c * l - i * a, d * l + i * o, s * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      d = o + o,
      u = a + a,
      f = s * c,
      m = s * d,
      g = s * u,
      p = o * d,
      h = o * u,
      _ = a * u,
      M = l * c,
      E = l * d,
      w = l * u,
      S = n.x,
      D = n.y,
      z = n.z;
    return (i[0] = (1 - (p + _)) * S), (i[1] = (m + w) * S), (i[2] = (g - E) * S), (i[3] = 0), (i[4] = (m - w) * D), (i[5] = (1 - (f + _)) * D), (i[6] = (h + M) * D), (i[7] = 0), (i[8] = (g + E) * z), (i[9] = (h - M) * z), (i[10] = (1 - (f + p)) * z), (i[11] = 0), (i[12] = e.x), (i[13] = e.y), (i[14] = e.z), (i[15] = 1), this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = mi.set(i[0], i[1], i[2]).length();
    const o = mi.set(i[4], i[5], i[6]).length(),
      a = mi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), (e.x = i[12]), (e.y = i[13]), (e.z = i[14]), Bt.copy(this);
    const c = 1 / s,
      d = 1 / o,
      u = 1 / a;
    return (Bt.elements[0] *= c), (Bt.elements[1] *= c), (Bt.elements[2] *= c), (Bt.elements[4] *= d), (Bt.elements[5] *= d), (Bt.elements[6] *= d), (Bt.elements[8] *= u), (Bt.elements[9] *= u), (Bt.elements[10] *= u), t.setFromRotationMatrix(Bt), (n.x = s), (n.y = o), (n.z = a), this;
  }
  makePerspective(e, t, n, i, s, o) {
    const a = this.elements,
      l = (2 * s) / (t - e),
      c = (2 * s) / (n - i),
      d = (t + e) / (t - e),
      u = (n + i) / (n - i),
      f = -(o + s) / (o - s),
      m = (-2 * o * s) / (o - s);
    return (a[0] = l), (a[4] = 0), (a[8] = d), (a[12] = 0), (a[1] = 0), (a[5] = c), (a[9] = u), (a[13] = 0), (a[2] = 0), (a[6] = 0), (a[10] = f), (a[14] = m), (a[3] = 0), (a[7] = 0), (a[11] = -1), (a[15] = 0), this;
  }
  makeOrthographic(e, t, n, i, s, o) {
    const a = this.elements,
      l = 1 / (t - e),
      c = 1 / (n - i),
      d = 1 / (o - s),
      u = (t + e) * l,
      f = (n + i) * c,
      m = (o + s) * d;
    return (a[0] = 2 * l), (a[4] = 0), (a[8] = 0), (a[12] = -u), (a[1] = 0), (a[5] = 2 * c), (a[9] = 0), (a[13] = -f), (a[2] = 0), (a[6] = 0), (a[10] = -2 * d), (a[14] = -m), (a[3] = 0), (a[7] = 0), (a[11] = 0), (a[15] = 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (e[t] = n[0]), (e[t + 1] = n[1]), (e[t + 2] = n[2]), (e[t + 3] = n[3]), (e[t + 4] = n[4]), (e[t + 5] = n[5]), (e[t + 6] = n[6]), (e[t + 7] = n[7]), (e[t + 8] = n[8]), (e[t + 9] = n[9]), (e[t + 10] = n[10]), (e[t + 11] = n[11]), (e[t + 12] = n[12]), (e[t + 13] = n[13]), (e[t + 14] = n[14]), (e[t + 15] = n[15]), e;
  }
}
const mi = new C(),
  Bt = new We(),
  sd = new C(0, 0, 0),
  ad = new C(1, 1, 1),
  wn = new C(),
  Or = new C(),
  wt = new C(),
  Uo = new We(),
  Bo = new Jn();
class vr {
  constructor(e = 0, t = 0, n = 0, i = vr.DefaultOrder) {
    (this.isEuler = !0), (this._x = e), (this._y = t), (this._z = n), (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (this._x = e), (this._y = t), (this._z = n), (this._order = i), this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (this._x = e._x), (this._y = e._y), (this._z = e._z), (this._order = e._order), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      o = i[4],
      a = i[8],
      l = i[1],
      c = i[5],
      d = i[9],
      u = i[2],
      f = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(gt(a, -1, 1))), Math.abs(a) < 0.9999999 ? ((this._x = Math.atan2(-d, m)), (this._z = Math.atan2(-o, s))) : ((this._x = Math.atan2(f, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-gt(d, -1, 1))), Math.abs(d) < 0.9999999 ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c))) : ((this._y = Math.atan2(-u, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(gt(f, -1, 1))), Math.abs(f) < 0.9999999 ? ((this._y = Math.atan2(-u, m)), (this._z = Math.atan2(-o, c))) : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-gt(u, -1, 1))), Math.abs(u) < 0.9999999 ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(l, s))) : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(gt(l, -1, 1))), Math.abs(l) < 0.9999999 ? ((this._x = Math.atan2(-d, c)), (this._y = Math.atan2(-u, s))) : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-gt(o, -1, 1))), Math.abs(o) < 0.9999999 ? ((this._x = Math.atan2(f, c)), (this._y = Math.atan2(a, s))) : ((this._x = Math.atan2(-d, m)), (this._y = 0));
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Uo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Uo, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Bo.setFromEuler(this), this.setFromQuaternion(Bo, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return (this._x = e[0]), (this._y = e[1]), (this._z = e[2]), e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._order), e;
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
vr.DefaultOrder = "XYZ";
vr.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ga {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let od = 0;
const ko = new C(),
  gi = new Jn(),
  dn = new We(),
  zr = new C(),
  Ki = new C(),
  ld = new C(),
  cd = new Jn(),
  Vo = new C(1, 0, 0),
  Ho = new C(0, 1, 0),
  Go = new C(0, 0, 1),
  ud = { type: "added" },
  Wo = { type: "removed" };
class ht extends ti {
  constructor() {
    super(), (this.isObject3D = !0), Object.defineProperty(this, "id", { value: od++ }), (this.uuid = vn()), (this.name = ""), (this.type = "Object3D"), (this.parent = null), (this.children = []), (this.up = ht.DefaultUp.clone());
    const e = new C(),
      t = new vr(),
      n = new Jn(),
      i = new C(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new We() }, normalMatrix: { value: new Ft() } }), (this.matrix = new We()), (this.matrixWorld = new We()), (this.matrixAutoUpdate = ht.DefaultMatrixAutoUpdate), (this.matrixWorldNeedsUpdate = !1), (this.matrixWorldAutoUpdate = ht.DefaultMatrixWorldAutoUpdate), (this.layers = new Ga()), (this.visible = !0), (this.castShadow = !1), (this.receiveShadow = !1), (this.frustumCulled = !0), (this.renderOrder = 0), (this.animations = []), (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return gi.setFromAxisAngle(e, t), this.quaternion.multiply(gi), this;
  }
  rotateOnWorldAxis(e, t) {
    return gi.setFromAxisAngle(e, t), this.quaternion.premultiply(gi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Vo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ho, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Go, e);
  }
  translateOnAxis(e, t) {
    return ko.copy(e).applyQuaternion(this.quaternion), this.position.add(ko.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Vo, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ho, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Go, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(dn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? zr.copy(e) : zr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Ki.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? dn.lookAt(Ki, zr, this.up) : dn.lookAt(zr, Ki, this.up), this.quaternion.setFromRotationMatrix(dn), i && (dn.extractRotation(i.matrixWorld), gi.setFromRotationMatrix(dn), this.quaternion.premultiply(gi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), (e.parent = this), this.children.push(e), e.dispatchEvent(ud)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Wo)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Wo);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), dn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), dn.multiply(e.parent.matrixWorld)), e.applyMatrix4(dn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ki, e, ld), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ki, cd, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), (this.matrixWorldNeedsUpdate = !1), (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if ((e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0)) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) {
        const a = i[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t && ((e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }), (n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }));
    const i = {};
    (i.uuid = this.uuid), (i.type = this.type), this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), (i.layers = this.layers.mask), (i.matrix = this.matrix.toArray()), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && ((i.type = "InstancedMesh"), (i.count = this.count), (i.instanceMatrix = this.instanceMatrix.toJSON()), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? (i.background = this.background.toJSON()) : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, d = l.length; c < d; c++) {
            const u = l[c];
            s(e.shapes, u);
          }
        else s(e.shapes, l);
      }
    }
    if ((this.isSkinnedMesh && ((i.bindMode = this.bindMode), (i.bindMatrix = this.bindMatrix.toArray()), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))), this.material !== void 0))
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++) a.push(s(e.materials, this.material[l]));
        i.material = a;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        d = o(e.images),
        u = o(e.shapes),
        f = o(e.skeletons),
        m = o(e.animations),
        g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), d.length > 0 && (n.images = d), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const d = a[c];
        delete d.metadata, l.push(d);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (((this.name = e.name), this.up.copy(e.up), this.position.copy(e.position), (this.rotation.order = e.rotation.order), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), (this.matrixAutoUpdate = e.matrixAutoUpdate), (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate), (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate), (this.layers.mask = e.layers.mask), (this.visible = e.visible), (this.castShadow = e.castShadow), (this.receiveShadow = e.receiveShadow), (this.frustumCulled = e.frustumCulled), (this.renderOrder = e.renderOrder), (this.userData = JSON.parse(JSON.stringify(e.userData))), t === !0))
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ht.DefaultUp = new C(0, 1, 0);
ht.DefaultMatrixAutoUpdate = !0;
ht.DefaultMatrixWorldAutoUpdate = !0;
const kt = new C(),
  hn = new C(),
  zs = new C(),
  fn = new C(),
  _i = new C(),
  vi = new C(),
  Xo = new C(),
  Us = new C(),
  Bs = new C(),
  ks = new C();
class en {
  constructor(e = new C(), t = new C(), n = new C()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), kt.subVectors(e, t), i.cross(kt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    kt.subVectors(i, t), hn.subVectors(n, t), zs.subVectors(e, t);
    const o = kt.dot(kt),
      a = kt.dot(hn),
      l = kt.dot(zs),
      c = hn.dot(hn),
      d = hn.dot(zs),
      u = o * c - a * a;
    if (u === 0) return s.set(-2, -1, -1);
    const f = 1 / u,
      m = (c * l - a * d) * f,
      g = (o * d - a * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, fn), fn.x >= 0 && fn.y >= 0 && fn.x + fn.y <= 1;
  }
  static getUV(e, t, n, i, s, o, a, l) {
    return this.getBarycoord(e, t, n, i, fn), l.set(0, 0), l.addScaledVector(s, fn.x), l.addScaledVector(o, fn.y), l.addScaledVector(a, fn.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return kt.subVectors(n, t), hn.subVectors(e, t), kt.cross(hn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return kt.subVectors(this.c, this.b), hn.subVectors(this.a, this.b), kt.cross(hn).length() * 0.5;
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return en.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return en.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return en.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return en.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return en.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let o, a;
    _i.subVectors(i, n), vi.subVectors(s, n), Us.subVectors(e, n);
    const l = _i.dot(Us),
      c = vi.dot(Us);
    if (l <= 0 && c <= 0) return t.copy(n);
    Bs.subVectors(e, i);
    const d = _i.dot(Bs),
      u = vi.dot(Bs);
    if (d >= 0 && u <= d) return t.copy(i);
    const f = l * u - d * c;
    if (f <= 0 && l >= 0 && d <= 0) return (o = l / (l - d)), t.copy(n).addScaledVector(_i, o);
    ks.subVectors(e, s);
    const m = _i.dot(ks),
      g = vi.dot(ks);
    if (g >= 0 && m <= g) return t.copy(s);
    const p = m * c - l * g;
    if (p <= 0 && c >= 0 && g <= 0) return (a = c / (c - g)), t.copy(n).addScaledVector(vi, a);
    const h = d * g - m * u;
    if (h <= 0 && u - d >= 0 && m - g >= 0) return Xo.subVectors(s, i), (a = (u - d) / (u - d + (m - g))), t.copy(i).addScaledVector(Xo, a);
    const _ = 1 / (h + p + f);
    return (o = p * _), (a = f * _), t.copy(n).addScaledVector(_i, o).addScaledVector(vi, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let dd = 0;
class Wi extends ti {
  constructor() {
    super(), (this.isMaterial = !0), Object.defineProperty(this, "id", { value: dd++ }), (this.uuid = vn()), (this.name = ""), (this.type = "Material"), (this.blending = zi), (this.side = Bi), (this.vertexColors = !1), (this.opacity = 1), (this.transparent = !1), (this.blendSrc = Ql), (this.blendDst = ec), (this.blendEquation = Ri), (this.blendSrcAlpha = null), (this.blendDstAlpha = null), (this.blendEquationAlpha = null), (this.depthFunc = Ma), (this.depthTest = !0), (this.depthWrite = !0), (this.stencilWriteMask = 255), (this.stencilFunc = ku), (this.stencilRef = 0), (this.stencilFuncMask = 255), (this.stencilFail = Es), (this.stencilZFail = Es), (this.stencilZPass = Es), (this.stencilWrite = !1), (this.clippingPlanes = null), (this.clipIntersection = !1), (this.clipShadows = !1), (this.shadowSide = null), (this.colorWrite = !0), (this.precision = null), (this.polygonOffset = !1), (this.polygonOffsetFactor = 0), (this.polygonOffsetUnits = 0), (this.dithering = !1), (this.alphaToCoverage = !1), (this.premultipliedAlpha = !1), (this.visible = !0), (this.toneMapped = !0), (this.userData = {}), (this.version = 0), (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
      this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
      this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
      this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid), (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap && this.lightMap.isTexture && ((n.lightMap = this.lightMap.toJSON(e).uuid), (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap && this.aoMap.isTexture && ((n.aoMap = this.aoMap.toJSON(e).uuid), (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap && this.bumpMap.isTexture && ((n.bumpMap = this.bumpMap.toJSON(e).uuid), (n.bumpScale = this.bumpScale)),
      this.normalMap && this.normalMap.isTexture && ((n.normalMap = this.normalMap.toJSON(e).uuid), (n.normalMapType = this.normalMapType), (n.normalScale = this.normalScale.toArray())),
      this.displacementMap && this.displacementMap.isTexture && ((n.displacementMap = this.displacementMap.toJSON(e).uuid), (n.displacementScale = this.displacementScale), (n.displacementBias = this.displacementBias)),
      this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap && this.envMap.isTexture && ((n.envMap = this.envMap.toJSON(e).uuid), this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
      this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== zi && (n.blending = this.blending),
      this.side !== Bi && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures),
        o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name), (this.blending = e.blending), (this.side = e.side), (this.vertexColors = e.vertexColors), (this.opacity = e.opacity), (this.transparent = e.transparent), (this.blendSrc = e.blendSrc), (this.blendDst = e.blendDst), (this.blendEquation = e.blendEquation), (this.blendSrcAlpha = e.blendSrcAlpha), (this.blendDstAlpha = e.blendDstAlpha), (this.blendEquationAlpha = e.blendEquationAlpha), (this.depthFunc = e.depthFunc), (this.depthTest = e.depthTest), (this.depthWrite = e.depthWrite), (this.stencilWriteMask = e.stencilWriteMask), (this.stencilFunc = e.stencilFunc), (this.stencilRef = e.stencilRef), (this.stencilFuncMask = e.stencilFuncMask), (this.stencilFail = e.stencilFail), (this.stencilZFail = e.stencilZFail), (this.stencilZPass = e.stencilZPass), (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (this.clippingPlanes = n), (this.clipIntersection = e.clipIntersection), (this.clipShadows = e.clipShadows), (this.shadowSide = e.shadowSide), (this.colorWrite = e.colorWrite), (this.precision = e.precision), (this.polygonOffset = e.polygonOffset), (this.polygonOffsetFactor = e.polygonOffsetFactor), (this.polygonOffsetUnits = e.polygonOffsetUnits), (this.dithering = e.dithering), (this.alphaTest = e.alphaTest), (this.alphaToCoverage = e.alphaToCoverage), (this.premultipliedAlpha = e.premultipliedAlpha), (this.visible = e.visible), (this.toneMapped = e.toneMapped), (this.userData = JSON.parse(JSON.stringify(e.userData))), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Ct extends Wi {
  constructor(e) {
    super(), (this.isMeshBasicMaterial = !0), (this.type = "MeshBasicMaterial"), (this.color = new De(16777215)), (this.map = null), (this.lightMap = null), (this.lightMapIntensity = 1), (this.aoMap = null), (this.aoMapIntensity = 1), (this.specularMap = null), (this.alphaMap = null), (this.envMap = null), (this.combine = tc), (this.reflectivity = 1), (this.refractionRatio = 0.98), (this.wireframe = !1), (this.wireframeLinewidth = 1), (this.wireframeLinecap = "round"), (this.wireframeLinejoin = "round"), (this.fog = !0), this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), (this.map = e.map), (this.lightMap = e.lightMap), (this.lightMapIntensity = e.lightMapIntensity), (this.aoMap = e.aoMap), (this.aoMapIntensity = e.aoMapIntensity), (this.specularMap = e.specularMap), (this.alphaMap = e.alphaMap), (this.envMap = e.envMap), (this.combine = e.combine), (this.reflectivity = e.reflectivity), (this.refractionRatio = e.refractionRatio), (this.wireframe = e.wireframe), (this.wireframeLinewidth = e.wireframeLinewidth), (this.wireframeLinecap = e.wireframeLinecap), (this.wireframeLinejoin = e.wireframeLinejoin), (this.fog = e.fog), this;
  }
}
const Je = new C(),
  Ur = new _e();
class Ht {
  constructor(e, t, n) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    (this.isBufferAttribute = !0), (this.name = ""), (this.array = e), (this.itemSize = t), (this.count = e !== void 0 ? e.length / t : 0), (this.normalized = n === !0), (this.usage = Ca), (this.updateRange = { offset: 0, count: -1 }), (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (this.name = e.name), (this.array = new e.array.constructor(e.array)), (this.itemSize = e.itemSize), (this.count = e.count), (this.normalized = e.normalized), (this.usage = e.usage), this;
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Ur.fromBufferAttribute(this, t), Ur.applyMatrix3(e), this.setXY(t, Ur.x, Ur.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.applyMatrix3(e), this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.applyMatrix4(e), this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.applyNormalMatrix(e), this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) Je.fromBufferAttribute(this, t), Je.transformDirection(e), this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Be(t, this.array)), (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Be(t, this.array)), (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Be(t, this.array)), (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Be(t, this.array)), (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, n) {
    return (e *= this.itemSize), this.normalized && ((t = Be(t, this.array)), (n = Be(n, this.array))), (this.array[e + 0] = t), (this.array[e + 1] = n), this;
  }
  setXYZ(e, t, n, i) {
    return (e *= this.itemSize), this.normalized && ((t = Be(t, this.array)), (n = Be(n, this.array)), (i = Be(i, this.array))), (this.array[e + 0] = t), (this.array[e + 1] = n), (this.array[e + 2] = i), this;
  }
  setXYZW(e, t, n, i, s) {
    return (e *= this.itemSize), this.normalized && ((t = Be(t, this.array)), (n = Be(n, this.array)), (i = Be(i, this.array)), (s = Be(s, this.array))), (this.array[e + 0] = t), (this.array[e + 1] = n), (this.array[e + 2] = i), (this.array[e + 3] = s), this;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Ca && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class dc extends Ht {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class hc extends Ht {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class ft extends Ht {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let hd = 0;
const Nt = new We(),
  Vs = new ht(),
  xi = new C(),
  Lt = new Kn(),
  Qi = new Kn(),
  it = new C();
class Gt extends ti {
  constructor() {
    super(), (this.isBufferGeometry = !0), Object.defineProperty(this, "id", { value: hd++ }), (this.uuid = vn()), (this.name = ""), (this.type = "BufferGeometry"), (this.index = null), (this.attributes = {}), (this.morphAttributes = {}), (this.morphTargetsRelative = !1), (this.groups = []), (this.boundingBox = null), (this.boundingSphere = null), (this.drawRange = { start: 0, count: 1 / 0 }), (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? (this.index = new (sc(e) ? hc : dc)(e, 1)) : (this.index = e), this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ft().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
  }
  rotateX(e) {
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
  }
  rotateY(e) {
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
  }
  rotateZ(e) {
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
  }
  translate(e, t, n) {
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
  }
  scale(e, t, n) {
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
  }
  lookAt(e) {
    return Vs.lookAt(e), Vs.updateMatrix(), this.applyMatrix4(Vs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(xi).negate(), this.translate(xi.x, xi.y, xi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new ft(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Kn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Lt.setFromBufferAttribute(s), this.morphTargetsRelative ? (it.addVectors(this.boundingBox.min, Lt.min), this.boundingBox.expandByPoint(it), it.addVectors(this.boundingBox.max, Lt.max), this.boundingBox.expandByPoint(it)) : (this.boundingBox.expandByPoint(Lt.min), this.boundingBox.expandByPoint(Lt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ha());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Lt.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Qi.setFromBufferAttribute(a), this.morphTargetsRelative ? (it.addVectors(Lt.min, Qi.min), Lt.expandByPoint(it), it.addVectors(Lt.max, Qi.max), Lt.expandByPoint(it)) : (Lt.expandByPoint(Qi.min), Lt.expandByPoint(Qi.max));
        }
      Lt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++) it.fromBufferAttribute(e, s), (i = Math.max(i, n.distanceToSquared(it)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, d = a.count; c < d; c++) it.fromBufferAttribute(a, c), l && (xi.fromBufferAttribute(e, c), it.add(xi)), (i = Math.max(i, n.distanceToSquared(it)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array,
      i = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ht(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      d = [];
    for (let O = 0; O < a; O++) (c[O] = new C()), (d[O] = new C());
    const u = new C(),
      f = new C(),
      m = new C(),
      g = new _e(),
      p = new _e(),
      h = new _e(),
      _ = new C(),
      M = new C();
    function E(O, Z, ue) {
      u.fromArray(i, O * 3), f.fromArray(i, Z * 3), m.fromArray(i, ue * 3), g.fromArray(o, O * 2), p.fromArray(o, Z * 2), h.fromArray(o, ue * 2), f.sub(u), m.sub(u), p.sub(g), h.sub(g);
      const B = 1 / (p.x * h.y - h.x * p.y);
      !isFinite(B) || (_.copy(f).multiplyScalar(h.y).addScaledVector(m, -p.y).multiplyScalar(B), M.copy(m).multiplyScalar(p.x).addScaledVector(f, -h.x).multiplyScalar(B), c[O].add(_), c[Z].add(_), c[ue].add(_), d[O].add(M), d[Z].add(M), d[ue].add(M));
    }
    let w = this.groups;
    w.length === 0 && (w = [{ start: 0, count: n.length }]);
    for (let O = 0, Z = w.length; O < Z; ++O) {
      const ue = w[O],
        B = ue.start,
        R = ue.count;
      for (let q = B, $ = B + R; q < $; q += 3) E(n[q + 0], n[q + 1], n[q + 2]);
    }
    const S = new C(),
      D = new C(),
      z = new C(),
      x = new C();
    function A(O) {
      z.fromArray(s, O * 3), x.copy(z);
      const Z = c[O];
      S.copy(Z), S.sub(z.multiplyScalar(z.dot(Z))).normalize(), D.crossVectors(x, Z);
      const B = D.dot(d[O]) < 0 ? -1 : 1;
      (l[O * 4] = S.x), (l[O * 4 + 1] = S.y), (l[O * 4 + 2] = S.z), (l[O * 4 + 3] = B);
    }
    for (let O = 0, Z = w.length; O < Z; ++O) {
      const ue = w[O],
        B = ue.start,
        R = ue.count;
      for (let q = B, $ = B + R; q < $; q += 3) A(n[q + 0]), A(n[q + 1]), A(n[q + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) (n = new Ht(new Float32Array(t.count * 3), 3)), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const i = new C(),
        s = new C(),
        o = new C(),
        a = new C(),
        l = new C(),
        c = new C(),
        d = new C(),
        u = new C();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0),
            p = e.getX(f + 1),
            h = e.getX(f + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), o.fromBufferAttribute(t, h), d.subVectors(o, s), u.subVectors(i, s), d.cross(u), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, p), c.fromBufferAttribute(n, h), a.add(d), l.add(d), c.add(d), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(p, l.x, l.y, l.z), n.setXYZ(h, c.x, c.y, c.z);
        }
      else for (let f = 0, m = t.count; f < m; f += 3) i.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), d.subVectors(o, s), u.subVectors(i, s), d.cross(u), n.setXYZ(f + 0, d.x, d.y, d.z), n.setXYZ(f + 1, d.x, d.y, d.z), n.setXYZ(f + 2, d.x, d.y, d.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) it.fromBufferAttribute(e, t), it.normalize(), e.setXYZ(t, it.x, it.y, it.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        d = a.itemSize,
        u = a.normalized,
        f = new c.constructor(l.length * d);
      let m = 0,
        g = 0;
      for (let p = 0, h = l.length; p < h; p++) {
        a.isInterleavedBufferAttribute ? (m = l[p] * a.data.stride + a.offset) : (m = l[p] * d);
        for (let _ = 0; _ < d; _++) f[g++] = c[m++];
      }
      return new Ht(f, d, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Gt(),
      n = this.index.array,
      i = this.attributes;
    for (const a in i) {
      const l = i[a],
        c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let d = 0, u = c.length; d < u; d++) {
        const f = c[d],
          m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (((e.uuid = this.uuid), (e.type = this.type), this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0)) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        d = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const m = c[u];
        d.push(m.toJSON(e.data));
      }
      d.length > 0 && ((i[l] = d), (s = !0));
    }
    s && ((e.data.morphAttributes = i), (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null), (this.attributes = {}), (this.morphAttributes = {}), (this.groups = []), (this.boundingBox = null), (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const d = i[c];
      this.setAttribute(c, d.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const d = [],
        u = s[c];
      for (let f = 0, m = u.length; f < m; f++) d.push(u[f].clone(t));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, d = o.length; c < d; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), (this.drawRange.start = e.drawRange.start), (this.drawRange.count = e.drawRange.count), (this.userData = e.userData), e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Yo = new We(),
  Si = new uc(),
  Hs = new Ha(),
  Ln = new C(),
  En = new C(),
  An = new C(),
  Gs = new C(),
  Ws = new C(),
  Xs = new C(),
  Br = new C(),
  kr = new C(),
  Vr = new C(),
  Hr = new _e(),
  Gr = new _e(),
  Wr = new _e(),
  Ys = new C(),
  Xr = new C();
class Ne extends ht {
  constructor(e = new Gt(), t = new Ct()) {
    super(), (this.isMesh = !0), (this.type = "Mesh"), (this.geometry = e), (this.material = t), this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), (this.material = e.material), (this.geometry = e.geometry), this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Hs.copy(n.boundingSphere), Hs.applyMatrix4(s), e.ray.intersectsSphere(Hs) === !1) || (Yo.copy(s).invert(), Si.copy(e.ray).applyMatrix4(Yo), n.boundingBox !== null && Si.intersectsBox(n.boundingBox) === !1)) return;
    let o;
    const a = n.index,
      l = n.attributes.position,
      c = n.morphAttributes.position,
      d = n.morphTargetsRelative,
      u = n.attributes.uv,
      f = n.attributes.uv2,
      m = n.groups,
      g = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let p = 0, h = m.length; p < h; p++) {
          const _ = m[p],
            M = i[_.materialIndex],
            E = Math.max(_.start, g.start),
            w = Math.min(a.count, Math.min(_.start + _.count, g.start + g.count));
          for (let S = E, D = w; S < D; S += 3) {
            const z = a.getX(S),
              x = a.getX(S + 1),
              A = a.getX(S + 2);
            (o = Yr(this, M, e, Si, l, c, d, u, f, z, x, A)), o && ((o.faceIndex = Math.floor(S / 3)), (o.face.materialIndex = _.materialIndex), t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start),
          h = Math.min(a.count, g.start + g.count);
        for (let _ = p, M = h; _ < M; _ += 3) {
          const E = a.getX(_),
            w = a.getX(_ + 1),
            S = a.getX(_ + 2);
          (o = Yr(this, i, e, Si, l, c, d, u, f, E, w, S)), o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let p = 0, h = m.length; p < h; p++) {
          const _ = m[p],
            M = i[_.materialIndex],
            E = Math.max(_.start, g.start),
            w = Math.min(l.count, Math.min(_.start + _.count, g.start + g.count));
          for (let S = E, D = w; S < D; S += 3) {
            const z = S,
              x = S + 1,
              A = S + 2;
            (o = Yr(this, M, e, Si, l, c, d, u, f, z, x, A)), o && ((o.faceIndex = Math.floor(S / 3)), (o.face.materialIndex = _.materialIndex), t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start),
          h = Math.min(l.count, g.start + g.count);
        for (let _ = p, M = h; _ < M; _ += 3) {
          const E = _,
            w = _ + 1,
            S = _ + 2;
          (o = Yr(this, i, e, Si, l, c, d, u, f, E, w, S)), o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
  }
}
function fd(r, e, t, n, i, s, o, a) {
  let l;
  if ((e.side === Ot ? (l = n.intersectTriangle(o, s, i, !0, a)) : (l = n.intersectTriangle(i, s, o, e.side !== _t, a)), l === null)) return null;
  Xr.copy(a), Xr.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(Xr);
  return c < t.near || c > t.far ? null : { distance: c, point: Xr.clone(), object: r };
}
function Yr(r, e, t, n, i, s, o, a, l, c, d, u) {
  Ln.fromBufferAttribute(i, c), En.fromBufferAttribute(i, d), An.fromBufferAttribute(i, u);
  const f = r.morphTargetInfluences;
  if (s && f) {
    Br.set(0, 0, 0), kr.set(0, 0, 0), Vr.set(0, 0, 0);
    for (let g = 0, p = s.length; g < p; g++) {
      const h = f[g],
        _ = s[g];
      h !== 0 && (Gs.fromBufferAttribute(_, c), Ws.fromBufferAttribute(_, d), Xs.fromBufferAttribute(_, u), o ? (Br.addScaledVector(Gs, h), kr.addScaledVector(Ws, h), Vr.addScaledVector(Xs, h)) : (Br.addScaledVector(Gs.sub(Ln), h), kr.addScaledVector(Ws.sub(En), h), Vr.addScaledVector(Xs.sub(An), h)));
    }
    Ln.add(Br), En.add(kr), An.add(Vr);
  }
  r.isSkinnedMesh && (r.boneTransform(c, Ln), r.boneTransform(d, En), r.boneTransform(u, An));
  const m = fd(r, e, t, n, Ln, En, An, Ys);
  if (m) {
    a && (Hr.fromBufferAttribute(a, c), Gr.fromBufferAttribute(a, d), Wr.fromBufferAttribute(a, u), (m.uv = en.getUV(Ys, Ln, En, An, Hr, Gr, Wr, new _e()))), l && (Hr.fromBufferAttribute(l, c), Gr.fromBufferAttribute(l, d), Wr.fromBufferAttribute(l, u), (m.uv2 = en.getUV(Ys, Ln, En, An, Hr, Gr, Wr, new _e())));
    const g = { a: c, b: d, c: u, normal: new C(), materialIndex: 0 };
    en.getNormal(Ln, En, An, g.normal), (m.face = g);
  }
  return m;
}
class xr extends Gt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(), (this.type = "BoxGeometry"), (this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: s, depthSegments: o });
    const a = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      d = [],
      u = [];
    let f = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new ft(c, 3)), this.setAttribute("normal", new ft(d, 3)), this.setAttribute("uv", new ft(u, 2));
    function g(p, h, _, M, E, w, S, D, z, x, A) {
      const O = w / z,
        Z = S / x,
        ue = w / 2,
        B = S / 2,
        R = D / 2,
        q = z + 1,
        $ = x + 1;
      let J = 0,
        W = 0;
      const N = new C();
      for (let U = 0; U < $; U++) {
        const te = U * Z - B;
        for (let Q = 0; Q < q; Q++) {
          const K = Q * O - ue;
          (N[p] = K * M), (N[h] = te * E), (N[_] = R), c.push(N.x, N.y, N.z), (N[p] = 0), (N[h] = 0), (N[_] = D > 0 ? 1 : -1), d.push(N.x, N.y, N.z), u.push(Q / z), u.push(1 - U / x), (J += 1);
        }
      }
      for (let U = 0; U < x; U++)
        for (let te = 0; te < z; te++) {
          const Q = f + te + q * U,
            K = f + te + q * (U + 1),
            fe = f + (te + 1) + q * (U + 1),
            ye = f + (te + 1) + q * U;
          l.push(Q, K, ye), l.push(K, fe, ye), (W += 6);
        }
      a.addGroup(m, W, A), (m += W), (f += J);
    }
  }
  static fromJSON(e) {
    return new xr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Gi(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? (e[t][n] = i.clone()) : Array.isArray(i) ? (e[t][n] = i.slice()) : (e[t][n] = i);
    }
  }
  return e;
}
function ut(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Gi(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function pd(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
const md = { clone: Gi, merge: ut };
var gd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  _d = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Qn extends Wi {
  constructor(e) {
    super(), (this.isShaderMaterial = !0), (this.type = "ShaderMaterial"), (this.defines = {}), (this.uniforms = {}), (this.uniformsGroups = []), (this.vertexShader = gd), (this.fragmentShader = _d), (this.linewidth = 1), (this.wireframe = !1), (this.wireframeLinewidth = 1), (this.fog = !1), (this.lights = !1), (this.clipping = !1), (this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }), (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }), (this.index0AttributeName = void 0), (this.uniformsNeedUpdate = !1), (this.glslVersion = null), e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), (this.fragmentShader = e.fragmentShader), (this.vertexShader = e.vertexShader), (this.uniforms = Gi(e.uniforms)), (this.uniformsGroups = pd(e.uniformsGroups)), (this.defines = Object.assign({}, e.defines)), (this.wireframe = e.wireframe), (this.wireframeLinewidth = e.wireframeLinewidth), (this.fog = e.fog), (this.lights = e.lights), (this.clipping = e.clipping), (this.extensions = Object.assign({}, e.extensions)), (this.glslVersion = e.glslVersion), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? (t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid }) : o && o.isColor ? (t.uniforms[i] = { type: "c", value: o.getHex() }) : o && o.isVector2 ? (t.uniforms[i] = { type: "v2", value: o.toArray() }) : o && o.isVector3 ? (t.uniforms[i] = { type: "v3", value: o.toArray() }) : o && o.isVector4 ? (t.uniforms[i] = { type: "v4", value: o.toArray() }) : o && o.isMatrix3 ? (t.uniforms[i] = { type: "m3", value: o.toArray() }) : o && o.isMatrix4 ? (t.uniforms[i] = { type: "m4", value: o.toArray() }) : (t.uniforms[i] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), (t.vertexShader = this.vertexShader), (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class fc extends ht {
  constructor() {
    super(), (this.isCamera = !0), (this.type = "Camera"), (this.matrixWorldInverse = new We()), (this.projectionMatrix = new We()), (this.projectionMatrixInverse = new We());
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Et extends fc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), (this.isPerspectiveCamera = !0), (this.type = "PerspectiveCamera"), (this.fov = e), (this.zoom = 1), (this.near = n), (this.far = i), (this.focus = 10), (this.aspect = t), (this.view = null), (this.filmGauge = 35), (this.filmOffset = 0), this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), (this.fov = e.fov), (this.zoom = e.zoom), (this.near = e.near), (this.far = e.far), (this.focus = e.focus), (this.aspect = e.aspect), (this.view = e.view === null ? null : Object.assign({}, e.view)), (this.filmGauge = e.filmGauge), (this.filmOffset = e.filmOffset), this;
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = is * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(cr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return is * 2 * Math.atan(Math.tan(cr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, o) {
    (this.aspect = e / t), this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), (this.view.enabled = !0), (this.view.fullWidth = e), (this.view.fullHeight = t), (this.view.offsetX = n), (this.view.offsetY = i), (this.view.width = s), (this.view.height = o), this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(cr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * i) / l), (t -= (o.offsetY * n) / c), (i *= o.width / l), (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.fov = this.fov), (t.object.zoom = this.zoom), (t.object.near = this.near), (t.object.far = this.far), (t.object.focus = this.focus), (t.object.aspect = this.aspect), this.view !== null && (t.object.view = Object.assign({}, this.view)), (t.object.filmGauge = this.filmGauge), (t.object.filmOffset = this.filmOffset), t;
  }
}
const yi = 90,
  bi = 1;
class vd extends ht {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new Et(yi, bi, e, t);
    (i.layers = this.layers), i.up.set(0, -1, 0), i.lookAt(new C(1, 0, 0)), this.add(i);
    const s = new Et(yi, bi, e, t);
    (s.layers = this.layers), s.up.set(0, -1, 0), s.lookAt(new C(-1, 0, 0)), this.add(s);
    const o = new Et(yi, bi, e, t);
    (o.layers = this.layers), o.up.set(0, 0, 1), o.lookAt(new C(0, 1, 0)), this.add(o);
    const a = new Et(yi, bi, e, t);
    (a.layers = this.layers), a.up.set(0, 0, -1), a.lookAt(new C(0, -1, 0)), this.add(a);
    const l = new Et(yi, bi, e, t);
    (l.layers = this.layers), l.up.set(0, -1, 0), l.lookAt(new C(0, 0, 1)), this.add(l);
    const c = new Et(yi, bi, e, t);
    (c.layers = this.layers), c.up.set(0, -1, 0), c.lookAt(new C(0, 0, -1)), this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, s, o, a, l, c] = this.children,
      d = e.getRenderTarget(),
      u = e.toneMapping,
      f = e.xr.enabled;
    (e.toneMapping = _n), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1), e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), (n.texture.generateMipmaps = m), e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(d), (e.toneMapping = u), (e.xr.enabled = f), (n.texture.needsPMREMUpdate = !0);
  }
}
class pc extends At {
  constructor(e, t, n, i, s, o, a, l, c, d) {
    (e = e !== void 0 ? e : []), (t = t !== void 0 ? t : ki), super(e, t, n, i, s, o, a, l, c, d), (this.isCubeTexture = !0), (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class xd extends $n {
  constructor(e, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new pc(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding)), (this.texture.isRenderTargetTexture = !0), (this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1), (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : It);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type), (this.texture.encoding = t.encoding), (this.texture.generateMipmaps = t.generateMipmaps), (this.texture.minFilter = t.minFilter), (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      },
      i = new xr(5, 5, 5),
      s = new Qn({ name: "CubemapFromEquirect", uniforms: Gi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Ot, blending: Dn });
    s.uniforms.tEquirect.value = t;
    const o = new Ne(i, s),
      a = t.minFilter;
    return t.minFilter === ds && (t.minFilter = It), new vd(1, 10, this).update(e, o), (t.minFilter = a), o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const qs = new C(),
  Sd = new C(),
  yd = new Ft();
class Bn {
  constructor(e = new C(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = qs.subVectors(n, t).cross(Sd.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(qs),
      i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || yd.getNormalMatrix(e),
      i = this.coplanarPoint(qs).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mi = new Ha(),
  qr = new C();
class Wa {
  constructor(e = new Bn(), t = new Bn(), n = new Bn(), i = new Bn(), s = new Bn(), o = new Bn()) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      s = n[1],
      o = n[2],
      a = n[3],
      l = n[4],
      c = n[5],
      d = n[6],
      u = n[7],
      f = n[8],
      m = n[9],
      g = n[10],
      p = n[11],
      h = n[12],
      _ = n[13],
      M = n[14],
      E = n[15];
    return t[0].setComponents(a - i, u - l, p - f, E - h).normalize(), t[1].setComponents(a + i, u + l, p + f, E + h).normalize(), t[2].setComponents(a + s, u + c, p + m, E + _).normalize(), t[3].setComponents(a - s, u - c, p - m, E - _).normalize(), t[4].setComponents(a - o, u - d, p - g, E - M).normalize(), t[5].setComponents(a + o, u + d, p + g, E + M).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Mi);
  }
  intersectsSprite(e) {
    return Mi.center.set(0, 0, 0), (Mi.radius = 0.7071067811865476), Mi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Mi);
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (((qr.x = i.normal.x > 0 ? e.max.x : e.min.x), (qr.y = i.normal.y > 0 ? e.max.y : e.min.y), (qr.z = i.normal.z > 0 ? e.max.z : e.min.z), i.distanceToPoint(qr) < 0)) return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function mc() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function i(s, o) {
    t(s, o), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      r = s;
    }
  };
}
function bd(r, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, d) {
    const u = c.array,
      f = c.usage,
      m = r.createBuffer();
    r.bindBuffer(d, m), r.bufferData(d, u, f), c.onUploadCallback();
    let g;
    if (u instanceof Float32Array) g = 5126;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = 5131;
        else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else g = 5123;
    else if (u instanceof Int16Array) g = 5122;
    else if (u instanceof Uint32Array) g = 5125;
    else if (u instanceof Int32Array) g = 5124;
    else if (u instanceof Int8Array) g = 5120;
    else if (u instanceof Uint8Array) g = 5121;
    else if (u instanceof Uint8ClampedArray) g = 5121;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return { buffer: m, type: g, bytesPerElement: u.BYTES_PER_ELEMENT, version: c.version };
  }
  function s(c, d, u) {
    const f = d.array,
      m = d.updateRange;
    r.bindBuffer(u, c), m.count === -1 ? r.bufferSubData(u, 0, f) : (t ? r.bufferSubData(u, m.offset * f.BYTES_PER_ELEMENT, f, m.offset, m.count) : r.bufferSubData(u, m.offset * f.BYTES_PER_ELEMENT, f.subarray(m.offset, m.offset + m.count)), (m.count = -1));
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d && (r.deleteBuffer(d.buffer), n.delete(c));
  }
  function l(c, d) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) && n.set(c, { buffer: c.buffer, type: c.type, bytesPerElement: c.elementSize, version: c.version });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0 ? n.set(c, i(c, d)) : u.version < c.version && (s(u.buffer, c, d), (u.version = c.version));
  }
  return { get: o, remove: a, update: l };
}
class Xa extends Gt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), (this.type = "PlaneGeometry"), (this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(n),
      l = Math.floor(i),
      c = a + 1,
      d = l + 1,
      u = e / a,
      f = t / l,
      m = [],
      g = [],
      p = [],
      h = [];
    for (let _ = 0; _ < d; _++) {
      const M = _ * f - o;
      for (let E = 0; E < c; E++) {
        const w = E * u - s;
        g.push(w, -M, 0), p.push(0, 0, 1), h.push(E / a), h.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let M = 0; M < a; M++) {
        const E = M + c * _,
          w = M + c * (_ + 1),
          S = M + 1 + c * (_ + 1),
          D = M + 1 + c * _;
        m.push(E, w, D), m.push(w, S, D);
      }
    this.setIndex(m), this.setAttribute("position", new ft(g, 3)), this.setAttribute("normal", new ft(p, 3)), this.setAttribute("uv", new ft(h, 2));
  }
  static fromJSON(e) {
    return new Xa(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Md = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  wd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ld = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Ed = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Ad = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Cd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Dd = "vec3 transformed = vec3( position );",
  Td = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Pd = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  Rd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Nd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Id = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  Fd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Od = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  zd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Ud = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Bd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  kd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Vd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  Hd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  Gd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Wd = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Xd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Yd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  qd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  jd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Zd = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  $d = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Jd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Kd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Qd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  eh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  th = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  nh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  ih = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  rh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  sh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  ah = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  oh = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  lh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  ch = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  uh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,
  dh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  hh = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  fh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  ph = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  mh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  gh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  _h = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  vh = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  xh = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Sh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  yh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  bh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Mh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  wh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Lh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Eh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Ah = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Ch = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Dh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Th = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Ph = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Rh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Nh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Ih = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Fh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Oh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  zh = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Uh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Bh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  kh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Vh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  Hh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  Gh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Wh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  Xh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Yh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  qh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  jh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Zh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  $h = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Jh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Kh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Qh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  ef = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  tf = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  nf = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  rf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  sf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  af = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  of = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  lf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  cf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  uf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  df = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  hf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  ff = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  pf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  mf = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  gf = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  _f = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  vf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  xf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  Sf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  yf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const bf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Mf = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  wf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Lf = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Ef = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Af = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Cf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Df = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Tf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Pf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Rf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Nf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  If = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Ff = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Of = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  zf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Uf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Bf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  kf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Vf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Hf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Gf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Wf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Xf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Yf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  qf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  jf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Zf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  $f = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Jf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Kf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Qf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Ae = { alphamap_fragment: Md, alphamap_pars_fragment: wd, alphatest_fragment: Ld, alphatest_pars_fragment: Ed, aomap_fragment: Ad, aomap_pars_fragment: Cd, begin_vertex: Dd, beginnormal_vertex: Td, bsdfs: Pd, iridescence_fragment: Rd, bumpmap_pars_fragment: Nd, clipping_planes_fragment: Id, clipping_planes_pars_fragment: Fd, clipping_planes_pars_vertex: Od, clipping_planes_vertex: zd, color_fragment: Ud, color_pars_fragment: Bd, color_pars_vertex: kd, color_vertex: Vd, common: Hd, cube_uv_reflection_fragment: Gd, defaultnormal_vertex: Wd, displacementmap_pars_vertex: Xd, displacementmap_vertex: Yd, emissivemap_fragment: qd, emissivemap_pars_fragment: jd, encodings_fragment: Zd, encodings_pars_fragment: $d, envmap_fragment: Jd, envmap_common_pars_fragment: Kd, envmap_pars_fragment: Qd, envmap_pars_vertex: eh, envmap_physical_pars_fragment: hh, envmap_vertex: th, fog_vertex: nh, fog_pars_vertex: ih, fog_fragment: rh, fog_pars_fragment: sh, gradientmap_pars_fragment: ah, lightmap_fragment: oh, lightmap_pars_fragment: lh, lights_lambert_fragment: ch, lights_lambert_pars_fragment: uh, lights_pars_begin: dh, lights_toon_fragment: fh, lights_toon_pars_fragment: ph, lights_phong_fragment: mh, lights_phong_pars_fragment: gh, lights_physical_fragment: _h, lights_physical_pars_fragment: vh, lights_fragment_begin: xh, lights_fragment_maps: Sh, lights_fragment_end: yh, logdepthbuf_fragment: bh, logdepthbuf_pars_fragment: Mh, logdepthbuf_pars_vertex: wh, logdepthbuf_vertex: Lh, map_fragment: Eh, map_pars_fragment: Ah, map_particle_fragment: Ch, map_particle_pars_fragment: Dh, metalnessmap_fragment: Th, metalnessmap_pars_fragment: Ph, morphcolor_vertex: Rh, morphnormal_vertex: Nh, morphtarget_pars_vertex: Ih, morphtarget_vertex: Fh, normal_fragment_begin: Oh, normal_fragment_maps: zh, normal_pars_fragment: Uh, normal_pars_vertex: Bh, normal_vertex: kh, normalmap_pars_fragment: Vh, clearcoat_normal_fragment_begin: Hh, clearcoat_normal_fragment_maps: Gh, clearcoat_pars_fragment: Wh, iridescence_pars_fragment: Xh, output_fragment: Yh, packing: qh, premultiplied_alpha_fragment: jh, project_vertex: Zh, dithering_fragment: $h, dithering_pars_fragment: Jh, roughnessmap_fragment: Kh, roughnessmap_pars_fragment: Qh, shadowmap_pars_fragment: ef, shadowmap_pars_vertex: tf, shadowmap_vertex: nf, shadowmask_pars_fragment: rf, skinbase_vertex: sf, skinning_pars_vertex: af, skinning_vertex: of, skinnormal_vertex: lf, specularmap_fragment: cf, specularmap_pars_fragment: uf, tonemapping_fragment: df, tonemapping_pars_fragment: hf, transmission_fragment: ff, transmission_pars_fragment: pf, uv_pars_fragment: mf, uv_pars_vertex: gf, uv_vertex: _f, uv2_pars_fragment: vf, uv2_pars_vertex: xf, uv2_vertex: Sf, worldpos_vertex: yf, background_vert: bf, background_frag: Mf, cube_vert: wf, cube_frag: Lf, depth_vert: Ef, depth_frag: Af, distanceRGBA_vert: Cf, distanceRGBA_frag: Df, equirect_vert: Tf, equirect_frag: Pf, linedashed_vert: Rf, linedashed_frag: Nf, meshbasic_vert: If, meshbasic_frag: Ff, meshlambert_vert: Of, meshlambert_frag: zf, meshmatcap_vert: Uf, meshmatcap_frag: Bf, meshnormal_vert: kf, meshnormal_frag: Vf, meshphong_vert: Hf, meshphong_frag: Gf, meshphysical_vert: Wf, meshphysical_frag: Xf, meshtoon_vert: Yf, meshtoon_frag: qf, points_vert: jf, points_frag: Zf, shadow_vert: $f, shadow_frag: Jf, sprite_vert: Kf, sprite_frag: Qf },
  re = { common: { diffuse: { value: new De(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new Ft() }, uv2Transform: { value: new Ft() }, alphaMap: { value: null }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new _e(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new De(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new De(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new Ft() } }, sprite: { diffuse: { value: new De(16777215) }, opacity: { value: 1 }, center: { value: new _e(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new Ft() } } },
  Zt = { basic: { uniforms: ut([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.fog]), vertexShader: Ae.meshbasic_vert, fragmentShader: Ae.meshbasic_frag }, lambert: { uniforms: ut([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new De(0) } }]), vertexShader: Ae.meshlambert_vert, fragmentShader: Ae.meshlambert_frag }, phong: { uniforms: ut([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new De(0) }, specular: { value: new De(1118481) }, shininess: { value: 30 } }]), vertexShader: Ae.meshphong_vert, fragmentShader: Ae.meshphong_frag }, standard: { uniforms: ut([re.common, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.roughnessmap, re.metalnessmap, re.fog, re.lights, { emissive: { value: new De(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ae.meshphysical_vert, fragmentShader: Ae.meshphysical_frag }, toon: { uniforms: ut([re.common, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.gradientmap, re.fog, re.lights, { emissive: { value: new De(0) } }]), vertexShader: Ae.meshtoon_vert, fragmentShader: Ae.meshtoon_frag }, matcap: { uniforms: ut([re.common, re.bumpmap, re.normalmap, re.displacementmap, re.fog, { matcap: { value: null } }]), vertexShader: Ae.meshmatcap_vert, fragmentShader: Ae.meshmatcap_frag }, points: { uniforms: ut([re.points, re.fog]), vertexShader: Ae.points_vert, fragmentShader: Ae.points_frag }, dashed: { uniforms: ut([re.common, re.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ae.linedashed_vert, fragmentShader: Ae.linedashed_frag }, depth: { uniforms: ut([re.common, re.displacementmap]), vertexShader: Ae.depth_vert, fragmentShader: Ae.depth_frag }, normal: { uniforms: ut([re.common, re.bumpmap, re.normalmap, re.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ae.meshnormal_vert, fragmentShader: Ae.meshnormal_frag }, sprite: { uniforms: ut([re.sprite, re.fog]), vertexShader: Ae.sprite_vert, fragmentShader: Ae.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ft() }, t2D: { value: null } }, vertexShader: Ae.background_vert, fragmentShader: Ae.background_frag }, cube: { uniforms: ut([re.envmap, { opacity: { value: 1 } }]), vertexShader: Ae.cube_vert, fragmentShader: Ae.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ae.equirect_vert, fragmentShader: Ae.equirect_frag }, distanceRGBA: { uniforms: ut([re.common, re.displacementmap, { referencePosition: { value: new C() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ae.distanceRGBA_vert, fragmentShader: Ae.distanceRGBA_frag }, shadow: { uniforms: ut([re.lights, re.fog, { color: { value: new De(0) }, opacity: { value: 1 } }]), vertexShader: Ae.shadow_vert, fragmentShader: Ae.shadow_frag } };
Zt.physical = { uniforms: ut([Zt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new _e(1, 1) }, clearcoatNormalMap: { value: null }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, sheen: { value: 0 }, sheenColor: { value: new De(0) }, sheenColorMap: { value: null }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionSamplerSize: { value: new _e() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, attenuationDistance: { value: 0 }, attenuationColor: { value: new De(0) }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularColor: { value: new De(1, 1, 1) }, specularColorMap: { value: null } }]), vertexShader: Ae.meshphysical_vert, fragmentShader: Ae.meshphysical_frag };
function ep(r, e, t, n, i, s) {
  const o = new De(0);
  let a = i === !0 ? 0 : 1,
    l,
    c,
    d = null,
    u = 0,
    f = null;
  function m(p, h) {
    let _ = !1,
      M = h.isScene === !0 ? h.background : null;
    M && M.isTexture && (M = e.get(M));
    const E = r.xr,
      w = E.getSession && E.getSession();
    w && w.environmentBlendMode === "additive" && (M = null),
      M === null ? g(o, a) : M && M.isColor && (g(M, 1), (_ = !0)),
      (r.autoClear || _) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      M && (M.isCubeTexture || M.mapping === us)
        ? (c === void 0 &&
            ((c = new Ne(new xr(1, 1, 1), new Qn({ name: "BackgroundCubeMaterial", uniforms: Gi(Zt.cube.uniforms), vertexShader: Zt.cube.vertexShader, fragmentShader: Zt.cube.fragmentShader, side: Ot, depthTest: !1, depthWrite: !1, fog: !1 }))),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (S, D, z) {
              this.matrixWorld.copyPosition(z.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              }
            }),
            n.update(c)),
          (c.material.uniforms.envMap.value = M),
          (c.material.uniforms.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
          (d !== M || u !== M.version || f !== r.toneMapping) && ((c.material.needsUpdate = !0), (d = M), (u = M.version), (f = r.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null))
        : M &&
          M.isTexture &&
          (l === void 0 &&
            ((l = new Ne(new Xa(2, 2), new Qn({ name: "BackgroundMaterial", uniforms: Gi(Zt.background.uniforms), vertexShader: Zt.background.vertexShader, fragmentShader: Zt.background.fragmentShader, side: Bi, depthTest: !1, depthWrite: !1, fog: !1 }))),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              }
            }),
            n.update(l)),
          (l.material.uniforms.t2D.value = M),
          M.matrixAutoUpdate === !0 && M.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(M.matrix),
          (d !== M || u !== M.version || f !== r.toneMapping) && ((l.material.needsUpdate = !0), (d = M), (u = M.version), (f = r.toneMapping)),
          l.layers.enableAll(),
          p.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(p, h) {
    t.buffers.color.setClear(p.r, p.g, p.b, h, s);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (p, h = 1) {
      o.set(p), (a = h), g(o, a);
    },
    getClearAlpha: function () {
      return a;
    },
    setClearAlpha: function (p) {
      (a = p), g(o, a);
    },
    render: m
  };
}
function tp(r, e, t, n) {
  const i = r.getParameter(34921),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = h(null);
  let c = l,
    d = !1;
  function u(R, q, $, J, W) {
    let N = !1;
    if (o) {
      const U = p(J, $, q);
      c !== U && ((c = U), m(c.object)), (N = _(R, J, $, W)), N && M(R, J, $, W);
    } else {
      const U = q.wireframe === !0;
      (c.geometry !== J.id || c.program !== $.id || c.wireframe !== U) && ((c.geometry = J.id), (c.program = $.id), (c.wireframe = U), (N = !0));
    }
    W !== null && t.update(W, 34963), (N || d) && ((d = !1), x(R, q, $, J), W !== null && r.bindBuffer(34963, t.get(W).buffer));
  }
  function f() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function m(R) {
    return n.isWebGL2 ? r.bindVertexArray(R) : s.bindVertexArrayOES(R);
  }
  function g(R) {
    return n.isWebGL2 ? r.deleteVertexArray(R) : s.deleteVertexArrayOES(R);
  }
  function p(R, q, $) {
    const J = $.wireframe === !0;
    let W = a[R.id];
    W === void 0 && ((W = {}), (a[R.id] = W));
    let N = W[q.id];
    N === void 0 && ((N = {}), (W[q.id] = N));
    let U = N[J];
    return U === void 0 && ((U = h(f())), (N[J] = U)), U;
  }
  function h(R) {
    const q = [],
      $ = [],
      J = [];
    for (let W = 0; W < i; W++) (q[W] = 0), ($[W] = 0), (J[W] = 0);
    return { geometry: null, program: null, wireframe: !1, newAttributes: q, enabledAttributes: $, attributeDivisors: J, object: R, attributes: {}, index: null };
  }
  function _(R, q, $, J) {
    const W = c.attributes,
      N = q.attributes;
    let U = 0;
    const te = $.getAttributes();
    for (const Q in te)
      if (te[Q].location >= 0) {
        const fe = W[Q];
        let ye = N[Q];
        if ((ye === void 0 && (Q === "instanceMatrix" && R.instanceMatrix && (ye = R.instanceMatrix), Q === "instanceColor" && R.instanceColor && (ye = R.instanceColor)), fe === void 0 || fe.attribute !== ye || (ye && fe.data !== ye.data))) return !0;
        U++;
      }
    return c.attributesNum !== U || c.index !== J;
  }
  function M(R, q, $, J) {
    const W = {},
      N = q.attributes;
    let U = 0;
    const te = $.getAttributes();
    for (const Q in te)
      if (te[Q].location >= 0) {
        let fe = N[Q];
        fe === void 0 && (Q === "instanceMatrix" && R.instanceMatrix && (fe = R.instanceMatrix), Q === "instanceColor" && R.instanceColor && (fe = R.instanceColor));
        const ye = {};
        (ye.attribute = fe), fe && fe.data && (ye.data = fe.data), (W[Q] = ye), U++;
      }
    (c.attributes = W), (c.attributesNum = U), (c.index = J);
  }
  function E() {
    const R = c.newAttributes;
    for (let q = 0, $ = R.length; q < $; q++) R[q] = 0;
  }
  function w(R) {
    S(R, 0);
  }
  function S(R, q) {
    const $ = c.newAttributes,
      J = c.enabledAttributes,
      W = c.attributeDivisors;
    ($[R] = 1), J[R] === 0 && (r.enableVertexAttribArray(R), (J[R] = 1)), W[R] !== q && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](R, q), (W[R] = q));
  }
  function D() {
    const R = c.newAttributes,
      q = c.enabledAttributes;
    for (let $ = 0, J = q.length; $ < J; $++) q[$] !== R[$] && (r.disableVertexAttribArray($), (q[$] = 0));
  }
  function z(R, q, $, J, W, N) {
    n.isWebGL2 === !0 && ($ === 5124 || $ === 5125) ? r.vertexAttribIPointer(R, q, $, W, N) : r.vertexAttribPointer(R, q, $, J, W, N);
  }
  function x(R, q, $, J) {
    if (n.isWebGL2 === !1 && (R.isInstancedMesh || J.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
    E();
    const W = J.attributes,
      N = $.getAttributes(),
      U = q.defaultAttributeValues;
    for (const te in N) {
      const Q = N[te];
      if (Q.location >= 0) {
        let K = W[te];
        if ((K === void 0 && (te === "instanceMatrix" && R.instanceMatrix && (K = R.instanceMatrix), te === "instanceColor" && R.instanceColor && (K = R.instanceColor)), K !== void 0)) {
          const fe = K.normalized,
            ye = K.itemSize,
            X = t.get(K);
          if (X === void 0) continue;
          const Ie = X.buffer,
            ve = X.type,
            be = X.bytesPerElement;
          if (K.isInterleavedBufferAttribute) {
            const he = K.data,
              Oe = he.stride,
              Le = K.offset;
            if (he.isInstancedInterleavedBuffer) {
              for (let ge = 0; ge < Q.locationSize; ge++) S(Q.location + ge, he.meshPerAttribute);
              R.isInstancedMesh !== !0 && J._maxInstanceCount === void 0 && (J._maxInstanceCount = he.meshPerAttribute * he.count);
            } else for (let ge = 0; ge < Q.locationSize; ge++) w(Q.location + ge);
            r.bindBuffer(34962, Ie);
            for (let ge = 0; ge < Q.locationSize; ge++) z(Q.location + ge, ye / Q.locationSize, ve, fe, Oe * be, (Le + (ye / Q.locationSize) * ge) * be);
          } else {
            if (K.isInstancedBufferAttribute) {
              for (let he = 0; he < Q.locationSize; he++) S(Q.location + he, K.meshPerAttribute);
              R.isInstancedMesh !== !0 && J._maxInstanceCount === void 0 && (J._maxInstanceCount = K.meshPerAttribute * K.count);
            } else for (let he = 0; he < Q.locationSize; he++) w(Q.location + he);
            r.bindBuffer(34962, Ie);
            for (let he = 0; he < Q.locationSize; he++) z(Q.location + he, ye / Q.locationSize, ve, fe, ye * be, (ye / Q.locationSize) * he * be);
          }
        } else if (U !== void 0) {
          const fe = U[te];
          if (fe !== void 0)
            switch (fe.length) {
              case 2:
                r.vertexAttrib2fv(Q.location, fe);
                break;
              case 3:
                r.vertexAttrib3fv(Q.location, fe);
                break;
              case 4:
                r.vertexAttrib4fv(Q.location, fe);
                break;
              default:
                r.vertexAttrib1fv(Q.location, fe);
            }
        }
      }
    }
    D();
  }
  function A() {
    ue();
    for (const R in a) {
      const q = a[R];
      for (const $ in q) {
        const J = q[$];
        for (const W in J) g(J[W].object), delete J[W];
        delete q[$];
      }
      delete a[R];
    }
  }
  function O(R) {
    if (a[R.id] === void 0) return;
    const q = a[R.id];
    for (const $ in q) {
      const J = q[$];
      for (const W in J) g(J[W].object), delete J[W];
      delete q[$];
    }
    delete a[R.id];
  }
  function Z(R) {
    for (const q in a) {
      const $ = a[q];
      if ($[R.id] === void 0) continue;
      const J = $[R.id];
      for (const W in J) g(J[W].object), delete J[W];
      delete $[R.id];
    }
  }
  function ue() {
    B(), (d = !0), c !== l && ((c = l), m(c.object));
  }
  function B() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return { setup: u, reset: ue, resetDefaultState: B, dispose: A, releaseStatesOfGeometry: O, releaseStatesOfProgram: Z, initAttributes: E, enableAttribute: w, disableUnusedAttributes: D };
}
function np(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, d) {
    r.drawArrays(s, c, d), t.update(d, s, 1);
  }
  function l(c, d, u) {
    if (u === 0) return;
    let f, m;
    if (i) (f = r), (m = "drawArraysInstanced");
    else if (((f = e.get("ANGLE_instanced_arrays")), (m = "drawArraysInstancedANGLE"), f === null)) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[m](s, c, d, u), t.update(d, s, u);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l);
}
function ip(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const z = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(z) {
    if (z === "highp") {
      if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
      z = "mediump";
    }
    return z === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = (typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext) || (typeof WebGL2ComputeRenderingContext < "u" && r instanceof WebGL2ComputeRenderingContext);
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), (a = l));
  const c = o || e.has("WEBGL_draw_buffers"),
    d = t.logarithmicDepthBuffer === !0,
    u = r.getParameter(34930),
    f = r.getParameter(35660),
    m = r.getParameter(3379),
    g = r.getParameter(34076),
    p = r.getParameter(34921),
    h = r.getParameter(36347),
    _ = r.getParameter(36348),
    M = r.getParameter(36349),
    E = f > 0,
    w = o || e.has("OES_texture_float"),
    S = E && w,
    D = o ? r.getParameter(36183) : 0;
  return { isWebGL2: o, drawBuffers: c, getMaxAnisotropy: i, getMaxPrecision: s, precision: a, logarithmicDepthBuffer: d, maxTextures: u, maxVertexTextures: f, maxTextureSize: m, maxCubemapSize: g, maxAttributes: p, maxVertexUniforms: h, maxVaryings: _, maxFragmentUniforms: M, vertexTextures: E, floatFragmentTextures: w, floatVertexTextures: S, maxSamples: D };
}
function rp(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const o = new Bn(),
    a = new Ft(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, f, m) {
      const g = u.length !== 0 || f || n !== 0 || i;
      return (i = f), (t = d(u, m, 0)), (n = u.length), g;
    }),
    (this.beginShadows = function () {
      (s = !0), d(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (u, f, m) {
      const g = u.clippingPlanes,
        p = u.clipIntersection,
        h = u.clipShadows,
        _ = r.get(u);
      if (!i || g === null || g.length === 0 || (s && !h)) s ? d(null) : c();
      else {
        const M = s ? 0 : n,
          E = M * 4;
        let w = _.clippingState || null;
        (l.value = w), (w = d(g, f, E, m));
        for (let S = 0; S !== E; ++S) w[S] = t[S];
        (_.clippingState = w), (this.numIntersection = p ? this.numPlanes : 0), (this.numPlanes += M);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)), (e.numPlanes = n), (e.numIntersection = 0);
  }
  function d(u, f, m, g) {
    const p = u !== null ? u.length : 0;
    let h = null;
    if (p !== 0) {
      if (((h = l.value), g !== !0 || h === null)) {
        const _ = m + p * 4,
          M = f.matrixWorldInverse;
        a.getNormalMatrix(M), (h === null || h.length < _) && (h = new Float32Array(_));
        for (let E = 0, w = m; E !== p; ++E, w += 4) o.copy(u[E]).applyMatrix4(M, a), o.normal.toArray(h, w), (h[w + 3] = o.constant);
      }
      (l.value = h), (l.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), h;
  }
}
function sp(r) {
  let e = new WeakMap();
  function t(o, a) {
    return a === wa ? (o.mapping = ki) : a === La && (o.mapping = Vi), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === wa || a === La)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new xd(l.height / 2);
            return c.fromEquirectangularTexture(r, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class ap extends fc {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(), (this.isOrthographicCamera = !0), (this.type = "OrthographicCamera"), (this.zoom = 1), (this.view = null), (this.left = e), (this.right = t), (this.top = n), (this.bottom = i), (this.near = s), (this.far = o), this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), (this.left = e.left), (this.right = e.right), (this.top = e.top), (this.bottom = e.bottom), (this.near = e.near), (this.far = e.far), (this.zoom = e.zoom), (this.view = e.view === null ? null : Object.assign({}, e.view)), this;
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), (this.view.enabled = !0), (this.view.fullWidth = e), (this.view.fullHeight = t), (this.view.offsetX = n), (this.view.offsetY = i), (this.view.width = s), (this.view.height = o), this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      o = n + e,
      a = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX), (o = s + c * this.view.width), (a -= d * this.view.offsetY), (l = a - d * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.zoom = this.zoom), (t.object.left = this.left), (t.object.right = this.right), (t.object.top = this.top), (t.object.bottom = this.bottom), (t.object.near = this.near), (t.object.far = this.far), this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Fi = 4,
  qo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Vn = 20,
  js = new ap(),
  jo = new De();
let Zs = null;
const kn = (1 + Math.sqrt(5)) / 2,
  wi = 1 / kn,
  Zo = [new C(1, 1, 1), new C(-1, 1, 1), new C(1, 1, -1), new C(-1, 1, -1), new C(0, kn, wi), new C(0, kn, -wi), new C(wi, 0, kn), new C(-wi, 0, kn), new C(kn, wi, 0), new C(-kn, wi, 0)];
class $o {
  constructor(e) {
    (this._renderer = e), (this._pingPongRenderTarget = null), (this._lodMax = 0), (this._cubeSize = 0), (this._lodPlanes = []), (this._sizeLods = []), (this._sigmas = []), (this._blurMaterial = null), (this._cubemapMaterial = null), (this._equirectMaterial = null), this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (Zs = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (s.depthBuffer = !0), this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && ((this._cubemapMaterial = Qo()), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && ((this._equirectMaterial = Ko()), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))), (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Zs), (e.scissorTest = !1), jr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ki || e.mapping === Vi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), (Zs = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = { magFilter: It, minFilter: It, generateMipmaps: !1, type: mr, format: rn, encoding: Zn, depthBuffer: !1 },
      i = Jo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), (this._pingPongRenderTarget = Jo(e, t, n));
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = op(s)), (this._blurMaterial = lp(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Ne(this._lodPlanes[0], e);
    this._renderer.compile(t, js);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Et(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      d = this._renderer,
      u = d.autoClear,
      f = d.toneMapping;
    d.getClearColor(jo), (d.toneMapping = _n), (d.autoClear = !1);
    const m = new Ct({ name: "PMREM.Background", side: Ot, depthWrite: !1, depthTest: !1 }),
      g = new Ne(new xr(), m);
    let p = !1;
    const h = e.background;
    h ? h.isColor && (m.color.copy(h), (e.background = null), (p = !0)) : (m.color.copy(jo), (p = !0));
    for (let _ = 0; _ < 6; _++) {
      const M = _ % 3;
      M === 0 ? (a.up.set(0, l[_], 0), a.lookAt(c[_], 0, 0)) : M === 1 ? (a.up.set(0, 0, l[_]), a.lookAt(0, c[_], 0)) : (a.up.set(0, l[_], 0), a.lookAt(0, 0, c[_]));
      const E = this._cubeSize;
      jr(i, M * E, _ > 2 ? E : 0, E, E), d.setRenderTarget(i), p && d.render(g, a), d.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), (d.toneMapping = f), (d.autoClear = u), (e.background = h);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === ki || e.mapping === Vi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Qo()), (this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1)) : this._equirectMaterial === null && (this._equirectMaterial = Ko());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new Ne(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    jr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, js);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]),
        o = Zo[(i - 1) % Zo.length];
      this._blur(e, i - 1, i, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", s), this._halfBlur(o, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const d = 3,
      u = new Ne(this._lodPlanes[i], c),
      f = c.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * Vn - 1),
      p = s / g,
      h = isFinite(s) ? 1 + Math.floor(d * p) : Vn;
    h > Vn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Vn}`);
    const _ = [];
    let M = 0;
    for (let z = 0; z < Vn; ++z) {
      const x = z / p,
        A = Math.exp((-x * x) / 2);
      _.push(A), z === 0 ? (M += A) : z < h && (M += 2 * A);
    }
    for (let z = 0; z < _.length; z++) _[z] = _[z] / M;
    (f.envMap.value = e.texture), (f.samples.value = h), (f.weights.value = _), (f.latitudinal.value = o === "latitudinal"), a && (f.poleAxis.value = a);
    const { _lodMax: E } = this;
    (f.dTheta.value = g), (f.mipInt.value = E - n);
    const w = this._sizeLods[i],
      S = 3 * w * (i > E - Fi ? i - E + Fi : 0),
      D = 4 * (this._cubeSize - w);
    jr(t, S, D, 3 * w, 2 * w), l.setRenderTarget(t), l.render(u, js);
  }
}
function op(r) {
  const e = [],
    t = [],
    n = [];
  let i = r;
  const s = r - Fi + 1 + qo.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > r - Fi ? (l = qo[o - r + Fi - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      d = -c,
      u = 1 + c,
      f = [d, d, u, d, u, u, d, d, u, u, d, u],
      m = 6,
      g = 6,
      p = 3,
      h = 2,
      _ = 1,
      M = new Float32Array(p * g * m),
      E = new Float32Array(h * g * m),
      w = new Float32Array(_ * g * m);
    for (let D = 0; D < m; D++) {
      const z = ((D % 3) * 2) / 3 - 1,
        x = D > 2 ? 0 : -1,
        A = [z, x, 0, z + 2 / 3, x, 0, z + 2 / 3, x + 1, 0, z, x, 0, z + 2 / 3, x + 1, 0, z, x + 1, 0];
      M.set(A, p * g * D), E.set(f, h * g * D);
      const O = [D, D, D, D, D, D];
      w.set(O, _ * g * D);
    }
    const S = new Gt();
    S.setAttribute("position", new Ht(M, p)), S.setAttribute("uv", new Ht(E, h)), S.setAttribute("faceIndex", new Ht(w, _)), e.push(S), i > Fi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Jo(r, e, t) {
  const n = new $n(r, e, t);
  return (n.texture.mapping = us), (n.texture.name = "PMREM.cubeUv"), (n.scissorTest = !0), n;
}
function jr(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function lp(r, e, t) {
  const n = new Float32Array(Vn),
    i = new C(0, 1, 0);
  return new Qn({
    name: "SphericalGaussianBlur",
    defines: { n: Vn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` },
    uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } },
    vertexShader: Ya(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ko() {
  return new Qn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Ya(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Qo() {
  return new Qn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Ya(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ya() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function cp(r) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === wa || l === La,
        d = l === ki || l === Vi;
      if (c || d)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new $o(r)), (u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u)), e.set(a, u), u.texture;
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const u = a.image;
            if ((c && u && u.height > 0) || (d && u && i(u))) {
              t === null && (t = new $o(r));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", s), f.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let d = 0; d < c; d++) a[d] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function up(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function dp(r, e, t, n) {
  const i = {},
    s = new WeakMap();
  function o(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener("dispose", o), delete i[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", o), (i[f.id] = !0), t.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const g in f) e.update(f[g], 34962);
    const m = u.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let h = 0, _ = p.length; h < _; h++) e.update(p[h], 34962);
    }
  }
  function c(u) {
    const f = [],
      m = u.index,
      g = u.attributes.position;
    let p = 0;
    if (m !== null) {
      const M = m.array;
      p = m.version;
      for (let E = 0, w = M.length; E < w; E += 3) {
        const S = M[E + 0],
          D = M[E + 1],
          z = M[E + 2];
        f.push(S, D, D, z, z, S);
      }
    } else {
      const M = g.array;
      p = g.version;
      for (let E = 0, w = M.length / 3 - 1; E < w; E += 3) {
        const S = E + 0,
          D = E + 1,
          z = E + 2;
        f.push(S, D, D, z, z, S);
      }
    }
    const h = new (sc(f) ? hc : dc)(f, 1);
    h.version = p;
    const _ = s.get(u);
    _ && e.remove(_), s.set(u, h);
  }
  function d(u) {
    const f = s.get(u);
    if (f) {
      const m = u.index;
      m !== null && f.version < m.version && c(u);
    } else c(u);
    return s.get(u);
  }
  return { get: a, update: l, getWireframeAttribute: d };
}
function hp(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(f) {
    s = f;
  }
  let a, l;
  function c(f) {
    (a = f.type), (l = f.bytesPerElement);
  }
  function d(f, m) {
    r.drawElements(s, m, a, f * l), t.update(m, s, 1);
  }
  function u(f, m, g) {
    if (g === 0) return;
    let p, h;
    if (i) (p = r), (h = "drawElementsInstanced");
    else if (((p = e.get("ANGLE_instanced_arrays")), (h = "drawElementsInstancedANGLE"), p === null)) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[h](s, m, a, f * l, g), t.update(m, s, g);
  }
  (this.setMode = o), (this.setIndex = c), (this.render = d), (this.renderInstances = u);
}
function fp(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, o, a) {
    switch ((t.calls++, o)) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n };
}
function pp(r, e) {
  return r[0] - e[0];
}
function mp(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function gp(r, e, t) {
  const n = {},
    i = new Float32Array(8),
    s = new WeakMap(),
    o = new Ge(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, d, u, f) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p = d.morphAttributes.position || d.morphAttributes.normal || d.morphAttributes.color,
        h = p !== void 0 ? p.length : 0;
      let _ = s.get(d);
      if (_ === void 0 || _.count !== h) {
        let $ = function () {
          R.dispose(), s.delete(d), d.removeEventListener("dispose", $);
        };
        var g = $;
        _ !== void 0 && _.texture.dispose();
        const w = d.morphAttributes.position !== void 0,
          S = d.morphAttributes.normal !== void 0,
          D = d.morphAttributes.color !== void 0,
          z = d.morphAttributes.position || [],
          x = d.morphAttributes.normal || [],
          A = d.morphAttributes.color || [];
        let O = 0;
        w === !0 && (O = 1), S === !0 && (O = 2), D === !0 && (O = 3);
        let Z = d.attributes.position.count * O,
          ue = 1;
        Z > e.maxTextureSize && ((ue = Math.ceil(Z / e.maxTextureSize)), (Z = e.maxTextureSize));
        const B = new Float32Array(Z * ue * 4 * h),
          R = new cc(B, Z, ue, h);
        (R.type = Gn), (R.needsUpdate = !0);
        const q = O * 4;
        for (let J = 0; J < h; J++) {
          const W = z[J],
            N = x[J],
            U = A[J],
            te = Z * ue * 4 * J;
          for (let Q = 0; Q < W.count; Q++) {
            const K = Q * q;
            w === !0 && (o.fromBufferAttribute(W, Q), (B[te + K + 0] = o.x), (B[te + K + 1] = o.y), (B[te + K + 2] = o.z), (B[te + K + 3] = 0)), S === !0 && (o.fromBufferAttribute(N, Q), (B[te + K + 4] = o.x), (B[te + K + 5] = o.y), (B[te + K + 6] = o.z), (B[te + K + 7] = 0)), D === !0 && (o.fromBufferAttribute(U, Q), (B[te + K + 8] = o.x), (B[te + K + 9] = o.y), (B[te + K + 10] = o.z), (B[te + K + 11] = U.itemSize === 4 ? o.w : 1));
          }
        }
        (_ = { count: h, texture: R, size: new _e(Z, ue) }), s.set(d, _), d.addEventListener("dispose", $);
      }
      let M = 0;
      for (let w = 0; w < m.length; w++) M += m[w];
      const E = d.morphTargetsRelative ? 1 : 1 - M;
      f.getUniforms().setValue(r, "morphTargetBaseInfluence", E), f.getUniforms().setValue(r, "morphTargetInfluences", m), f.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t), f.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const p = m === void 0 ? 0 : m.length;
      let h = n[d.id];
      if (h === void 0 || h.length !== p) {
        h = [];
        for (let S = 0; S < p; S++) h[S] = [S, 0];
        n[d.id] = h;
      }
      for (let S = 0; S < p; S++) {
        const D = h[S];
        (D[0] = S), (D[1] = m[S]);
      }
      h.sort(mp);
      for (let S = 0; S < 8; S++) S < p && h[S][1] ? ((a[S][0] = h[S][0]), (a[S][1] = h[S][1])) : ((a[S][0] = Number.MAX_SAFE_INTEGER), (a[S][1] = 0));
      a.sort(pp);
      const _ = d.morphAttributes.position,
        M = d.morphAttributes.normal;
      let E = 0;
      for (let S = 0; S < 8; S++) {
        const D = a[S],
          z = D[0],
          x = D[1];
        z !== Number.MAX_SAFE_INTEGER && x ? (_ && d.getAttribute("morphTarget" + S) !== _[z] && d.setAttribute("morphTarget" + S, _[z]), M && d.getAttribute("morphNormal" + S) !== M[z] && d.setAttribute("morphNormal" + S, M[z]), (i[S] = x), (E += x)) : (_ && d.hasAttribute("morphTarget" + S) === !0 && d.deleteAttribute("morphTarget" + S), M && d.hasAttribute("morphNormal" + S) === !0 && d.deleteAttribute("morphNormal" + S), (i[S] = 0));
      }
      const w = d.morphTargetsRelative ? 1 : 1 - E;
      f.getUniforms().setValue(r, "morphTargetBaseInfluence", w), f.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return { update: l };
}
function _p(r, e, t, n) {
  let i = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      d = l.geometry,
      u = e.get(l, d);
    return i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), u;
  }
  function o() {
    i = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const gc = new At(),
  _c = new cc(),
  vc = new id(),
  xc = new pc(),
  el = [],
  tl = [],
  nl = new Float32Array(16),
  il = new Float32Array(9),
  rl = new Float32Array(4);
function Xi(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = el[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (el[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), r[o].toArray(s, a);
  }
  return s;
}
function vt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function xt(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function hs(r, e) {
  let t = tl[e];
  t === void 0 && ((t = new Int32Array(e)), (tl[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function vp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function xp(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (vt(t, e)) return;
    r.uniform2fv(this.addr, e), xt(t, e);
  }
}
function Sp(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), (t[0] = e.r), (t[1] = e.g), (t[2] = e.b));
  else {
    if (vt(t, e)) return;
    r.uniform3fv(this.addr, e), xt(t, e);
  }
}
function yp(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
  else {
    if (vt(t, e)) return;
    r.uniform4fv(this.addr, e), xt(t, e);
  }
}
function bp(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (vt(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), xt(t, e);
  } else {
    if (vt(t, n)) return;
    rl.set(n), r.uniformMatrix2fv(this.addr, !1, rl), xt(t, n);
  }
}
function Mp(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (vt(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), xt(t, e);
  } else {
    if (vt(t, n)) return;
    il.set(n), r.uniformMatrix3fv(this.addr, !1, il), xt(t, n);
  }
}
function wp(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (vt(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), xt(t, e);
  } else {
    if (vt(t, n)) return;
    nl.set(n), r.uniformMatrix4fv(this.addr, !1, nl), xt(t, n);
  }
}
function Lp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function Ep(r, e) {
  const t = this.cache;
  vt(t, e) || (r.uniform2iv(this.addr, e), xt(t, e));
}
function Ap(r, e) {
  const t = this.cache;
  vt(t, e) || (r.uniform3iv(this.addr, e), xt(t, e));
}
function Cp(r, e) {
  const t = this.cache;
  vt(t, e) || (r.uniform4iv(this.addr, e), xt(t, e));
}
function Dp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function Tp(r, e) {
  const t = this.cache;
  vt(t, e) || (r.uniform2uiv(this.addr, e), xt(t, e));
}
function Pp(r, e) {
  const t = this.cache;
  vt(t, e) || (r.uniform3uiv(this.addr, e), xt(t, e));
}
function Rp(r, e) {
  const t = this.cache;
  vt(t, e) || (r.uniform4uiv(this.addr, e), xt(t, e));
}
function Np(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTexture2D(e || gc, i);
}
function Ip(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTexture3D(e || vc, i);
}
function Fp(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTextureCube(e || xc, i);
}
function Op(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTexture2DArray(e || _c, i);
}
function zp(r) {
  switch (r) {
    case 5126:
      return vp;
    case 35664:
      return xp;
    case 35665:
      return Sp;
    case 35666:
      return yp;
    case 35674:
      return bp;
    case 35675:
      return Mp;
    case 35676:
      return wp;
    case 5124:
    case 35670:
      return Lp;
    case 35667:
    case 35671:
      return Ep;
    case 35668:
    case 35672:
      return Ap;
    case 35669:
    case 35673:
      return Cp;
    case 5125:
      return Dp;
    case 36294:
      return Tp;
    case 36295:
      return Pp;
    case 36296:
      return Rp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Np;
    case 35679:
    case 36299:
    case 36307:
      return Ip;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Fp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Op;
  }
}
function Up(r, e) {
  r.uniform1fv(this.addr, e);
}
function Bp(r, e) {
  const t = Xi(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function kp(r, e) {
  const t = Xi(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function Vp(r, e) {
  const t = Xi(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Hp(r, e) {
  const t = Xi(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Gp(r, e) {
  const t = Xi(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function Wp(r, e) {
  const t = Xi(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Xp(r, e) {
  r.uniform1iv(this.addr, e);
}
function Yp(r, e) {
  r.uniform2iv(this.addr, e);
}
function qp(r, e) {
  r.uniform3iv(this.addr, e);
}
function jp(r, e) {
  r.uniform4iv(this.addr, e);
}
function Zp(r, e) {
  r.uniform1uiv(this.addr, e);
}
function $p(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Jp(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Kp(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Qp(r, e, t) {
  const n = e.length,
    i = hs(t, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.setTexture2D(e[s] || gc, i[s]);
}
function em(r, e, t) {
  const n = e.length,
    i = hs(t, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.setTexture3D(e[s] || vc, i[s]);
}
function tm(r, e, t) {
  const n = e.length,
    i = hs(t, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.setTextureCube(e[s] || xc, i[s]);
}
function nm(r, e, t) {
  const n = e.length,
    i = hs(t, n);
  r.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.setTexture2DArray(e[s] || _c, i[s]);
}
function im(r) {
  switch (r) {
    case 5126:
      return Up;
    case 35664:
      return Bp;
    case 35665:
      return kp;
    case 35666:
      return Vp;
    case 35674:
      return Hp;
    case 35675:
      return Gp;
    case 35676:
      return Wp;
    case 5124:
    case 35670:
      return Xp;
    case 35667:
    case 35671:
      return Yp;
    case 35668:
    case 35672:
      return qp;
    case 35669:
    case 35673:
      return jp;
    case 5125:
      return Zp;
    case 36294:
      return $p;
    case 36295:
      return Jp;
    case 36296:
      return Kp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Qp;
    case 35679:
    case 36299:
    case 36307:
      return em;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return tm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return nm;
  }
}
class rm {
  constructor(e, t, n) {
    (this.id = e), (this.addr = n), (this.cache = []), (this.setValue = zp(t.type));
  }
}
class sm {
  constructor(e, t, n) {
    (this.id = e), (this.addr = n), (this.cache = []), (this.size = t.size), (this.setValue = im(t.type));
  }
}
class am {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const $s = /(\w+)(\])?(\[|\.)?/g;
function sl(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function om(r, e, t) {
  const n = r.name,
    i = n.length;
  for ($s.lastIndex = 0; ; ) {
    const s = $s.exec(n),
      o = $s.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === i))) {
      sl(t, c === void 0 ? new rm(a, r, e) : new sm(a, r, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && ((u = new am(a)), sl(t, u)), (t = u);
    }
  }
}
class ts {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i),
        o = e.getUniformLocation(t, s.name);
      om(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function al(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let lm = 0;
function cm(r, e) {
  const t = r.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function um(r) {
  switch (r) {
    case Zn:
      return ["Linear", "( value )"];
    case qe:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", r), ["Linear", "( value )"];
  }
}
function ol(r, e, t) {
  const n = r.getShaderParameter(e, 35713),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      cm(r.getShaderSource(e), o)
    );
  } else return i;
}
function dm(r, e) {
  const t = um(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function hm(r, e) {
  let t;
  switch (e) {
    case gu:
      t = "Linear";
      break;
    case _u:
      t = "Reinhard";
      break;
    case vu:
      t = "OptimizedCineon";
      break;
    case xu:
      t = "ACESFilmic";
      break;
    case Su:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), (t = "Linear");
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function fm(r) {
  return [r.extensionDerivatives || !!r.envMapCubeUVHeight || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(or).join(`
`);
}
function pm(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function mm(r, e) {
  const t = {},
    n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i),
      o = s.name;
    let a = 1;
    s.type === 35674 && (a = 2), s.type === 35675 && (a = 3), s.type === 35676 && (a = 4), (t[o] = { type: s.type, location: r.getAttribLocation(e, o), locationSize: a });
  }
  return t;
}
function or(r) {
  return r !== "";
}
function ll(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function cl(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const gm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Pa(r) {
  return r.replace(gm, _m);
}
function _m(r, e) {
  const t = Ae[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Pa(t);
}
const vm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ul(r) {
  return r.replace(vm, xm);
}
function xm(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function dl(r) {
  let e =
    "precision " +
    r.precision +
    ` float;
precision ` +
    r.precision +
    " int;";
  return (
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Sm(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Kl ? (e = "SHADOWMAP_TYPE_PCF") : r.shadowMapType === jc ? (e = "SHADOWMAP_TYPE_PCF_SOFT") : r.shadowMapType === ar && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function ym(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case ki:
      case Vi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case us:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function bm(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case Vi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Mm(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case tc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case pu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case mu:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function wm(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Lm(r, e, t, n) {
  const i = r.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = Sm(t),
    c = ym(t),
    d = bm(t),
    u = Mm(t),
    f = wm(t),
    m = t.isWebGL2 ? "" : fm(t),
    g = pm(s),
    p = i.createProgram();
  let h,
    _,
    M = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((h = [g].filter(or).join(`
`)),
      h.length > 0 &&
        (h += `
`),
      (_ = [m, g].filter(or).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((h = [
        dl(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + d : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
        t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
        t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
        t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`
      ].filter(or).join(`
`)),
      (_ = [
        m,
        dl(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + d : "",
        t.envMap ? "#define " + u : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
        t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== _n ? "#define TONE_MAPPING" : "",
        t.toneMapping !== _n ? Ae.tonemapping_pars_fragment : "",
        t.toneMapping !== _n ? hm("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ae.encodings_pars_fragment,
        dm("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`
      ].filter(or).join(`
`))),
    (o = Pa(o)),
    (o = ll(o, t)),
    (o = cl(o, t)),
    (a = Pa(a)),
    (a = ll(a, t)),
    (a = cl(a, t)),
    (o = ul(o)),
    (a = ul(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((M = `#version 300 es
`),
      (h =
        ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) +
        `
` +
        h),
      (_ =
        ["#define varying in", t.glslVersion === Io ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Io ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) +
        `
` +
        _));
  const E = M + h + o,
    w = M + _ + a,
    S = al(i, 35633, E),
    D = al(i, 35632, w);
  if ((i.attachShader(p, S), i.attachShader(p, D), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), r.debug.checkShaderErrors)) {
    const A = i.getProgramInfoLog(p).trim(),
      O = i.getShaderInfoLog(S).trim(),
      Z = i.getShaderInfoLog(D).trim();
    let ue = !0,
      B = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      ue = !1;
      const R = ol(i, S, "vertex"),
        q = ol(i, D, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          A +
          `
` +
          R +
          `
` +
          q
      );
    } else A !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", A) : (O === "" || Z === "") && (B = !1);
    B && (this.diagnostics = { runnable: ue, programLog: A, vertexShader: { log: O, prefix: h }, fragmentShader: { log: Z, prefix: _ } });
  }
  i.deleteShader(S), i.deleteShader(D);
  let z;
  this.getUniforms = function () {
    return z === void 0 && (z = new ts(i, p)), z;
  };
  let x;
  return (
    (this.getAttributes = function () {
      return x === void 0 && (x = mm(i, p)), x;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this), i.deleteProgram(p), (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = lm++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = S),
    (this.fragmentShader = D),
    this
  );
}
let Em = 0;
class Am {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Cm(e)), t.set(e, n)), n;
  }
}
class Cm {
  constructor(e) {
    (this.id = Em++), (this.code = e), (this.usedTimes = 0);
  }
}
function Dm(r, e, t, n, i, s, o) {
  const a = new Ga(),
    l = new Am(),
    c = [],
    d = i.isWebGL2,
    u = i.logarithmicDepthBuffer,
    f = i.vertexTextures;
  let m = i.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function p(x, A, O, Z, ue) {
    const B = Z.fog,
      R = ue.geometry,
      q = x.isMeshStandardMaterial ? Z.environment : null,
      $ = (x.isMeshStandardMaterial ? t : e).get(x.envMap || q),
      J = !!$ && $.mapping === us ? $.image.height : null,
      W = g[x.type];
    x.precision !== null && ((m = i.getMaxPrecision(x.precision)), m !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", m, "instead."));
    const N = R.morphAttributes.position || R.morphAttributes.normal || R.morphAttributes.color,
      U = N !== void 0 ? N.length : 0;
    let te = 0;
    R.morphAttributes.position !== void 0 && (te = 1), R.morphAttributes.normal !== void 0 && (te = 2), R.morphAttributes.color !== void 0 && (te = 3);
    let Q, K, fe, ye;
    if (W) {
      const Oe = Zt[W];
      (Q = Oe.vertexShader), (K = Oe.fragmentShader);
    } else (Q = x.vertexShader), (K = x.fragmentShader), l.update(x), (fe = l.getVertexShaderID(x)), (ye = l.getFragmentShaderID(x));
    const X = r.getRenderTarget(),
      Ie = x.alphaTest > 0,
      ve = x.clearcoat > 0,
      be = x.iridescence > 0;
    return { isWebGL2: d, shaderID: W, shaderName: x.type, vertexShader: Q, fragmentShader: K, defines: x.defines, customVertexShaderID: fe, customFragmentShaderID: ye, isRawShaderMaterial: x.isRawShaderMaterial === !0, glslVersion: x.glslVersion, precision: m, instancing: ue.isInstancedMesh === !0, instancingColor: ue.isInstancedMesh === !0 && ue.instanceColor !== null, supportsVertexTextures: f, outputEncoding: X === null ? r.outputEncoding : X.isXRRenderTarget === !0 ? X.texture.encoding : Zn, map: !!x.map, matcap: !!x.matcap, envMap: !!$, envMapMode: $ && $.mapping, envMapCubeUVHeight: J, lightMap: !!x.lightMap, aoMap: !!x.aoMap, emissiveMap: !!x.emissiveMap, bumpMap: !!x.bumpMap, normalMap: !!x.normalMap, objectSpaceNormalMap: x.normalMapType === Bu, tangentSpaceNormalMap: x.normalMapType === rc, decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === qe, clearcoat: ve, clearcoatMap: ve && !!x.clearcoatMap, clearcoatRoughnessMap: ve && !!x.clearcoatRoughnessMap, clearcoatNormalMap: ve && !!x.clearcoatNormalMap, iridescence: be, iridescenceMap: be && !!x.iridescenceMap, iridescenceThicknessMap: be && !!x.iridescenceThicknessMap, displacementMap: !!x.displacementMap, roughnessMap: !!x.roughnessMap, metalnessMap: !!x.metalnessMap, specularMap: !!x.specularMap, specularIntensityMap: !!x.specularIntensityMap, specularColorMap: !!x.specularColorMap, opaque: x.transparent === !1 && x.blending === zi, alphaMap: !!x.alphaMap, alphaTest: Ie, gradientMap: !!x.gradientMap, sheen: x.sheen > 0, sheenColorMap: !!x.sheenColorMap, sheenRoughnessMap: !!x.sheenRoughnessMap, transmission: x.transmission > 0, transmissionMap: !!x.transmissionMap, thicknessMap: !!x.thicknessMap, combine: x.combine, vertexTangents: !!x.normalMap && !!R.attributes.tangent, vertexColors: x.vertexColors, vertexAlphas: x.vertexColors === !0 && !!R.attributes.color && R.attributes.color.itemSize === 4, vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap, uvsVertexOnly: !(!!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || x.transmission > 0 || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || x.sheen > 0 || !!x.sheenColorMap || !!x.sheenRoughnessMap) && !!x.displacementMap, fog: !!B, useFog: x.fog === !0, fogExp2: B && B.isFogExp2, flatShading: !!x.flatShading, sizeAttenuation: x.sizeAttenuation, logarithmicDepthBuffer: u, skinning: ue.isSkinnedMesh === !0, morphTargets: R.morphAttributes.position !== void 0, morphNormals: R.morphAttributes.normal !== void 0, morphColors: R.morphAttributes.color !== void 0, morphTargetsCount: U, morphTextureStride: te, numDirLights: A.directional.length, numPointLights: A.point.length, numSpotLights: A.spot.length, numSpotLightMaps: A.spotLightMap.length, numRectAreaLights: A.rectArea.length, numHemiLights: A.hemi.length, numDirLightShadows: A.directionalShadowMap.length, numPointLightShadows: A.pointShadowMap.length, numSpotLightShadows: A.spotShadowMap.length, numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: x.dithering, shadowMapEnabled: r.shadowMap.enabled && O.length > 0, shadowMapType: r.shadowMap.type, toneMapping: x.toneMapped ? r.toneMapping : _n, physicallyCorrectLights: r.physicallyCorrectLights, premultipliedAlpha: x.premultipliedAlpha, doubleSided: x.side === _t, flipSided: x.side === Ot, useDepthPacking: !!x.depthPacking, depthPacking: x.depthPacking || 0, index0AttributeName: x.index0AttributeName, extensionDerivatives: x.extensions && x.extensions.derivatives, extensionFragDepth: x.extensions && x.extensions.fragDepth, extensionDrawBuffers: x.extensions && x.extensions.drawBuffers, extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD, rendererExtensionFragDepth: d || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: d || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: d || n.has("EXT_shader_texture_lod"), customProgramCacheKey: x.customProgramCacheKey() };
  }
  function h(x) {
    const A = [];
    if ((x.shaderID ? A.push(x.shaderID) : (A.push(x.customVertexShaderID), A.push(x.customFragmentShaderID)), x.defines !== void 0)) for (const O in x.defines) A.push(O), A.push(x.defines[O]);
    return x.isRawShaderMaterial === !1 && (_(A, x), M(A, x), A.push(r.outputEncoding)), A.push(x.customProgramCacheKey), A.join();
  }
  function _(x, A) {
    x.push(A.precision), x.push(A.outputEncoding), x.push(A.envMapMode), x.push(A.envMapCubeUVHeight), x.push(A.combine), x.push(A.vertexUvs), x.push(A.fogExp2), x.push(A.sizeAttenuation), x.push(A.morphTargetsCount), x.push(A.morphAttributeCount), x.push(A.numDirLights), x.push(A.numPointLights), x.push(A.numSpotLights), x.push(A.numSpotLightMaps), x.push(A.numHemiLights), x.push(A.numRectAreaLights), x.push(A.numDirLightShadows), x.push(A.numPointLightShadows), x.push(A.numSpotLightShadows), x.push(A.numSpotLightShadowsWithMaps), x.push(A.shadowMapType), x.push(A.toneMapping), x.push(A.numClippingPlanes), x.push(A.numClipIntersection), x.push(A.depthPacking);
  }
  function M(x, A) {
    a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.map && a.enable(4), A.matcap && a.enable(5), A.envMap && a.enable(6), A.lightMap && a.enable(7), A.aoMap && a.enable(8), A.emissiveMap && a.enable(9), A.bumpMap && a.enable(10), A.normalMap && a.enable(11), A.objectSpaceNormalMap && a.enable(12), A.tangentSpaceNormalMap && a.enable(13), A.clearcoat && a.enable(14), A.clearcoatMap && a.enable(15), A.clearcoatRoughnessMap && a.enable(16), A.clearcoatNormalMap && a.enable(17), A.iridescence && a.enable(18), A.iridescenceMap && a.enable(19), A.iridescenceThicknessMap && a.enable(20), A.displacementMap && a.enable(21), A.specularMap && a.enable(22), A.roughnessMap && a.enable(23), A.metalnessMap && a.enable(24), A.gradientMap && a.enable(25), A.alphaMap && a.enable(26), A.alphaTest && a.enable(27), A.vertexColors && a.enable(28), A.vertexAlphas && a.enable(29), A.vertexUvs && a.enable(30), A.vertexTangents && a.enable(31), A.uvsVertexOnly && a.enable(32), x.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.skinning && a.enable(4), A.morphTargets && a.enable(5), A.morphNormals && a.enable(6), A.morphColors && a.enable(7), A.premultipliedAlpha && a.enable(8), A.shadowMapEnabled && a.enable(9), A.physicallyCorrectLights && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.specularIntensityMap && a.enable(15), A.specularColorMap && a.enable(16), A.transmission && a.enable(17), A.transmissionMap && a.enable(18), A.thicknessMap && a.enable(19), A.sheen && a.enable(20), A.sheenColorMap && a.enable(21), A.sheenRoughnessMap && a.enable(22), A.decodeVideoTexture && a.enable(23), A.opaque && a.enable(24), x.push(a.mask);
  }
  function E(x) {
    const A = g[x.type];
    let O;
    if (A) {
      const Z = Zt[A];
      O = md.clone(Z.uniforms);
    } else O = x.uniforms;
    return O;
  }
  function w(x, A) {
    let O;
    for (let Z = 0, ue = c.length; Z < ue; Z++) {
      const B = c[Z];
      if (B.cacheKey === A) {
        (O = B), ++O.usedTimes;
        break;
      }
    }
    return O === void 0 && ((O = new Lm(r, A, x, s)), c.push(O)), O;
  }
  function S(x) {
    if (--x.usedTimes === 0) {
      const A = c.indexOf(x);
      (c[A] = c[c.length - 1]), c.pop(), x.destroy();
    }
  }
  function D(x) {
    l.remove(x);
  }
  function z() {
    l.dispose();
  }
  return { getParameters: p, getProgramCacheKey: h, getUniforms: E, acquireProgram: w, releaseProgram: S, releaseShaderCache: D, programs: c, dispose: z };
}
function Tm() {
  let r = new WeakMap();
  function e(s) {
    let o = r.get(s);
    return o === void 0 && ((o = {}), r.set(s, o)), o;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, o, a) {
    r.get(s)[o] = a;
  }
  function i() {
    r = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Pm(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function hl(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function fl() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(u, f, m, g, p, h) {
    let _ = r[e];
    return _ === void 0 ? ((_ = { id: u.id, object: u, geometry: f, material: m, groupOrder: g, renderOrder: u.renderOrder, z: p, group: h }), (r[e] = _)) : ((_.id = u.id), (_.object = u), (_.geometry = f), (_.material = m), (_.groupOrder = g), (_.renderOrder = u.renderOrder), (_.z = p), (_.group = h)), e++, _;
  }
  function a(u, f, m, g, p, h) {
    const _ = o(u, f, m, g, p, h);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_);
  }
  function l(u, f, m, g, p, h) {
    const _ = o(u, f, m, g, p, h);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function c(u, f) {
    t.length > 1 && t.sort(u || Pm), n.length > 1 && n.sort(f || hl), i.length > 1 && i.sort(f || hl);
  }
  function d() {
    for (let u = e, f = r.length; u < f; u++) {
      const m = r[u];
      if (m.id === null) break;
      (m.id = null), (m.object = null), (m.geometry = null), (m.material = null), (m.group = null);
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: s, push: a, unshift: l, finish: d, sort: c };
}
function Rm() {
  let r = new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? ((o = new fl()), r.set(n, [o])) : i >= s.length ? ((o = new fl()), s.push(o)) : (o = s[i]), o;
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Nm() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new C(), color: new De() };
          break;
        case "SpotLight":
          t = { position: new C(), direction: new C(), color: new De(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          t = { position: new C(), color: new De(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new C(), skyColor: new De(), groundColor: new De() };
          break;
        case "RectAreaLight":
          t = { color: new De(), position: new C(), halfWidth: new C(), halfHeight: new C() };
          break;
      }
      return (r[e.id] = t), t;
    }
  };
}
function Im() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _e() };
          break;
        case "SpotLight":
          t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _e() };
          break;
        case "PointLight":
          t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _e(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
          break;
      }
      return (r[e.id] = t), t;
    }
  };
}
let Fm = 0;
function Om(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function zm(r, e) {
  const t = new Nm(),
    n = Im(),
    i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0 };
  for (let d = 0; d < 9; d++) i.probe.push(new C());
  const s = new C(),
    o = new We(),
    a = new We();
  function l(d, u) {
    let f = 0,
      m = 0,
      g = 0;
    for (let Z = 0; Z < 9; Z++) i.probe[Z].set(0, 0, 0);
    let p = 0,
      h = 0,
      _ = 0,
      M = 0,
      E = 0,
      w = 0,
      S = 0,
      D = 0,
      z = 0,
      x = 0;
    d.sort(Om);
    const A = u !== !0 ? Math.PI : 1;
    for (let Z = 0, ue = d.length; Z < ue; Z++) {
      const B = d[Z],
        R = B.color,
        q = B.intensity,
        $ = B.distance,
        J = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight) (f += R.r * q * A), (m += R.g * q * A), (g += R.b * q * A);
      else if (B.isLightProbe) for (let W = 0; W < 9; W++) i.probe[W].addScaledVector(B.sh.coefficients[W], q);
      else if (B.isDirectionalLight) {
        const W = t.get(B);
        if ((W.color.copy(B.color).multiplyScalar(B.intensity * A), B.castShadow)) {
          const N = B.shadow,
            U = n.get(B);
          (U.shadowBias = N.bias), (U.shadowNormalBias = N.normalBias), (U.shadowRadius = N.radius), (U.shadowMapSize = N.mapSize), (i.directionalShadow[p] = U), (i.directionalShadowMap[p] = J), (i.directionalShadowMatrix[p] = B.shadow.matrix), w++;
        }
        (i.directional[p] = W), p++;
      } else if (B.isSpotLight) {
        const W = t.get(B);
        W.position.setFromMatrixPosition(B.matrixWorld), W.color.copy(R).multiplyScalar(q * A), (W.distance = $), (W.coneCos = Math.cos(B.angle)), (W.penumbraCos = Math.cos(B.angle * (1 - B.penumbra))), (W.decay = B.decay), (i.spot[_] = W);
        const N = B.shadow;
        if ((B.map && ((i.spotLightMap[z] = B.map), z++, N.updateMatrices(B), B.castShadow && x++), (i.spotLightMatrix[_] = N.matrix), B.castShadow)) {
          const U = n.get(B);
          (U.shadowBias = N.bias), (U.shadowNormalBias = N.normalBias), (U.shadowRadius = N.radius), (U.shadowMapSize = N.mapSize), (i.spotShadow[_] = U), (i.spotShadowMap[_] = J), D++;
        }
        _++;
      } else if (B.isRectAreaLight) {
        const W = t.get(B);
        W.color.copy(R).multiplyScalar(q), W.halfWidth.set(B.width * 0.5, 0, 0), W.halfHeight.set(0, B.height * 0.5, 0), (i.rectArea[M] = W), M++;
      } else if (B.isPointLight) {
        const W = t.get(B);
        if ((W.color.copy(B.color).multiplyScalar(B.intensity * A), (W.distance = B.distance), (W.decay = B.decay), B.castShadow)) {
          const N = B.shadow,
            U = n.get(B);
          (U.shadowBias = N.bias), (U.shadowNormalBias = N.normalBias), (U.shadowRadius = N.radius), (U.shadowMapSize = N.mapSize), (U.shadowCameraNear = N.camera.near), (U.shadowCameraFar = N.camera.far), (i.pointShadow[h] = U), (i.pointShadowMap[h] = J), (i.pointShadowMatrix[h] = B.shadow.matrix), S++;
        }
        (i.point[h] = W), h++;
      } else if (B.isHemisphereLight) {
        const W = t.get(B);
        W.skyColor.copy(B.color).multiplyScalar(q * A), W.groundColor.copy(B.groundColor).multiplyScalar(q * A), (i.hemi[E] = W), E++;
      }
    }
    M > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? ((i.rectAreaLTC1 = re.LTC_FLOAT_1), (i.rectAreaLTC2 = re.LTC_FLOAT_2)) : r.has("OES_texture_half_float_linear") === !0 ? ((i.rectAreaLTC1 = re.LTC_HALF_1), (i.rectAreaLTC2 = re.LTC_HALF_2)) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), (i.ambient[0] = f), (i.ambient[1] = m), (i.ambient[2] = g);
    const O = i.hash;
    (O.directionalLength !== p || O.pointLength !== h || O.spotLength !== _ || O.rectAreaLength !== M || O.hemiLength !== E || O.numDirectionalShadows !== w || O.numPointShadows !== S || O.numSpotShadows !== D || O.numSpotMaps !== z) && ((i.directional.length = p), (i.spot.length = _), (i.rectArea.length = M), (i.point.length = h), (i.hemi.length = E), (i.directionalShadow.length = w), (i.directionalShadowMap.length = w), (i.pointShadow.length = S), (i.pointShadowMap.length = S), (i.spotShadow.length = D), (i.spotShadowMap.length = D), (i.directionalShadowMatrix.length = w), (i.pointShadowMatrix.length = S), (i.spotLightMatrix.length = D + z - x), (i.spotLightMap.length = z), (i.numSpotLightShadowsWithMaps = x), (O.directionalLength = p), (O.pointLength = h), (O.spotLength = _), (O.rectAreaLength = M), (O.hemiLength = E), (O.numDirectionalShadows = w), (O.numPointShadows = S), (O.numSpotShadows = D), (O.numSpotMaps = z), (i.version = Fm++));
  }
  function c(d, u) {
    let f = 0,
      m = 0,
      g = 0,
      p = 0,
      h = 0;
    const _ = u.matrixWorldInverse;
    for (let M = 0, E = d.length; M < E; M++) {
      const w = d[M];
      if (w.isDirectionalLight) {
        const S = i.directional[f];
        S.direction.setFromMatrixPosition(w.matrixWorld), s.setFromMatrixPosition(w.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(_), f++;
      } else if (w.isSpotLight) {
        const S = i.spot[g];
        S.position.setFromMatrixPosition(w.matrixWorld), S.position.applyMatrix4(_), S.direction.setFromMatrixPosition(w.matrixWorld), s.setFromMatrixPosition(w.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(_), g++;
      } else if (w.isRectAreaLight) {
        const S = i.rectArea[p];
        S.position.setFromMatrixPosition(w.matrixWorld), S.position.applyMatrix4(_), a.identity(), o.copy(w.matrixWorld), o.premultiply(_), a.extractRotation(o), S.halfWidth.set(w.width * 0.5, 0, 0), S.halfHeight.set(0, w.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), p++;
      } else if (w.isPointLight) {
        const S = i.point[m];
        S.position.setFromMatrixPosition(w.matrixWorld), S.position.applyMatrix4(_), m++;
      } else if (w.isHemisphereLight) {
        const S = i.hemi[h];
        S.direction.setFromMatrixPosition(w.matrixWorld), S.direction.transformDirection(_), h++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function pl(r, e) {
  const t = new zm(r, e),
    n = [],
    i = [];
  function s() {
    (n.length = 0), (i.length = 0);
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
    i.push(u);
  }
  function l(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return { init: s, state: { lightsArray: n, shadowsArray: i, lights: t }, setupLights: l, setupLightsView: c, pushLight: o, pushShadow: a };
}
function Um(r, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return a === void 0 ? ((l = new pl(r, e)), t.set(s, [l])) : o >= a.length ? ((l = new pl(r, e)), a.push(l)) : (l = a[o]), l;
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class Bm extends Wi {
  constructor(e) {
    super(), (this.isMeshDepthMaterial = !0), (this.type = "MeshDepthMaterial"), (this.depthPacking = zu), (this.map = null), (this.alphaMap = null), (this.displacementMap = null), (this.displacementScale = 1), (this.displacementBias = 0), (this.wireframe = !1), (this.wireframeLinewidth = 1), this.setValues(e);
  }
  copy(e) {
    return super.copy(e), (this.depthPacking = e.depthPacking), (this.map = e.map), (this.alphaMap = e.alphaMap), (this.displacementMap = e.displacementMap), (this.displacementScale = e.displacementScale), (this.displacementBias = e.displacementBias), (this.wireframe = e.wireframe), (this.wireframeLinewidth = e.wireframeLinewidth), this;
  }
}
class km extends Wi {
  constructor(e) {
    super(), (this.isMeshDistanceMaterial = !0), (this.type = "MeshDistanceMaterial"), (this.referencePosition = new C()), (this.nearDistance = 1), (this.farDistance = 1e3), (this.map = null), (this.alphaMap = null), (this.displacementMap = null), (this.displacementScale = 1), (this.displacementBias = 0), this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), (this.nearDistance = e.nearDistance), (this.farDistance = e.farDistance), (this.map = e.map), (this.alphaMap = e.alphaMap), (this.displacementMap = e.displacementMap), (this.displacementScale = e.displacementScale), (this.displacementBias = e.displacementBias), this;
  }
}
const Vm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Hm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Gm(r, e, t) {
  let n = new Wa();
  const i = new _e(),
    s = new _e(),
    o = new Ge(),
    a = new Bm({ depthPacking: Uu }),
    l = new km(),
    c = {},
    d = t.maxTextureSize,
    u = { 0: Ot, 1: Bi, 2: _t },
    f = new Qn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new _e() }, radius: { value: 4 } }, vertexShader: Vm, fragmentShader: Hm }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Gt();
  g.setAttribute("position", new Ht(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const p = new Ne(g, f),
    h = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Kl),
    (this.render = function (w, S, D) {
      if (h.enabled === !1 || (h.autoUpdate === !1 && h.needsUpdate === !1) || w.length === 0) return;
      const z = r.getRenderTarget(),
        x = r.getActiveCubeFace(),
        A = r.getActiveMipmapLevel(),
        O = r.state;
      O.setBlending(Dn), O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
      for (let Z = 0, ue = w.length; Z < ue; Z++) {
        const B = w[Z],
          R = B.shadow;
        if (R === void 0) {
          console.warn("THREE.WebGLShadowMap:", B, "has no shadow.");
          continue;
        }
        if (R.autoUpdate === !1 && R.needsUpdate === !1) continue;
        i.copy(R.mapSize);
        const q = R.getFrameExtents();
        if ((i.multiply(q), s.copy(R.mapSize), (i.x > d || i.y > d) && (i.x > d && ((s.x = Math.floor(d / q.x)), (i.x = s.x * q.x), (R.mapSize.x = s.x)), i.y > d && ((s.y = Math.floor(d / q.y)), (i.y = s.y * q.y), (R.mapSize.y = s.y))), R.map === null)) {
          const J = this.type !== ar ? { minFilter: St, magFilter: St } : {};
          (R.map = new $n(i.x, i.y, J)), (R.map.texture.name = B.name + ".shadowMap"), R.camera.updateProjectionMatrix();
        }
        r.setRenderTarget(R.map), r.clear();
        const $ = R.getViewportCount();
        for (let J = 0; J < $; J++) {
          const W = R.getViewport(J);
          o.set(s.x * W.x, s.y * W.y, s.x * W.z, s.y * W.w), O.viewport(o), R.updateMatrices(B, J), (n = R.getFrustum()), E(S, D, R.camera, B, this.type);
        }
        R.isPointLightShadow !== !0 && this.type === ar && _(R, D), (R.needsUpdate = !1);
      }
      (h.needsUpdate = !1), r.setRenderTarget(z, x, A);
    });
  function _(w, S) {
    const D = e.update(p);
    f.defines.VSM_SAMPLES !== w.blurSamples && ((f.defines.VSM_SAMPLES = w.blurSamples), (m.defines.VSM_SAMPLES = w.blurSamples), (f.needsUpdate = !0), (m.needsUpdate = !0)), w.mapPass === null && (w.mapPass = new $n(i.x, i.y)), (f.uniforms.shadow_pass.value = w.map.texture), (f.uniforms.resolution.value = w.mapSize), (f.uniforms.radius.value = w.radius), r.setRenderTarget(w.mapPass), r.clear(), r.renderBufferDirect(S, null, D, f, p, null), (m.uniforms.shadow_pass.value = w.mapPass.texture), (m.uniforms.resolution.value = w.mapSize), (m.uniforms.radius.value = w.radius), r.setRenderTarget(w.map), r.clear(), r.renderBufferDirect(S, null, D, m, p, null);
  }
  function M(w, S, D, z, x, A) {
    let O = null;
    const Z = D.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if ((Z !== void 0 ? (O = Z) : (O = D.isPointLight === !0 ? l : a), (r.localClippingEnabled && S.clipShadows === !0 && Array.isArray(S.clippingPlanes) && S.clippingPlanes.length !== 0) || (S.displacementMap && S.displacementScale !== 0) || (S.alphaMap && S.alphaTest > 0))) {
      const ue = O.uuid,
        B = S.uuid;
      let R = c[ue];
      R === void 0 && ((R = {}), (c[ue] = R));
      let q = R[B];
      q === void 0 && ((q = O.clone()), (R[B] = q)), (O = q);
    }
    return (O.visible = S.visible), (O.wireframe = S.wireframe), A === ar ? (O.side = S.shadowSide !== null ? S.shadowSide : S.side) : (O.side = S.shadowSide !== null ? S.shadowSide : u[S.side]), (O.alphaMap = S.alphaMap), (O.alphaTest = S.alphaTest), (O.clipShadows = S.clipShadows), (O.clippingPlanes = S.clippingPlanes), (O.clipIntersection = S.clipIntersection), (O.displacementMap = S.displacementMap), (O.displacementScale = S.displacementScale), (O.displacementBias = S.displacementBias), (O.wireframeLinewidth = S.wireframeLinewidth), (O.linewidth = S.linewidth), D.isPointLight === !0 && O.isMeshDistanceMaterial === !0 && (O.referencePosition.setFromMatrixPosition(D.matrixWorld), (O.nearDistance = z), (O.farDistance = x)), O;
  }
  function E(w, S, D, z, x) {
    if (w.visible === !1) return;
    if (w.layers.test(S.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || (w.receiveShadow && x === ar)) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, w.matrixWorld);
      const Z = e.update(w),
        ue = w.material;
      if (Array.isArray(ue)) {
        const B = Z.groups;
        for (let R = 0, q = B.length; R < q; R++) {
          const $ = B[R],
            J = ue[$.materialIndex];
          if (J && J.visible) {
            const W = M(w, J, z, D.near, D.far, x);
            r.renderBufferDirect(D, null, Z, W, w, $);
          }
        }
      } else if (ue.visible) {
        const B = M(w, ue, z, D.near, D.far, x);
        r.renderBufferDirect(D, null, Z, B, w, null);
      }
    }
    const O = w.children;
    for (let Z = 0, ue = O.length; Z < ue; Z++) E(O[Z], S, D, z, x);
  }
}
function Wm(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let T = !1;
    const se = new Ge();
    let k = null;
    const de = new Ge(0, 0, 0, 0);
    return {
      setMask: function (ce) {
        k !== ce && !T && (r.colorMask(ce, ce, ce, ce), (k = ce));
      },
      setLocked: function (ce) {
        T = ce;
      },
      setClear: function (ce, Re, nt, je, xn) {
        xn === !0 && ((ce *= je), (Re *= je), (nt *= je)), se.set(ce, Re, nt, je), de.equals(se) === !1 && (r.clearColor(ce, Re, nt, je), de.copy(se));
      },
      reset: function () {
        (T = !1), (k = null), de.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let T = !1,
      se = null,
      k = null,
      de = null;
    return {
      setTest: function (ce) {
        ce ? Ie(2929) : ve(2929);
      },
      setMask: function (ce) {
        se !== ce && !T && (r.depthMask(ce), (se = ce));
      },
      setFunc: function (ce) {
        if (k !== ce) {
          if (ce)
            switch (ce) {
              case ou:
                r.depthFunc(512);
                break;
              case lu:
                r.depthFunc(519);
                break;
              case cu:
                r.depthFunc(513);
                break;
              case Ma:
                r.depthFunc(515);
                break;
              case uu:
                r.depthFunc(514);
                break;
              case du:
                r.depthFunc(518);
                break;
              case hu:
                r.depthFunc(516);
                break;
              case fu:
                r.depthFunc(517);
                break;
              default:
                r.depthFunc(515);
            }
          else r.depthFunc(515);
          k = ce;
        }
      },
      setLocked: function (ce) {
        T = ce;
      },
      setClear: function (ce) {
        de !== ce && (r.clearDepth(ce), (de = ce));
      },
      reset: function () {
        (T = !1), (se = null), (k = null), (de = null);
      }
    };
  }
  function o() {
    let T = !1,
      se = null,
      k = null,
      de = null,
      ce = null,
      Re = null,
      nt = null,
      je = null,
      xn = null;
    return {
      setTest: function (Xe) {
        T || (Xe ? Ie(2960) : ve(2960));
      },
      setMask: function (Xe) {
        se !== Xe && !T && (r.stencilMask(Xe), (se = Xe));
      },
      setFunc: function (Xe, ln, Pt) {
        (k !== Xe || de !== ln || ce !== Pt) && (r.stencilFunc(Xe, ln, Pt), (k = Xe), (de = ln), (ce = Pt));
      },
      setOp: function (Xe, ln, Pt) {
        (Re !== Xe || nt !== ln || je !== Pt) && (r.stencilOp(Xe, ln, Pt), (Re = Xe), (nt = ln), (je = Pt));
      },
      setLocked: function (Xe) {
        T = Xe;
      },
      setClear: function (Xe) {
        xn !== Xe && (r.clearStencil(Xe), (xn = Xe));
      },
      reset: function () {
        (T = !1), (se = null), (k = null), (de = null), (ce = null), (Re = null), (nt = null), (je = null), (xn = null);
      }
    };
  }
  const a = new i(),
    l = new s(),
    c = new o(),
    d = new WeakMap(),
    u = new WeakMap();
  let f = {},
    m = {},
    g = new WeakMap(),
    p = [],
    h = null,
    _ = !1,
    M = null,
    E = null,
    w = null,
    S = null,
    D = null,
    z = null,
    x = null,
    A = !1,
    O = null,
    Z = null,
    ue = null,
    B = null,
    R = null;
  const q = r.getParameter(35661);
  let $ = !1,
    J = 0;
  const W = r.getParameter(7938);
  W.indexOf("WebGL") !== -1 ? ((J = parseFloat(/^WebGL (\d)/.exec(W)[1])), ($ = J >= 1)) : W.indexOf("OpenGL ES") !== -1 && ((J = parseFloat(/^OpenGL ES (\d)/.exec(W)[1])), ($ = J >= 2));
  let N = null,
    U = {};
  const te = r.getParameter(3088),
    Q = r.getParameter(2978),
    K = new Ge().fromArray(te),
    fe = new Ge().fromArray(Q);
  function ye(T, se, k) {
    const de = new Uint8Array(4),
      ce = r.createTexture();
    r.bindTexture(T, ce), r.texParameteri(T, 10241, 9728), r.texParameteri(T, 10240, 9728);
    for (let Re = 0; Re < k; Re++) r.texImage2D(se + Re, 0, 6408, 1, 1, 0, 6408, 5121, de);
    return ce;
  }
  const X = {};
  (X[3553] = ye(3553, 3553, 1)), (X[34067] = ye(34067, 34069, 6)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ie(2929), l.setFunc(Ma), Qe(!1), yt(ro), Ie(2884), Ze(Dn);
  function Ie(T) {
    f[T] !== !0 && (r.enable(T), (f[T] = !0));
  }
  function ve(T) {
    f[T] !== !1 && (r.disable(T), (f[T] = !1));
  }
  function be(T, se) {
    return m[T] !== se ? (r.bindFramebuffer(T, se), (m[T] = se), n && (T === 36009 && (m[36160] = se), T === 36160 && (m[36009] = se)), !0) : !1;
  }
  function he(T, se) {
    let k = p,
      de = !1;
    if (T)
      if (((k = g.get(se)), k === void 0 && ((k = []), g.set(se, k)), T.isWebGLMultipleRenderTargets)) {
        const ce = T.texture;
        if (k.length !== ce.length || k[0] !== 36064) {
          for (let Re = 0, nt = ce.length; Re < nt; Re++) k[Re] = 36064 + Re;
          (k.length = ce.length), (de = !0);
        }
      } else k[0] !== 36064 && ((k[0] = 36064), (de = !0));
    else k[0] !== 1029 && ((k[0] = 1029), (de = !0));
    de && (t.isWebGL2 ? r.drawBuffers(k) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k));
  }
  function Oe(T) {
    return h !== T ? (r.useProgram(T), (h = T), !0) : !1;
  }
  const Le = { [Ri]: 32774, [$c]: 32778, [Jc]: 32779 };
  if (n) (Le[lo] = 32775), (Le[co] = 32776);
  else {
    const T = e.get("EXT_blend_minmax");
    T !== null && ((Le[lo] = T.MIN_EXT), (Le[co] = T.MAX_EXT));
  }
  const ge = { [Kc]: 0, [Qc]: 1, [eu]: 768, [Ql]: 770, [au]: 776, [ru]: 774, [nu]: 772, [tu]: 769, [ec]: 771, [su]: 775, [iu]: 773 };
  function Ze(T, se, k, de, ce, Re, nt, je) {
    if (T === Dn) {
      _ === !0 && (ve(3042), (_ = !1));
      return;
    }
    if ((_ === !1 && (Ie(3042), (_ = !0)), T !== Zc)) {
      if (T !== M || je !== A) {
        if (((E !== Ri || D !== Ri) && (r.blendEquation(32774), (E = Ri), (D = Ri)), je))
          switch (T) {
            case zi:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case so:
              r.blendFunc(1, 1);
              break;
            case ao:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case oo:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        else
          switch (T) {
            case zi:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case so:
              r.blendFunc(770, 1);
              break;
            case ao:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case oo:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        (w = null), (S = null), (z = null), (x = null), (M = T), (A = je);
      }
      return;
    }
    (ce = ce || se), (Re = Re || k), (nt = nt || de), (se !== E || ce !== D) && (r.blendEquationSeparate(Le[se], Le[ce]), (E = se), (D = ce)), (k !== w || de !== S || Re !== z || nt !== x) && (r.blendFuncSeparate(ge[k], ge[de], ge[Re], ge[nt]), (w = k), (S = de), (z = Re), (x = nt)), (M = T), (A = null);
  }
  function ot(T, se) {
    T.side === _t ? ve(2884) : Ie(2884);
    let k = T.side === Ot;
    se && (k = !k), Qe(k), T.blending === zi && T.transparent === !1 ? Ze(Dn) : Ze(T.blending, T.blendEquation, T.blendSrc, T.blendDst, T.blendEquationAlpha, T.blendSrcAlpha, T.blendDstAlpha, T.premultipliedAlpha), l.setFunc(T.depthFunc), l.setTest(T.depthTest), l.setMask(T.depthWrite), a.setMask(T.colorWrite);
    const de = T.stencilWrite;
    c.setTest(de), de && (c.setMask(T.stencilWriteMask), c.setFunc(T.stencilFunc, T.stencilRef, T.stencilFuncMask), c.setOp(T.stencilFail, T.stencilZFail, T.stencilZPass)), ze(T.polygonOffset, T.polygonOffsetFactor, T.polygonOffsetUnits), T.alphaToCoverage === !0 ? Ie(32926) : ve(32926);
  }
  function Qe(T) {
    O !== T && (T ? r.frontFace(2304) : r.frontFace(2305), (O = T));
  }
  function yt(T) {
    T !== Yc ? (Ie(2884), T !== Z && (T === ro ? r.cullFace(1029) : T === qc ? r.cullFace(1028) : r.cullFace(1032))) : ve(2884), (Z = T);
  }
  function et(T) {
    T !== ue && ($ && r.lineWidth(T), (ue = T));
  }
  function ze(T, se, k) {
    T ? (Ie(32823), (B !== se || R !== k) && (r.polygonOffset(se, k), (B = se), (R = k))) : ve(32823);
  }
  function Tt(T) {
    T ? Ie(3089) : ve(3089);
  }
  function bt(T) {
    T === void 0 && (T = 33984 + q - 1), N !== T && (r.activeTexture(T), (N = T));
  }
  function L(T, se) {
    N === null && bt();
    let k = U[N];
    k === void 0 && ((k = { type: void 0, texture: void 0 }), (U[N] = k)), (k.type !== T || k.texture !== se) && (r.bindTexture(T, se || X[T]), (k.type = T), (k.texture = se));
  }
  function v() {
    const T = U[N];
    T !== void 0 && T.type !== void 0 && (r.bindTexture(T.type, null), (T.type = void 0), (T.texture = void 0));
  }
  function V() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ee() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ne() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function oe() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function xe() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function y() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function j() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ie() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function le(T) {
    K.equals(T) === !1 && (r.scissor(T.x, T.y, T.z, T.w), K.copy(T));
  }
  function ae(T) {
    fe.equals(T) === !1 && (r.viewport(T.x, T.y, T.z, T.w), fe.copy(T));
  }
  function Se(T, se) {
    let k = u.get(se);
    k === void 0 && ((k = new WeakMap()), u.set(se, k));
    let de = k.get(T);
    de === void 0 && ((de = r.getUniformBlockIndex(se, T.name)), k.set(T, de));
  }
  function Ce(T, se) {
    const de = u.get(se).get(T);
    d.get(T) !== de && (r.uniformBlockBinding(se, de, T.__bindingPointIndex), d.set(T, de));
  }
  function He() {
    r.disable(3042), r.disable(2884), r.disable(2929), r.disable(32823), r.disable(3089), r.disable(2960), r.disable(32926), r.blendEquation(32774), r.blendFunc(1, 0), r.blendFuncSeparate(1, 0, 1, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(513), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(519, 0, 4294967295), r.stencilOp(7680, 7680, 7680), r.clearStencil(0), r.cullFace(1029), r.frontFace(2305), r.polygonOffset(0, 0), r.activeTexture(33984), r.bindFramebuffer(36160, null), n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), (f = {}), (N = null), (U = {}), (m = {}), (g = new WeakMap()), (p = []), (h = null), (_ = !1), (M = null), (E = null), (w = null), (S = null), (D = null), (z = null), (x = null), (A = !1), (O = null), (Z = null), (ue = null), (B = null), (R = null), K.set(0, 0, r.canvas.width, r.canvas.height), fe.set(0, 0, r.canvas.width, r.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return { buffers: { color: a, depth: l, stencil: c }, enable: Ie, disable: ve, bindFramebuffer: be, drawBuffers: he, useProgram: Oe, setBlending: Ze, setMaterial: ot, setFlipSided: Qe, setCullFace: yt, setLineWidth: et, setPolygonOffset: ze, setScissorTest: Tt, activeTexture: bt, bindTexture: L, unbindTexture: v, compressedTexImage2D: V, texImage2D: j, texImage3D: ie, updateUBOMapping: Se, uniformBlockBinding: Ce, texStorage2D: xe, texStorage3D: y, texSubImage2D: ee, texSubImage3D: ne, compressedTexSubImage2D: oe, scissor: le, viewport: ae, reset: He };
}
function Xm(r, e, t, n, i, s, o) {
  const a = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    d = i.maxTextureSize,
    u = i.maxSamples,
    f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
    m = /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let p;
  const h = new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function M(L, v) {
    return _ ? new OffscreenCanvas(L, v) : gr("canvas");
  }
  function E(L, v, V, ee) {
    let ne = 1;
    if (((L.width > ee || L.height > ee) && (ne = ee / Math.max(L.width, L.height)), ne < 1 || v === !0))
      if ((typeof HTMLImageElement < "u" && L instanceof HTMLImageElement) || (typeof HTMLCanvasElement < "u" && L instanceof HTMLCanvasElement) || (typeof ImageBitmap < "u" && L instanceof ImageBitmap)) {
        const oe = v ? rs : Math.floor,
          xe = oe(ne * L.width),
          y = oe(ne * L.height);
        p === void 0 && (p = M(xe, y));
        const j = V ? M(xe, y) : p;
        return (j.width = xe), (j.height = y), j.getContext("2d").drawImage(L, 0, 0, xe, y), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + L.width + "x" + L.height + ") to (" + xe + "x" + y + ")."), j;
      } else return "data" in L && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + L.width + "x" + L.height + ")."), L;
    return L;
  }
  function w(L) {
    return Ta(L.width) && Ta(L.height);
  }
  function S(L) {
    return a ? !1 : L.wrapS !== Vt || L.wrapT !== Vt || (L.minFilter !== St && L.minFilter !== It);
  }
  function D(L, v) {
    return L.generateMipmaps && v && L.minFilter !== St && L.minFilter !== It;
  }
  function z(L) {
    r.generateMipmap(L);
  }
  function x(L, v, V, ee, ne = !1) {
    if (a === !1) return v;
    if (L !== null) {
      if (r[L] !== void 0) return r[L];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + L + "'");
    }
    let oe = v;
    return v === 6403 && (V === 5126 && (oe = 33326), V === 5131 && (oe = 33325), V === 5121 && (oe = 33321)), v === 33319 && (V === 5126 && (oe = 33328), V === 5131 && (oe = 33327), V === 5121 && (oe = 33323)), v === 6408 && (V === 5126 && (oe = 34836), V === 5131 && (oe = 34842), V === 5121 && (oe = ee === qe && ne === !1 ? 35907 : 32856), V === 32819 && (oe = 32854), V === 32820 && (oe = 32855)), (oe === 33325 || oe === 33326 || oe === 33327 || oe === 33328 || oe === 34842 || oe === 34836) && e.get("EXT_color_buffer_float"), oe;
  }
  function A(L, v, V) {
    return D(L, V) === !0 || (L.isFramebufferTexture && L.minFilter !== St && L.minFilter !== It) ? Math.log2(Math.max(v.width, v.height)) + 1 : L.mipmaps !== void 0 && L.mipmaps.length > 0 ? L.mipmaps.length : L.isCompressedTexture && Array.isArray(L.image) ? v.mipmaps.length : 1;
  }
  function O(L) {
    return L === St || L === uo || L === ho ? 9728 : 9729;
  }
  function Z(L) {
    const v = L.target;
    v.removeEventListener("dispose", Z), B(v), v.isVideoTexture && g.delete(v);
  }
  function ue(L) {
    const v = L.target;
    v.removeEventListener("dispose", ue), q(v);
  }
  function B(L) {
    const v = n.get(L);
    if (v.__webglInit === void 0) return;
    const V = L.source,
      ee = h.get(V);
    if (ee) {
      const ne = ee[v.__cacheKey];
      ne.usedTimes--, ne.usedTimes === 0 && R(L), Object.keys(ee).length === 0 && h.delete(V);
    }
    n.remove(L);
  }
  function R(L) {
    const v = n.get(L);
    r.deleteTexture(v.__webglTexture);
    const V = L.source,
      ee = h.get(V);
    delete ee[v.__cacheKey], o.memory.textures--;
  }
  function q(L) {
    const v = L.texture,
      V = n.get(L),
      ee = n.get(v);
    if ((ee.__webglTexture !== void 0 && (r.deleteTexture(ee.__webglTexture), o.memory.textures--), L.depthTexture && L.depthTexture.dispose(), L.isWebGLCubeRenderTarget)) for (let ne = 0; ne < 6; ne++) r.deleteFramebuffer(V.__webglFramebuffer[ne]), V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer[ne]);
    else {
      if ((r.deleteFramebuffer(V.__webglFramebuffer), V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer), V.__webglMultisampledFramebuffer && r.deleteFramebuffer(V.__webglMultisampledFramebuffer), V.__webglColorRenderbuffer)) for (let ne = 0; ne < V.__webglColorRenderbuffer.length; ne++) V.__webglColorRenderbuffer[ne] && r.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);
      V.__webglDepthRenderbuffer && r.deleteRenderbuffer(V.__webglDepthRenderbuffer);
    }
    if (L.isWebGLMultipleRenderTargets)
      for (let ne = 0, oe = v.length; ne < oe; ne++) {
        const xe = n.get(v[ne]);
        xe.__webglTexture && (r.deleteTexture(xe.__webglTexture), o.memory.textures--), n.remove(v[ne]);
      }
    n.remove(v), n.remove(L);
  }
  let $ = 0;
  function J() {
    $ = 0;
  }
  function W() {
    const L = $;
    return L >= l && console.warn("THREE.WebGLTextures: Trying to use " + L + " texture units while this GPU supports only " + l), ($ += 1), L;
  }
  function N(L) {
    const v = [];
    return v.push(L.wrapS), v.push(L.wrapT), v.push(L.magFilter), v.push(L.minFilter), v.push(L.anisotropy), v.push(L.internalFormat), v.push(L.format), v.push(L.type), v.push(L.generateMipmaps), v.push(L.premultiplyAlpha), v.push(L.flipY), v.push(L.unpackAlignment), v.push(L.encoding), v.join();
  }
  function U(L, v) {
    const V = n.get(L);
    if ((L.isVideoTexture && Tt(L), L.isRenderTargetTexture === !1 && L.version > 0 && V.__version !== L.version)) {
      const ee = L.image;
      if (ee === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ee.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ve(V, L, v);
        return;
      }
    }
    t.activeTexture(33984 + v), t.bindTexture(3553, V.__webglTexture);
  }
  function te(L, v) {
    const V = n.get(L);
    if (L.version > 0 && V.__version !== L.version) {
      ve(V, L, v);
      return;
    }
    t.activeTexture(33984 + v), t.bindTexture(35866, V.__webglTexture);
  }
  function Q(L, v) {
    const V = n.get(L);
    if (L.version > 0 && V.__version !== L.version) {
      ve(V, L, v);
      return;
    }
    t.activeTexture(33984 + v), t.bindTexture(32879, V.__webglTexture);
  }
  function K(L, v) {
    const V = n.get(L);
    if (L.version > 0 && V.__version !== L.version) {
      be(V, L, v);
      return;
    }
    t.activeTexture(33984 + v), t.bindTexture(34067, V.__webglTexture);
  }
  const fe = { [Ea]: 10497, [Vt]: 33071, [Aa]: 33648 },
    ye = { [St]: 9728, [uo]: 9984, [ho]: 9986, [It]: 9729, [yu]: 9985, [ds]: 9987 };
  function X(L, v, V) {
    if ((V ? (r.texParameteri(L, 10242, fe[v.wrapS]), r.texParameteri(L, 10243, fe[v.wrapT]), (L === 32879 || L === 35866) && r.texParameteri(L, 32882, fe[v.wrapR]), r.texParameteri(L, 10240, ye[v.magFilter]), r.texParameteri(L, 10241, ye[v.minFilter])) : (r.texParameteri(L, 10242, 33071), r.texParameteri(L, 10243, 33071), (L === 32879 || L === 35866) && r.texParameteri(L, 32882, 33071), (v.wrapS !== Vt || v.wrapT !== Vt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(L, 10240, O(v.magFilter)), r.texParameteri(L, 10241, O(v.minFilter)), v.minFilter !== St && v.minFilter !== It && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0)) {
      const ee = e.get("EXT_texture_filter_anisotropic");
      if ((v.type === Gn && e.has("OES_texture_float_linear") === !1) || (a === !1 && v.type === mr && e.has("OES_texture_half_float_linear") === !1)) return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (r.texParameterf(L, ee.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), (n.get(v).__currentAnisotropy = v.anisotropy));
    }
  }
  function Ie(L, v) {
    let V = !1;
    L.__webglInit === void 0 && ((L.__webglInit = !0), v.addEventListener("dispose", Z));
    const ee = v.source;
    let ne = h.get(ee);
    ne === void 0 && ((ne = {}), h.set(ee, ne));
    const oe = N(v);
    if (oe !== L.__cacheKey) {
      ne[oe] === void 0 && ((ne[oe] = { texture: r.createTexture(), usedTimes: 0 }), o.memory.textures++, (V = !0)), ne[oe].usedTimes++;
      const xe = ne[L.__cacheKey];
      xe !== void 0 && (ne[L.__cacheKey].usedTimes--, xe.usedTimes === 0 && R(v)), (L.__cacheKey = oe), (L.__webglTexture = ne[oe].texture);
    }
    return V;
  }
  function ve(L, v, V) {
    let ee = 3553;
    v.isDataArrayTexture && (ee = 35866), v.isData3DTexture && (ee = 32879);
    const ne = Ie(L, v),
      oe = v.source;
    if ((t.activeTexture(33984 + V), t.bindTexture(ee, L.__webglTexture), oe.version !== oe.__currentVersion || ne === !0)) {
      r.pixelStorei(37440, v.flipY), r.pixelStorei(37441, v.premultiplyAlpha), r.pixelStorei(3317, v.unpackAlignment), r.pixelStorei(37443, 0);
      const xe = S(v) && w(v.image) === !1;
      let y = E(v.image, xe, !1, d);
      y = bt(v, y);
      const j = w(y) || a,
        ie = s.convert(v.format, v.encoding);
      let le = s.convert(v.type),
        ae = x(v.internalFormat, ie, le, v.encoding, v.isVideoTexture);
      X(ee, v, j);
      let Se;
      const Ce = v.mipmaps,
        He = a && v.isVideoTexture !== !0,
        T = oe.__currentVersion === void 0 || ne === !0,
        se = A(v, y, j);
      if (v.isDepthTexture) (ae = 6402), a ? (v.type === Gn ? (ae = 36012) : v.type === Hn ? (ae = 33190) : v.type === Ui ? (ae = 35056) : (ae = 33189)) : v.type === Gn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === Xn && ae === 6402 && v.type !== ic && v.type !== Hn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), (v.type = Hn), (le = s.convert(v.type))), v.format === Hi && ae === 6402 && ((ae = 34041), v.type !== Ui && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), (v.type = Ui), (le = s.convert(v.type)))), T && (He ? t.texStorage2D(3553, 1, ae, y.width, y.height) : t.texImage2D(3553, 0, ae, y.width, y.height, 0, ie, le, null));
      else if (v.isDataTexture)
        if (Ce.length > 0 && j) {
          He && T && t.texStorage2D(3553, se, ae, Ce[0].width, Ce[0].height);
          for (let k = 0, de = Ce.length; k < de; k++) (Se = Ce[k]), He ? t.texSubImage2D(3553, k, 0, 0, Se.width, Se.height, ie, le, Se.data) : t.texImage2D(3553, k, ae, Se.width, Se.height, 0, ie, le, Se.data);
          v.generateMipmaps = !1;
        } else He ? (T && t.texStorage2D(3553, se, ae, y.width, y.height), t.texSubImage2D(3553, 0, 0, 0, y.width, y.height, ie, le, y.data)) : t.texImage2D(3553, 0, ae, y.width, y.height, 0, ie, le, y.data);
      else if (v.isCompressedTexture) {
        He && T && t.texStorage2D(3553, se, ae, Ce[0].width, Ce[0].height);
        for (let k = 0, de = Ce.length; k < de; k++) (Se = Ce[k]), v.format !== rn ? (ie !== null ? (He ? t.compressedTexSubImage2D(3553, k, 0, 0, Se.width, Se.height, ie, Se.data) : t.compressedTexImage2D(3553, k, ae, Se.width, Se.height, 0, Se.data)) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()")) : He ? t.texSubImage2D(3553, k, 0, 0, Se.width, Se.height, ie, le, Se.data) : t.texImage2D(3553, k, ae, Se.width, Se.height, 0, ie, le, Se.data);
      } else if (v.isDataArrayTexture) He ? (T && t.texStorage3D(35866, se, ae, y.width, y.height, y.depth), t.texSubImage3D(35866, 0, 0, 0, 0, y.width, y.height, y.depth, ie, le, y.data)) : t.texImage3D(35866, 0, ae, y.width, y.height, y.depth, 0, ie, le, y.data);
      else if (v.isData3DTexture) He ? (T && t.texStorage3D(32879, se, ae, y.width, y.height, y.depth), t.texSubImage3D(32879, 0, 0, 0, 0, y.width, y.height, y.depth, ie, le, y.data)) : t.texImage3D(32879, 0, ae, y.width, y.height, y.depth, 0, ie, le, y.data);
      else if (v.isFramebufferTexture) {
        if (T)
          if (He) t.texStorage2D(3553, se, ae, y.width, y.height);
          else {
            let k = y.width,
              de = y.height;
            for (let ce = 0; ce < se; ce++) t.texImage2D(3553, ce, ae, k, de, 0, ie, le, null), (k >>= 1), (de >>= 1);
          }
      } else if (Ce.length > 0 && j) {
        He && T && t.texStorage2D(3553, se, ae, Ce[0].width, Ce[0].height);
        for (let k = 0, de = Ce.length; k < de; k++) (Se = Ce[k]), He ? t.texSubImage2D(3553, k, 0, 0, ie, le, Se) : t.texImage2D(3553, k, ae, ie, le, Se);
        v.generateMipmaps = !1;
      } else He ? (T && t.texStorage2D(3553, se, ae, y.width, y.height), t.texSubImage2D(3553, 0, 0, 0, ie, le, y)) : t.texImage2D(3553, 0, ae, ie, le, y);
      D(v, j) && z(ee), (oe.__currentVersion = oe.version), v.onUpdate && v.onUpdate(v);
    }
    L.__version = v.version;
  }
  function be(L, v, V) {
    if (v.image.length !== 6) return;
    const ee = Ie(L, v),
      ne = v.source;
    if ((t.activeTexture(33984 + V), t.bindTexture(34067, L.__webglTexture), ne.version !== ne.__currentVersion || ee === !0)) {
      r.pixelStorei(37440, v.flipY), r.pixelStorei(37441, v.premultiplyAlpha), r.pixelStorei(3317, v.unpackAlignment), r.pixelStorei(37443, 0);
      const oe = v.isCompressedTexture || v.image[0].isCompressedTexture,
        xe = v.image[0] && v.image[0].isDataTexture,
        y = [];
      for (let k = 0; k < 6; k++) !oe && !xe ? (y[k] = E(v.image[k], !1, !0, c)) : (y[k] = xe ? v.image[k].image : v.image[k]), (y[k] = bt(v, y[k]));
      const j = y[0],
        ie = w(j) || a,
        le = s.convert(v.format, v.encoding),
        ae = s.convert(v.type),
        Se = x(v.internalFormat, le, ae, v.encoding),
        Ce = a && v.isVideoTexture !== !0,
        He = ne.__currentVersion === void 0 || ee === !0;
      let T = A(v, j, ie);
      X(34067, v, ie);
      let se;
      if (oe) {
        Ce && He && t.texStorage2D(34067, T, Se, j.width, j.height);
        for (let k = 0; k < 6; k++) {
          se = y[k].mipmaps;
          for (let de = 0; de < se.length; de++) {
            const ce = se[de];
            v.format !== rn ? (le !== null ? (Ce ? t.compressedTexSubImage2D(34069 + k, de, 0, 0, ce.width, ce.height, le, ce.data) : t.compressedTexImage2D(34069 + k, de, Se, ce.width, ce.height, 0, ce.data)) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()")) : Ce ? t.texSubImage2D(34069 + k, de, 0, 0, ce.width, ce.height, le, ae, ce.data) : t.texImage2D(34069 + k, de, Se, ce.width, ce.height, 0, le, ae, ce.data);
          }
        }
      } else {
        (se = v.mipmaps), Ce && He && (se.length > 0 && T++, t.texStorage2D(34067, T, Se, y[0].width, y[0].height));
        for (let k = 0; k < 6; k++)
          if (xe) {
            Ce ? t.texSubImage2D(34069 + k, 0, 0, 0, y[k].width, y[k].height, le, ae, y[k].data) : t.texImage2D(34069 + k, 0, Se, y[k].width, y[k].height, 0, le, ae, y[k].data);
            for (let de = 0; de < se.length; de++) {
              const Re = se[de].image[k].image;
              Ce ? t.texSubImage2D(34069 + k, de + 1, 0, 0, Re.width, Re.height, le, ae, Re.data) : t.texImage2D(34069 + k, de + 1, Se, Re.width, Re.height, 0, le, ae, Re.data);
            }
          } else {
            Ce ? t.texSubImage2D(34069 + k, 0, 0, 0, le, ae, y[k]) : t.texImage2D(34069 + k, 0, Se, le, ae, y[k]);
            for (let de = 0; de < se.length; de++) {
              const ce = se[de];
              Ce ? t.texSubImage2D(34069 + k, de + 1, 0, 0, le, ae, ce.image[k]) : t.texImage2D(34069 + k, de + 1, Se, le, ae, ce.image[k]);
            }
          }
      }
      D(v, ie) && z(34067), (ne.__currentVersion = ne.version), v.onUpdate && v.onUpdate(v);
    }
    L.__version = v.version;
  }
  function he(L, v, V, ee, ne) {
    const oe = s.convert(V.format, V.encoding),
      xe = s.convert(V.type),
      y = x(V.internalFormat, oe, xe, V.encoding);
    n.get(v).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, y, v.width, v.height, v.depth, 0, oe, xe, null) : t.texImage2D(ne, 0, y, v.width, v.height, 0, oe, xe, null)), t.bindFramebuffer(36160, L), ze(v) ? f.framebufferTexture2DMultisampleEXT(36160, ee, ne, n.get(V).__webglTexture, 0, et(v)) : r.framebufferTexture2D(36160, ee, ne, n.get(V).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Oe(L, v, V) {
    if ((r.bindRenderbuffer(36161, L), v.depthBuffer && !v.stencilBuffer)) {
      let ee = 33189;
      if (V || ze(v)) {
        const ne = v.depthTexture;
        ne && ne.isDepthTexture && (ne.type === Gn ? (ee = 36012) : ne.type === Hn && (ee = 33190));
        const oe = et(v);
        ze(v) ? f.renderbufferStorageMultisampleEXT(36161, oe, ee, v.width, v.height) : r.renderbufferStorageMultisample(36161, oe, ee, v.width, v.height);
      } else r.renderbufferStorage(36161, ee, v.width, v.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, L);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const ee = et(v);
      V && ze(v) === !1 ? r.renderbufferStorageMultisample(36161, ee, 35056, v.width, v.height) : ze(v) ? f.renderbufferStorageMultisampleEXT(36161, ee, 35056, v.width, v.height) : r.renderbufferStorage(36161, 34041, v.width, v.height), r.framebufferRenderbuffer(36160, 33306, 36161, L);
    } else {
      const ee = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ne = 0; ne < ee.length; ne++) {
        const oe = ee[ne],
          xe = s.convert(oe.format, oe.encoding),
          y = s.convert(oe.type),
          j = x(oe.internalFormat, xe, y, oe.encoding),
          ie = et(v);
        V && ze(v) === !1 ? r.renderbufferStorageMultisample(36161, ie, j, v.width, v.height) : ze(v) ? f.renderbufferStorageMultisampleEXT(36161, ie, j, v.width, v.height) : r.renderbufferStorage(36161, j, v.width, v.height);
      }
    }
    r.bindRenderbuffer(36161, null);
  }
  function Le(L, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if ((t.bindFramebuffer(36160, L), !(v.depthTexture && v.depthTexture.isDepthTexture))) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && ((v.depthTexture.image.width = v.width), (v.depthTexture.image.height = v.height), (v.depthTexture.needsUpdate = !0)), U(v.depthTexture, 0);
    const ee = n.get(v.depthTexture).__webglTexture,
      ne = et(v);
    if (v.depthTexture.format === Xn) ze(v) ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ee, 0, ne) : r.framebufferTexture2D(36160, 36096, 3553, ee, 0);
    else if (v.depthTexture.format === Hi) ze(v) ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ee, 0, ne) : r.framebufferTexture2D(36160, 33306, 3553, ee, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function ge(L) {
    const v = n.get(L),
      V = L.isWebGLCubeRenderTarget === !0;
    if (L.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (V) throw new Error("target.depthTexture not supported in Cube render targets");
      Le(v.__webglFramebuffer, L);
    } else if (V) {
      v.__webglDepthbuffer = [];
      for (let ee = 0; ee < 6; ee++) t.bindFramebuffer(36160, v.__webglFramebuffer[ee]), (v.__webglDepthbuffer[ee] = r.createRenderbuffer()), Oe(v.__webglDepthbuffer[ee], L, !1);
    } else t.bindFramebuffer(36160, v.__webglFramebuffer), (v.__webglDepthbuffer = r.createRenderbuffer()), Oe(v.__webglDepthbuffer, L, !1);
    t.bindFramebuffer(36160, null);
  }
  function Ze(L, v, V) {
    const ee = n.get(L);
    v !== void 0 && he(ee.__webglFramebuffer, L, L.texture, 36064, 3553), V !== void 0 && ge(L);
  }
  function ot(L) {
    const v = L.texture,
      V = n.get(L),
      ee = n.get(v);
    L.addEventListener("dispose", ue), L.isWebGLMultipleRenderTargets !== !0 && (ee.__webglTexture === void 0 && (ee.__webglTexture = r.createTexture()), (ee.__version = v.version), o.memory.textures++);
    const ne = L.isWebGLCubeRenderTarget === !0,
      oe = L.isWebGLMultipleRenderTargets === !0,
      xe = w(L) || a;
    if (ne) {
      V.__webglFramebuffer = [];
      for (let y = 0; y < 6; y++) V.__webglFramebuffer[y] = r.createFramebuffer();
    } else {
      if (((V.__webglFramebuffer = r.createFramebuffer()), oe))
        if (i.drawBuffers) {
          const y = L.texture;
          for (let j = 0, ie = y.length; j < ie; j++) {
            const le = n.get(y[j]);
            le.__webglTexture === void 0 && ((le.__webglTexture = r.createTexture()), o.memory.textures++);
          }
        } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && L.samples > 0 && ze(L) === !1) {
        const y = oe ? v : [v];
        (V.__webglMultisampledFramebuffer = r.createFramebuffer()), (V.__webglColorRenderbuffer = []), t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer);
        for (let j = 0; j < y.length; j++) {
          const ie = y[j];
          (V.__webglColorRenderbuffer[j] = r.createRenderbuffer()), r.bindRenderbuffer(36161, V.__webglColorRenderbuffer[j]);
          const le = s.convert(ie.format, ie.encoding),
            ae = s.convert(ie.type),
            Se = x(ie.internalFormat, le, ae, ie.encoding),
            Ce = et(L);
          r.renderbufferStorageMultisample(36161, Ce, Se, L.width, L.height), r.framebufferRenderbuffer(36160, 36064 + j, 36161, V.__webglColorRenderbuffer[j]);
        }
        r.bindRenderbuffer(36161, null), L.depthBuffer && ((V.__webglDepthRenderbuffer = r.createRenderbuffer()), Oe(V.__webglDepthRenderbuffer, L, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (ne) {
      t.bindTexture(34067, ee.__webglTexture), X(34067, v, xe);
      for (let y = 0; y < 6; y++) he(V.__webglFramebuffer[y], L, v, 36064, 34069 + y);
      D(v, xe) && z(34067), t.unbindTexture();
    } else if (oe) {
      const y = L.texture;
      for (let j = 0, ie = y.length; j < ie; j++) {
        const le = y[j],
          ae = n.get(le);
        t.bindTexture(3553, ae.__webglTexture), X(3553, le, xe), he(V.__webglFramebuffer, L, le, 36064 + j, 3553), D(le, xe) && z(3553);
      }
      t.unbindTexture();
    } else {
      let y = 3553;
      (L.isWebGL3DRenderTarget || L.isWebGLArrayRenderTarget) && (a ? (y = L.isWebGL3DRenderTarget ? 32879 : 35866) : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(y, ee.__webglTexture), X(y, v, xe), he(V.__webglFramebuffer, L, v, 36064, y), D(v, xe) && z(y), t.unbindTexture();
    }
    L.depthBuffer && ge(L);
  }
  function Qe(L) {
    const v = w(L) || a,
      V = L.isWebGLMultipleRenderTargets === !0 ? L.texture : [L.texture];
    for (let ee = 0, ne = V.length; ee < ne; ee++) {
      const oe = V[ee];
      if (D(oe, v)) {
        const xe = L.isWebGLCubeRenderTarget ? 34067 : 3553,
          y = n.get(oe).__webglTexture;
        t.bindTexture(xe, y), z(xe), t.unbindTexture();
      }
    }
  }
  function yt(L) {
    if (a && L.samples > 0 && ze(L) === !1) {
      const v = L.isWebGLMultipleRenderTargets ? L.texture : [L.texture],
        V = L.width,
        ee = L.height;
      let ne = 16384;
      const oe = [],
        xe = L.stencilBuffer ? 33306 : 36096,
        y = n.get(L),
        j = L.isWebGLMultipleRenderTargets === !0;
      if (j) for (let ie = 0; ie < v.length; ie++) t.bindFramebuffer(36160, y.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064 + ie, 36161, null), t.bindFramebuffer(36160, y.__webglFramebuffer), r.framebufferTexture2D(36009, 36064 + ie, 3553, null, 0);
      t.bindFramebuffer(36008, y.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, y.__webglFramebuffer);
      for (let ie = 0; ie < v.length; ie++) {
        oe.push(36064 + ie), L.depthBuffer && oe.push(xe);
        const le = y.__ignoreDepthValues !== void 0 ? y.__ignoreDepthValues : !1;
        if ((le === !1 && (L.depthBuffer && (ne |= 256), L.stencilBuffer && (ne |= 1024)), j && r.framebufferRenderbuffer(36008, 36064, 36161, y.__webglColorRenderbuffer[ie]), le === !0 && (r.invalidateFramebuffer(36008, [xe]), r.invalidateFramebuffer(36009, [xe])), j)) {
          const ae = n.get(v[ie]).__webglTexture;
          r.framebufferTexture2D(36009, 36064, 3553, ae, 0);
        }
        r.blitFramebuffer(0, 0, V, ee, 0, 0, V, ee, ne, 9728), m && r.invalidateFramebuffer(36008, oe);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), j))
        for (let ie = 0; ie < v.length; ie++) {
          t.bindFramebuffer(36160, y.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064 + ie, 36161, y.__webglColorRenderbuffer[ie]);
          const le = n.get(v[ie]).__webglTexture;
          t.bindFramebuffer(36160, y.__webglFramebuffer), r.framebufferTexture2D(36009, 36064 + ie, 3553, le, 0);
        }
      t.bindFramebuffer(36009, y.__webglMultisampledFramebuffer);
    }
  }
  function et(L) {
    return Math.min(u, L.samples);
  }
  function ze(L) {
    const v = n.get(L);
    return a && L.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function Tt(L) {
    const v = o.render.frame;
    g.get(L) !== v && (g.set(L, v), L.update());
  }
  function bt(L, v) {
    const V = L.encoding,
      ee = L.format,
      ne = L.type;
    return L.isCompressedTexture === !0 || L.isVideoTexture === !0 || L.format === Da || (V !== Zn && (V === qe ? (a === !1 ? (e.has("EXT_sRGB") === !0 && ee === rn ? ((L.format = Da), (L.minFilter = It), (L.generateMipmaps = !1)) : (v = oc.sRGBToLinear(v))) : (ee !== rn || ne !== jn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")) : console.error("THREE.WebGLTextures: Unsupported texture encoding:", V))), v;
  }
  (this.allocateTextureUnit = W), (this.resetTextureUnits = J), (this.setTexture2D = U), (this.setTexture2DArray = te), (this.setTexture3D = Q), (this.setTextureCube = K), (this.rebindTextures = Ze), (this.setupRenderTarget = ot), (this.updateRenderTargetMipmap = Qe), (this.updateMultisampleRenderTarget = yt), (this.setupDepthRenderbuffer = ge), (this.setupFrameBufferTexture = he), (this.useMultisampledRTT = ze);
}
function Ym(r, e, t) {
  const n = t.isWebGL2;
  function i(s, o = null) {
    let a;
    if (s === jn) return 5121;
    if (s === Lu) return 32819;
    if (s === Eu) return 32820;
    if (s === bu) return 5120;
    if (s === Mu) return 5122;
    if (s === ic) return 5123;
    if (s === wu) return 5124;
    if (s === Hn) return 5125;
    if (s === Gn) return 5126;
    if (s === mr) return n ? 5131 : ((a = e.get("OES_texture_half_float")), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Au) return 6406;
    if (s === rn) return 6408;
    if (s === Du) return 6409;
    if (s === Tu) return 6410;
    if (s === Xn) return 6402;
    if (s === Hi) return 34041;
    if (s === Pu) return 6403;
    if (s === Cu) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === Da) return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Ru) return 36244;
    if (s === Nu) return 33319;
    if (s === Iu) return 33320;
    if (s === Fu) return 36249;
    if (s === bs || s === Ms || s === ws || s === Ls)
      if (o === qe)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (s === bs) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Ms) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === ws) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Ls) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === bs) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Ms) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === ws) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Ls) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === fo || s === po || s === mo || s === go)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === fo) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === po) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === mo) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === go) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === Ou) return (a = e.get("WEBGL_compressed_texture_etc1")), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === _o || s === vo)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (s === _o) return o === qe ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === vo) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (s === xo || s === So || s === yo || s === bo || s === Mo || s === wo || s === Lo || s === Eo || s === Ao || s === Co || s === Do || s === To || s === Po || s === Ro)
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (s === xo) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === So) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === yo) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === bo) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Mo) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === wo) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Lo) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Eo) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Ao) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Co) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Do) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === To) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Po) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Ro) return o === qe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === No)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (s === No) return o === qe ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return s === Ui ? (n ? 34042 : ((a = e.get("WEBGL_depth_texture")), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class qm extends Et {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class dt extends ht {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const jm = { type: "move" };
class Js {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return this._hand === null && ((this._hand = new dt()), (this._hand.matrixAutoUpdate = !1), (this._hand.visible = !1), (this._hand.joints = {}), (this._hand.inputState = { pinching: !1 })), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && ((this._targetRay = new dt()), (this._targetRay.matrixAutoUpdate = !1), (this._targetRay.visible = !1), (this._targetRay.hasLinearVelocity = !1), (this._targetRay.linearVelocity = new C()), (this._targetRay.hasAngularVelocity = !1), (this._targetRay.angularVelocity = new C())), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && ((this._grip = new dt()), (this._grip.matrixAutoUpdate = !1), (this._grip.visible = !1), (this._grip.hasLinearVelocity = !1), (this._grip.linearVelocity = new C()), (this._grip.hasAngularVelocity = !1), (this._grip.angularVelocity = new C())), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const h = t.getJointPose(p, n);
          if (c.joints[p.jointName] === void 0) {
            const M = new dt();
            (M.matrixAutoUpdate = !1), (M.visible = !1), (c.joints[p.jointName] = M), c.add(M);
          }
          const _ = c.joints[p.jointName];
          h !== null && (_.matrix.fromArray(h.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), (_.jointRadius = h.radius)), (_.visible = h !== null);
        }
        const d = c.joints["index-finger-tip"],
          u = c.joints["thumb-tip"],
          f = d.position.distanceTo(u.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && f > m + g ? ((c.inputState.pinching = !1), this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && f <= m - g && ((c.inputState.pinching = !0), this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && ((s = t.getPose(e.gripSpace, n)), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? ((l.hasLinearVelocity = !0), l.linearVelocity.copy(s.linearVelocity)) : (l.hasLinearVelocity = !1), s.angularVelocity ? ((l.hasAngularVelocity = !0), l.angularVelocity.copy(s.angularVelocity)) : (l.hasAngularVelocity = !1)));
      a !== null && ((i = t.getPose(e.targetRaySpace, n)), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? ((a.hasLinearVelocity = !0), a.linearVelocity.copy(i.linearVelocity)) : (a.hasLinearVelocity = !1), i.angularVelocity ? ((a.hasAngularVelocity = !0), a.angularVelocity.copy(i.angularVelocity)) : (a.hasAngularVelocity = !1), this.dispatchEvent(jm)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
}
class Zm extends At {
  constructor(e, t, n, i, s, o, a, l, c, d) {
    if (((d = d !== void 0 ? d : Xn), d !== Xn && d !== Hi)) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && d === Xn && (n = Hn), n === void 0 && d === Hi && (n = Ui), super(null, i, s, o, a, l, d, n, c), (this.isDepthTexture = !0), (this.image = { width: e, height: t }), (this.magFilter = a !== void 0 ? a : St), (this.minFilter = l !== void 0 ? l : St), (this.flipY = !1), (this.generateMipmaps = !1);
  }
}
class $m extends ti {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = null,
      c = null,
      d = null,
      u = null,
      f = null,
      m = null;
    const g = t.getContextAttributes();
    let p = null,
      h = null;
    const _ = [],
      M = [],
      E = new Et();
    E.layers.enable(1), (E.viewport = new Ge());
    const w = new Et();
    w.layers.enable(2), (w.viewport = new Ge());
    const S = [E, w],
      D = new qm();
    D.layers.enable(1), D.layers.enable(2);
    let z = null,
      x = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (N) {
        let U = _[N];
        return U === void 0 && ((U = new Js()), (_[N] = U)), U.getTargetRaySpace();
      }),
      (this.getControllerGrip = function (N) {
        let U = _[N];
        return U === void 0 && ((U = new Js()), (_[N] = U)), U.getGripSpace();
      }),
      (this.getHand = function (N) {
        let U = _[N];
        return U === void 0 && ((U = new Js()), (_[N] = U)), U.getHandSpace();
      });
    function A(N) {
      const U = M.indexOf(N.inputSource);
      if (U === -1) return;
      const te = _[U];
      te !== void 0 && te.dispatchEvent({ type: N.type, data: N.inputSource });
    }
    function O() {
      i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", O), i.removeEventListener("inputsourceschange", Z);
      for (let N = 0; N < _.length; N++) {
        const U = M[N];
        U !== null && ((M[N] = null), _[N].disconnect(U));
      }
      (z = null), (x = null), e.setRenderTarget(p), (f = null), (u = null), (d = null), (i = null), (h = null), W.stop(), (n.isPresenting = !1), n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (N) {
      (s = N), n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }),
      (this.setReferenceSpaceType = function (N) {
        (a = N), n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }),
      (this.getReferenceSpace = function () {
        return l || o;
      }),
      (this.setReferenceSpace = function (N) {
        l = N;
      }),
      (this.getBaseLayer = function () {
        return u !== null ? u : f;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (N) {
        if (((i = N), i !== null)) {
          if (((p = e.getRenderTarget()), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", O), i.addEventListener("inputsourceschange", Z), g.xrCompatible !== !0 && (await t.makeXRCompatible()), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)) {
            const U = { antialias: i.renderState.layers === void 0 ? g.antialias : !0, alpha: g.alpha, depth: g.depth, stencil: g.stencil, framebufferScaleFactor: s };
            (f = new XRWebGLLayer(i, t, U)), i.updateRenderState({ baseLayer: f }), (h = new $n(f.framebufferWidth, f.framebufferHeight, { format: rn, type: jn, encoding: e.outputEncoding, stencilBuffer: g.stencil }));
          } else {
            let U = null,
              te = null,
              Q = null;
            g.depth && ((Q = g.stencil ? 35056 : 33190), (U = g.stencil ? Hi : Xn), (te = g.stencil ? Ui : Hn));
            const K = { colorFormat: 32856, depthFormat: Q, scaleFactor: s };
            (d = new XRWebGLBinding(i, t)), (u = d.createProjectionLayer(K)), i.updateRenderState({ layers: [u] }), (h = new $n(u.textureWidth, u.textureHeight, { format: rn, type: jn, depthTexture: new Zm(u.textureWidth, u.textureHeight, te, void 0, void 0, void 0, void 0, void 0, void 0, U), stencilBuffer: g.stencil, encoding: e.outputEncoding, samples: g.antialias ? 4 : 0 }));
            const fe = e.properties.get(h);
            fe.__ignoreDepthValues = u.ignoreDepthValues;
          }
          (h.isXRRenderTarget = !0), this.setFoveation(1), (l = null), (o = await i.requestReferenceSpace(a)), W.setContext(i), W.start(), (n.isPresenting = !0), n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function Z(N) {
      for (let U = 0; U < N.removed.length; U++) {
        const te = N.removed[U],
          Q = M.indexOf(te);
        Q >= 0 && ((M[Q] = null), _[Q].dispatchEvent({ type: "disconnected", data: te }));
      }
      for (let U = 0; U < N.added.length; U++) {
        const te = N.added[U];
        let Q = M.indexOf(te);
        if (Q === -1) {
          for (let fe = 0; fe < _.length; fe++)
            if (fe >= M.length) {
              M.push(te), (Q = fe);
              break;
            } else if (M[fe] === null) {
              (M[fe] = te), (Q = fe);
              break;
            }
          if (Q === -1) break;
        }
        const K = _[Q];
        K && K.dispatchEvent({ type: "connected", data: te });
      }
    }
    const ue = new C(),
      B = new C();
    function R(N, U, te) {
      ue.setFromMatrixPosition(U.matrixWorld), B.setFromMatrixPosition(te.matrixWorld);
      const Q = ue.distanceTo(B),
        K = U.projectionMatrix.elements,
        fe = te.projectionMatrix.elements,
        ye = K[14] / (K[10] - 1),
        X = K[14] / (K[10] + 1),
        Ie = (K[9] + 1) / K[5],
        ve = (K[9] - 1) / K[5],
        be = (K[8] - 1) / K[0],
        he = (fe[8] + 1) / fe[0],
        Oe = ye * be,
        Le = ye * he,
        ge = Q / (-be + he),
        Ze = ge * -be;
      U.matrixWorld.decompose(N.position, N.quaternion, N.scale), N.translateX(Ze), N.translateZ(ge), N.matrixWorld.compose(N.position, N.quaternion, N.scale), N.matrixWorldInverse.copy(N.matrixWorld).invert();
      const ot = ye + ge,
        Qe = X + ge,
        yt = Oe - Ze,
        et = Le + (Q - Ze),
        ze = ((Ie * X) / Qe) * ot,
        Tt = ((ve * X) / Qe) * ot;
      N.projectionMatrix.makePerspective(yt, et, ze, Tt, ot, Qe);
    }
    function q(N, U) {
      U === null ? N.matrixWorld.copy(N.matrix) : N.matrixWorld.multiplyMatrices(U.matrixWorld, N.matrix), N.matrixWorldInverse.copy(N.matrixWorld).invert();
    }
    (this.updateCamera = function (N) {
      if (i === null) return;
      (D.near = w.near = E.near = N.near), (D.far = w.far = E.far = N.far), (z !== D.near || x !== D.far) && (i.updateRenderState({ depthNear: D.near, depthFar: D.far }), (z = D.near), (x = D.far));
      const U = N.parent,
        te = D.cameras;
      q(D, U);
      for (let K = 0; K < te.length; K++) q(te[K], U);
      D.matrixWorld.decompose(D.position, D.quaternion, D.scale), N.matrix.copy(D.matrix), N.matrix.decompose(N.position, N.quaternion, N.scale);
      const Q = N.children;
      for (let K = 0, fe = Q.length; K < fe; K++) Q[K].updateMatrixWorld(!0);
      te.length === 2 ? R(D, E, w) : D.projectionMatrix.copy(E.projectionMatrix);
    }),
      (this.getCamera = function () {
        return D;
      }),
      (this.getFoveation = function () {
        if (u !== null) return u.fixedFoveation;
        if (f !== null) return f.fixedFoveation;
      }),
      (this.setFoveation = function (N) {
        u !== null && (u.fixedFoveation = N), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = N);
      });
    let $ = null;
    function J(N, U) {
      if (((c = U.getViewerPose(l || o)), (m = U), c !== null)) {
        const te = c.views;
        f !== null && (e.setRenderTargetFramebuffer(h, f.framebuffer), e.setRenderTarget(h));
        let Q = !1;
        te.length !== D.cameras.length && ((D.cameras.length = 0), (Q = !0));
        for (let K = 0; K < te.length; K++) {
          const fe = te[K];
          let ye = null;
          if (f !== null) ye = f.getViewport(fe);
          else {
            const Ie = d.getViewSubImage(u, fe);
            (ye = Ie.viewport), K === 0 && (e.setRenderTargetTextures(h, Ie.colorTexture, u.ignoreDepthValues ? void 0 : Ie.depthStencilTexture), e.setRenderTarget(h));
          }
          let X = S[K];
          X === void 0 && ((X = new Et()), X.layers.enable(K), (X.viewport = new Ge()), (S[K] = X)), X.matrix.fromArray(fe.transform.matrix), X.projectionMatrix.fromArray(fe.projectionMatrix), X.viewport.set(ye.x, ye.y, ye.width, ye.height), K === 0 && D.matrix.copy(X.matrix), Q === !0 && D.cameras.push(X);
        }
      }
      for (let te = 0; te < _.length; te++) {
        const Q = M[te],
          K = _[te];
        Q !== null && K !== void 0 && K.update(Q, U, l || o);
      }
      $ && $(N, U), (m = null);
    }
    const W = new mc();
    W.setAnimationLoop(J),
      (this.setAnimationLoop = function (N) {
        $ = N;
      }),
      (this.dispose = function () {});
  }
}
function Jm(r, e) {
  function t(p, h) {
    p.fogColor.value.copy(h.color), h.isFog ? ((p.fogNear.value = h.near), (p.fogFar.value = h.far)) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function n(p, h, _, M, E) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? i(p, h) : h.isMeshToonMaterial ? (i(p, h), d(p, h)) : h.isMeshPhongMaterial ? (i(p, h), c(p, h)) : h.isMeshStandardMaterial ? (i(p, h), u(p, h), h.isMeshPhysicalMaterial && f(p, h, E)) : h.isMeshMatcapMaterial ? (i(p, h), m(p, h)) : h.isMeshDepthMaterial ? i(p, h) : h.isMeshDistanceMaterial ? (i(p, h), g(p, h)) : h.isMeshNormalMaterial ? i(p, h) : h.isLineBasicMaterial ? (s(p, h), h.isLineDashedMaterial && o(p, h)) : h.isPointsMaterial ? a(p, h, _, M) : h.isSpriteMaterial ? l(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), (p.opacity.value = h.opacity)) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function i(p, h) {
    (p.opacity.value = h.opacity), h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map), h.alphaMap && (p.alphaMap.value = h.alphaMap), h.bumpMap && ((p.bumpMap.value = h.bumpMap), (p.bumpScale.value = h.bumpScale), h.side === Ot && (p.bumpScale.value *= -1)), h.displacementMap && ((p.displacementMap.value = h.displacementMap), (p.displacementScale.value = h.displacementScale), (p.displacementBias.value = h.displacementBias)), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap), h.normalMap && ((p.normalMap.value = h.normalMap), p.normalScale.value.copy(h.normalScale), h.side === Ot && p.normalScale.value.negate()), h.specularMap && (p.specularMap.value = h.specularMap), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const _ = e.get(h).envMap;
    if ((_ && ((p.envMap.value = _), (p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1), (p.reflectivity.value = h.reflectivity), (p.ior.value = h.ior), (p.refractionRatio.value = h.refractionRatio)), h.lightMap)) {
      p.lightMap.value = h.lightMap;
      const w = r.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = h.lightMapIntensity * w;
    }
    h.aoMap && ((p.aoMap.value = h.aoMap), (p.aoMapIntensity.value = h.aoMapIntensity));
    let M;
    h.map ? (M = h.map) : h.specularMap ? (M = h.specularMap) : h.displacementMap ? (M = h.displacementMap) : h.normalMap ? (M = h.normalMap) : h.bumpMap ? (M = h.bumpMap) : h.roughnessMap ? (M = h.roughnessMap) : h.metalnessMap ? (M = h.metalnessMap) : h.alphaMap ? (M = h.alphaMap) : h.emissiveMap ? (M = h.emissiveMap) : h.clearcoatMap ? (M = h.clearcoatMap) : h.clearcoatNormalMap ? (M = h.clearcoatNormalMap) : h.clearcoatRoughnessMap ? (M = h.clearcoatRoughnessMap) : h.iridescenceMap ? (M = h.iridescenceMap) : h.iridescenceThicknessMap ? (M = h.iridescenceThicknessMap) : h.specularIntensityMap ? (M = h.specularIntensityMap) : h.specularColorMap ? (M = h.specularColorMap) : h.transmissionMap ? (M = h.transmissionMap) : h.thicknessMap ? (M = h.thicknessMap) : h.sheenColorMap ? (M = h.sheenColorMap) : h.sheenRoughnessMap && (M = h.sheenRoughnessMap), M !== void 0 && (M.isWebGLRenderTarget && (M = M.texture), M.matrixAutoUpdate === !0 && M.updateMatrix(), p.uvTransform.value.copy(M.matrix));
    let E;
    h.aoMap ? (E = h.aoMap) : h.lightMap && (E = h.lightMap), E !== void 0 && (E.isWebGLRenderTarget && (E = E.texture), E.matrixAutoUpdate === !0 && E.updateMatrix(), p.uv2Transform.value.copy(E.matrix));
  }
  function s(p, h) {
    p.diffuse.value.copy(h.color), (p.opacity.value = h.opacity);
  }
  function o(p, h) {
    (p.dashSize.value = h.dashSize), (p.totalSize.value = h.dashSize + h.gapSize), (p.scale.value = h.scale);
  }
  function a(p, h, _, M) {
    p.diffuse.value.copy(h.color), (p.opacity.value = h.opacity), (p.size.value = h.size * _), (p.scale.value = M * 0.5), h.map && (p.map.value = h.map), h.alphaMap && (p.alphaMap.value = h.alphaMap), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    let E;
    h.map ? (E = h.map) : h.alphaMap && (E = h.alphaMap), E !== void 0 && (E.matrixAutoUpdate === !0 && E.updateMatrix(), p.uvTransform.value.copy(E.matrix));
  }
  function l(p, h) {
    p.diffuse.value.copy(h.color), (p.opacity.value = h.opacity), (p.rotation.value = h.rotation), h.map && (p.map.value = h.map), h.alphaMap && (p.alphaMap.value = h.alphaMap), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    let _;
    h.map ? (_ = h.map) : h.alphaMap && (_ = h.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
  }
  function c(p, h) {
    p.specular.value.copy(h.specular), (p.shininess.value = Math.max(h.shininess, 1e-4));
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function u(p, h) {
    (p.roughness.value = h.roughness), (p.metalness.value = h.metalness), h.roughnessMap && (p.roughnessMap.value = h.roughnessMap), h.metalnessMap && (p.metalnessMap.value = h.metalnessMap), e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function f(p, h, _) {
    (p.ior.value = h.ior), h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), (p.sheenRoughness.value = h.sheenRoughness), h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap)), h.clearcoat > 0 && ((p.clearcoat.value = h.clearcoat), (p.clearcoatRoughness.value = h.clearcoatRoughness), h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap), h.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), (p.clearcoatNormalMap.value = h.clearcoatNormalMap), h.side === Ot && p.clearcoatNormalScale.value.negate())), h.iridescence > 0 && ((p.iridescence.value = h.iridescence), (p.iridescenceIOR.value = h.iridescenceIOR), (p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0]), (p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1]), h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap)), h.transmission > 0 && ((p.transmission.value = h.transmission), (p.transmissionSamplerMap.value = _.texture), p.transmissionSamplerSize.value.set(_.width, _.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap), (p.thickness.value = h.thickness), h.thicknessMap && (p.thicknessMap.value = h.thicknessMap), (p.attenuationDistance.value = h.attenuationDistance), p.attenuationColor.value.copy(h.attenuationColor)), (p.specularIntensity.value = h.specularIntensity), p.specularColor.value.copy(h.specularColor), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap);
  }
  function m(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function g(p, h) {
    p.referencePosition.value.copy(h.referencePosition), (p.nearDistance.value = h.nearDistance), (p.farDistance.value = h.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function Km(r, e, t, n) {
  let i = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? r.getParameter(35375) : 0;
  function l(M, E) {
    const w = E.program;
    n.uniformBlockBinding(M, w);
  }
  function c(M, E) {
    let w = i[M.id];
    w === void 0 && (g(M), (w = d(M)), (i[M.id] = w), M.addEventListener("dispose", h));
    const S = E.program;
    n.updateUBOMapping(M, S);
    const D = e.render.frame;
    s[M.id] !== D && (f(M), (s[M.id] = D));
  }
  function d(M) {
    const E = u();
    M.__bindingPointIndex = E;
    const w = r.createBuffer(),
      S = M.__size,
      D = M.usage;
    return r.bindBuffer(35345, w), r.bufferData(35345, S, D), r.bindBuffer(35345, null), r.bindBufferBase(35345, E, w), w;
  }
  function u() {
    for (let M = 0; M < a; M++) if (o.indexOf(M) === -1) return o.push(M), M;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(M) {
    const E = i[M.id],
      w = M.uniforms,
      S = M.__cache;
    r.bindBuffer(35345, E);
    for (let D = 0, z = w.length; D < z; D++) {
      const x = w[D];
      if (m(x, D, S) === !0) {
        const A = x.value,
          O = x.__offset;
        typeof A == "number" ? ((x.__data[0] = A), r.bufferSubData(35345, O, x.__data)) : (x.value.isMatrix3 ? ((x.__data[0] = x.value.elements[0]), (x.__data[1] = x.value.elements[1]), (x.__data[2] = x.value.elements[2]), (x.__data[3] = x.value.elements[0]), (x.__data[4] = x.value.elements[3]), (x.__data[5] = x.value.elements[4]), (x.__data[6] = x.value.elements[5]), (x.__data[7] = x.value.elements[0]), (x.__data[8] = x.value.elements[6]), (x.__data[9] = x.value.elements[7]), (x.__data[10] = x.value.elements[8]), (x.__data[11] = x.value.elements[0])) : A.toArray(x.__data), r.bufferSubData(35345, O, x.__data));
      }
    }
    r.bindBuffer(35345, null);
  }
  function m(M, E, w) {
    const S = M.value;
    if (w[E] === void 0) return typeof S == "number" ? (w[E] = S) : (w[E] = S.clone()), !0;
    if (typeof S == "number") {
      if (w[E] !== S) return (w[E] = S), !0;
    } else {
      const D = w[E];
      if (D.equals(S) === !1) return D.copy(S), !0;
    }
    return !1;
  }
  function g(M) {
    const E = M.uniforms;
    let w = 0;
    const S = 16;
    let D = 0;
    for (let z = 0, x = E.length; z < x; z++) {
      const A = E[z],
        O = p(A);
      if (((A.__data = new Float32Array(O.storage / Float32Array.BYTES_PER_ELEMENT)), (A.__offset = w), z > 0)) {
        D = w % S;
        const Z = S - D;
        D !== 0 && Z - O.boundary < 0 && ((w += S - D), (A.__offset = w));
      }
      w += O.storage;
    }
    return (D = w % S), D > 0 && (w += S - D), (M.__size = w), (M.__cache = {}), this;
  }
  function p(M) {
    const E = M.value,
      w = { boundary: 0, storage: 0 };
    return typeof E == "number" ? ((w.boundary = 4), (w.storage = 4)) : E.isVector2 ? ((w.boundary = 8), (w.storage = 8)) : E.isVector3 || E.isColor ? ((w.boundary = 16), (w.storage = 12)) : E.isVector4 ? ((w.boundary = 16), (w.storage = 16)) : E.isMatrix3 ? ((w.boundary = 48), (w.storage = 48)) : E.isMatrix4 ? ((w.boundary = 64), (w.storage = 64)) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), w;
  }
  function h(M) {
    const E = M.target;
    E.removeEventListener("dispose", h);
    const w = o.indexOf(E.__bindingPointIndex);
    o.splice(w, 1), r.deleteBuffer(i[E.id]), delete i[E.id], delete s[E.id];
  }
  function _() {
    for (const M in i) r.deleteBuffer(i[M]);
    (o = []), (i = {}), (s = {});
  }
  return { bind: l, update: c, dispose: _ };
}
function Qm() {
  const r = gr("canvas");
  return (r.style.display = "block"), r;
}
function Sc(r = {}) {
  this.isWebGLRenderer = !0;
  const e = r.canvas !== void 0 ? r.canvas : Qm(),
    t = r.context !== void 0 ? r.context : null,
    n = r.depth !== void 0 ? r.depth : !0,
    i = r.stencil !== void 0 ? r.stencil : !0,
    s = r.antialias !== void 0 ? r.antialias : !1,
    o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0,
    a = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1,
    l = r.powerPreference !== void 0 ? r.powerPreference : "default",
    c = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1;
  let d;
  t !== null ? (d = t.getContextAttributes().alpha) : (d = r.alpha !== void 0 ? r.alpha : !1);
  let u = null,
    f = null;
  const m = [],
    g = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = Zn),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = _n),
    (this.toneMappingExposure = 1),
    Object.defineProperties(this, {
      gammaFactor: {
        get: function () {
          return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        }
      }
    });
  const p = this;
  let h = !1,
    _ = 0,
    M = 0,
    E = null,
    w = -1,
    S = null;
  const D = new Ge(),
    z = new Ge();
  let x = null,
    A = e.width,
    O = e.height,
    Z = 1,
    ue = null,
    B = null;
  const R = new Ge(0, 0, A, O),
    q = new Ge(0, 0, A, O);
  let $ = !1;
  const J = new Wa();
  let W = !1,
    N = !1,
    U = null;
  const te = new We(),
    Q = new _e(),
    K = new C(),
    fe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ye() {
    return E === null ? Z : 1;
  }
  let X = t;
  function Ie(b, I) {
    for (let H = 0; H < b.length; H++) {
      const P = b[H],
        G = e.getContext(P, I);
      if (G !== null) return G;
    }
    return null;
  }
  try {
    const b = { alpha: !0, depth: n, stencil: i, antialias: s, premultipliedAlpha: o, preserveDrawingBuffer: a, powerPreference: l, failIfMajorPerformanceCaveat: c };
    if (("setAttribute" in e && e.setAttribute("data-engine", `three.js r${ka}`), e.addEventListener("webglcontextlost", Se, !1), e.addEventListener("webglcontextrestored", Ce, !1), e.addEventListener("webglcontextcreationerror", He, !1), X === null)) {
      const I = ["webgl2", "webgl", "experimental-webgl"];
      if ((p.isWebGL1Renderer === !0 && I.shift(), (X = Ie(I, b)), X === null)) throw Ie(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    X.getShaderPrecisionFormat === void 0 &&
      (X.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (b) {
    throw (console.error("THREE.WebGLRenderer: " + b.message), b);
  }
  let ve, be, he, Oe, Le, ge, Ze, ot, Qe, yt, et, ze, Tt, bt, L, v, V, ee, ne, oe, xe, y, j, ie;
  function le() {
    (ve = new up(X)), (be = new ip(X, ve, r)), ve.init(be), (y = new Ym(X, ve, be)), (he = new Wm(X, ve, be)), (Oe = new fp()), (Le = new Tm()), (ge = new Xm(X, ve, he, Le, be, y, Oe)), (Ze = new sp(p)), (ot = new cp(p)), (Qe = new bd(X, be)), (j = new tp(X, ve, Qe, be)), (yt = new dp(X, Qe, Oe, j)), (et = new _p(X, yt, Qe, Oe)), (ne = new gp(X, be, ge)), (v = new rp(Le)), (ze = new Dm(p, Ze, ot, ve, be, j, v)), (Tt = new Jm(p, Le)), (bt = new Rm()), (L = new Um(ve, be)), (ee = new ep(p, Ze, he, et, d, o)), (V = new Gm(p, et, be)), (ie = new Km(X, Oe, be, he)), (oe = new np(X, ve, Oe, be)), (xe = new hp(X, ve, Oe, be)), (Oe.programs = ze.programs), (p.capabilities = be), (p.extensions = ve), (p.properties = Le), (p.renderLists = bt), (p.shadowMap = V), (p.state = he), (p.info = Oe);
  }
  le();
  const ae = new $m(p, X);
  (this.xr = ae),
    (this.getContext = function () {
      return X;
    }),
    (this.getContextAttributes = function () {
      return X.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const b = ve.get("WEBGL_lose_context");
      b && b.loseContext();
    }),
    (this.forceContextRestore = function () {
      const b = ve.get("WEBGL_lose_context");
      b && b.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return Z;
    }),
    (this.setPixelRatio = function (b) {
      b !== void 0 && ((Z = b), this.setSize(A, O, !1));
    }),
    (this.getSize = function (b) {
      return b.set(A, O);
    }),
    (this.setSize = function (b, I, H) {
      if (ae.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      (A = b), (O = I), (e.width = Math.floor(b * Z)), (e.height = Math.floor(I * Z)), H !== !1 && ((e.style.width = b + "px"), (e.style.height = I + "px")), this.setViewport(0, 0, b, I);
    }),
    (this.getDrawingBufferSize = function (b) {
      return b.set(A * Z, O * Z).floor();
    }),
    (this.setDrawingBufferSize = function (b, I, H) {
      (A = b), (O = I), (Z = H), (e.width = Math.floor(b * H)), (e.height = Math.floor(I * H)), this.setViewport(0, 0, b, I);
    }),
    (this.getCurrentViewport = function (b) {
      return b.copy(D);
    }),
    (this.getViewport = function (b) {
      return b.copy(R);
    }),
    (this.setViewport = function (b, I, H, P) {
      b.isVector4 ? R.set(b.x, b.y, b.z, b.w) : R.set(b, I, H, P), he.viewport(D.copy(R).multiplyScalar(Z).floor());
    }),
    (this.getScissor = function (b) {
      return b.copy(q);
    }),
    (this.setScissor = function (b, I, H, P) {
      b.isVector4 ? q.set(b.x, b.y, b.z, b.w) : q.set(b, I, H, P), he.scissor(z.copy(q).multiplyScalar(Z).floor());
    }),
    (this.getScissorTest = function () {
      return $;
    }),
    (this.setScissorTest = function (b) {
      he.setScissorTest(($ = b));
    }),
    (this.setOpaqueSort = function (b) {
      ue = b;
    }),
    (this.setTransparentSort = function (b) {
      B = b;
    }),
    (this.getClearColor = function (b) {
      return b.copy(ee.getClearColor());
    }),
    (this.setClearColor = function () {
      ee.setClearColor.apply(ee, arguments);
    }),
    (this.getClearAlpha = function () {
      return ee.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      ee.setClearAlpha.apply(ee, arguments);
    }),
    (this.clear = function (b = !0, I = !0, H = !0) {
      let P = 0;
      b && (P |= 16384), I && (P |= 256), H && (P |= 1024), X.clear(P);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", Se, !1), e.removeEventListener("webglcontextrestored", Ce, !1), e.removeEventListener("webglcontextcreationerror", He, !1), bt.dispose(), L.dispose(), Le.dispose(), Ze.dispose(), ot.dispose(), et.dispose(), j.dispose(), ie.dispose(), ze.dispose(), ae.dispose(), ae.removeEventListener("sessionstart", Re), ae.removeEventListener("sessionend", nt), U && (U.dispose(), (U = null)), je.stop();
    });
  function Se(b) {
    b.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), (h = !0);
  }
  function Ce() {
    console.log("THREE.WebGLRenderer: Context Restored."), (h = !1);
    const b = Oe.autoReset,
      I = V.enabled,
      H = V.autoUpdate,
      P = V.needsUpdate,
      G = V.type;
    le(), (Oe.autoReset = b), (V.enabled = I), (V.autoUpdate = H), (V.needsUpdate = P), (V.type = G);
  }
  function He(b) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", b.statusMessage);
  }
  function T(b) {
    const I = b.target;
    I.removeEventListener("dispose", T), se(I);
  }
  function se(b) {
    k(b), Le.remove(b);
  }
  function k(b) {
    const I = Le.get(b).programs;
    I !== void 0 &&
      (I.forEach(function (H) {
        ze.releaseProgram(H);
      }),
      b.isShaderMaterial && ze.releaseShaderCache(b));
  }
  (this.renderBufferDirect = function (b, I, H, P, G, me) {
    I === null && (I = fe);
    const Me = G.isMesh && G.matrixWorld.determinant() < 0,
      Ee = Hc(b, I, H, P, G);
    he.setMaterial(P, Me);
    let we = H.index;
    const Ue = H.attributes.position;
    if (we === null) {
      if (Ue === void 0 || Ue.count === 0) return;
    } else if (we.count === 0) return;
    let Te = 1;
    P.wireframe === !0 && ((we = yt.getWireframeAttribute(H)), (Te = 2)), j.setup(G, P, Ee, H, we);
    let Pe,
      Ye = oe;
    we !== null && ((Pe = Qe.get(we)), (Ye = xe), Ye.setIndex(Pe));
    const In = we !== null ? we.count : Ue.count,
      ai = H.drawRange.start * Te,
      oi = H.drawRange.count * Te,
      Yt = me !== null ? me.start * Te : 0,
      Fe = me !== null ? me.count * Te : 1 / 0,
      li = Math.max(ai, Yt),
      $e = Math.min(In, ai + oi, Yt + Fe) - 1,
      Rt = Math.max(0, $e - li + 1);
    if (Rt !== 0) {
      if (G.isMesh) P.wireframe === !0 ? (he.setLineWidth(P.wireframeLinewidth * ye()), Ye.setMode(1)) : Ye.setMode(4);
      else if (G.isLine) {
        let Sn = P.linewidth;
        Sn === void 0 && (Sn = 1), he.setLineWidth(Sn * ye()), G.isLineSegments ? Ye.setMode(1) : G.isLineLoop ? Ye.setMode(2) : Ye.setMode(3);
      } else G.isPoints ? Ye.setMode(0) : G.isSprite && Ye.setMode(4);
      if (G.isInstancedMesh) Ye.renderInstances(li, Rt, G.count);
      else if (H.isInstancedBufferGeometry) {
        const Sn = Math.min(H.instanceCount, H._maxInstanceCount);
        Ye.renderInstances(li, Rt, Sn);
      } else Ye.render(li, Rt);
    }
  }),
    (this.compile = function (b, I) {
      function H(P, G, me) {
        P.transparent === !0 && P.side === _t ? ((P.side = Ot), (P.needsUpdate = !0), Cr(P, G, me), (P.side = Bi), (P.needsUpdate = !0), Cr(P, G, me), (P.side = _t)) : Cr(P, G, me);
      }
      (f = L.get(b)),
        f.init(),
        g.push(f),
        b.traverseVisible(function (P) {
          P.isLight && P.layers.test(I.layers) && (f.pushLight(P), P.castShadow && f.pushShadow(P));
        }),
        f.setupLights(p.physicallyCorrectLights),
        b.traverse(function (P) {
          const G = P.material;
          if (G)
            if (Array.isArray(G))
              for (let me = 0; me < G.length; me++) {
                const Me = G[me];
                H(Me, b, P);
              }
            else H(G, b, P);
        }),
        g.pop(),
        (f = null);
    });
  let de = null;
  function ce(b) {
    de && de(b);
  }
  function Re() {
    je.stop();
  }
  function nt() {
    je.start();
  }
  const je = new mc();
  je.setAnimationLoop(ce),
    typeof self < "u" && je.setContext(self),
    (this.setAnimationLoop = function (b) {
      (de = b), ae.setAnimationLoop(b), b === null ? je.stop() : je.start();
    }),
    ae.addEventListener("sessionstart", Re),
    ae.addEventListener("sessionend", nt),
    (this.render = function (b, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (h === !0) return;
      b.matrixWorldAutoUpdate === !0 && b.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), ae.enabled === !0 && ae.isPresenting === !0 && (ae.cameraAutoUpdate === !0 && ae.updateCamera(I), (I = ae.getCamera())), b.isScene === !0 && b.onBeforeRender(p, b, I, E), (f = L.get(b, g.length)), f.init(), g.push(f), te.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), J.setFromProjectionMatrix(te), (N = this.localClippingEnabled), (W = v.init(this.clippingPlanes, N, I)), (u = bt.get(b, m.length)), u.init(), m.push(u), xn(b, I, 0, p.sortObjects), u.finish(), p.sortObjects === !0 && u.sort(ue, B), W === !0 && v.beginShadows();
      const H = f.state.shadowsArray;
      if ((V.render(H, b, I), W === !0 && v.endShadows(), this.info.autoReset === !0 && this.info.reset(), ee.render(u, b), f.setupLights(p.physicallyCorrectLights), I.isArrayCamera)) {
        const P = I.cameras;
        for (let G = 0, me = P.length; G < me; G++) {
          const Me = P[G];
          Xe(u, b, Me, Me.viewport);
        }
      } else Xe(u, b, I);
      E !== null && (ge.updateMultisampleRenderTarget(E), ge.updateRenderTargetMipmap(E)), b.isScene === !0 && b.onAfterRender(p, b, I), j.resetDefaultState(), (w = -1), (S = null), g.pop(), g.length > 0 ? (f = g[g.length - 1]) : (f = null), m.pop(), m.length > 0 ? (u = m[m.length - 1]) : (u = null);
    });
  function xn(b, I, H, P) {
    if (b.visible === !1) return;
    if (b.layers.test(I.layers)) {
      if (b.isGroup) H = b.renderOrder;
      else if (b.isLOD) b.autoUpdate === !0 && b.update(I);
      else if (b.isLight) f.pushLight(b), b.castShadow && f.pushShadow(b);
      else if (b.isSprite) {
        if (!b.frustumCulled || J.intersectsSprite(b)) {
          P && K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);
          const Me = et.update(b),
            Ee = b.material;
          Ee.visible && u.push(b, Me, Ee, H, K.z, null);
        }
      } else if ((b.isMesh || b.isLine || b.isPoints) && (b.isSkinnedMesh && b.skeleton.frame !== Oe.render.frame && (b.skeleton.update(), (b.skeleton.frame = Oe.render.frame)), !b.frustumCulled || J.intersectsObject(b))) {
        P && K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);
        const Me = et.update(b),
          Ee = b.material;
        if (Array.isArray(Ee)) {
          const we = Me.groups;
          for (let Ue = 0, Te = we.length; Ue < Te; Ue++) {
            const Pe = we[Ue],
              Ye = Ee[Pe.materialIndex];
            Ye && Ye.visible && u.push(b, Me, Ye, H, K.z, Pe);
          }
        } else Ee.visible && u.push(b, Me, Ee, H, K.z, null);
      }
    }
    const me = b.children;
    for (let Me = 0, Ee = me.length; Me < Ee; Me++) xn(me[Me], I, H, P);
  }
  function Xe(b, I, H, P) {
    const G = b.opaque,
      me = b.transmissive,
      Me = b.transparent;
    f.setupLightsView(H), me.length > 0 && ln(G, I, H), P && he.viewport(D.copy(P)), G.length > 0 && Pt(G, I, H), me.length > 0 && Pt(me, I, H), Me.length > 0 && Pt(Me, I, H), he.buffers.depth.setTest(!0), he.buffers.depth.setMask(!0), he.buffers.color.setMask(!0), he.setPolygonOffset(!1);
  }
  function ln(b, I, H) {
    const P = be.isWebGL2;
    U === null && (U = new $n(1, 1, { generateMipmaps: !0, type: ve.has("EXT_color_buffer_half_float") ? mr : jn, minFilter: ds, samples: P && s === !0 ? 4 : 0 })), p.getDrawingBufferSize(Q), P ? U.setSize(Q.x, Q.y) : U.setSize(rs(Q.x), rs(Q.y));
    const G = p.getRenderTarget();
    p.setRenderTarget(U), p.clear();
    const me = p.toneMapping;
    (p.toneMapping = _n), Pt(b, I, H), (p.toneMapping = me), ge.updateMultisampleRenderTarget(U), ge.updateRenderTargetMipmap(U), p.setRenderTarget(G);
  }
  function Pt(b, I, H) {
    const P = I.isScene === !0 ? I.overrideMaterial : null;
    for (let G = 0, me = b.length; G < me; G++) {
      const Me = b[G],
        Ee = Me.object,
        we = Me.geometry,
        Ue = P === null ? Me.material : P,
        Te = Me.group;
      Ee.layers.test(H.layers) && Vc(Ee, I, H, we, Ue, Te);
    }
  }
  function Vc(b, I, H, P, G, me) {
    b.onBeforeRender(p, I, H, P, G, me), b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, b.matrixWorld), b.normalMatrix.getNormalMatrix(b.modelViewMatrix), G.onBeforeRender(p, I, H, P, b, me), G.transparent === !0 && G.side === _t ? ((G.side = Ot), (G.needsUpdate = !0), p.renderBufferDirect(H, I, P, G, b, me), (G.side = Bi), (G.needsUpdate = !0), p.renderBufferDirect(H, I, P, G, b, me), (G.side = _t)) : p.renderBufferDirect(H, I, P, G, b, me), b.onAfterRender(p, I, H, P, G, me);
  }
  function Cr(b, I, H) {
    I.isScene !== !0 && (I = fe);
    const P = Le.get(b),
      G = f.state.lights,
      me = f.state.shadowsArray,
      Me = G.state.version,
      Ee = ze.getParameters(b, G.state, me, I, H),
      we = ze.getProgramCacheKey(Ee);
    let Ue = P.programs;
    (P.environment = b.isMeshStandardMaterial ? I.environment : null), (P.fog = I.fog), (P.envMap = (b.isMeshStandardMaterial ? ot : Ze).get(b.envMap || P.environment)), Ue === void 0 && (b.addEventListener("dispose", T), (Ue = new Map()), (P.programs = Ue));
    let Te = Ue.get(we);
    if (Te !== void 0) {
      if (P.currentProgram === Te && P.lightsStateVersion === Me) return no(b, Ee), Te;
    } else (Ee.uniforms = ze.getUniforms(b)), b.onBuild(H, Ee, p), b.onBeforeCompile(Ee, p), (Te = ze.acquireProgram(Ee, we)), Ue.set(we, Te), (P.uniforms = Ee.uniforms);
    const Pe = P.uniforms;
    ((!b.isShaderMaterial && !b.isRawShaderMaterial) || b.clipping === !0) && (Pe.clippingPlanes = v.uniform), no(b, Ee), (P.needsLights = Wc(b)), (P.lightsStateVersion = Me), P.needsLights && ((Pe.ambientLightColor.value = G.state.ambient), (Pe.lightProbe.value = G.state.probe), (Pe.directionalLights.value = G.state.directional), (Pe.directionalLightShadows.value = G.state.directionalShadow), (Pe.spotLights.value = G.state.spot), (Pe.spotLightShadows.value = G.state.spotShadow), (Pe.rectAreaLights.value = G.state.rectArea), (Pe.ltc_1.value = G.state.rectAreaLTC1), (Pe.ltc_2.value = G.state.rectAreaLTC2), (Pe.pointLights.value = G.state.point), (Pe.pointLightShadows.value = G.state.pointShadow), (Pe.hemisphereLights.value = G.state.hemi), (Pe.directionalShadowMap.value = G.state.directionalShadowMap), (Pe.directionalShadowMatrix.value = G.state.directionalShadowMatrix), (Pe.spotShadowMap.value = G.state.spotShadowMap), (Pe.spotLightMatrix.value = G.state.spotLightMatrix), (Pe.spotLightMap.value = G.state.spotLightMap), (Pe.pointShadowMap.value = G.state.pointShadowMap), (Pe.pointShadowMatrix.value = G.state.pointShadowMatrix));
    const Ye = Te.getUniforms(),
      In = ts.seqWithValue(Ye.seq, Pe);
    return (P.currentProgram = Te), (P.uniformsList = In), Te;
  }
  function no(b, I) {
    const H = Le.get(b);
    (H.outputEncoding = I.outputEncoding), (H.instancing = I.instancing), (H.skinning = I.skinning), (H.morphTargets = I.morphTargets), (H.morphNormals = I.morphNormals), (H.morphColors = I.morphColors), (H.morphTargetsCount = I.morphTargetsCount), (H.numClippingPlanes = I.numClippingPlanes), (H.numIntersection = I.numClipIntersection), (H.vertexAlphas = I.vertexAlphas), (H.vertexTangents = I.vertexTangents), (H.toneMapping = I.toneMapping);
  }
  function Hc(b, I, H, P, G) {
    I.isScene !== !0 && (I = fe), ge.resetTextureUnits();
    const me = I.fog,
      Me = P.isMeshStandardMaterial ? I.environment : null,
      Ee = E === null ? p.outputEncoding : E.isXRRenderTarget === !0 ? E.texture.encoding : Zn,
      we = (P.isMeshStandardMaterial ? ot : Ze).get(P.envMap || Me),
      Ue = P.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4,
      Te = !!P.normalMap && !!H.attributes.tangent,
      Pe = !!H.morphAttributes.position,
      Ye = !!H.morphAttributes.normal,
      In = !!H.morphAttributes.color,
      ai = P.toneMapped ? p.toneMapping : _n,
      oi = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color,
      Yt = oi !== void 0 ? oi.length : 0,
      Fe = Le.get(P),
      li = f.state.lights;
    if (W === !0 && (N === !0 || b !== S)) {
      const Mt = b === S && P.id === w;
      v.setState(P, b, Mt);
    }
    let $e = !1;
    P.version === Fe.__version ? ((Fe.needsLights && Fe.lightsStateVersion !== li.state.version) || Fe.outputEncoding !== Ee || (G.isInstancedMesh && Fe.instancing === !1) || (!G.isInstancedMesh && Fe.instancing === !0) || (G.isSkinnedMesh && Fe.skinning === !1) || (!G.isSkinnedMesh && Fe.skinning === !0) || Fe.envMap !== we || (P.fog === !0 && Fe.fog !== me) || (Fe.numClippingPlanes !== void 0 && (Fe.numClippingPlanes !== v.numPlanes || Fe.numIntersection !== v.numIntersection)) || Fe.vertexAlphas !== Ue || Fe.vertexTangents !== Te || Fe.morphTargets !== Pe || Fe.morphNormals !== Ye || Fe.morphColors !== In || Fe.toneMapping !== ai || (be.isWebGL2 === !0 && Fe.morphTargetsCount !== Yt)) && ($e = !0) : (($e = !0), (Fe.__version = P.version));
    let Rt = Fe.currentProgram;
    $e === !0 && (Rt = Cr(P, I, G));
    let Sn = !1,
      $i = !1,
      xs = !1;
    const pt = Rt.getUniforms(),
      Fn = Fe.uniforms;
    if ((he.useProgram(Rt.program) && ((Sn = !0), ($i = !0), (xs = !0)), P.id !== w && ((w = P.id), ($i = !0)), Sn || S !== b)) {
      if ((pt.setValue(X, "projectionMatrix", b.projectionMatrix), be.logarithmicDepthBuffer && pt.setValue(X, "logDepthBufFC", 2 / (Math.log(b.far + 1) / Math.LN2)), S !== b && ((S = b), ($i = !0), (xs = !0)), P.isShaderMaterial || P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshStandardMaterial || P.envMap)) {
        const Mt = pt.map.cameraPosition;
        Mt !== void 0 && Mt.setValue(X, K.setFromMatrixPosition(b.matrixWorld));
      }
      (P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshLambertMaterial || P.isMeshBasicMaterial || P.isMeshStandardMaterial || P.isShaderMaterial) && pt.setValue(X, "isOrthographic", b.isOrthographicCamera === !0), (P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshLambertMaterial || P.isMeshBasicMaterial || P.isMeshStandardMaterial || P.isShaderMaterial || P.isShadowMaterial || G.isSkinnedMesh) && pt.setValue(X, "viewMatrix", b.matrixWorldInverse);
    }
    if (G.isSkinnedMesh) {
      pt.setOptional(X, G, "bindMatrix"), pt.setOptional(X, G, "bindMatrixInverse");
      const Mt = G.skeleton;
      Mt && (be.floatVertexTextures ? (Mt.boneTexture === null && Mt.computeBoneTexture(), pt.setValue(X, "boneTexture", Mt.boneTexture, ge), pt.setValue(X, "boneTextureSize", Mt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Ss = H.morphAttributes;
    if (((Ss.position !== void 0 || Ss.normal !== void 0 || (Ss.color !== void 0 && be.isWebGL2 === !0)) && ne.update(G, H, P, Rt), ($i || Fe.receiveShadow !== G.receiveShadow) && ((Fe.receiveShadow = G.receiveShadow), pt.setValue(X, "receiveShadow", G.receiveShadow)), P.isMeshGouraudMaterial && P.envMap !== null && ((Fn.envMap.value = we), (Fn.flipEnvMap.value = we.isCubeTexture && we.isRenderTargetTexture === !1 ? -1 : 1)), $i && (pt.setValue(X, "toneMappingExposure", p.toneMappingExposure), Fe.needsLights && Gc(Fn, xs), me && P.fog === !0 && Tt.refreshFogUniforms(Fn, me), Tt.refreshMaterialUniforms(Fn, P, Z, O, U), ts.upload(X, Fe.uniformsList, Fn, ge)), P.isShaderMaterial && P.uniformsNeedUpdate === !0 && (ts.upload(X, Fe.uniformsList, Fn, ge), (P.uniformsNeedUpdate = !1)), P.isSpriteMaterial && pt.setValue(X, "center", G.center), pt.setValue(X, "modelViewMatrix", G.modelViewMatrix), pt.setValue(X, "normalMatrix", G.normalMatrix), pt.setValue(X, "modelMatrix", G.matrixWorld), P.isShaderMaterial || P.isRawShaderMaterial)) {
      const Mt = P.uniformsGroups;
      for (let ys = 0, Xc = Mt.length; ys < Xc; ys++)
        if (be.isWebGL2) {
          const io = Mt[ys];
          ie.update(io, Rt), ie.bind(io, Rt);
        } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return Rt;
  }
  function Gc(b, I) {
    (b.ambientLightColor.needsUpdate = I), (b.lightProbe.needsUpdate = I), (b.directionalLights.needsUpdate = I), (b.directionalLightShadows.needsUpdate = I), (b.pointLights.needsUpdate = I), (b.pointLightShadows.needsUpdate = I), (b.spotLights.needsUpdate = I), (b.spotLightShadows.needsUpdate = I), (b.rectAreaLights.needsUpdate = I), (b.hemisphereLights.needsUpdate = I);
  }
  function Wc(b) {
    return b.isMeshLambertMaterial || b.isMeshToonMaterial || b.isMeshPhongMaterial || b.isMeshStandardMaterial || b.isShadowMaterial || (b.isShaderMaterial && b.lights === !0);
  }
  (this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return M;
    }),
    (this.getRenderTarget = function () {
      return E;
    }),
    (this.setRenderTargetTextures = function (b, I, H) {
      (Le.get(b.texture).__webglTexture = I), (Le.get(b.depthTexture).__webglTexture = H);
      const P = Le.get(b);
      (P.__hasExternalTextures = !0), P.__hasExternalTextures && ((P.__autoAllocateDepthBuffer = H === void 0), P.__autoAllocateDepthBuffer || (ve.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), (P.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (b, I) {
      const H = Le.get(b);
      (H.__webglFramebuffer = I), (H.__useDefaultFramebuffer = I === void 0);
    }),
    (this.setRenderTarget = function (b, I = 0, H = 0) {
      (E = b), (_ = I), (M = H);
      let P = !0;
      if (b) {
        const we = Le.get(b);
        we.__useDefaultFramebuffer !== void 0 ? (he.bindFramebuffer(36160, null), (P = !1)) : we.__webglFramebuffer === void 0 ? ge.setupRenderTarget(b) : we.__hasExternalTextures && ge.rebindTextures(b, Le.get(b.texture).__webglTexture, Le.get(b.depthTexture).__webglTexture);
      }
      let G = null,
        me = !1,
        Me = !1;
      if (b) {
        const we = b.texture;
        (we.isData3DTexture || we.isDataArrayTexture) && (Me = !0);
        const Ue = Le.get(b).__webglFramebuffer;
        b.isWebGLCubeRenderTarget ? ((G = Ue[I]), (me = !0)) : be.isWebGL2 && b.samples > 0 && ge.useMultisampledRTT(b) === !1 ? (G = Le.get(b).__webglMultisampledFramebuffer) : (G = Ue), D.copy(b.viewport), z.copy(b.scissor), (x = b.scissorTest);
      } else D.copy(R).multiplyScalar(Z).floor(), z.copy(q).multiplyScalar(Z).floor(), (x = $);
      if ((he.bindFramebuffer(36160, G) && be.drawBuffers && P && he.drawBuffers(b, G), he.viewport(D), he.scissor(z), he.setScissorTest(x), me)) {
        const we = Le.get(b.texture);
        X.framebufferTexture2D(36160, 36064, 34069 + I, we.__webglTexture, H);
      } else if (Me) {
        const we = Le.get(b.texture),
          Ue = I || 0;
        X.framebufferTextureLayer(36160, 36064, we.__webglTexture, H || 0, Ue);
      }
      w = -1;
    }),
    (this.readRenderTargetPixels = function (b, I, H, P, G, me, Me) {
      if (!(b && b.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ee = Le.get(b).__webglFramebuffer;
      if ((b.isWebGLCubeRenderTarget && Me !== void 0 && (Ee = Ee[Me]), Ee)) {
        he.bindFramebuffer(36160, Ee);
        try {
          const we = b.texture,
            Ue = we.format,
            Te = we.type;
          if (Ue !== rn && y.convert(Ue) !== X.getParameter(35739)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Pe = Te === mr && (ve.has("EXT_color_buffer_half_float") || (be.isWebGL2 && ve.has("EXT_color_buffer_float")));
          if (Te !== jn && y.convert(Te) !== X.getParameter(35738) && !(Te === Gn && (be.isWebGL2 || ve.has("OES_texture_float") || ve.has("WEBGL_color_buffer_float"))) && !Pe) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= b.width - P && H >= 0 && H <= b.height - G && X.readPixels(I, H, P, G, y.convert(Ue), y.convert(Te), me);
        } finally {
          const we = E !== null ? Le.get(E).__webglFramebuffer : null;
          he.bindFramebuffer(36160, we);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (b, I, H = 0) {
      const P = Math.pow(2, -H),
        G = Math.floor(I.image.width * P),
        me = Math.floor(I.image.height * P);
      ge.setTexture2D(I, 0), X.copyTexSubImage2D(3553, H, 0, 0, b.x, b.y, G, me), he.unbindTexture();
    }),
    (this.copyTextureToTexture = function (b, I, H, P = 0) {
      const G = I.image.width,
        me = I.image.height,
        Me = y.convert(H.format),
        Ee = y.convert(H.type);
      ge.setTexture2D(H, 0), X.pixelStorei(37440, H.flipY), X.pixelStorei(37441, H.premultiplyAlpha), X.pixelStorei(3317, H.unpackAlignment), I.isDataTexture ? X.texSubImage2D(3553, P, b.x, b.y, G, me, Me, Ee, I.image.data) : I.isCompressedTexture ? X.compressedTexSubImage2D(3553, P, b.x, b.y, I.mipmaps[0].width, I.mipmaps[0].height, Me, I.mipmaps[0].data) : X.texSubImage2D(3553, P, b.x, b.y, Me, Ee, I.image), P === 0 && H.generateMipmaps && X.generateMipmap(3553), he.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (b, I, H, P, G = 0) {
      if (p.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const me = b.max.x - b.min.x + 1,
        Me = b.max.y - b.min.y + 1,
        Ee = b.max.z - b.min.z + 1,
        we = y.convert(P.format),
        Ue = y.convert(P.type);
      let Te;
      if (P.isData3DTexture) ge.setTexture3D(P, 0), (Te = 32879);
      else if (P.isDataArrayTexture) ge.setTexture2DArray(P, 0), (Te = 35866);
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      X.pixelStorei(37440, P.flipY), X.pixelStorei(37441, P.premultiplyAlpha), X.pixelStorei(3317, P.unpackAlignment);
      const Pe = X.getParameter(3314),
        Ye = X.getParameter(32878),
        In = X.getParameter(3316),
        ai = X.getParameter(3315),
        oi = X.getParameter(32877),
        Yt = H.isCompressedTexture ? H.mipmaps[0] : H.image;
      X.pixelStorei(3314, Yt.width), X.pixelStorei(32878, Yt.height), X.pixelStorei(3316, b.min.x), X.pixelStorei(3315, b.min.y), X.pixelStorei(32877, b.min.z), H.isDataTexture || H.isData3DTexture ? X.texSubImage3D(Te, G, I.x, I.y, I.z, me, Me, Ee, we, Ue, Yt.data) : H.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), X.compressedTexSubImage3D(Te, G, I.x, I.y, I.z, me, Me, Ee, we, Yt.data)) : X.texSubImage3D(Te, G, I.x, I.y, I.z, me, Me, Ee, we, Ue, Yt), X.pixelStorei(3314, Pe), X.pixelStorei(32878, Ye), X.pixelStorei(3316, In), X.pixelStorei(3315, ai), X.pixelStorei(32877, oi), G === 0 && P.generateMipmaps && X.generateMipmap(Te), he.unbindTexture();
    }),
    (this.initTexture = function (b) {
      b.isCubeTexture ? ge.setTextureCube(b, 0) : b.isData3DTexture ? ge.setTexture3D(b, 0) : b.isDataArrayTexture ? ge.setTexture2DArray(b, 0) : ge.setTexture2D(b, 0), he.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (M = 0), (E = null), he.reset(), j.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class eg extends Sc {}
eg.prototype.isWebGL1Renderer = !0;
class tg extends ht {
  constructor() {
    super(), (this.isScene = !0), (this.type = "Scene"), (this.background = null), (this.environment = null), (this.fog = null), (this.overrideMaterial = null), typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), (this.matrixAutoUpdate = e.matrixAutoUpdate), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), (this.matrixWorldAutoUpdate = e);
  }
}
class ng {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0), (this.array = e), (this.stride = t), (this.count = e !== void 0 ? e.length / t : 0), (this.usage = Ca), (this.updateRange = { offset: 0, count: -1 }), (this.version = 0), (this.uuid = vn());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (this.array = new e.array.constructor(e.array)), (this.count = e.count), (this.stride = e.stride), (this.usage = e.usage), this;
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, s = this.stride; i < s; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = vn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = vn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const mt = new C();
class ss {
  constructor(e, t, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0), (this.name = ""), (this.data = e), (this.itemSize = t), (this.offset = n), (this.normalized = i === !0);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++) mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Be(t, this.array)), (this.data.array[e * this.data.stride + this.offset] = t), this;
  }
  setY(e, t) {
    return this.normalized && (t = Be(t, this.array)), (this.data.array[e * this.data.stride + this.offset + 1] = t), this;
  }
  setZ(e, t) {
    return this.normalized && (t = Be(t, this.array)), (this.data.array[e * this.data.stride + this.offset + 2] = t), this;
  }
  setW(e, t) {
    return this.normalized && (t = Be(t, this.array)), (this.data.array[e * this.data.stride + this.offset + 3] = t), this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (e = e * this.data.stride + this.offset), this.normalized && ((t = Be(t, this.array)), (n = Be(n, this.array))), (this.data.array[e + 0] = t), (this.data.array[e + 1] = n), this;
  }
  setXYZ(e, t, n, i) {
    return (e = e * this.data.stride + this.offset), this.normalized && ((t = Be(t, this.array)), (n = Be(n, this.array)), (i = Be(i, this.array))), (this.data.array[e + 0] = t), (this.data.array[e + 1] = n), (this.data.array[e + 2] = i), this;
  }
  setXYZW(e, t, n, i, s) {
    return (e = e * this.data.stride + this.offset), this.normalized && ((t = Be(t, this.array)), (n = Be(n, this.array)), (i = Be(i, this.array)), (s = Be(s, this.array))), (this.data.array[e + 0] = t), (this.data.array[e + 1] = n), (this.data.array[e + 2] = i), (this.data.array[e + 3] = s), this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return new Ht(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ss(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
class yc extends Wi {
  constructor(e) {
    super(), (this.isSpriteMaterial = !0), (this.type = "SpriteMaterial"), (this.color = new De(16777215)), (this.map = null), (this.alphaMap = null), (this.rotation = 0), (this.sizeAttenuation = !0), (this.transparent = !0), (this.fog = !0), this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), (this.map = e.map), (this.alphaMap = e.alphaMap), (this.rotation = e.rotation), (this.sizeAttenuation = e.sizeAttenuation), (this.fog = e.fog), this;
  }
}
let Li;
const er = new C(),
  Ei = new C(),
  Ai = new C(),
  Ci = new _e(),
  tr = new _e(),
  bc = new We(),
  Zr = new C(),
  nr = new C(),
  $r = new C(),
  ml = new _e(),
  Ks = new _e(),
  gl = new _e();
class ig extends ht {
  constructor(e) {
    if ((super(), (this.isSprite = !0), (this.type = "Sprite"), Li === void 0)) {
      Li = new Gt();
      const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]),
        n = new ng(t, 5);
      Li.setIndex([0, 1, 2, 0, 2, 3]), Li.setAttribute("position", new ss(n, 3, 0, !1)), Li.setAttribute("uv", new ss(n, 2, 3, !1));
    }
    (this.geometry = Li), (this.material = e !== void 0 ? e : new yc()), (this.center = new _e(0.5, 0.5));
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ei.setFromMatrixScale(this.matrixWorld), bc.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ai.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Ei.multiplyScalar(-Ai.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && ((s = Math.cos(n)), (i = Math.sin(n)));
    const o = this.center;
    Jr(Zr.set(-0.5, -0.5, 0), Ai, o, Ei, i, s), Jr(nr.set(0.5, -0.5, 0), Ai, o, Ei, i, s), Jr($r.set(0.5, 0.5, 0), Ai, o, Ei, i, s), ml.set(0, 0), Ks.set(1, 0), gl.set(1, 1);
    let a = e.ray.intersectTriangle(Zr, nr, $r, !1, er);
    if (a === null && (Jr(nr.set(-0.5, 0.5, 0), Ai, o, Ei, i, s), Ks.set(0, 1), (a = e.ray.intersectTriangle(Zr, $r, nr, !1, er)), a === null)) return;
    const l = e.ray.origin.distanceTo(er);
    l < e.near || l > e.far || t.push({ distance: l, point: er.clone(), uv: en.getUV(er, Zr, nr, $r, ml, Ks, gl, new _e()), face: null, object: this });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), (this.material = e.material), this;
  }
}
function Jr(r, e, t, n, i, s) {
  Ci.subVectors(r, t).addScalar(0.5).multiply(n), i !== void 0 ? ((tr.x = s * Ci.x - i * Ci.y), (tr.y = i * Ci.x + s * Ci.y)) : tr.copy(Ci), r.copy(e), (r.x += tr.x), (r.y += tr.y), r.applyMatrix4(bc);
}
class rg extends At {
  constructor(e, t, n, i, s, o, a, l, c) {
    super(e, t, n, i, s, o, a, l, c), (this.isCanvasTexture = !0), (this.needsUpdate = !0);
  }
}
class ni extends Gt {
  constructor(e = 1, t = 8, n = 0, i = Math.PI * 2) {
    super(), (this.type = "CircleGeometry"), (this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: i }), (t = Math.max(3, t));
    const s = [],
      o = [],
      a = [],
      l = [],
      c = new C(),
      d = new _e();
    o.push(0, 0, 0), a.push(0, 0, 1), l.push(0.5, 0.5);
    for (let u = 0, f = 3; u <= t; u++, f += 3) {
      const m = n + (u / t) * i;
      (c.x = e * Math.cos(m)), (c.y = e * Math.sin(m)), o.push(c.x, c.y, c.z), a.push(0, 0, 1), (d.x = (o[f] / e + 1) / 2), (d.y = (o[f + 1] / e + 1) / 2), l.push(d.x, d.y);
    }
    for (let u = 1; u <= t; u++) s.push(u, u + 1, 0);
    this.setIndex(s), this.setAttribute("position", new ft(o, 3)), this.setAttribute("normal", new ft(a, 3)), this.setAttribute("uv", new ft(l, 2));
  }
  static fromJSON(e) {
    return new ni(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Ke extends Gt {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
    super(), (this.type = "SphereGeometry"), (this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: i, phiLength: s, thetaStart: o, thetaLength: a }), (t = Math.max(3, Math.floor(t))), (n = Math.max(2, Math.floor(n)));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const d = [],
      u = new C(),
      f = new C(),
      m = [],
      g = [],
      p = [],
      h = [];
    for (let _ = 0; _ <= n; _++) {
      const M = [],
        E = _ / n;
      let w = 0;
      _ == 0 && o == 0 ? (w = 0.5 / t) : _ == n && l == Math.PI && (w = -0.5 / t);
      for (let S = 0; S <= t; S++) {
        const D = S / t;
        (u.x = -e * Math.cos(i + D * s) * Math.sin(o + E * a)), (u.y = e * Math.cos(o + E * a)), (u.z = e * Math.sin(i + D * s) * Math.sin(o + E * a)), g.push(u.x, u.y, u.z), f.copy(u).normalize(), p.push(f.x, f.y, f.z), h.push(D + w, 1 - E), M.push(c++);
      }
      d.push(M);
    }
    for (let _ = 0; _ < n; _++)
      for (let M = 0; M < t; M++) {
        const E = d[_][M + 1],
          w = d[_][M],
          S = d[_ + 1][M],
          D = d[_ + 1][M + 1];
        (_ !== 0 || o > 0) && m.push(E, w, D), (_ !== n - 1 || l < Math.PI) && m.push(w, S, D);
      }
    this.setIndex(m), this.setAttribute("position", new ft(g, 3)), this.setAttribute("normal", new ft(p, 3)), this.setAttribute("uv", new ft(h, 2));
  }
  static fromJSON(e) {
    return new Ke(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class qa extends Gt {
  constructor(e = 1, t = 0.4, n = 8, i = 6, s = Math.PI * 2) {
    super(), (this.type = "TorusGeometry"), (this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: i, arc: s }), (n = Math.floor(n)), (i = Math.floor(i));
    const o = [],
      a = [],
      l = [],
      c = [],
      d = new C(),
      u = new C(),
      f = new C();
    for (let m = 0; m <= n; m++)
      for (let g = 0; g <= i; g++) {
        const p = (g / i) * s,
          h = (m / n) * Math.PI * 2;
        (u.x = (e + t * Math.cos(h)) * Math.cos(p)), (u.y = (e + t * Math.cos(h)) * Math.sin(p)), (u.z = t * Math.sin(h)), a.push(u.x, u.y, u.z), (d.x = e * Math.cos(p)), (d.y = e * Math.sin(p)), f.subVectors(u, d).normalize(), l.push(f.x, f.y, f.z), c.push(g / i), c.push(m / n);
      }
    for (let m = 1; m <= n; m++)
      for (let g = 1; g <= i; g++) {
        const p = (i + 1) * m + g - 1,
          h = (i + 1) * (m - 1) + g - 1,
          _ = (i + 1) * (m - 1) + g,
          M = (i + 1) * m + g;
        o.push(p, h, M), o.push(h, _, M);
      }
    this.setIndex(o), this.setAttribute("position", new ft(a, 3)), this.setAttribute("normal", new ft(l, 3)), this.setAttribute("uv", new ft(c, 2));
  }
  static fromJSON(e) {
    return new qa(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Dt extends Wi {
  constructor(e) {
    super(), (this.isMeshStandardMaterial = !0), (this.defines = { STANDARD: "" }), (this.type = "MeshStandardMaterial"), (this.color = new De(16777215)), (this.roughness = 1), (this.metalness = 0), (this.map = null), (this.lightMap = null), (this.lightMapIntensity = 1), (this.aoMap = null), (this.aoMapIntensity = 1), (this.emissive = new De(0)), (this.emissiveIntensity = 1), (this.emissiveMap = null), (this.bumpMap = null), (this.bumpScale = 1), (this.normalMap = null), (this.normalMapType = rc), (this.normalScale = new _e(1, 1)), (this.displacementMap = null), (this.displacementScale = 1), (this.displacementBias = 0), (this.roughnessMap = null), (this.metalnessMap = null), (this.alphaMap = null), (this.envMap = null), (this.envMapIntensity = 1), (this.wireframe = !1), (this.wireframeLinewidth = 1), (this.wireframeLinecap = "round"), (this.wireframeLinejoin = "round"), (this.flatShading = !1), (this.fog = !0), this.setValues(e);
  }
  copy(e) {
    return super.copy(e), (this.defines = { STANDARD: "" }), this.color.copy(e.color), (this.roughness = e.roughness), (this.metalness = e.metalness), (this.map = e.map), (this.lightMap = e.lightMap), (this.lightMapIntensity = e.lightMapIntensity), (this.aoMap = e.aoMap), (this.aoMapIntensity = e.aoMapIntensity), this.emissive.copy(e.emissive), (this.emissiveMap = e.emissiveMap), (this.emissiveIntensity = e.emissiveIntensity), (this.bumpMap = e.bumpMap), (this.bumpScale = e.bumpScale), (this.normalMap = e.normalMap), (this.normalMapType = e.normalMapType), this.normalScale.copy(e.normalScale), (this.displacementMap = e.displacementMap), (this.displacementScale = e.displacementScale), (this.displacementBias = e.displacementBias), (this.roughnessMap = e.roughnessMap), (this.metalnessMap = e.metalnessMap), (this.alphaMap = e.alphaMap), (this.envMap = e.envMap), (this.envMapIntensity = e.envMapIntensity), (this.wireframe = e.wireframe), (this.wireframeLinewidth = e.wireframeLinewidth), (this.wireframeLinecap = e.wireframeLinecap), (this.wireframeLinejoin = e.wireframeLinejoin), (this.flatShading = e.flatShading), (this.fog = e.fog), this;
  }
}
const _l = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  }
};
class Mc {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (d) {
        a++, s === !1 && i.onStart !== void 0 && i.onStart(d, o, a), (s = !0);
      }),
      (this.itemEnd = function (d) {
        o++, i.onProgress !== void 0 && i.onProgress(d, o, a), o === a && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (d) {
        i.onError !== void 0 && i.onError(d);
      }),
      (this.resolveURL = function (d) {
        return l ? l(d) : d;
      }),
      (this.setURLModifier = function (d) {
        return (l = d), this;
      }),
      (this.addHandler = function (d, u) {
        return c.push(d, u), this;
      }),
      (this.removeHandler = function (d) {
        const u = c.indexOf(d);
        return u !== -1 && c.splice(u, 2), this;
      }),
      (this.getHandler = function (d) {
        for (let u = 0, f = c.length; u < f; u += 2) {
          const m = c[u],
            g = c[u + 1];
          if ((m.global && (m.lastIndex = 0), m.test(d))) return g;
        }
        return null;
      });
  }
}
const sg = new Mc();
class wc {
  constructor(e) {
    (this.manager = e !== void 0 ? e : sg), (this.crossOrigin = "anonymous"), (this.withCredentials = !1), (this.path = ""), (this.resourcePath = ""), (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class ag extends wc {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), (e = this.manager.resolveURL(e));
    const s = this,
      o = _l.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = gr("img");
    function l() {
      d(), _l.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(u) {
      d(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function d() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), (a.src = e), a;
  }
}
class og extends wc {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new At(),
      o = new ag(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i
      ),
      s
    );
  }
}
class Lc extends ht {
  constructor(e, t = 1) {
    super(), (this.isLight = !0), (this.type = "Light"), (this.color = new De(e)), (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), (this.intensity = e.intensity), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.color = this.color.getHex()), (t.object.intensity = this.intensity), this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const vl = new We(),
  xl = new C(),
  Sl = new C();
class lg {
  constructor(e) {
    (this.camera = e), (this.bias = 0), (this.normalBias = 0), (this.radius = 1), (this.blurSamples = 8), (this.mapSize = new _e(512, 512)), (this.map = null), (this.mapPass = null), (this.matrix = new We()), (this.autoUpdate = !0), (this.needsUpdate = !1), (this._frustum = new Wa()), (this._frameExtents = new _e(1, 1)), (this._viewportCount = 1), (this._viewports = [new Ge(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    xl.setFromMatrixPosition(e.matrixWorld), t.position.copy(xl), Sl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Sl), t.updateMatrixWorld(), vl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(vl), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (this.camera = e.camera.clone()), (this.bias = e.bias), (this.radius = e.radius), this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), (e.camera = this.camera.toJSON(!1).object), delete e.camera.matrix, e;
  }
}
const yl = new We(),
  ir = new C(),
  Qs = new C();
class cg extends lg {
  constructor() {
    super(new Et(90, 1, 0.5, 500)), (this.isPointLightShadow = !0), (this._frameExtents = new _e(4, 2)), (this._viewportCount = 6), (this._viewports = [new Ge(2, 1, 1, 1), new Ge(0, 1, 1, 1), new Ge(3, 1, 1, 1), new Ge(1, 1, 1, 1), new Ge(3, 0, 1, 1), new Ge(1, 0, 1, 1)]), (this._cubeDirections = [new C(1, 0, 0), new C(-1, 0, 0), new C(0, 0, 1), new C(0, 0, -1), new C(0, 1, 0), new C(0, -1, 0)]), (this._cubeUps = [new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 0, 1), new C(0, 0, -1)]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      s = e.distance || n.far;
    s !== n.far && ((n.far = s), n.updateProjectionMatrix()), ir.setFromMatrixPosition(e.matrixWorld), n.position.copy(ir), Qs.copy(n.position), Qs.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Qs), n.updateMatrixWorld(), i.makeTranslation(-ir.x, -ir.y, -ir.z), yl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(yl);
  }
}
class Ec extends Lc {
  constructor(e, t, n = 0, i = 1) {
    super(e, t), (this.isPointLight = !0), (this.type = "PointLight"), (this.distance = n), (this.decay = i), (this.shadow = new cg());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), (this.distance = e.distance), (this.decay = e.decay), (this.shadow = e.shadow.clone()), this;
  }
}
class ug extends Lc {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class dg {
  constructor(e, t, n = 0, i = 1 / 0) {
    (this.ray = new uc(e, t)), (this.near = n), (this.far = i), (this.camera = null), (this.layers = new Ga()), (this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), (this.camera = t)) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), (this.camera = t)) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Ra(e, this, n, t), n.sort(bl), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++) Ra(e[i], this, n, t);
    return n.sort(bl), n;
  }
}
function bl(r, e) {
  return r.distance - e.distance;
}
function Ra(r, e, t, n) {
  if ((r.layers.test(e.layers) && r.raycast(e, t), n === !0)) {
    const i = r.children;
    for (let s = 0, o = i.length; s < o; s++) Ra(i[s], e, t, !0);
  }
}
class Ml {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this;
  }
  makeSafe() {
    return (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (this.radius = Math.sqrt(e * e + t * t + n * n)), this.radius === 0 ? ((this.theta = 0), (this.phi = 0)) : ((this.theta = Math.atan2(e, n)), (this.phi = Math.acos(gt(t / this.radius, -1, 1)))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: ka } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : (window.__THREE__ = ka));
const wl = { type: "change" },
  ea = { type: "start" },
  Ll = { type: "end" };
class hg extends ti {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new C()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }),
      (this.mouseButtons = { LEFT: ci.ROTATE, MIDDLE: ci.DOLLY, RIGHT: ci.PAN }),
      (this.touches = { ONE: ui.ROTATE, TWO: ui.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return a.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return a.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (y) {
        y.addEventListener("keydown", bt), (this._domElementKeyEvents = y);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target), n.position0.copy(n.object.position), (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0), n.object.position.copy(n.position0), (n.object.zoom = n.zoom0), n.object.updateProjectionMatrix(), n.dispatchEvent(wl), n.update(), (s = i.NONE);
      }),
      (this.update = (function () {
        const y = new C(),
          j = new Jn().setFromUnitVectors(e.up, new C(0, 1, 0)),
          ie = j.clone().invert(),
          le = new C(),
          ae = new Jn(),
          Se = 2 * Math.PI;
        return function () {
          const He = n.object.position;
          y.copy(He).sub(n.target), y.applyQuaternion(j), a.setFromVector3(y), n.autoRotate && s === i.NONE && A(z()), n.enableDamping ? ((a.theta += l.theta * n.dampingFactor), (a.phi += l.phi * n.dampingFactor)) : ((a.theta += l.theta), (a.phi += l.phi));
          let T = n.minAzimuthAngle,
            se = n.maxAzimuthAngle;
          return isFinite(T) && isFinite(se) && (T < -Math.PI ? (T += Se) : T > Math.PI && (T -= Se), se < -Math.PI ? (se += Se) : se > Math.PI && (se -= Se), T <= se ? (a.theta = Math.max(T, Math.min(se, a.theta))) : (a.theta = a.theta > (T + se) / 2 ? Math.max(T, a.theta) : Math.min(se, a.theta))), (a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi))), a.makeSafe(), (a.radius *= c), (a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius))), n.enableDamping === !0 ? n.target.addScaledVector(d, n.dampingFactor) : n.target.add(d), y.setFromSpherical(a), y.applyQuaternion(ie), He.copy(n.target).add(y), n.object.lookAt(n.target), n.enableDamping === !0 ? ((l.theta *= 1 - n.dampingFactor), (l.phi *= 1 - n.dampingFactor), d.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), d.set(0, 0, 0)), (c = 1), u || le.distanceToSquared(n.object.position) > o || 8 * (1 - ae.dot(n.object.quaternion)) > o ? (n.dispatchEvent(wl), le.copy(n.object.position), ae.copy(n.object.quaternion), (u = !1), !0) : !1;
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", V), n.domElement.removeEventListener("pointerdown", Ze), n.domElement.removeEventListener("pointercancel", yt), n.domElement.removeEventListener("wheel", Tt), n.domElement.removeEventListener("pointermove", ot), n.domElement.removeEventListener("pointerup", Qe), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", bt);
      });
    const n = this,
      i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };
    let s = i.NONE;
    const o = 1e-6,
      a = new Ml(),
      l = new Ml();
    let c = 1;
    const d = new C();
    let u = !1;
    const f = new _e(),
      m = new _e(),
      g = new _e(),
      p = new _e(),
      h = new _e(),
      _ = new _e(),
      M = new _e(),
      E = new _e(),
      w = new _e(),
      S = [],
      D = {};
    function z() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function x() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function A(y) {
      l.theta -= y;
    }
    function O(y) {
      l.phi -= y;
    }
    const Z = (function () {
        const y = new C();
        return function (ie, le) {
          y.setFromMatrixColumn(le, 0), y.multiplyScalar(-ie), d.add(y);
        };
      })(),
      ue = (function () {
        const y = new C();
        return function (ie, le) {
          n.screenSpacePanning === !0 ? y.setFromMatrixColumn(le, 1) : (y.setFromMatrixColumn(le, 0), y.crossVectors(n.object.up, y)), y.multiplyScalar(ie), d.add(y);
        };
      })(),
      B = (function () {
        const y = new C();
        return function (ie, le) {
          const ae = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const Se = n.object.position;
            y.copy(Se).sub(n.target);
            let Ce = y.length();
            (Ce *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)), Z((2 * ie * Ce) / ae.clientHeight, n.object.matrix), ue((2 * le * Ce) / ae.clientHeight, n.object.matrix);
          } else n.object.isOrthographicCamera ? (Z((ie * (n.object.right - n.object.left)) / n.object.zoom / ae.clientWidth, n.object.matrix), ue((le * (n.object.top - n.object.bottom)) / n.object.zoom / ae.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), (n.enablePan = !1));
        };
      })();
    function R(y) {
      n.object.isPerspectiveCamera ? (c /= y) : n.object.isOrthographicCamera ? ((n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * y))), n.object.updateProjectionMatrix(), (u = !0)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), (n.enableZoom = !1));
    }
    function q(y) {
      n.object.isPerspectiveCamera ? (c *= y) : n.object.isOrthographicCamera ? ((n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / y))), n.object.updateProjectionMatrix(), (u = !0)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), (n.enableZoom = !1));
    }
    function $(y) {
      f.set(y.clientX, y.clientY);
    }
    function J(y) {
      M.set(y.clientX, y.clientY);
    }
    function W(y) {
      p.set(y.clientX, y.clientY);
    }
    function N(y) {
      m.set(y.clientX, y.clientY), g.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const j = n.domElement;
      A((2 * Math.PI * g.x) / j.clientHeight), O((2 * Math.PI * g.y) / j.clientHeight), f.copy(m), n.update();
    }
    function U(y) {
      E.set(y.clientX, y.clientY), w.subVectors(E, M), w.y > 0 ? R(x()) : w.y < 0 && q(x()), M.copy(E), n.update();
    }
    function te(y) {
      h.set(y.clientX, y.clientY), _.subVectors(h, p).multiplyScalar(n.panSpeed), B(_.x, _.y), p.copy(h), n.update();
    }
    function Q(y) {
      y.deltaY < 0 ? q(x()) : y.deltaY > 0 && R(x()), n.update();
    }
    function K(y) {
      let j = !1;
      switch (y.code) {
        case n.keys.UP:
          B(0, n.keyPanSpeed), (j = !0);
          break;
        case n.keys.BOTTOM:
          B(0, -n.keyPanSpeed), (j = !0);
          break;
        case n.keys.LEFT:
          B(n.keyPanSpeed, 0), (j = !0);
          break;
        case n.keys.RIGHT:
          B(-n.keyPanSpeed, 0), (j = !0);
          break;
      }
      j && (y.preventDefault(), n.update());
    }
    function fe() {
      if (S.length === 1) f.set(S[0].pageX, S[0].pageY);
      else {
        const y = 0.5 * (S[0].pageX + S[1].pageX),
          j = 0.5 * (S[0].pageY + S[1].pageY);
        f.set(y, j);
      }
    }
    function ye() {
      if (S.length === 1) p.set(S[0].pageX, S[0].pageY);
      else {
        const y = 0.5 * (S[0].pageX + S[1].pageX),
          j = 0.5 * (S[0].pageY + S[1].pageY);
        p.set(y, j);
      }
    }
    function X() {
      const y = S[0].pageX - S[1].pageX,
        j = S[0].pageY - S[1].pageY,
        ie = Math.sqrt(y * y + j * j);
      M.set(0, ie);
    }
    function Ie() {
      n.enableZoom && X(), n.enablePan && ye();
    }
    function ve() {
      n.enableZoom && X(), n.enableRotate && fe();
    }
    function be(y) {
      if (S.length == 1) m.set(y.pageX, y.pageY);
      else {
        const ie = xe(y),
          le = 0.5 * (y.pageX + ie.x),
          ae = 0.5 * (y.pageY + ie.y);
        m.set(le, ae);
      }
      g.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const j = n.domElement;
      A((2 * Math.PI * g.x) / j.clientHeight), O((2 * Math.PI * g.y) / j.clientHeight), f.copy(m);
    }
    function he(y) {
      if (S.length === 1) h.set(y.pageX, y.pageY);
      else {
        const j = xe(y),
          ie = 0.5 * (y.pageX + j.x),
          le = 0.5 * (y.pageY + j.y);
        h.set(ie, le);
      }
      _.subVectors(h, p).multiplyScalar(n.panSpeed), B(_.x, _.y), p.copy(h);
    }
    function Oe(y) {
      const j = xe(y),
        ie = y.pageX - j.x,
        le = y.pageY - j.y,
        ae = Math.sqrt(ie * ie + le * le);
      E.set(0, ae), w.set(0, Math.pow(E.y / M.y, n.zoomSpeed)), R(w.y), M.copy(E);
    }
    function Le(y) {
      n.enableZoom && Oe(y), n.enablePan && he(y);
    }
    function ge(y) {
      n.enableZoom && Oe(y), n.enableRotate && be(y);
    }
    function Ze(y) {
      n.enabled !== !1 && (S.length === 0 && (n.domElement.setPointerCapture(y.pointerId), n.domElement.addEventListener("pointermove", ot), n.domElement.addEventListener("pointerup", Qe)), ee(y), y.pointerType === "touch" ? L(y) : et(y));
    }
    function ot(y) {
      n.enabled !== !1 && (y.pointerType === "touch" ? v(y) : ze(y));
    }
    function Qe(y) {
      ne(y), S.length === 0 && (n.domElement.releasePointerCapture(y.pointerId), n.domElement.removeEventListener("pointermove", ot), n.domElement.removeEventListener("pointerup", Qe)), n.dispatchEvent(Ll), (s = i.NONE);
    }
    function yt(y) {
      ne(y);
    }
    function et(y) {
      let j;
      switch (y.button) {
        case 0:
          j = n.mouseButtons.LEFT;
          break;
        case 1:
          j = n.mouseButtons.MIDDLE;
          break;
        case 2:
          j = n.mouseButtons.RIGHT;
          break;
        default:
          j = -1;
      }
      switch (j) {
        case ci.DOLLY:
          if (n.enableZoom === !1) return;
          J(y), (s = i.DOLLY);
          break;
        case ci.ROTATE:
          if (y.ctrlKey || y.metaKey || y.shiftKey) {
            if (n.enablePan === !1) return;
            W(y), (s = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            $(y), (s = i.ROTATE);
          }
          break;
        case ci.PAN:
          if (y.ctrlKey || y.metaKey || y.shiftKey) {
            if (n.enableRotate === !1) return;
            $(y), (s = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            W(y), (s = i.PAN);
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ea);
    }
    function ze(y) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          N(y);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          U(y);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          te(y);
          break;
      }
    }
    function Tt(y) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (y.preventDefault(), n.dispatchEvent(ea), Q(y), n.dispatchEvent(Ll));
    }
    function bt(y) {
      n.enabled === !1 || n.enablePan === !1 || K(y);
    }
    function L(y) {
      switch ((oe(y), S.length)) {
        case 1:
          switch (n.touches.ONE) {
            case ui.ROTATE:
              if (n.enableRotate === !1) return;
              fe(), (s = i.TOUCH_ROTATE);
              break;
            case ui.PAN:
              if (n.enablePan === !1) return;
              ye(), (s = i.TOUCH_PAN);
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case ui.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Ie(), (s = i.TOUCH_DOLLY_PAN);
              break;
            case ui.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              ve(), (s = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ea);
    }
    function v(y) {
      switch ((oe(y), s)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          be(y), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          he(y), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Le(y), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          ge(y), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function V(y) {
      n.enabled !== !1 && y.preventDefault();
    }
    function ee(y) {
      S.push(y);
    }
    function ne(y) {
      delete D[y.pointerId];
      for (let j = 0; j < S.length; j++)
        if (S[j].pointerId == y.pointerId) {
          S.splice(j, 1);
          return;
        }
    }
    function oe(y) {
      let j = D[y.pointerId];
      j === void 0 && ((j = new _e()), (D[y.pointerId] = j)), j.set(y.pageX, y.pageY);
    }
    function xe(y) {
      const j = y.pointerId === S[0].pointerId ? S[1] : S[0];
      return D[j.pointerId];
    }
    n.domElement.addEventListener("contextmenu", V), n.domElement.addEventListener("pointerdown", Ze), n.domElement.addEventListener("pointercancel", yt), n.domElement.addEventListener("wheel", Tt, { passive: !1 }), this.update();
  }
}
class Ac extends ht {
  constructor(e = document.createElement("div")) {
    super(),
      (this.isCSS2DObject = !0),
      (this.element = e),
      (this.element.style.position = "absolute"),
      (this.element.style.userSelect = "none"),
      this.element.setAttribute("draggable", !1),
      this.addEventListener("removed", function () {
        this.traverse(function (t) {
          t.element instanceof Element && t.element.parentNode !== null && t.element.parentNode.removeChild(t.element);
        });
      });
  }
  copy(e, t) {
    return super.copy(e, t), (this.element = e.element.cloneNode(!0)), this;
  }
}
const Di = new C(),
  El = new We(),
  Al = new We(),
  Cl = new C(),
  Dl = new C();
class fg {
  constructor(e = {}) {
    const t = this;
    let n, i, s, o;
    const a = { objects: new WeakMap() },
      l = e.element !== void 0 ? e.element : document.createElement("div");
    (l.style.overflow = "hidden"),
      (this.domElement = l),
      (this.getSize = function () {
        return { width: n, height: i };
      }),
      (this.render = function (m, g) {
        m.matrixWorldAutoUpdate === !0 && m.updateMatrixWorld(), g.parent === null && g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), El.copy(g.matrixWorldInverse), Al.multiplyMatrices(g.projectionMatrix, El), c(m, m, g), f(m);
      }),
      (this.setSize = function (m, g) {
        (n = m), (i = g), (s = n / 2), (o = i / 2), (l.style.width = m + "px"), (l.style.height = g + "px");
      });
    function c(m, g, p) {
      if (m.isCSS2DObject) {
        Di.setFromMatrixPosition(m.matrixWorld), Di.applyMatrix4(Al);
        const h = m.visible === !0 && Di.z >= -1 && Di.z <= 1 && m.layers.test(p.layers) === !0;
        if (((m.element.style.display = h === !0 ? "" : "none"), h === !0)) {
          m.onBeforeRender(t, g, p);
          const M = m.element;
          (M.style.transform = "translate(-50%,-50%) translate(" + (Di.x * s + s) + "px," + (-Di.y * o + o) + "px)"), M.parentNode !== l && l.appendChild(M), m.onAfterRender(t, g, p);
        }
        const _ = { distanceToCameraSquared: d(p, m) };
        a.objects.set(m, _);
      }
      for (let h = 0, _ = m.children.length; h < _; h++) c(m.children[h], g, p);
    }
    function d(m, g) {
      return Cl.setFromMatrixPosition(m.matrixWorld), Dl.setFromMatrixPosition(g.matrixWorld), Cl.distanceToSquared(Dl);
    }
    function u(m) {
      const g = [];
      return (
        m.traverse(function (p) {
          p.isCSS2DObject && g.push(p);
        }),
        g
      );
    }
    function f(m) {
      const g = u(m).sort(function (h, _) {
          if (h.renderOrder !== _.renderOrder) return _.renderOrder - h.renderOrder;
          const M = a.objects.get(h).distanceToCameraSquared,
            E = a.objects.get(_).distanceToCameraSquared;
          return M - E;
        }),
        p = g.length;
      for (let h = 0, _ = g.length; h < _; h++) g[h].element.style.zIndex = p - h;
    }
  }
}
class pg {
  constructor(e, t = 32) {
    (this.isLut = !0), (this.lut = []), (this.map = []), (this.n = 0), (this.minV = 0), (this.maxV = 1), this.setColorMap(e, t);
  }
  set(e) {
    return e.isLut === !0 && this.copy(e), this;
  }
  setMin(e) {
    return (this.minV = e), this;
  }
  setMax(e) {
    return (this.maxV = e), this;
  }
  setColorMap(e, t = 32) {
    (this.map = ta[e] || ta.rainbow), (this.n = t);
    const n = 1 / this.n,
      i = new De(),
      s = new De();
    (this.lut.length = 0), this.lut.push(new De(this.map[0][1]));
    for (let o = 1; o < t; o++) {
      const a = o * n;
      for (let l = 0; l < this.map.length - 1; l++)
        if (a > this.map[l][0] && a <= this.map[l + 1][0]) {
          const c = this.map[l][0],
            d = this.map[l + 1][0];
          i.set(this.map[l][1]), s.set(this.map[l + 1][1]);
          const u = new De().lerpColors(i, s, (a - c) / (d - c));
          this.lut.push(u);
        }
    }
    return this.lut.push(new De(this.map[this.map.length - 1][1])), this;
  }
  copy(e) {
    return (this.lut = e.lut), (this.map = e.map), (this.n = e.n), (this.minV = e.minV), (this.maxV = e.maxV), this;
  }
  getColor(e) {
    (e = td.clamp(e, this.minV, this.maxV)), (e = (e - this.minV) / (this.maxV - this.minV));
    const t = Math.round(e * this.n);
    return this.lut[t];
  }
  addColorMap(e, t) {
    return (ta[e] = t), this;
  }
  createCanvas() {
    const e = document.createElement("canvas");
    return (e.width = 1), (e.height = this.n), this.updateCanvas(e), e;
  }
  updateCanvas(e) {
    const t = e.getContext("2d", { alpha: !1 }),
      n = t.getImageData(0, 0, 1, this.n),
      i = n.data;
    let s = 0;
    const o = 1 / this.n,
      a = new De(),
      l = new De(),
      c = new De();
    for (let d = 1; d >= 0; d -= o)
      for (let u = this.map.length - 1; u >= 0; u--)
        if (d < this.map[u][0] && d >= this.map[u - 1][0]) {
          const f = this.map[u - 1][0],
            m = this.map[u][0];
          a.set(this.map[u - 1][1]), l.set(this.map[u][1]), c.lerpColors(a, l, (d - f) / (m - f)), (i[s * 4] = Math.round(c.r * 255)), (i[s * 4 + 1] = Math.round(c.g * 255)), (i[s * 4 + 2] = Math.round(c.b * 255)), (i[s * 4 + 3] = 255), (s += 1);
        }
    return t.putImageData(n, 0, 0), e;
  }
}
const ta = {
  rainbow: [
    [0, 255],
    [0.2, 65535],
    [0.5, 65280],
    [0.8, 16776960],
    [1, 16711680]
  ],
  cooltowarm: [
    [0, 3952322],
    [0.2, 10206463],
    [0.5, 14474460],
    [0.8, 16163717],
    [1, 11797542]
  ],
  blackbody: [
    [0, 0],
    [0.2, 7864320],
    [0.5, 15086080],
    [0.8, 16776960],
    [1, 16777215]
  ],
  grayscale: [
    [0, 0],
    [0.2, 4210752],
    [0.5, 8355712],
    [0.8, 12566463],
    [1, 16777215]
  ]
};
function mg(r) {
  if (!!r && !(typeof window > "u")) {
    var e = document.createElement("style");
    return e.setAttribute("type", "text/css"), (e.innerHTML = r), document.head.appendChild(e), r;
  }
}
function Oi(r, e) {
  var t = r.__state.conversionName.toString(),
    n = Math.round(r.r),
    i = Math.round(r.g),
    s = Math.round(r.b),
    o = r.a,
    a = Math.round(r.h),
    l = r.s.toFixed(1),
    c = r.v.toFixed(1);
  if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") {
    for (var d = r.hex.toString(16); d.length < 6; ) d = "0" + d;
    return "#" + d;
  } else {
    if (t === "CSS_RGB") return "rgb(" + n + "," + i + "," + s + ")";
    if (t === "CSS_RGBA") return "rgba(" + n + "," + i + "," + s + "," + o + ")";
    if (t === "HEX") return "0x" + r.hex.toString(16);
    if (t === "RGB_ARRAY") return "[" + n + "," + i + "," + s + "]";
    if (t === "RGBA_ARRAY") return "[" + n + "," + i + "," + s + "," + o + "]";
    if (t === "RGB_OBJ") return "{r:" + n + ",g:" + i + ",b:" + s + "}";
    if (t === "RGBA_OBJ") return "{r:" + n + ",g:" + i + ",b:" + s + ",a:" + o + "}";
    if (t === "HSV_OBJ") return "{h:" + a + ",s:" + l + ",v:" + c + "}";
    if (t === "HSVA_OBJ") return "{h:" + a + ",s:" + l + ",v:" + c + ",a:" + o + "}";
  }
  return "unknown format";
}
var Tl = Array.prototype.forEach,
  rr = Array.prototype.slice,
  Y = {
    BREAK: {},
    extend: function (e) {
      return (
        this.each(
          rr.call(arguments, 1),
          function (t) {
            var n = this.isObject(t) ? Object.keys(t) : [];
            n.forEach(
              function (i) {
                this.isUndefined(t[i]) || (e[i] = t[i]);
              }.bind(this)
            );
          },
          this
        ),
        e
      );
    },
    defaults: function (e) {
      return (
        this.each(
          rr.call(arguments, 1),
          function (t) {
            var n = this.isObject(t) ? Object.keys(t) : [];
            n.forEach(
              function (i) {
                this.isUndefined(e[i]) && (e[i] = t[i]);
              }.bind(this)
            );
          },
          this
        ),
        e
      );
    },
    compose: function () {
      var e = rr.call(arguments);
      return function () {
        for (var t = rr.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
        return t[0];
      };
    },
    each: function (e, t, n) {
      if (!!e) {
        if (Tl && e.forEach && e.forEach === Tl) e.forEach(t, n);
        else if (e.length === e.length + 0) {
          var i = void 0,
            s = void 0;
          for (i = 0, s = e.length; i < s; i++) if (i in e && t.call(n, e[i], i) === this.BREAK) return;
        } else for (var o in e) if (t.call(n, e[o], o) === this.BREAK) return;
      }
    },
    defer: function (e) {
      setTimeout(e, 0);
    },
    debounce: function (e, t, n) {
      var i = void 0;
      return function () {
        var s = this,
          o = arguments;
        function a() {
          (i = null), n || e.apply(s, o);
        }
        var l = n || !i;
        clearTimeout(i), (i = setTimeout(a, t)), l && e.apply(s, o);
      };
    },
    toArray: function (e) {
      return e.toArray ? e.toArray() : rr.call(e);
    },
    isUndefined: function (e) {
      return e === void 0;
    },
    isNull: function (e) {
      return e === null;
    },
    isNaN: (function (r) {
      function e(t) {
        return r.apply(this, arguments);
      }
      return (
        (e.toString = function () {
          return r.toString();
        }),
        e
      );
    })(function (r) {
      return isNaN(r);
    }),
    isArray:
      Array.isArray ||
      function (r) {
        return r.constructor === Array;
      },
    isObject: function (e) {
      return e === Object(e);
    },
    isNumber: function (e) {
      return e === e + 0;
    },
    isString: function (e) {
      return e === e + "";
    },
    isBoolean: function (e) {
      return e === !1 || e === !0;
    },
    isFunction: function (e) {
      return e instanceof Function;
    }
  },
  gg = [
    {
      litmus: Y.isString,
      conversions: {
        THREE_CHAR_HEX: {
          read: function (e) {
            var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            return t === null ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
          },
          write: Oi
        },
        SIX_CHAR_HEX: {
          read: function (e) {
            var t = e.match(/^#([A-F0-9]{6})$/i);
            return t === null ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
          },
          write: Oi
        },
        CSS_RGB: {
          read: function (e) {
            var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
            return t === null ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
          },
          write: Oi
        },
        CSS_RGBA: {
          read: function (e) {
            var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
            return t === null ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
          },
          write: Oi
        }
      }
    },
    {
      litmus: Y.isNumber,
      conversions: {
        HEX: {
          read: function (e) {
            return { space: "HEX", hex: e, conversionName: "HEX" };
          },
          write: function (e) {
            return e.hex;
          }
        }
      }
    },
    {
      litmus: Y.isArray,
      conversions: {
        RGB_ARRAY: {
          read: function (e) {
            return e.length !== 3 ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2] };
          },
          write: function (e) {
            return [e.r, e.g, e.b];
          }
        },
        RGBA_ARRAY: {
          read: function (e) {
            return e.length !== 4 ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
          },
          write: function (e) {
            return [e.r, e.g, e.b, e.a];
          }
        }
      }
    },
    {
      litmus: Y.isObject,
      conversions: {
        RGBA_OBJ: {
          read: function (e) {
            return Y.isNumber(e.r) && Y.isNumber(e.g) && Y.isNumber(e.b) && Y.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : !1;
          },
          write: function (e) {
            return { r: e.r, g: e.g, b: e.b, a: e.a };
          }
        },
        RGB_OBJ: {
          read: function (e) {
            return Y.isNumber(e.r) && Y.isNumber(e.g) && Y.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : !1;
          },
          write: function (e) {
            return { r: e.r, g: e.g, b: e.b };
          }
        },
        HSVA_OBJ: {
          read: function (e) {
            return Y.isNumber(e.h) && Y.isNumber(e.s) && Y.isNumber(e.v) && Y.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : !1;
          },
          write: function (e) {
            return { h: e.h, s: e.s, v: e.v, a: e.a };
          }
        },
        HSV_OBJ: {
          read: function (e) {
            return Y.isNumber(e.h) && Y.isNumber(e.s) && Y.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : !1;
          },
          write: function (e) {
            return { h: e.h, s: e.s, v: e.v };
          }
        }
      }
    }
  ],
  sr = void 0,
  Kr = void 0,
  Na = function () {
    Kr = !1;
    var e = arguments.length > 1 ? Y.toArray(arguments) : arguments[0];
    return (
      Y.each(gg, function (t) {
        if (t.litmus(e))
          return (
            Y.each(t.conversions, function (n, i) {
              if (((sr = n.read(e)), Kr === !1 && sr !== !1)) return (Kr = sr), (sr.conversionName = i), (sr.conversion = n), Y.BREAK;
            }),
            Y.BREAK
          );
      }),
      Kr
    );
  },
  Pl = void 0,
  as = {
    hsv_to_rgb: function (e, t, n) {
      var i = Math.floor(e / 60) % 6,
        s = e / 60 - Math.floor(e / 60),
        o = n * (1 - t),
        a = n * (1 - s * t),
        l = n * (1 - (1 - s) * t),
        c = [
          [n, l, o],
          [a, n, o],
          [o, n, l],
          [o, a, n],
          [l, o, n],
          [n, o, a]
        ][i];
      return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
    },
    rgb_to_hsv: function (e, t, n) {
      var i = Math.min(e, t, n),
        s = Math.max(e, t, n),
        o = s - i,
        a = void 0,
        l = void 0;
      if (s !== 0) l = o / s;
      else return { h: NaN, s: 0, v: 0 };
      return e === s ? (a = (t - n) / o) : t === s ? (a = 2 + (n - e) / o) : (a = 4 + (e - t) / o), (a /= 6), a < 0 && (a += 1), { h: a * 360, s: l, v: s / 255 };
    },
    rgb_to_hex: function (e, t, n) {
      var i = this.hex_with_component(0, 2, e);
      return (i = this.hex_with_component(i, 1, t)), (i = this.hex_with_component(i, 0, n)), i;
    },
    component_from_hex: function (e, t) {
      return (e >> (t * 8)) & 255;
    },
    hex_with_component: function (e, t, n) {
      return (n << (Pl = t * 8)) | (e & ~(255 << Pl));
    }
  },
  _g =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (r) {
          return typeof r;
        }
      : function (r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        },
  Wt = function (r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
  Xt = (function () {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    return function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
  })(),
  Pn = function r(e, t, n) {
    e === null && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === void 0) {
      var s = Object.getPrototypeOf(e);
      return s === null ? void 0 : r(s, t, n);
    } else {
      if ("value" in i) return i.value;
      var o = i.get;
      return o === void 0 ? void 0 : o.call(n);
    }
  },
  Rn = function (r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    (r.prototype = Object.create(e && e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(r, e) : (r.__proto__ = e));
  },
  Nn = function (r, e) {
    if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : r;
  },
  st = (function () {
    function r() {
      if ((Wt(this, r), (this.__state = Na.apply(this, arguments)), this.__state === !1)) throw new Error("Failed to interpret color arguments");
      this.__state.a = this.__state.a || 1;
    }
    return (
      Xt(r, [
        {
          key: "toString",
          value: function () {
            return Oi(this);
          }
        },
        {
          key: "toHexString",
          value: function () {
            return Oi(this, !0);
          }
        },
        {
          key: "toOriginal",
          value: function () {
            return this.__state.conversion.write(this);
          }
        }
      ]),
      r
    );
  })();
function ja(r, e, t) {
  Object.defineProperty(r, e, {
    get: function () {
      return this.__state.space === "RGB" ? this.__state[e] : (st.recalculateRGB(this, e, t), this.__state[e]);
    },
    set: function (i) {
      this.__state.space !== "RGB" && (st.recalculateRGB(this, e, t), (this.__state.space = "RGB")), (this.__state[e] = i);
    }
  });
}
function Za(r, e) {
  Object.defineProperty(r, e, {
    get: function () {
      return this.__state.space === "HSV" ? this.__state[e] : (st.recalculateHSV(this), this.__state[e]);
    },
    set: function (n) {
      this.__state.space !== "HSV" && (st.recalculateHSV(this), (this.__state.space = "HSV")), (this.__state[e] = n);
    }
  });
}
st.recalculateRGB = function (r, e, t) {
  if (r.__state.space === "HEX") r.__state[e] = as.component_from_hex(r.__state.hex, t);
  else if (r.__state.space === "HSV") Y.extend(r.__state, as.hsv_to_rgb(r.__state.h, r.__state.s, r.__state.v));
  else throw new Error("Corrupted color state");
};
st.recalculateHSV = function (r) {
  var e = as.rgb_to_hsv(r.r, r.g, r.b);
  Y.extend(r.__state, { s: e.s, v: e.v }), Y.isNaN(e.h) ? Y.isUndefined(r.__state.h) && (r.__state.h = 0) : (r.__state.h = e.h);
};
st.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
ja(st.prototype, "r", 2);
ja(st.prototype, "g", 1);
ja(st.prototype, "b", 0);
Za(st.prototype, "h");
Za(st.prototype, "s");
Za(st.prototype, "v");
Object.defineProperty(st.prototype, "a", {
  get: function () {
    return this.__state.a;
  },
  set: function (e) {
    this.__state.a = e;
  }
});
Object.defineProperty(st.prototype, "hex", {
  get: function () {
    return this.__state.space !== "HEX" && ((this.__state.hex = as.rgb_to_hex(this.r, this.g, this.b)), (this.__state.space = "HEX")), this.__state.hex;
  },
  set: function (e) {
    (this.__state.space = "HEX"), (this.__state.hex = e);
  }
});
var ii = (function () {
    function r(e, t) {
      Wt(this, r), (this.initialValue = e[t]), (this.domElement = document.createElement("div")), (this.object = e), (this.property = t), (this.__onChange = void 0), (this.__onFinishChange = void 0);
    }
    return (
      Xt(r, [
        {
          key: "onChange",
          value: function (t) {
            return (this.__onChange = t), this;
          }
        },
        {
          key: "onFinishChange",
          value: function (t) {
            return (this.__onFinishChange = t), this;
          }
        },
        {
          key: "setValue",
          value: function (t) {
            return (this.object[this.property] = t), this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this;
          }
        },
        {
          key: "getValue",
          value: function () {
            return this.object[this.property];
          }
        },
        {
          key: "updateDisplay",
          value: function () {
            return this;
          }
        },
        {
          key: "isModified",
          value: function () {
            return this.initialValue !== this.getValue();
          }
        }
      ]),
      r
    );
  })(),
  vg = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] },
  Cc = {};
Y.each(vg, function (r, e) {
  Y.each(r, function (t) {
    Cc[t] = e;
  });
});
var xg = /(\d+(\.\d+)?)px/;
function qt(r) {
  if (r === "0" || Y.isUndefined(r)) return 0;
  var e = r.match(xg);
  return Y.isNull(e) ? 0 : parseFloat(e[1]);
}
var F = {
    makeSelectable: function (e, t) {
      e === void 0 ||
        e.style === void 0 ||
        ((e.onselectstart = t
          ? function () {
              return !1;
            }
          : function () {}),
        (e.style.MozUserSelect = t ? "auto" : "none"),
        (e.style.KhtmlUserSelect = t ? "auto" : "none"),
        (e.unselectable = t ? "on" : "off"));
    },
    makeFullscreen: function (e, t, n) {
      var i = n,
        s = t;
      Y.isUndefined(s) && (s = !0), Y.isUndefined(i) && (i = !0), (e.style.position = "absolute"), s && ((e.style.left = 0), (e.style.right = 0)), i && ((e.style.top = 0), (e.style.bottom = 0));
    },
    fakeEvent: function (e, t, n, i) {
      var s = n || {},
        o = Cc[t];
      if (!o) throw new Error("Event type " + t + " not supported.");
      var a = document.createEvent(o);
      switch (o) {
        case "MouseEvents": {
          var l = s.x || s.clientX || 0,
            c = s.y || s.clientY || 0;
          a.initMouseEvent(t, s.bubbles || !1, s.cancelable || !0, window, s.clickCount || 1, 0, 0, l, c, !1, !1, !1, !1, 0, null);
          break;
        }
        case "KeyboardEvents": {
          var d = a.initKeyboardEvent || a.initKeyEvent;
          Y.defaults(s, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), d(t, s.bubbles || !1, s.cancelable, window, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.keyCode, s.charCode);
          break;
        }
        default: {
          a.initEvent(t, s.bubbles || !1, s.cancelable || !0);
          break;
        }
      }
      Y.defaults(a, i), e.dispatchEvent(a);
    },
    bind: function (e, t, n, i) {
      var s = i || !1;
      return e.addEventListener ? e.addEventListener(t, n, s) : e.attachEvent && e.attachEvent("on" + t, n), F;
    },
    unbind: function (e, t, n, i) {
      var s = i || !1;
      return e.removeEventListener ? e.removeEventListener(t, n, s) : e.detachEvent && e.detachEvent("on" + t, n), F;
    },
    addClass: function (e, t) {
      if (e.className === void 0) e.className = t;
      else if (e.className !== t) {
        var n = e.className.split(/ +/);
        n.indexOf(t) === -1 && (n.push(t), (e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")));
      }
      return F;
    },
    removeClass: function (e, t) {
      if (t)
        if (e.className === t) e.removeAttribute("class");
        else {
          var n = e.className.split(/ +/),
            i = n.indexOf(t);
          i !== -1 && (n.splice(i, 1), (e.className = n.join(" ")));
        }
      else e.className = void 0;
      return F;
    },
    hasClass: function (e, t) {
      return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
    },
    getWidth: function (e) {
      var t = getComputedStyle(e);
      return qt(t["border-left-width"]) + qt(t["border-right-width"]) + qt(t["padding-left"]) + qt(t["padding-right"]) + qt(t.width);
    },
    getHeight: function (e) {
      var t = getComputedStyle(e);
      return qt(t["border-top-width"]) + qt(t["border-bottom-width"]) + qt(t["padding-top"]) + qt(t["padding-bottom"]) + qt(t.height);
    },
    getOffset: function (e) {
      var t = e,
        n = { left: 0, top: 0 };
      if (t.offsetParent)
        do (n.left += t.offsetLeft), (n.top += t.offsetTop), (t = t.offsetParent);
        while (t);
      return n;
    },
    isActive: function (e) {
      return e === document.activeElement && (e.type || e.href);
    }
  },
  Dc = (function (r) {
    Rn(e, r);
    function e(t, n) {
      Wt(this, e);
      var i = Nn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
        s = i;
      (i.__prev = i.getValue()), (i.__checkbox = document.createElement("input")), i.__checkbox.setAttribute("type", "checkbox");
      function o() {
        s.setValue(!s.__prev);
      }
      return F.bind(i.__checkbox, "change", o, !1), i.domElement.appendChild(i.__checkbox), i.updateDisplay(), i;
    }
    return (
      Xt(e, [
        {
          key: "setValue",
          value: function (n) {
            var i = Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
            return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), (this.__prev = this.getValue()), i;
          }
        },
        {
          key: "updateDisplay",
          value: function () {
            return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), (this.__checkbox.checked = !0), (this.__prev = !0)) : ((this.__checkbox.checked = !1), (this.__prev = !1)), Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
          }
        }
      ]),
      e
    );
  })(ii),
  Sg = (function (r) {
    Rn(e, r);
    function e(t, n, i) {
      Wt(this, e);
      var s = Nn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
        o = i,
        a = s;
      if (((s.__select = document.createElement("select")), Y.isArray(o))) {
        var l = {};
        Y.each(o, function (c) {
          l[c] = c;
        }),
          (o = l);
      }
      return (
        Y.each(o, function (c, d) {
          var u = document.createElement("option");
          (u.innerHTML = d), u.setAttribute("value", c), a.__select.appendChild(u);
        }),
        s.updateDisplay(),
        F.bind(s.__select, "change", function () {
          var c = this.options[this.selectedIndex].value;
          a.setValue(c);
        }),
        s.domElement.appendChild(s.__select),
        s
      );
    }
    return (
      Xt(e, [
        {
          key: "setValue",
          value: function (n) {
            var i = Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
            return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), i;
          }
        },
        {
          key: "updateDisplay",
          value: function () {
            return F.isActive(this.__select) ? this : ((this.__select.value = this.getValue()), Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this));
          }
        }
      ]),
      e
    );
  })(ii),
  yg = (function (r) {
    Rn(e, r);
    function e(t, n) {
      Wt(this, e);
      var i = Nn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
        s = i;
      function o() {
        s.setValue(s.__input.value);
      }
      function a() {
        s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
      }
      return (
        (i.__input = document.createElement("input")),
        i.__input.setAttribute("type", "text"),
        F.bind(i.__input, "keyup", o),
        F.bind(i.__input, "change", o),
        F.bind(i.__input, "blur", a),
        F.bind(i.__input, "keydown", function (l) {
          l.keyCode === 13 && this.blur();
        }),
        i.updateDisplay(),
        i.domElement.appendChild(i.__input),
        i
      );
    }
    return (
      Xt(e, [
        {
          key: "updateDisplay",
          value: function () {
            return F.isActive(this.__input) || (this.__input.value = this.getValue()), Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
          }
        }
      ]),
      e
    );
  })(ii);
function Rl(r) {
  var e = r.toString();
  return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0;
}
var Tc = (function (r) {
  Rn(e, r);
  function e(t, n, i) {
    Wt(this, e);
    var s = Nn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
      o = i || {};
    return (s.__min = o.min), (s.__max = o.max), (s.__step = o.step), Y.isUndefined(s.__step) ? (s.initialValue === 0 ? (s.__impliedStep = 1) : (s.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10)) / 10)) : (s.__impliedStep = s.__step), (s.__precision = Rl(s.__impliedStep)), s;
  }
  return (
    Xt(e, [
      {
        key: "setValue",
        value: function (n) {
          var i = n;
          return this.__min !== void 0 && i < this.__min ? (i = this.__min) : this.__max !== void 0 && i > this.__max && (i = this.__max), this.__step !== void 0 && i % this.__step !== 0 && (i = Math.round(i / this.__step) * this.__step), Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, i);
        }
      },
      {
        key: "min",
        value: function (n) {
          return (this.__min = n), this;
        }
      },
      {
        key: "max",
        value: function (n) {
          return (this.__max = n), this;
        }
      },
      {
        key: "step",
        value: function (n) {
          return (this.__step = n), (this.__impliedStep = n), (this.__precision = Rl(n)), this;
        }
      }
    ]),
    e
  );
})(ii);
function bg(r, e) {
  var t = Math.pow(10, e);
  return Math.round(r * t) / t;
}
var os = (function (r) {
  Rn(e, r);
  function e(t, n, i) {
    Wt(this, e);
    var s = Nn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i));
    s.__truncationSuspended = !1;
    var o = s,
      a = void 0;
    function l() {
      var g = parseFloat(o.__input.value);
      Y.isNaN(g) || o.setValue(g);
    }
    function c() {
      o.__onFinishChange && o.__onFinishChange.call(o, o.getValue());
    }
    function d() {
      c();
    }
    function u(g) {
      var p = a - g.clientY;
      o.setValue(o.getValue() + p * o.__impliedStep), (a = g.clientY);
    }
    function f() {
      F.unbind(window, "mousemove", u), F.unbind(window, "mouseup", f), c();
    }
    function m(g) {
      F.bind(window, "mousemove", u), F.bind(window, "mouseup", f), (a = g.clientY);
    }
    return (
      (s.__input = document.createElement("input")),
      s.__input.setAttribute("type", "text"),
      F.bind(s.__input, "change", l),
      F.bind(s.__input, "blur", d),
      F.bind(s.__input, "mousedown", m),
      F.bind(s.__input, "keydown", function (g) {
        g.keyCode === 13 && ((o.__truncationSuspended = !0), this.blur(), (o.__truncationSuspended = !1), c());
      }),
      s.updateDisplay(),
      s.domElement.appendChild(s.__input),
      s
    );
  }
  return (
    Xt(e, [
      {
        key: "updateDisplay",
        value: function () {
          return (this.__input.value = this.__truncationSuspended ? this.getValue() : bg(this.getValue(), this.__precision)), Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
        }
      }
    ]),
    e
  );
})(Tc);
function Nl(r, e, t, n, i) {
  return n + (i - n) * ((r - e) / (t - e));
}
var Ia = (function (r) {
    Rn(e, r);
    function e(t, n, i, s, o) {
      Wt(this, e);
      var a = Nn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, { min: i, max: s, step: o })),
        l = a;
      (a.__background = document.createElement("div")), (a.__foreground = document.createElement("div")), F.bind(a.__background, "mousedown", c), F.bind(a.__background, "touchstart", f), F.addClass(a.__background, "slider"), F.addClass(a.__foreground, "slider-fg");
      function c(p) {
        document.activeElement.blur(), F.bind(window, "mousemove", d), F.bind(window, "mouseup", u), d(p);
      }
      function d(p) {
        p.preventDefault();
        var h = l.__background.getBoundingClientRect();
        return l.setValue(Nl(p.clientX, h.left, h.right, l.__min, l.__max)), !1;
      }
      function u() {
        F.unbind(window, "mousemove", d), F.unbind(window, "mouseup", u), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }
      function f(p) {
        p.touches.length === 1 && (F.bind(window, "touchmove", m), F.bind(window, "touchend", g), m(p));
      }
      function m(p) {
        var h = p.touches[0].clientX,
          _ = l.__background.getBoundingClientRect();
        l.setValue(Nl(h, _.left, _.right, l.__min, l.__max));
      }
      function g() {
        F.unbind(window, "touchmove", m), F.unbind(window, "touchend", g), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }
      return a.updateDisplay(), a.__background.appendChild(a.__foreground), a.domElement.appendChild(a.__background), a;
    }
    return (
      Xt(e, [
        {
          key: "updateDisplay",
          value: function () {
            var n = (this.getValue() - this.__min) / (this.__max - this.__min);
            return (this.__foreground.style.width = n * 100 + "%"), Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
          }
        }
      ]),
      e
    );
  })(Tc),
  Pc = (function (r) {
    Rn(e, r);
    function e(t, n, i) {
      Wt(this, e);
      var s = Nn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
        o = s;
      return (
        (s.__button = document.createElement("div")),
        (s.__button.innerHTML = i === void 0 ? "Fire" : i),
        F.bind(s.__button, "click", function (a) {
          return a.preventDefault(), o.fire(), !1;
        }),
        F.addClass(s.__button, "button"),
        s.domElement.appendChild(s.__button),
        s
      );
    }
    return (
      Xt(e, [
        {
          key: "fire",
          value: function () {
            this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
          }
        }
      ]),
      e
    );
  })(ii),
  Fa = (function (r) {
    Rn(e, r);
    function e(t, n) {
      Wt(this, e);
      var i = Nn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
      (i.__color = new st(i.getValue())), (i.__temp = new st(0));
      var s = i;
      (i.domElement = document.createElement("div")),
        F.makeSelectable(i.domElement, !1),
        (i.__selector = document.createElement("div")),
        (i.__selector.className = "selector"),
        (i.__saturation_field = document.createElement("div")),
        (i.__saturation_field.className = "saturation-field"),
        (i.__field_knob = document.createElement("div")),
        (i.__field_knob.className = "field-knob"),
        (i.__field_knob_border = "2px solid "),
        (i.__hue_knob = document.createElement("div")),
        (i.__hue_knob.className = "hue-knob"),
        (i.__hue_field = document.createElement("div")),
        (i.__hue_field.className = "hue-field"),
        (i.__input = document.createElement("input")),
        (i.__input.type = "text"),
        (i.__input_textShadow = "0 1px 1px "),
        F.bind(i.__input, "keydown", function (p) {
          p.keyCode === 13 && u.call(this);
        }),
        F.bind(i.__input, "blur", u),
        F.bind(i.__selector, "mousedown", function () {
          F.addClass(this, "drag").bind(window, "mouseup", function () {
            F.removeClass(s.__selector, "drag");
          });
        }),
        F.bind(i.__selector, "touchstart", function () {
          F.addClass(this, "drag").bind(window, "touchend", function () {
            F.removeClass(s.__selector, "drag");
          });
        });
      var o = document.createElement("div");
      Y.extend(i.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), Y.extend(i.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: i.__field_knob_border + (i.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), Y.extend(i.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), Y.extend(i.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), Y.extend(o.style, { width: "100%", height: "100%", background: "none" }), Il(o, "top", "rgba(0,0,0,0)", "#000"), Y.extend(i.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), wg(i.__hue_field), Y.extend(i.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)" }), F.bind(i.__saturation_field, "mousedown", a), F.bind(i.__saturation_field, "touchstart", a), F.bind(i.__field_knob, "mousedown", a), F.bind(i.__field_knob, "touchstart", a), F.bind(i.__hue_field, "mousedown", l), F.bind(i.__hue_field, "touchstart", l);
      function a(p) {
        m(p), F.bind(window, "mousemove", m), F.bind(window, "touchmove", m), F.bind(window, "mouseup", c), F.bind(window, "touchend", c);
      }
      function l(p) {
        g(p), F.bind(window, "mousemove", g), F.bind(window, "touchmove", g), F.bind(window, "mouseup", d), F.bind(window, "touchend", d);
      }
      function c() {
        F.unbind(window, "mousemove", m), F.unbind(window, "touchmove", m), F.unbind(window, "mouseup", c), F.unbind(window, "touchend", c), f();
      }
      function d() {
        F.unbind(window, "mousemove", g), F.unbind(window, "touchmove", g), F.unbind(window, "mouseup", d), F.unbind(window, "touchend", d), f();
      }
      function u() {
        var p = Na(this.value);
        p !== !1 ? ((s.__color.__state = p), s.setValue(s.__color.toOriginal())) : (this.value = s.__color.toString());
      }
      function f() {
        s.__onFinishChange && s.__onFinishChange.call(s, s.__color.toOriginal());
      }
      i.__saturation_field.appendChild(o), i.__selector.appendChild(i.__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector.appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement.appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay();
      function m(p) {
        p.type.indexOf("touch") === -1 && p.preventDefault();
        var h = s.__saturation_field.getBoundingClientRect(),
          _ = (p.touches && p.touches[0]) || p,
          M = _.clientX,
          E = _.clientY,
          w = (M - h.left) / (h.right - h.left),
          S = 1 - (E - h.top) / (h.bottom - h.top);
        return S > 1 ? (S = 1) : S < 0 && (S = 0), w > 1 ? (w = 1) : w < 0 && (w = 0), (s.__color.v = S), (s.__color.s = w), s.setValue(s.__color.toOriginal()), !1;
      }
      function g(p) {
        p.type.indexOf("touch") === -1 && p.preventDefault();
        var h = s.__hue_field.getBoundingClientRect(),
          _ = (p.touches && p.touches[0]) || p,
          M = _.clientY,
          E = 1 - (M - h.top) / (h.bottom - h.top);
        return E > 1 ? (E = 1) : E < 0 && (E = 0), (s.__color.h = E * 360), s.setValue(s.__color.toOriginal()), !1;
      }
      return i;
    }
    return (
      Xt(e, [
        {
          key: "updateDisplay",
          value: function () {
            var n = Na(this.getValue());
            if (n !== !1) {
              var i = !1;
              Y.each(
                st.COMPONENTS,
                function (a) {
                  if (!Y.isUndefined(n[a]) && !Y.isUndefined(this.__color.__state[a]) && n[a] !== this.__color.__state[a]) return (i = !0), {};
                },
                this
              ),
                i && Y.extend(this.__color.__state, n);
            }
            Y.extend(this.__temp.__state, this.__color.__state), (this.__temp.a = 1);
            var s = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0,
              o = 255 - s;
            Y.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")" }), (this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px"), (this.__temp.s = 1), (this.__temp.v = 1), Il(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), (this.__input.value = this.__color.toString()), Y.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + s + "," + s + "," + s + ")", textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)" });
          }
        }
      ]),
      e
    );
  })(ii),
  Mg = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
function Il(r, e, t, n) {
  (r.style.background = ""),
    Y.each(Mg, function (i) {
      r.style.cssText += "background: " + i + "linear-gradient(" + e + ", " + t + " 0%, " + n + " 100%); ";
    });
}
function wg(r) {
  (r.style.background = ""), (r.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);"), (r.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"), (r.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"), (r.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"), (r.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);");
}
var Lg = {
    load: function (e, t) {
      var n = t || document,
        i = n.createElement("link");
      (i.type = "text/css"), (i.rel = "stylesheet"), (i.href = e), n.getElementsByTagName("head")[0].appendChild(i);
    },
    inject: function (e, t) {
      var n = t || document,
        i = document.createElement("style");
      (i.type = "text/css"), (i.innerHTML = e);
      var s = n.getElementsByTagName("head")[0];
      try {
        s.appendChild(i);
      } catch {}
    }
  },
  Eg = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,
  Ag = function (e, t) {
    var n = e[t];
    return Y.isArray(arguments[2]) || Y.isObject(arguments[2]) ? new Sg(e, t, arguments[2]) : Y.isNumber(n) ? (Y.isNumber(arguments[2]) && Y.isNumber(arguments[3]) ? (Y.isNumber(arguments[4]) ? new Ia(e, t, arguments[2], arguments[3], arguments[4]) : new Ia(e, t, arguments[2], arguments[3])) : Y.isNumber(arguments[4]) ? new os(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new os(e, t, { min: arguments[2], max: arguments[3] })) : Y.isString(n) ? new yg(e, t) : Y.isFunction(n) ? new Pc(e, t, "") : Y.isBoolean(n) ? new Dc(e, t) : null;
  };
function Cg(r) {
  setTimeout(r, 1e3 / 60);
}
var Dg = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || Cg,
  Tg = (function () {
    function r() {
      Wt(this, r), (this.backgroundElement = document.createElement("div")), Y.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), F.makeFullscreen(this.backgroundElement), (this.backgroundElement.style.position = "fixed"), (this.domElement = document.createElement("div")), Y.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
      var e = this;
      F.bind(this.backgroundElement, "click", function () {
        e.hide();
      });
    }
    return (
      Xt(r, [
        {
          key: "show",
          value: function () {
            var t = this;
            (this.backgroundElement.style.display = "block"),
              (this.domElement.style.display = "block"),
              (this.domElement.style.opacity = 0),
              (this.domElement.style.webkitTransform = "scale(1.1)"),
              this.layout(),
              Y.defer(function () {
                (t.backgroundElement.style.opacity = 1), (t.domElement.style.opacity = 1), (t.domElement.style.webkitTransform = "scale(1)");
              });
          }
        },
        {
          key: "hide",
          value: function () {
            var t = this,
              n = function i() {
                (t.domElement.style.display = "none"), (t.backgroundElement.style.display = "none"), F.unbind(t.domElement, "webkitTransitionEnd", i), F.unbind(t.domElement, "transitionend", i), F.unbind(t.domElement, "oTransitionEnd", i);
              };
            F.bind(this.domElement, "webkitTransitionEnd", n), F.bind(this.domElement, "transitionend", n), F.bind(this.domElement, "oTransitionEnd", n), (this.backgroundElement.style.opacity = 0), (this.domElement.style.opacity = 0), (this.domElement.style.webkitTransform = "scale(1.1)");
          }
        },
        {
          key: "layout",
          value: function () {
            (this.domElement.style.left = window.innerWidth / 2 - F.getWidth(this.domElement) / 2 + "px"), (this.domElement.style.top = window.innerHeight / 2 - F.getHeight(this.domElement) / 2 + "px");
          }
        }
      ]),
      r
    );
  })(),
  Pg =
    mg(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#200000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#aa0000}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:32px;line-height:32px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:70%}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:30%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px;margin-left:50%}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Poppins, sans-serif;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:14px Poppins, sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#141414;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#242424}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
Lg.inject(Pg);
var Fl = "dg",
  Ol = 72,
  zl = 20,
  _r = "Default",
  lr = (function () {
    try {
      return !!window.localStorage;
    } catch {
      return !1;
    }
  })(),
  dr = void 0,
  Ul = !0,
  Ni = void 0,
  na = !1,
  Rc = [],
  ke = function r(e) {
    var t = this,
      n = e || {};
    (this.domElement = document.createElement("div")), (this.__ul = document.createElement("ul")), this.domElement.appendChild(this.__ul), F.addClass(this.domElement, Fl), (this.__folders = {}), (this.__controllers = []), (this.__rememberedObjects = []), (this.__rememberedObjectIndecesToControllers = []), (this.__listening = []), (n = Y.defaults(n, { closeOnTop: !1, autoPlace: !0, width: r.DEFAULT_WIDTH })), (n = Y.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace })), Y.isUndefined(n.load) ? (n.load = { preset: _r }) : n.preset && (n.load.preset = n.preset), Y.isUndefined(n.parent) && n.hideable && Rc.push(this), (n.resizable = Y.isUndefined(n.parent) && n.resizable), n.autoPlace && Y.isUndefined(n.scrollable) && (n.scrollable = !0);
    var i = lr && localStorage.getItem(Ii(this, "isLocal")) === "true",
      s = void 0,
      o = void 0;
    if (
      (Object.defineProperties(this, {
        parent: {
          get: function () {
            return n.parent;
          }
        },
        scrollable: {
          get: function () {
            return n.scrollable;
          }
        },
        autoPlace: {
          get: function () {
            return n.autoPlace;
          }
        },
        closeOnTop: {
          get: function () {
            return n.closeOnTop;
          }
        },
        preset: {
          get: function () {
            return t.parent ? t.getRoot().preset : n.load.preset;
          },
          set: function (f) {
            t.parent ? (t.getRoot().preset = f) : (n.load.preset = f), Fg(this), t.revert();
          }
        },
        width: {
          get: function () {
            return n.width;
          },
          set: function (f) {
            (n.width = f), Ua(t, f);
          }
        },
        name: {
          get: function () {
            return n.name;
          },
          set: function (f) {
            (n.name = f), o && (o.innerHTML = n.name);
          }
        },
        closed: {
          get: function () {
            return n.closed;
          },
          set: function (f) {
            (n.closed = f), n.closed ? F.addClass(t.__ul, r.CLASS_CLOSED) : F.removeClass(t.__ul, r.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = f ? r.TEXT_OPEN : r.TEXT_CLOSED);
          }
        },
        load: {
          get: function () {
            return n.load;
          }
        },
        useLocalStorage: {
          get: function () {
            return i;
          },
          set: function (f) {
            lr && ((i = f), f ? F.bind(window, "unload", s) : F.unbind(window, "unload", s), localStorage.setItem(Ii(t, "isLocal"), f));
          }
        }
      }),
      Y.isUndefined(n.parent))
    ) {
      if (((this.closed = n.closed || !1), F.addClass(this.domElement, r.CLASS_MAIN), F.makeSelectable(this.domElement, !1), lr && i)) {
        t.useLocalStorage = !0;
        var a = localStorage.getItem(Ii(this, "gui"));
        a && (n.load = JSON.parse(a));
      }
      (this.__closeButton = document.createElement("div")),
        (this.__closeButton.innerHTML = r.TEXT_CLOSED),
        F.addClass(this.__closeButton, r.CLASS_CLOSE_BUTTON),
        n.closeOnTop ? (F.addClass(this.__closeButton, r.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (F.addClass(this.__closeButton, r.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)),
        F.bind(this.__closeButton, "click", function () {
          t.closed = !t.closed;
        });
    } else {
      n.closed === void 0 && (n.closed = !0);
      var l = document.createTextNode(n.name);
      F.addClass(l, "controller-name"), (o = $a(t, l));
      var c = function (f) {
        return f.preventDefault(), (t.closed = !t.closed), !1;
      };
      F.addClass(this.__ul, r.CLASS_CLOSED), F.addClass(o, "title"), F.bind(o, "click", c), n.closed || (this.closed = !1);
    }
    n.autoPlace && (Y.isUndefined(n.parent) && (Ul && ((Ni = document.createElement("div")), F.addClass(Ni, Fl), F.addClass(Ni, r.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Ni), (Ul = !1)), Ni.appendChild(this.domElement), F.addClass(this.domElement, r.CLASS_AUTO_PLACE)), this.parent || Ua(t, n.width)),
      (this.__resizeHandler = function () {
        t.onResizeDebounced();
      }),
      F.bind(window, "resize", this.__resizeHandler),
      F.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler),
      F.bind(this.__ul, "transitionend", this.__resizeHandler),
      F.bind(this.__ul, "oTransitionEnd", this.__resizeHandler),
      this.onResize(),
      n.resizable && Ig(this),
      (s = function () {
        lr && localStorage.getItem(Ii(t, "isLocal")) === "true" && localStorage.setItem(Ii(t, "gui"), JSON.stringify(t.getSaveObject()));
      }),
      (this.saveToLocalStorageIfPossible = s);
    function d() {
      var u = t.getRoot();
      (u.width += 1),
        Y.defer(function () {
          u.width -= 1;
        });
    }
    n.parent || d();
  };
ke.toggleHide = function () {
  (na = !na),
    Y.each(Rc, function (r) {
      r.domElement.style.display = na ? "none" : "";
    });
};
ke.CLASS_AUTO_PLACE = "a";
ke.CLASS_AUTO_PLACE_CONTAINER = "ac";
ke.CLASS_MAIN = "main";
ke.CLASS_CONTROLLER_ROW = "cr";
ke.CLASS_TOO_TALL = "taller-than-window";
ke.CLASS_CLOSED = "closed";
ke.CLASS_CLOSE_BUTTON = "close-button";
ke.CLASS_CLOSE_TOP = "close-top";
ke.CLASS_CLOSE_BOTTOM = "close-bottom";
ke.CLASS_DRAG = "drag";
ke.DEFAULT_WIDTH = 245;
ke.TEXT_CLOSED = "Close Controls";
ke.TEXT_OPEN = "Open Controls";
ke._keydownHandler = function (r) {
  document.activeElement.type !== "text" && (r.which === Ol || r.keyCode === Ol) && ke.toggleHide();
};
F.bind(window, "keydown", ke._keydownHandler, !1);
Y.extend(ke.prototype, {
  add: function (e, t) {
    return hr(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
  },
  addColor: function (e, t) {
    return hr(this, e, t, { color: !0 });
  },
  remove: function (e) {
    this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
    var t = this;
    Y.defer(function () {
      t.onResize();
    });
  },
  destroy: function () {
    if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
    this.autoPlace && Ni.removeChild(this.domElement);
    var e = this;
    Y.each(this.__folders, function (t) {
      e.removeFolder(t);
    }),
      F.unbind(window, "keydown", ke._keydownHandler, !1),
      Bl(this);
  },
  addFolder: function (e) {
    if (this.__folders[e] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
    var t = { name: e, parent: this };
    (t.autoPlace = this.autoPlace), this.load && this.load.folders && this.load.folders[e] && ((t.closed = this.load.folders[e].closed), (t.load = this.load.folders[e]));
    var n = new ke(t);
    this.__folders[e] = n;
    var i = $a(this, n.domElement);
    return F.addClass(i, "folder"), n;
  },
  removeFolder: function (e) {
    this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Bl(e);
    var t = this;
    Y.each(e.__folders, function (n) {
      e.removeFolder(n);
    }),
      Y.defer(function () {
        t.onResize();
      });
  },
  open: function () {
    this.closed = !1;
  },
  close: function () {
    this.closed = !0;
  },
  hide: function () {
    this.domElement.style.display = "none";
  },
  show: function () {
    this.domElement.style.display = "";
  },
  onResize: function () {
    var e = this.getRoot();
    if (e.scrollable) {
      var t = F.getOffset(e.__ul).top,
        n = 0;
      Y.each(e.__ul.childNodes, function (i) {
        (e.autoPlace && i === e.__save_row) || (n += F.getHeight(i));
      }),
        window.innerHeight - t - zl < n ? (F.addClass(e.domElement, ke.CLASS_TOO_TALL), (e.__ul.style.height = window.innerHeight - t - zl + "px")) : (F.removeClass(e.domElement, ke.CLASS_TOO_TALL), (e.__ul.style.height = "auto"));
    }
    e.__resize_handle &&
      Y.defer(function () {
        e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
      }),
      e.__closeButton && (e.__closeButton.style.width = e.width + "px");
  },
  onResizeDebounced: Y.debounce(function () {
    this.onResize();
  }, 50),
  remember: function () {
    if ((Y.isUndefined(dr) && ((dr = new Tg()), (dr.domElement.innerHTML = Eg)), this.parent)) throw new Error("You can only call remember on a top level GUI.");
    var e = this;
    Y.each(Array.prototype.slice.call(arguments), function (t) {
      e.__rememberedObjects.length === 0 && Ng(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
    }),
      this.autoPlace && Ua(this, this.width);
  },
  getRoot: function () {
    for (var e = this; e.parent; ) e = e.parent;
    return e;
  },
  getSaveObject: function () {
    var e = this.load;
    return (
      (e.closed = this.closed),
      this.__rememberedObjects.length > 0 && ((e.preset = this.preset), e.remembered || (e.remembered = {}), (e.remembered[this.preset] = Qr(this))),
      (e.folders = {}),
      Y.each(this.__folders, function (t, n) {
        e.folders[n] = t.getSaveObject();
      }),
      e
    );
  },
  save: function () {
    this.load.remembered || (this.load.remembered = {}), (this.load.remembered[this.preset] = Qr(this)), Oa(this, !1), this.saveToLocalStorageIfPossible();
  },
  saveAs: function (e) {
    this.load.remembered || ((this.load.remembered = {}), (this.load.remembered[_r] = Qr(this, !0))), (this.load.remembered[e] = Qr(this)), (this.preset = e), za(this, e, !0), this.saveToLocalStorageIfPossible();
  },
  revert: function (e) {
    Y.each(
      this.__controllers,
      function (t) {
        this.getRoot().load.remembered ? Nc(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
      },
      this
    ),
      Y.each(this.__folders, function (t) {
        t.revert(t);
      }),
      e || Oa(this.getRoot(), !1);
  },
  listen: function (e) {
    var t = this.__listening.length === 0;
    this.__listening.push(e), t && Ic(this.__listening);
  },
  updateDisplay: function () {
    Y.each(this.__controllers, function (e) {
      e.updateDisplay();
    }),
      Y.each(this.__folders, function (e) {
        e.updateDisplay();
      });
  }
});
function $a(r, e, t) {
  var n = document.createElement("li");
  return e && n.appendChild(e), t ? r.__ul.insertBefore(n, t) : r.__ul.appendChild(n), r.onResize(), n;
}
function Bl(r) {
  F.unbind(window, "resize", r.__resizeHandler), r.saveToLocalStorageIfPossible && F.unbind(window, "unload", r.saveToLocalStorageIfPossible);
}
function Oa(r, e) {
  var t = r.__preset_select[r.__preset_select.selectedIndex];
  e ? (t.innerHTML = t.value + "*") : (t.innerHTML = t.value);
}
function Rg(r, e, t) {
  if (
    ((t.__li = e),
    (t.__gui = r),
    Y.extend(t, {
      options: function (o) {
        if (arguments.length > 1) {
          var a = t.__li.nextElementSibling;
          return t.remove(), hr(r, t.object, t.property, { before: a, factoryArgs: [Y.toArray(arguments)] });
        }
        if (Y.isArray(o) || Y.isObject(o)) {
          var l = t.__li.nextElementSibling;
          return t.remove(), hr(r, t.object, t.property, { before: l, factoryArgs: [o] });
        }
      },
      name: function (o) {
        return (t.__li.firstElementChild.firstElementChild.innerHTML = o), t;
      },
      listen: function () {
        return t.__gui.listen(t), t;
      },
      remove: function () {
        return t.__gui.remove(t), t;
      }
    }),
    t instanceof Ia)
  ) {
    var n = new os(t.object, t.property, { min: t.__min, max: t.__max, step: t.__step });
    Y.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function (s) {
      var o = t[s],
        a = n[s];
      t[s] = n[s] = function () {
        var l = Array.prototype.slice.call(arguments);
        return a.apply(n, l), o.apply(t, l);
      };
    }),
      F.addClass(e, "has-slider"),
      t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof os) {
    var i = function (o) {
      if (Y.isNumber(t.__min) && Y.isNumber(t.__max)) {
        var a = t.__li.firstElementChild.firstElementChild.innerHTML,
          l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = hr(r, t.object, t.property, { before: t.__li.nextElementSibling, factoryArgs: [t.__min, t.__max, t.__step] });
        return c.name(a), l && c.listen(), c;
      }
      return o;
    };
    (t.min = Y.compose(i, t.min)), (t.max = Y.compose(i, t.max));
  } else
    t instanceof Dc
      ? (F.bind(e, "click", function () {
          F.fakeEvent(t.__checkbox, "click");
        }),
        F.bind(t.__checkbox, "click", function (s) {
          s.stopPropagation();
        }))
      : t instanceof Pc
      ? (F.bind(e, "click", function () {
          F.fakeEvent(t.__button, "click");
        }),
        F.bind(e, "mouseover", function () {
          F.addClass(t.__button, "hover");
        }),
        F.bind(e, "mouseout", function () {
          F.removeClass(t.__button, "hover");
        }))
      : t instanceof Fa &&
        (F.addClass(e, "color"),
        (t.updateDisplay = Y.compose(function (s) {
          return (e.style.borderLeftColor = t.__color.toString()), s;
        }, t.updateDisplay)),
        t.updateDisplay());
  t.setValue = Y.compose(function (s) {
    return r.getRoot().__preset_select && t.isModified() && Oa(r.getRoot(), !0), s;
  }, t.setValue);
}
function Nc(r, e) {
  var t = r.getRoot(),
    n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var i = t.__rememberedObjectIndecesToControllers[n];
    if ((i === void 0 && ((i = {}), (t.__rememberedObjectIndecesToControllers[n] = i)), (i[e.property] = e), t.load && t.load.remembered)) {
      var s = t.load.remembered,
        o = void 0;
      if (s[r.preset]) o = s[r.preset];
      else if (s[_r]) o = s[_r];
      else return;
      if (o[n] && o[n][e.property] !== void 0) {
        var a = o[n][e.property];
        (e.initialValue = a), e.setValue(a);
      }
    }
  }
}
function hr(r, e, t, n) {
  if (e[t] === void 0) throw new Error('Object "' + e + '" has no property "' + t + '"');
  var i = void 0;
  if (n.color) i = new Fa(e, t);
  else {
    var s = [e, t].concat(n.factoryArgs);
    i = Ag.apply(r, s);
  }
  n.before instanceof ii && (n.before = n.before.__li), Nc(r, i), F.addClass(i.domElement, "c");
  var o = document.createElement("span");
  F.addClass(o, "property-name"), (o.innerHTML = i.property);
  var a = document.createElement("div");
  a.appendChild(o), a.appendChild(i.domElement);
  var l = $a(r, a, n.before);
  return F.addClass(l, ke.CLASS_CONTROLLER_ROW), i instanceof Fa ? F.addClass(l, "color") : F.addClass(l, _g(i.getValue())), Rg(r, l, i), r.__controllers.push(i), i;
}
function Ii(r, e) {
  return document.location.href + "." + e;
}
function za(r, e, t) {
  var n = document.createElement("option");
  (n.innerHTML = e), (n.value = e), r.__preset_select.appendChild(n), t && (r.__preset_select.selectedIndex = r.__preset_select.length - 1);
}
function kl(r, e) {
  e.style.display = r.useLocalStorage ? "block" : "none";
}
function Ng(r) {
  var e = (r.__save_row = document.createElement("li"));
  F.addClass(r.domElement, "has-save"), r.__ul.insertBefore(e, r.__ul.firstChild), F.addClass(e, "save-row");
  var t = document.createElement("span");
  (t.innerHTML = "&nbsp;"), F.addClass(t, "button gears");
  var n = document.createElement("span");
  (n.innerHTML = "Save"), F.addClass(n, "button"), F.addClass(n, "save");
  var i = document.createElement("span");
  (i.innerHTML = "New"), F.addClass(i, "button"), F.addClass(i, "save-as");
  var s = document.createElement("span");
  (s.innerHTML = "Revert"), F.addClass(s, "button"), F.addClass(s, "revert");
  var o = (r.__preset_select = document.createElement("select"));
  if (
    (r.load && r.load.remembered
      ? Y.each(r.load.remembered, function (u, f) {
          za(r, f, f === r.preset);
        })
      : za(r, _r, !1),
    F.bind(o, "change", function () {
      for (var u = 0; u < r.__preset_select.length; u++) r.__preset_select[u].innerHTML = r.__preset_select[u].value;
      r.preset = this.value;
    }),
    e.appendChild(o),
    e.appendChild(t),
    e.appendChild(n),
    e.appendChild(i),
    e.appendChild(s),
    lr)
  ) {
    var a = document.getElementById("dg-local-explain"),
      l = document.getElementById("dg-local-storage"),
      c = document.getElementById("dg-save-locally");
    (c.style.display = "block"),
      localStorage.getItem(Ii(r, "isLocal")) === "true" && l.setAttribute("checked", "checked"),
      kl(r, a),
      F.bind(l, "change", function () {
        (r.useLocalStorage = !r.useLocalStorage), kl(r, a);
      });
  }
  var d = document.getElementById("dg-new-constructor");
  F.bind(d, "keydown", function (u) {
    u.metaKey && (u.which === 67 || u.keyCode === 67) && dr.hide();
  }),
    F.bind(t, "click", function () {
      (d.innerHTML = JSON.stringify(r.getSaveObject(), void 0, 2)), dr.show(), d.focus(), d.select();
    }),
    F.bind(n, "click", function () {
      r.save();
    }),
    F.bind(i, "click", function () {
      var u = prompt("Enter a new preset name.");
      u && r.saveAs(u);
    }),
    F.bind(s, "click", function () {
      r.revert();
    });
}
function Ig(r) {
  var e = void 0;
  (r.__resize_handle = document.createElement("div")), Y.extend(r.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" });
  function t(s) {
    return s.preventDefault(), (r.width += e - s.clientX), r.onResize(), (e = s.clientX), !1;
  }
  function n() {
    F.removeClass(r.__closeButton, ke.CLASS_DRAG), F.unbind(window, "mousemove", t), F.unbind(window, "mouseup", n);
  }
  function i(s) {
    return s.preventDefault(), (e = s.clientX), F.addClass(r.__closeButton, ke.CLASS_DRAG), F.bind(window, "mousemove", t), F.bind(window, "mouseup", n), !1;
  }
  F.bind(r.__resize_handle, "mousedown", i), F.bind(r.__closeButton, "mousedown", i), r.domElement.insertBefore(r.__resize_handle, r.domElement.firstElementChild);
}
function Ua(r, e) {
  (r.domElement.style.width = e + "px"), r.__save_row && r.autoPlace && (r.__save_row.style.width = e + "px"), r.__closeButton && (r.__closeButton.style.width = e + "px");
}
function Qr(r, e) {
  var t = {};
  return (
    Y.each(r.__rememberedObjects, function (n, i) {
      var s = {},
        o = r.__rememberedObjectIndecesToControllers[i];
      Y.each(o, function (a, l) {
        s[l] = e ? a.initialValue : a.getValue();
      }),
        (t[i] = s);
    }),
    t
  );
}
function Fg(r) {
  for (var e = 0; e < r.__preset_select.length; e++) r.__preset_select[e].value === r.preset && (r.__preset_select.selectedIndex = e);
}
function Ic(r) {
  r.length !== 0 &&
    Dg.call(window, function () {
      Ic(r);
    }),
    Y.each(r, function (e) {
      e.updateDisplay();
    });
}
var Og = ke;
const pn = [
    { Year: 1971, Day: 107, H: 7, M: 0, S: 55, Lat: 48, Long: 35, Magnitude: 2.8, Comments: "" },
    { Year: 1971, Day: 140, H: 17, M: 25, S: 10, Lat: 42, Long: -24, Magnitude: 2, Comments: "" },
    { Year: 1971, Day: 192, H: 13, M: 24, S: 45, Lat: 43, Long: -47, Magnitude: 1.9, Comments: "Or lat -42 long -60" },
    { Year: 1972, Day: 2, H: 22, M: 29, S: 40, Lat: 54, Long: 101, Magnitude: 1.9, Comments: "" },
    { Year: 1972, Day: 261, H: 14, M: 35, S: 55, Lat: 12, Long: 46, Magnitude: 1, Comments: "" },
    { Year: 1972, Day: 341, H: 23, M: 8, S: 20, Lat: 51, Long: 45, Magnitude: 1.4, Comments: "" },
    { Year: 1972, Day: 344, H: 3, M: 50, S: 15, Lat: -20, Long: -80, Magnitude: 1.2, Comments: "" },
    { Year: 1973, Day: 39, H: 22, M: 52, S: 10, Lat: 33, Long: 35, Magnitude: 0.8, Comments: "" },
    { Year: 1973, Day: 72, H: 7, M: 56, S: 30, Lat: -84, Long: -134, Magnitude: 3.2, Comments: "" },
    { Year: 1973, Day: 171, H: 20, M: 22, S: 0, Lat: -1, Long: -71, Magnitude: 2.2, Comments: "" },
    { Year: 1973, Day: 274, H: 3, M: 58, S: 0, Lat: -37, Long: -29, Magnitude: 1.1, Comments: "" },
    { Year: 1974, Day: 54, H: 21, M: 16, S: 50, Lat: 36, Long: -16, Magnitude: 0.7, Comments: "" },
    { Year: 1974, Day: 86, H: 9, M: 11, S: 0, Lat: -48, Long: -106, Magnitude: 1.6, Comments: "" },
    { Year: 1974, Day: 109, H: 13, M: 35, S: 15, Lat: -37, Long: 42, Magnitude: 0.9, Comments: "" },
    { Year: 1974, Day: 149, H: 20, M: 42, S: 15, Lat: null, Long: null, Magnitude: 0.6, Comments: "30 degrees from station 16 on east side of station" },
    { Year: 1974, Day: 192, H: 0, M: 46, S: 30, Lat: 21, Long: 88, Magnitude: 2.7, Comments: "" },
    { Year: 1975, Day: 3, H: 1, M: 42, S: 0, Lat: 29, Long: -98, Magnitude: 3.2, Comments: "" },
    { Year: 1975, Day: 12, H: 3, M: 14, S: 10, Lat: 75, Long: 40, Magnitude: 1.7, Comments: "" },
    { Year: 1975, Day: 13, H: 0, M: 26, S: 20, Lat: -2, Long: -51, Magnitude: 1.1, Comments: "" },
    { Year: 1975, Day: 44, H: 22, M: 3, S: 50, Lat: -19, Long: -26, Magnitude: 1.4, Comments: "" },
    { Year: 1975, Day: 127, H: 6, M: 37, S: 5, Lat: -49, Long: -45, Magnitude: 1.3, Comments: "" },
    { Year: 1975, Day: 147, H: 23, M: 29, S: 0, Lat: 3, Long: -58, Magnitude: 1.4, Comments: "" },
    { Year: 1975, Day: 314, H: 7, M: 52, S: 55, Lat: -8, Long: 64, Magnitude: 1.8, Comments: "" },
    { Year: 1976, Day: 4, H: 11, M: 18, S: 55, Lat: 50, Long: 30, Magnitude: 1.8, Comments: "" },
    { Year: 1976, Day: 12, H: 8, M: 18, S: 5, Lat: 38, Long: 44, Magnitude: 1.1, Comments: "" },
    { Year: 1976, Day: 66, H: 10, M: 12, S: 40, Lat: 50, Long: -20, Magnitude: 2.3, Comments: "" },
    { Year: 1976, Day: 68, H: 14, M: 42, S: 10, Lat: -19, Long: -12, Magnitude: 1.8, Comments: "" },
    { Year: 1976, Day: 137, H: 12, M: 32, S: 40, Lat: 77, Long: -10, Magnitude: 1.5, Comments: "" }
  ],
  ia = [
    { A: 1, Side: "N", Lat: -15.7, Lat_err: 2.4, Long: -36.6, Long_err: 4.6, Depth: 867, Depth_err: 29, Assumed: "N" },
    { A: 3, Side: "N", Lat: -2.9, Lat_err: 1.7, Long: -50.3, Long_err: 6.3, Depth: 946, Depth_err: 22, Assumed: "N" },
    { A: 5, Side: "N", Lat: 1.1, Lat_err: 94.2, Long: -44.7, Long_err: 16.4, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 6, Side: "N", Lat: 43.5, Lat_err: 2.9, Long: 55.5, Long_err: 9.5, Depth: 844, Depth_err: 33, Assumed: "N" },
    { A: 7, Side: "N", Lat: 25, Lat_err: 1.7, Long: 53.2, Long_err: 8, Depth: 893, Depth_err: 27, Assumed: "N" },
    { A: 8, Side: "N", Lat: -23.7, Lat_err: 4.8, Long: -35.5, Long_err: 6.5, Depth: 1086, Depth_err: 37, Assumed: "N" },
    { A: 9, Side: "N", Lat: -6, Lat_err: 2.4, Long: -19.7, Long_err: 3.6, Depth: 1037, Depth_err: 68, Assumed: "N" },
    { A: 10, Side: "N", Lat: -35.7, Lat_err: 4.9, Long: -40.3, Long_err: 6.7, Depth: 988, Depth_err: 21, Assumed: "N" },
    { A: 11, Side: "N", Lat: 9.2, Lat_err: 1.5, Long: 17.5, Long_err: 4.9, Depth: 1187, Depth_err: 87, Assumed: "N" },
    { A: 13, Side: "N", Lat: -19.1, Lat_err: 3, Long: -41.7, Long_err: 5.6, Depth: 973, Depth_err: 23, Assumed: "N" },
    { A: 14, Side: "N", Lat: -29.6, Lat_err: 9.3, Long: -44.4, Long_err: 7.8, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 15, Side: "N", Lat: 0.7, Lat_err: 0.7, Long: -3.9, Long_err: 0.6, Depth: 747, Depth_err: 62, Assumed: "N" },
    { A: 16, Side: "N", Lat: 7.5, Lat_err: 0.8, Long: 6.3, Long_err: 1.5, Depth: 1019, Depth_err: 78, Assumed: "N" },
    { A: 17, Side: "N", Lat: 25.5, Lat_err: 2.3, Long: -21.9, Long_err: 2.8, Depth: 807, Depth_err: 40, Assumed: "N" },
    { A: 18, Side: "N", Lat: 23.3, Lat_err: 2.4, Long: 32.7, Long_err: 5.5, Depth: 925, Depth_err: 44, Assumed: "N" },
    { A: 19, Side: "N", Lat: 27.7, Lat_err: 3, Long: 34.4, Long_err: 6.4, Depth: 974, Depth_err: 42, Assumed: "N" },
    { A: 20, Side: "N", Lat: 23.7, Lat_err: 2.5, Long: -31.4, Long_err: 5.3, Depth: 945, Depth_err: 50, Assumed: "N" },
    { A: 21, Side: "N", Lat: -18.2, Lat_err: 3, Long: -50.8, Long_err: 7.2, Depth: 1037, Depth_err: 20, Assumed: "N" },
    { A: 22, Side: "N", Lat: 21.6, Lat_err: 1.8, Long: 43.6, Long_err: 5.9, Depth: 788, Depth_err: 29, Assumed: "N" },
    { A: 25, Side: "N", Lat: 35.1, Lat_err: 2.2, Long: 59.8, Long_err: 9.9, Depth: 924, Depth_err: 28, Assumed: "N" },
    { A: 26, Side: "N", Lat: 14.3, Lat_err: 2.6, Long: 5.2, Long_err: 2, Depth: 1122, Depth_err: 90, Assumed: "N" },
    { A: 27, Side: "N", Lat: 23, Lat_err: 3.3, Long: 20.4, Long_err: 4.7, Depth: 1085, Depth_err: 64, Assumed: "N" },
    { A: 28, Side: "N", Lat: 8.1, Lat_err: 1.3, Long: 10.3, Long_err: 2.6, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 29, Side: "F", Lat: 53.4, Lat_err: 15.2, Long: 60.9, Long_err: 66.1, Depth: 1077, Depth_err: 32, Assumed: "N" },
    { A: 30, Side: "N", Lat: 12.7, Lat_err: 1.2, Long: -35.7, Long_err: 4.8, Depth: 931, Depth_err: 39, Assumed: "N" },
    { A: 32, Side: "N", Lat: 25, Lat_err: 2.7, Long: 43.6, Long_err: 7.3, Depth: 944, Depth_err: 38, Assumed: "N" },
    { A: 33, Side: "F", Lat: 5.1, Lat_err: 2.6, Long: 115.8, Long_err: 9.3, Depth: 877, Depth_err: 112, Assumed: "N" },
    { A: 34, Side: "N", Lat: 6.8, Lat_err: 0.7, Long: -7.2, Long_err: 1.3, Depth: 971, Depth_err: 77, Assumed: "N" },
    { A: 35, Side: "N", Lat: 5, Lat_err: 1.5, Long: 36.1, Long_err: 11.4, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 36, Side: "N", Lat: 27.5, Lat_err: 4.7, Long: -4.6, Long_err: 1.9, Depth: 1058, Depth_err: 74, Assumed: "N" },
    { A: 37, Side: "N", Lat: 22.5, Lat_err: 5.5, Long: 29.7, Long_err: 10.7, Depth: 1343, Depth_err: 82, Assumed: "N" },
    { A: 38, Side: "N", Lat: 7.8, Lat_err: 1.3, Long: 43.3, Long_err: 7, Depth: 1031, Depth_err: 37, Assumed: "N" },
    { A: 39, Side: "N", Lat: -21.9, Lat_err: 21.1, Long: -12.7, Long_err: 5.1, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 40, Side: "N", Lat: -1.3, Lat_err: 1.2, Long: -10.3, Long_err: 1.5, Depth: 867, Depth_err: 66, Assumed: "N" },
    { A: 41, Side: "N", Lat: 13.8, Lat_err: 1.3, Long: -29.2, Long_err: 3.9, Depth: 847, Depth_err: 45, Assumed: "N" },
    { A: 42, Side: "N", Lat: 22.2, Lat_err: 1.5, Long: -50.7, Long_err: 6.8, Depth: 907, Depth_err: 28, Assumed: "N" },
    { A: 44, Side: "N", Lat: 50.2, Lat_err: 2.9, Long: 60.2, Long_err: 12, Depth: 908, Depth_err: 37, Assumed: "N" },
    { A: 49, Side: "N", Lat: 8.6, Lat_err: 4.6, Long: -50.8, Long_err: 5.6, Depth: 952, Depth_err: 93, Assumed: "N" },
    { A: 50, Side: "N", Lat: 8.7, Lat_err: 1, Long: -53.4, Long_err: 5, Depth: 828, Depth_err: 27, Assumed: "N" },
    { A: 51, Side: "N", Lat: 12.3, Lat_err: 1.4, Long: 37.7, Long_err: 8, Depth: 1125, Depth_err: 56, Assumed: "N" },
    { A: 53, Side: "N", Lat: -10.1, Lat_err: 39.9, Long: -39.2, Long_err: 8.1, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 54, Side: "N", Lat: 13.1, Lat_err: 30.1, Long: -52.4, Long_err: 10.8, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 56, Side: "N", Lat: 1.1, Lat_err: 1.6, Long: -20.6, Long_err: 5, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 59, Side: "N", Lat: -9.5, Lat_err: 17.6, Long: -53.6, Long_err: 5.9, Depth: 750, Depth_err: 109, Assumed: "Y" },
    { A: 60, Side: "N", Lat: 24.1, Lat_err: 9.5, Long: -52.2, Long_err: 8, Depth: 750, Depth_err: 109, Assumed: "Y" },
    { A: 64, Side: "N", Lat: 30.1, Lat_err: 2.9, Long: 53.2, Long_err: 9.8, Depth: 975, Depth_err: 24, Assumed: "N" },
    { A: 65, Side: "N", Lat: 46.6, Lat_err: 3.9, Long: 42.3, Long_err: 8.2, Depth: 861, Depth_err: 25, Assumed: "N" },
    { A: 70, Side: "N", Lat: 34.8, Lat_err: 2.1, Long: 63, Long_err: 11.3, Depth: 1014, Depth_err: 26, Assumed: "N" },
    { A: 71, Side: "N", Lat: -20.9, Lat_err: 22.1, Long: -16.8, Long_err: 6.3, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 73, Side: "N", Lat: 21.1, Lat_err: 1.7, Long: -44, Long_err: 5.6, Depth: 908, Depth_err: 28, Assumed: "N" },
    { A: 74, Side: "N", Lat: 34.7, Lat_err: 2.5, Long: 60.1, Long_err: 10.6, Depth: 1043, Depth_err: 30, Assumed: "N" },
    { A: 77, Side: "N", Lat: 24.6, Lat_err: 8.4, Long: -23.4, Long_err: 11.1, Depth: 1419, Depth_err: 96, Assumed: "N" },
    { A: 82, Side: "N", Lat: 27.5, Lat_err: 9.9, Long: 34.3, Long_err: 20.6, Depth: 919, Depth_err: 160, Assumed: "N" },
    { A: 86, Side: "N", Lat: -40.9, Lat_err: 7.5, Long: -40.6, Long_err: 8.4, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 96, Side: "N", Lat: 6.2, Lat_err: 0.6, Long: 11.9, Long_err: 1.8, Depth: 794, Depth_err: 64, Assumed: "N" },
    { A: 97, Side: "N", Lat: -8.4, Lat_err: 2.9, Long: 17.9, Long_err: 3.8, Depth: 989, Depth_err: 71, Assumed: "N" },
    { A: 99, Side: "N", Lat: 10, Lat_err: 1.1, Long: 22.8, Long_err: 4.2, Depth: 989, Depth_err: 69, Assumed: "N" },
    { A: 100, Side: "N", Lat: -2, Lat_err: 4.2, Long: 32.2, Long_err: 17.1, Depth: 920, Depth_err: 184, Assumed: "N" },
    { A: 107, Side: "N", Lat: 41, Lat_err: 2.5, Long: 53.4, Long_err: 7.7, Depth: 893, Depth_err: 34, Assumed: "N" },
    { A: 114, Side: "N", Lat: 15.5, Lat_err: 1.2, Long: 55.6, Long_err: 7.5, Depth: 755, Depth_err: 44, Assumed: "N" },
    { A: 201, Side: "N", Lat: -40.6, Lat_err: 14.8, Long: -3.8, Long_err: 1.6, Depth: 862, Depth_err: 88, Assumed: "N" },
    { A: 202, Side: "N", Lat: 1, Lat_err: 1.7, Long: 2.8, Long_err: 1.5, Depth: 919, Depth_err: 170, Assumed: "N" },
    { A: 203, Side: "N", Lat: 0.5, Lat_err: 2, Long: 47.3, Long_err: 11.8, Depth: 1243, Depth_err: 50, Assumed: "N" },
    { A: 204, Side: "N", Lat: -28.4, Lat_err: 8.9, Long: -66.6, Long_err: 9.2, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 209, Side: "N", Lat: -26.5, Lat_err: 12, Long: -35.1, Long_err: 7.2, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 212, Side: "N", Lat: 12.8, Lat_err: 1.4, Long: -36.2, Long_err: 5.6, Depth: 963, Depth_err: 45, Assumed: "N" },
    { A: 216, Side: "N", Lat: -13.7, Lat_err: 3.9, Long: -21.6, Long_err: 4.5, Depth: 764, Depth_err: 81, Assumed: "N" },
    { A: 218, Side: "F", Lat: -2.4, Lat_err: 4.4, Long: -73.3, Long_err: 32.3, Depth: 878, Depth_err: 107, Assumed: "N" },
    { A: 223, Side: "N", Lat: 36.1, Lat_err: 12.2, Long: -2.4, Long_err: 1.3, Depth: 863, Depth_err: 145, Assumed: "N" },
    { A: 224, Side: "N", Lat: -50.7, Lat_err: 7.9, Long: -21.4, Long_err: 5.5, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 230, Side: "N", Lat: 6.3, Lat_err: 0.9, Long: 22.1, Long_err: 9.7, Depth: 855, Depth_err: 188, Assumed: "N" },
    { A: 231, Side: "N", Lat: 34.3, Lat_err: 12, Long: 45, Long_err: 29.9, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 233, Side: "N", Lat: 24.1, Lat_err: 5.1, Long: 26.1, Long_err: 8.2, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 234, Side: "N", Lat: 36.8, Lat_err: 4.5, Long: 21.2, Long_err: 4.5, Depth: 1006, Depth_err: 41, Assumed: "N" },
    { A: 236, Side: "N", Lat: -7.8, Lat_err: 3.5, Long: 5.4, Long_err: 1.7, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 237, Side: "N", Lat: 12.2, Lat_err: 1.9, Long: 3.5, Long_err: 1.5, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 238, Side: "N", Lat: 26.3, Lat_err: 8.7, Long: 20, Long_err: 9.8, Depth: 831, Depth_err: 169, Assumed: "N" },
    { A: 239, Side: "N", Lat: 26.7, Lat_err: 5.6, Long: 5.2, Long_err: 2.1, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 241, Side: "F", Lat: -69.4, Lat_err: 4.4, Long: 75.4, Long_err: 24.6, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 242, Side: "N", Lat: 58.6, Lat_err: 4.6, Long: 54.2, Long_err: 15.5, Depth: 1025, Depth_err: 31, Assumed: "N" },
    { A: 243, Side: "N", Lat: 7, Lat_err: 1.3, Long: 8.3, Long_err: 4.1, Depth: 1019, Depth_err: 191, Assumed: "N" },
    { A: 244, Side: "F", Lat: 34.6, Lat_err: 20.9, Long: 56.1, Long_err: 81, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 245, Side: "F", Lat: 8.6, Lat_err: 4.9, Long: 73, Long_err: 69.5, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 246, Side: "N", Lat: 19.4, Lat_err: 2.7, Long: 24.3, Long_err: 5.1, Depth: 959, Depth_err: 68, Assumed: "N" },
    { A: 248, Side: "N", Lat: 5.3, Lat_err: 1.1, Long: 3.6, Long_err: 1.5, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 249, Side: "N", Lat: -3.4, Lat_err: 2.5, Long: 12.5, Long_err: 3.1, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 250, Side: "N", Lat: -3.6, Lat_err: 2.8, Long: 21.5, Long_err: 5.7, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 251, Side: "N", Lat: -46.5, Lat_err: 8.3, Long: 38.9, Long_err: 9.3, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 255, Side: "N", Lat: 1.4, Lat_err: 1.6, Long: 15, Long_err: 3.7, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 257, Side: "N", Lat: 35, Lat_err: 6.2, Long: 19.1, Long_err: 5.5, Depth: 1063, Depth_err: 63, Assumed: "N" },
    { A: 258, Side: "N", Lat: -7.1, Lat_err: 3.5, Long: 15.3, Long_err: 4, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 259, Side: "N", Lat: 3.4, Lat_err: 0.6, Long: 2, Long_err: 0.7, Depth: 559, Depth_err: 97, Assumed: "N" },
    { A: 260, Side: "N", Lat: -1.7, Lat_err: 2.3, Long: 18, Long_err: 4.5, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 267, Side: "N", Lat: -7.6, Lat_err: 5, Long: 36.7, Long_err: 13.2, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 271, Side: "N", Lat: 53.8, Lat_err: 6.8, Long: 35.2, Long_err: 19.2, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 272, Side: "N", Lat: -50, Lat_err: 7.5, Long: 53.2, Long_err: 12.2, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 276, Side: "N", Lat: -3.7, Lat_err: 3.6, Long: -33.9, Long_err: 12.4, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 279, Side: "N", Lat: 4.4, Lat_err: 1.2, Long: -4.7, Long_err: 1.8, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 280, Side: "N", Lat: 2.4, Lat_err: 2.7, Long: 46.1, Long_err: 20.2, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 281, Side: "N", Lat: -53.2, Lat_err: 4.6, Long: -54.4, Long_err: 11.4, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 282, Side: "F", Lat: 15.5, Lat_err: 2.4, Long: 97, Long_err: 12.3, Depth: 1141, Depth_err: 74, Assumed: "N" },
    { A: 283, Side: "N", Lat: 7.1, Lat_err: 1.2, Long: 22.5, Long_err: 4.7, Depth: 984, Depth_err: 76, Assumed: "N" },
    { A: 285, Side: "F", Lat: 42.9, Lat_err: 3.7, Long: 110.9, Long_err: 14.2, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 286, Side: "N", Lat: 54.2, Lat_err: 6.5, Long: 56.5, Long_err: 14, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 287, Side: "N", Lat: 24.8, Lat_err: 5.7, Long: 35.7, Long_err: 13.5, Depth: 933, Depth_err: 109, Assumed: "Y" },
    { A: 290, Side: "N", Lat: 10.6, Lat_err: 1.6, Long: 6.4, Long_err: 1.9, Depth: 933, Depth_err: 109, Assumed: "Y" }
  ],
  ra = [
    { Type: "M", Lat: 74.1, Long: 2.6, Depth: 0, Phi: 16, "Delta-a": 2.7, "Delta-b": 1.1, Depth_err: 0, Date: 7201040631, Seconds: 19.72, Time_err: 1.7, "12P": 318, "12P_EC": 2, "14P": 315, "14P_EC": 1, "15P": 215, "15P_EC": 1, "16P": null, "16P_EC": null, "12S": 542, "12S_EC": 2, "14S": null, "14S_EC": null, "15S": 350, "15S_EC": 1, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 1.5, Long: -17.1, Depth: 0, Phi: -52, "Delta-a": 0.3, "Delta-b": 0.2, Depth_err: 0, Date: 7205130845, Seconds: 39.49, Time_err: 1, "12P": 84.9, "12P_EC": 0, "14P": 72.1, "14P_EC": 0, "15P": 173.5, "15P_EC": 0, "16P": 181, "16P_EC": 0, "12S": null, "12S_EC": null, "14S": 97.5, "14S_EC": 2, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 32.8, Long: 137.6, Depth: 0, Phi: -47, "Delta-a": 1.3, "Delta-b": 1.1, Depth_err: 0, Date: 7207172150, Seconds: 57.9, Time_err: 4.4, "12P": 473.7, "12P_EC": 0, "14P": 483, "14P_EC": 0, "15P": 418.2, "15P_EC": 0, "16P": 445.8, "16P_EC": 0, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 24, Long: 10.1, Depth: 0, Phi: -7, "Delta-a": 0.7, "Delta-b": 0.3, Depth_err: 0, Date: 7207311808, Seconds: 15.72, Time_err: 2.3, "12P": 193.4, "12P_EC": 1, "14P": 174.7, "14P_EC": 0, "15P": 52.6, "15P_EC": 0, "16P": null, "16P_EC": null, "12S": 285, "12S_EC": 2, "14S": null, "14S_EC": null, "15S": 82, "15S_EC": 1, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 15.8, Long: 22.9, Depth: 0, Phi: 20, "Delta-a": 2.9, "Delta-b": 1.6, Depth_err: 0, Date: 7208292258, Seconds: 33.57, Time_err: 3.5, "12P": null, "12P_EC": null, "14P": 210, "14P_EC": 2, "15P": 132, "15P_EC": 2, "16P": 145, "16P_EC": 2, "12S": null, "12S_EC": null, "14S": 344, "14S_EC": 2, "15S": 190, "15S_EC": 2, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 28.7, Long: 41.1, Depth: 0, Phi: 39, "Delta-a": 4.1, "Delta-b": 2.4, Depth_err: 0, Date: 7309262046, Seconds: 16.32, Time_err: 4.5, "12P": 295, "12P_EC": 2, "14P": 280, "14P_EC": 2, "15P": 155, "15P_EC": 1, "16P": 192, "16P_EC": 2, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": 255, "15S_EC": 2, "16S": null, "16S_EC": null },
    { Type: "M", Lat: -24.8, Long: -25.1, Depth: 0, Phi: 59, "Delta-a": 5.2, "Delta-b": 1.8, Depth_err: 0, Date: 7312241003, Seconds: 19.35, Time_err: 4.5, "12P": 119, "12P_EC": 1, "14P": 113, "14P_EC": 1, "15P": 250.9, "15P_EC": 1, "16P": 190, "16P_EC": 2, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 7.4, Long: -33.6, Depth: 0, Phi: -5, "Delta-a": 2.2, "Delta-b": 0.9, Depth_err: 0, Date: 7404191830, Seconds: 3.27, Time_err: 1.8, "12P": 70.9, "12P_EC": 1, "14P": 97, "14P_EC": 1, "15P": 168.3, "15P_EC": 1, "16P": 209.2, "16P_EC": 0, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 20.3, Long: 6.5, Depth: 0, Phi: 9, "Delta-a": 0.8, "Delta-b": 0.6, Depth_err: 0, Date: 7407171205, Seconds: 2.89, Time_err: 3.7, "12P": 153.4, "12P_EC": 1, "14P": 148.7, "14P_EC": 1, "15P": 40.6, "15P_EC": 1, "16P": 132.1, "16P_EC": 1, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": 69, "15S_EC": 2, "16S": null, "16S_EC": null },
    { Type: "M", Lat: -7.3, Long: 19.9, Depth: 0, Phi: 52, "Delta-a": 1, "Delta-b": 0.7, Depth_err: 0, Date: 7411211315, Seconds: 40.79, Time_err: 2.2, "12P": 222.9, "12P_EC": 1, "14P": 193, "14P_EC": 1, "15P": 182.7, "15P_EC": 2, "16P": 70.5, "16P_EC": 0, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 1.6, Long: -8.2, Depth: 0, Phi: -85, "Delta-a": 1.3, "Delta-b": 0.5, Depth_err: 0, Date: 7412150907, Seconds: 15.17, Time_err: 3.8, "12P": 95.1, "12P_EC": 1, "14P": 66.6, "14P_EC": 1, "15P": null, "15P_EC": null, "16P": 128.1, "16P_EC": 1, "12S": null, "12S_EC": null, "14S": 109.3, "14S_EC": 2, "15S": 208.2, "15S_EC": 2, "16S": null, "16S_EC": null },
    { Type: "M", Lat: -52.4, Long: 4.2, Depth: 0, Phi: -77, "Delta-a": 4, "Delta-b": 2.3, Depth_err: 0, Date: 7503052149, Seconds: 22.3, Time_err: 7.2, "12P": 236.1, "12P_EC": 2, "14P": 225, "14P_EC": 2, "15P": null, "15P_EC": null, "16P": 209.7, "16P_EC": 2, "12S": 398, "12S_EC": 2, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": 330, "16S_EC": 2 },
    { Type: "M", Lat: 2, Long: 43.2, Depth: 0, Phi: -11, "Delta-a": 4.5, "Delta-b": 0.5, Depth_err: 0, Date: 7504121812, Seconds: 38.22, Time_err: 0.7, "12P": 298.1, "12P_EC": 0, "14P": 277.8, "14P_EC": 1, "15P": 220.6, "15P_EC": 0, "16P": 162.1, "16P_EC": 1, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: -36.4, Long: -121.3, Depth: 0, Phi: -47, "Delta-a": 3.3, "Delta-b": 1.1, Depth_err: 0, Date: 7505040959, Seconds: 28.99, Time_err: 2.3, "12P": 360.6, "12P_EC": 0, "14P": 376.1, "14P_EC": 0, "15P": 436, "15P_EC": 1, "16P": 413, "16P_EC": 0, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: -39.4, Long: 62.8, Depth: 0, Phi: 55, "Delta-a": 2.7, "Delta-b": 2, Depth_err: 0, Date: 7601130711, Seconds: 22.8, Time_err: 6, "12P": 332.7, "12P_EC": 1, "14P": 338.1, "14P_EC": 2, "15P": 333.8, "15P_EC": 1, "16P": 236, "16P_EC": 1, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": 357.9, "16S_EC": 2 },
    { Type: "M", Lat: -16.8, Long: -10, Depth: 0, Phi: 67, "Delta-a": 2, "Delta-b": 0.6, Depth_err: 0, Date: 7605280601, Seconds: 56.38, Time_err: 5.4, "12P": 163.7, "12P_EC": 2, "14P": 126.5, "14P_EC": 1, "15P": null, "15P_EC": null, "16P": 169, "16P_EC": 1, "12S": 216, "12S_EC": 2, "14S": 169, "14S_EC": 2, "15S": 373, "15S_EC": 2, "16S": null, "16S_EC": null },
    { Type: "M", Lat: 23.8, Long: -73.9, Depth: 0, Phi: 37, "Delta-a": 1.8, "Delta-b": 0.8, Depth_err: 0, Date: 761142313, Seconds: 6.67, Time_err: 0.9, "12P": 228.6, "12P_EC": 0, "14P": 246.9, "14P_EC": 0, "15P": 273.8, "15P_EC": 1, "16P": 337.7, "16P_EC": 0, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: -20.5, Long: -63.8, Depth: 0, Phi: 23, "Delta-a": 1.8, "Delta-b": 0.8, Depth_err: 0, Date: 7704712332, Seconds: 6.03, Time_err: 0.7, "12P": 183.7, "12P_EC": 1, "14P": 197.8, "14P_EC": 1, "15P": 306.4, "15P_EC": 0, "16P": 298.2, "16P_EC": 0, "12S": null, "12S_EC": null, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null },
    { Type: "M", Lat: -13.5, Long: -75.3, Depth: 0, Phi: -84, "Delta-a": 7.7, "Delta-b": 3.1, Depth_err: 0, Date: 7706282222, Seconds: 31.17, Time_err: 3.8, "12P": 239.9, "12P_EC": 1, "14P": 250, "14P_EC": 2, "15P": 344, "15P_EC": 2, "16P": 358.5, "16P_EC": 2, "12S": 390, "12S_EC": 2, "14S": null, "14S_EC": null, "15S": null, "15S_EC": null, "16S": null, "16S_EC": null }
  ],
  ns = [
    { AI: "12 LM", Lat: -3.94, Long: -21.2, Y: 69, JD: 324, Hour: 22, Min: 17, Sec: 17.7 },
    { AI: "13 S-IVB", Lat: -2.75, Long: -27.86, Y: 70, JD: 105, Hour: 1, Min: 9, Sec: 41 },
    { AI: "14 S-IVB", Lat: -8.09, Long: -26.02, Y: 71, JD: 35, Hour: 7, Min: 40, Sec: 55.4 },
    { AI: "14 LM", Lat: -3.42, Long: -19.67, Y: 71, JD: 38, Hour: 0, Min: 45, Sec: 26.7 },
    { AI: "15 S-IVB", Lat: -1.51, Long: -11.81, Y: 71, JD: 210, Hour: 20, Min: 58, Sec: 42.9 },
    { AI: "15 LM", Lat: 26.36, Long: 0.25, Y: 71, JD: 215, Hour: 3, Min: 3, Sec: 37 },
    { AI: "17 S-IVB", Lat: -4.21, Long: -12.31, Y: 72, JD: 345, Hour: 20, Min: 32, Sec: 42.3 },
    { AI: "17 LM", Lat: 19.99, Long: 30.51, Y: 72, JD: 350, Hour: 6, Min: 50, Sec: 20.8 }
  ],
  sa = [
    { Name: "Palus Epidemiarum", Def: "Marsh of Epidemics", Diam: 286, Lat: -32, Long: -28.2 },
    { Name: "Palus Putredinis", Def: "Marhs of Decay", Diam: "161", Lat: 27.4, Long: 0 },
    { Name: "Palus Somni", Def: "Marsh of Sleep", Diam: 143, Lat: 14.1, Long: 45 },
    { Name: "Sinus Aestuum", Def: "Seething Bay", Diam: 290, Lat: 12.1, Long: -8.3 },
    { Name: "Sinus Amoris", Def: "Bay of Love", Diam: 130, Lat: 19.9, Long: 37.3 },
    { Name: "Sinus Asperitatis", Def: "Bay of Roughness", Diam: 206, Lat: -3.8, Long: 27.4 },
    { Name: "Sinus Concordiae", Def: "Bay of Harmony", Diam: 142, Lat: 10.8, Long: 43.2 },
    { Name: "Sinus Fidei", Def: "Bay of Trust", Diam: 70, Lat: 18, Long: 2 },
    { Name: "Sinus Honoris", Def: "Bay of Honor", Diam: 109, Lat: 11.7, Long: 17.9 },
    { Name: "Sinus Iridum", Def: "Bay of Rainbows", Diam: 236, Lat: 45.01, Long: -31.67 },
    { Name: "Sinus Lunicus", Def: "Lunik Bay", Diam: 126, Lat: 32.4, Long: -1.9 },
    { Name: "Sinus Medii", Def: "Bay of the Center", Diam: 335, Lat: 1.6, Long: 1 },
    { Name: "Sinus Roris", Def: "Bay of Dew", Diam: 202, Lat: 54, Long: -56.6 },
    { Name: "Sinus Successus", Def: "Bay of Success", Diam: 132, Lat: 0.9, Long: 59 }
  ],
  aa = [
    { Name: "Lacus Aestatis", Def: "Lake of Summer", Diam: 90, Lat: -15, Long: -69 },
    { Name: "Lacus Autumni", Def: "Lake of Autumn", Diam: 183, Lat: -9.9, Long: -83.9 },
    { Name: "Lacus Bonitatis", Def: "Lake of Goodness", Diam: 122, Lat: 23.2, Long: 44.3 },
    { Name: "Lacus Doloris", Def: "Lake of Sorrow", Diam: 103, Lat: 16.8, Long: 8.6 },
    { Name: "Lacus Excellentiae", Def: "Lake of Excellence", Diam: 184, Lat: -35.4, Long: -44 },
    { Name: "Lacus Felicitatis", Def: "Lake of Happiness", Diam: 98, Lat: 18.5, Long: 5.4 },
    { Name: "Lacus Gaudii", Def: "Lake of Joy", Diam: 113, Lat: 16.3, Long: 12.3 },
    { Name: "Lacus Hiemalis", Def: "Lake of Winter", Diam: 50, Lat: 15, Long: 14 },
    { Name: "Lacus Lenitatis", Def: "Lake of Softness", Diam: 80, Lat: 14.3, Long: 12.1 },
    { Name: "Lacus Luxuriae", Def: "Lake of Luxury", Diam: 50, Lat: 19, Long: 176 },
    { Name: "Lacus Mortis", Def: "Lake of Death", Diam: 151, Lat: 45.13, Long: 27.32 },
    { Name: "Lacus Oblivionis", Def: "Lake of Forgetfulness", Diam: 50, Lat: -21, Long: -168 },
    { Name: "Lacus Odii", Def: "Lake of Hatred", Diam: 70, Lat: 19, Long: 7 },
    { Name: "Lacus Perseverantiae", Def: "Lake of Perseverance", Diam: 70, Lat: 8, Long: 62 },
    { Name: "Lacus Solitudinis", Def: "Lake of Solitude", Diam: 139, Lat: -27.8, Long: 104.3 },
    { Name: "Lacus Somniorum", Def: "Lake of Dreams", Diam: 384, Lat: 37.56, Long: 30.8 },
    { Name: "Lacus Spei", Def: "Lake of Hope", Diam: 80, Lat: 43, Long: 65 },
    { Name: "Lacus Temporis", Def: "Lake of Time", Diam: 117, Lat: 45.9, Long: 58.4 },
    { Name: "Lacus Timoris", Def: "Lake of Fear", Diam: 117, Lat: -39.4, Long: 27.9 },
    { Name: "Lacus Veris", Def: "Lake of Spring", Diam: 396, Lat: -16.5, Long: -86.1 }
  ],
  oa = [
    { Name: "Mons Agnes", H: 0.03, Diam: 0.65, Lat: 18.66, Long: 5.34 },
    { Name: "Mons Amp\xE8re", H: 3, Diam: 30, Lat: 19.32, Long: -3.71 },
    { Name: "Mons Andr\xE9", H: "", Diam: 10, Lat: 5.18, Long: 120.56 },
    { Name: "Mons Ardeshir", H: "", Diam: 8, Lat: 5.03, Long: 121.04 },
    { Name: "Mons Argaeus", H: "", Diam: 50, Lat: 19.33, Long: 29.01 },
    { Name: "Mont Blanc", H: 3.6, Diam: 25, Lat: 45.41, Long: 0.44 },
    { Name: "Mons Bradley", H: 4.2, Diam: 30, Lat: 21.73, Long: 0.38 },
    { Name: "Mons Delisle", H: "", Diam: 30, Lat: 29.42, Long: -35.79 },
    { Name: "Mons Dieter", H: "", Diam: 20, Lat: 5, Long: 120.3 },
    { Name: "Mons Dilip", H: "", Diam: 2, Lat: 5.58, Long: 120.87 },
    { Name: "Mons Esam", H: "", Diam: 8, Lat: 14.61, Long: 35.71 },
    { Name: "Mons Ganau", H: "", Diam: 14, Lat: 4.79, Long: 120.59 },
    { Name: "Mons Gruithuisen Delta", H: "", Diam: 20, Lat: 36.07, Long: -39.59 },
    { Name: "Mons Gruithuisen Gamma", H: "", Diam: 20, Lat: 36.56, Long: -40.72 },
    { Name: "Mons Hadley", H: 4.6, Diam: 25, Lat: 26.69, Long: 4.12 },
    { Name: "Mons Hadley Delta", H: 3.5, Diam: 15, Lat: 25.72, Long: 3.71 },
    { Name: "Mons Hansteen", H: "", Diam: 30, Lat: -12.19, Long: -50.21 },
    { Name: "Mons Herodotus", H: "", Diam: 5, Lat: 27.5, Long: -52.94 },
    { Name: "Mons Huygens", H: 4.7, Diam: 40, Lat: 19.92, Long: -2.86 },
    { Name: "Mons La Hire", H: 1.5, Diam: 25, Lat: 27.66, Long: -25.51 },
    { Name: "Mons Latreille", H: 0.15, Diam: 6.4, Lat: 18.47, Long: 61.92 },
    { Name: "Mons Maraldi", H: 1.3, Diam: 15, Lat: 20.34, Long: 35.5 },
    { Name: "Mons Moro", H: "", Diam: 10, Lat: -11.84, Long: -19.84 },
    { Name: "Mons Penck", H: 4, Diam: 30, Lat: -10, Long: 21.74 },
    { Name: "Mons Piton", H: 2.3, Diam: 25, Lat: 40.72, Long: -0.92 },
    { Name: "Mons R\xFCmker", H: 0.5, Diam: 70, Lat: 40.76, Long: -58.38 },
    { Name: "Mons Usov", H: "", Diam: 15, Lat: 11.91, Long: 63.26 },
    { Name: "Mons Vinogradov", H: 1.4, Diam: 25, Lat: 22.35, Long: -32.52 },
    { Name: "Mons Vitruvius", H: 2.3, Diam: 15, Lat: 19.33, Long: 30.74 },
    { Name: "Mons Wolff", H: 3.5, Diam: 35, Lat: 16.88, Long: -6.8 }
  ],
  la = [
    { Name: "Mare Frigoris", Def: "Sea of Cold", Diam: 1446, Lat: 56, Long: 1.4 },
    { Name: "Mare Vaporum", Def: "Sea of Vapors", Diam: 242, Lat: 13.3, Long: 3.6 },
    { Name: "Mare Imbrium", Def: "Sea of Rains", Diam: 1146, Lat: 32.8, Long: -15.6 },
    { Name: "Mare Nubium", Def: "Sea of Clouds", Diam: 715, Lat: -21.3, Long: -16.6 },
    { Name: "Mare Serenitatis", Def: "Sea of Serenity", Diam: 674, Lat: 28, Long: 17.5 },
    { Name: "Mare Cognitum", Def: "Known Sea", Diam: 350, Lat: -10.5, Long: -22.3 },
    { Name: "Mare Insularum", Def: "Sea of Islands", Diam: 512, Lat: 7.5, Long: -30.9 },
    { Name: "Mare Tranquillitatis", Def: "Sea of Tranquility", Diam: 876, Lat: 8.5, Long: 31.4 },
    { Name: "Mare Nectartis", Def: "Sea of Nectar", Diam: 340, Lat: -15.2, Long: 34.6 },
    { Name: "Mare Humorum", Def: "Sea of Moisture", Diam: 420, Lat: -24.4, Long: -38.6 },
    { Name: "Mare Fecunditatis", Def: "Sea of Fertility", Diam: 840, Lat: -7.8, Long: 51.3 },
    { Name: "Oceanus Procellarum", Def: "Ocean of Storms", Diam: 2592, Lat: 18.4, Long: -57.4 },
    { Name: "Mare Crisium", Def: "Sea of Crises", Diam: 556, Lat: 17, Long: 59.1 },
    { Name: "Mare Spumans", Def: "Sea of Foam", Diam: 140, Lat: 1.3, Long: 65.3 },
    { Name: "Mare Anguis", Def: "Serpent Sea", Diam: 146, Lat: 22.6, Long: 67.7 },
    { Name: "Mare Undarum", Def: "Sea of Waves", Diam: 244.84, Lat: 7.49, Long: 68.66 },
    { Name: "Mare Humboldtianum", Def: "Humboldt's Sea", Diam: 230, Lat: 56.9, Long: 81.5 },
    { Name: "Mare Marginis", Def: "Border Sea", Diam: 358, Lat: 13.3, Long: 86.1 },
    { Name: "Mare Smythii", Def: "Smyth's Sea", Diam: 373, Lat: 1.3, Long: 87.5 },
    { Name: "Mare Orientale", Def: "Eastern Sea", Diam: 294, Lat: -19.4, Long: -92.8 },
    { Name: "Mare Australe", Def: "Southern Sea", Diam: 997, Lat: -38.9, Long: 93 },
    { Name: "Mare Moscoviense", Def: "Sea of Moscow", Diam: 276, Lat: 27.3, Long: 147.9 },
    { Name: "Mare Ingenii", Def: "Sea of Cleverness", Diam: 282, Lat: -33.7, Long: 163.5 }
  ],
  ca = [
    { Name: "Vallis Alpes", Crater: "", Diam: 166, Lat: 48.5, Long: 3.2 },
    { Name: "Vallis Baade", Crater: "Baade", Diam: 203, Lat: -45.9, Long: -76.2 },
    { Name: "Vallis Bohr", Crater: "Bohr", Diam: 80, Lat: 12.4, Long: -86.6 },
    { Name: "Vallis Bouvard", Crater: "", Diam: 284, Lat: -38.3, Long: -83.1 },
    { Name: "Vallis Capella", Crater: "Capella", Diam: 49, Lat: -7.6, Long: 34.9 },
    { Name: "Vallis Inghirami", Crater: "Inghirami", Diam: 148, Lat: -43.8, Long: -72.2 },
    { Name: "Vallis Palitzsch", Crater: "Palitzsch", Diam: 132, Lat: -26.4, Long: 64.3 },
    { Name: "Vallis Planck", Crater: "Planck", Diam: 451, Lat: -58.4, Long: 126.1 },
    { Name: "Vallis Rheita", Crater: "Rheita", Diam: 445, Lat: -42.5, Long: 51.5 },
    { Name: "Vallis Schr\xF6dinger", Crater: "Schr\xF6dinger", Diam: 310, Lat: -67, Long: 105 },
    { Name: "Vallis Schr\xF6teri", Crater: "Schr\xF6teri", Diam: 168, Lat: 26.2, Long: -50.8 },
    { Name: "Vallis Snellius", Crater: "Snellius", Diam: 592, Lat: -31.1, Long: 56 }
  ],
  ua = [
    { Name: "Albategnius", Diam: 129, Depth: 4.4, Lat: -11.2, Long: 4.1 },
    { Name: "Aristarchus", Diam: 40, Depth: 2.7, Lat: 23.7, Long: -47.4 },
    { Name: "Aristoteles", Diam: 87, Depth: 3.3, Lat: 50.2, Long: 17.4 },
    { Name: "Bailly", Diam: 303, Depth: 4.3, Lat: -66.8, Long: -69.4 },
    { Name: "Clavius", Diam: 231, Depth: 3.5, Lat: -58.4, Long: -14.4 },
    { Name: "Copernicus", Diam: 93, Depth: 3.8, Lat: 9.62, Long: -20.08 },
    { Name: "Fra Mauro", Diam: 95, Depth: "", Lat: -6, Long: -17 },
    { Name: "Humboldt", Diam: 199.46, Depth: "", Lat: -27.02, Long: 80.96 },
    { Name: "Janssen", Diam: 201, Depth: 2.9, Lat: -44.96, Long: 40.82 },
    { Name: "Langrenus", Diam: 132, Depth: 2.7, Lat: -8.9, Long: 60.9 },
    { Name: "Longomontanus", Diam: 145, Depth: 4.5, Lat: -49.5, Long: -21.7 },
    { Name: "Maginus", Diam: 194, Depth: 4.3, Lat: -50, Long: -6.2 },
    { Name: "Metius", Diam: 88, Depth: 3, Lat: -40.3, Long: 43.3 },
    { Name: "Moretus", Diam: 114, Depth: 5, Lat: -70.6, Long: -5.5 },
    { Name: "Petavius", Diam: 177, Depth: 3.4, Lat: -25.3, Long: 60.4 },
    { Name: "Picard", Diam: 23, Depth: 2.4, Lat: 14.57, Long: 54.72 },
    { Name: "Piccolomini", Diam: 88, Depth: 4.5, Lat: -29.7, Long: 32.3 },
    { Name: "Pitatus", Diam: 100.63, Depth: 0.9, Lat: -29.88, Long: -13.53 },
    { Name: "Plinius", Diam: 41, Depth: 4.3, Lat: 15.4, Long: 23.7 },
    { Name: "Rheita", Diam: 70, Depth: 4.3, Lat: -37.1, Long: 47.2 },
    { Name: "Russell", Diam: 103, Depth: "", Lat: 26.5, Long: -75.4 },
    { Name: "Schickard", Diam: 212, Depth: 1.5, Lat: -44.4, Long: -55.1 },
    { Name: "Seleucus", Diam: 61, Depth: 3, Lat: 21, Long: -66.6 },
    { Name: "Stadius", Diam: 69, Depth: "", Lat: 10.48, Long: -13.77 },
    { Name: "St\xF6fler", Diam: 126, Depth: 2.8, Lat: -41.1, Long: 6 },
    { Name: "Thebit", Diam: 57, Depth: 3.3, Lat: -22, Long: -4 },
    { Name: "Theophilus", Diam: 100, Depth: 3.2, Lat: -11.4, Long: 26.4 },
    { Name: "Tycho", Diam: 85, Depth: 4.7, Lat: -43.31, Long: -11.36 },
    { Name: "Vendelinus", Diam: 147, Depth: 2.6, Lat: -16.46, Long: 61.55 },
    { Name: "Wargentin", Diam: 84, Depth: "", Lat: -49.6, Long: -60.2 }
  ];
function zg(r) {
  r.preventDefault(), (Ba.x = (r.clientX / window.innerWidth) * 2 - 1), (Ba.y = -(r.clientY / window.innerHeight) * 2 + 1);
}
var Fc = new Mc();
const sn = new og(Fc),
  Ti = new dg(),
  Ba = new _e(),
  Yi = new fg();
Yi.setSize(innerWidth, innerHeight);
Yi.domElement.style.position = "absolute";
Yi.domElement.style.top = "0px";
Yi.domElement.style.pointerEvents = "none";
document.body.appendChild(Yi.domElement);
window.addEventListener("pointermove", zg);
Fc.onLoad = function () {
  console.log("Loading complete!"), document.getElementById("loadingScreen").remove();
};
function an(r, e, t = 0) {
  var i = (90 - r) * (Math.PI / 180),
    s = (e + 180 + t) * (Math.PI / 180),
    o = -(15 * Math.sin(i) * Math.cos(s)),
    a = 15 * Math.sin(i) * Math.sin(s),
    l = 15 * Math.cos(i);
  return new C(o, l, a);
}
const Ve = new tg(),
  tn = new Et(75, window.innerWidth / window.innerHeight, 0.1, 2e4),
  nn = new Sc({ canvas: document.querySelector("#bg"), antialias: !0 });
function Ug() {
  (tn.aspect = window.innerWidth / window.innerHeight), tn.updateProjectionMatrix(), nn.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", Ug);
const Sr = new hg(tn, nn.domElement);
Sr.minDistance = 16;
Sr.maxDistance = 200;
nn.setPixelRatio(window.devicePixelRatio);
nn.setSize(window.innerWidth, window.innerHeight);
tn.position.setZ(30);
nn.render(Ve, tn);
Sr.saveState();
const Oc = new pg("rainbow", 512);
Oc.getColor(0.5);
var ri = new ig(new yc({ map: new rg(Oc.createCanvas()) }));
ri.material.map.colorSpace = jt;
ri.scale.x = 10;
ri.scale.y = 10;
ri.scale.z = 10;
ri.scale.x = 0.5;
ri.position.x = 20;
Ve.add(ri);
const Bg = new Ke(10, 32, 32).rotateY(Math.PI),
  kg = new Dt({ map: sn.load("/sun.jpg"), transparent: !0, emissive: 16777215, emissiveIntensity: 0.75 }),
  Ja = new Ne(Bg, kg);
Ja.position.set(200, 10, 200);
Ve.add(Ja);
const Vg = new Ke(1e4, 100, 100),
  Hg = new Dt({ map: sn.load("/milkyway.jpg"), side: _t, transparent: !0, opacity: 0.25 }),
  Gg = new Ne(Vg, Hg);
Ve.add(Gg);
const qn = new Ec(16777215);
qn.position.set(50, 10, 50);
Ve.add(qn);
const fr = new ug(2631720);
Ve.add(fr);
const Ka = new Ne(new Ke(5, 3, 2), new Dt({ transparent: !0, opacity: 0 }));
Ve.add(Ka);
Ka.add(qn, Ja);
const Wg = new Ke(15, 100, 100, -Math.PI / 2),
  Qa = new Dt({ map: sn.load("/moon.jpg") });
Qa.bumpMap = sn.load("/moon16.jpg");
Qa.bumpScale = 0.025;
const at = new Ne(Wg, Qa);
Ve.add(at);
const Xg = new Ke(15.004, 100, 100, Math.PI / 2),
  eo = new Dt({ map: sn.load("/topography.jpg") });
eo.bumpMap = sn.load("/moon16.jpg");
eo.bumpScale = 0.03;
const fs = new Ne(Xg, eo);
fs.visible = !1;
Ve.add(fs);
at.add(fs);
var on = new dt();
const Yg = new Ke(14.99, 100, 100, 0, Math.PI),
  to = new Dt({ map: sn.load("/moonhalf.jpg"), side: _t });
to.bumpMap = sn.load("/moon16half.jpg");
to.bumpScale = 0.025;
const qg = new Ne(Yg, to);
Ve.add(qg);
const jg = new ni(15, 100),
  Zg = new Dt({ color: 6710630, side: _t }),
  $t = new Ne(jg, Zg);
$t.userData.originalColor = 6710630;
$t.translateZ(-0.01);
$t.name = "Crust (52 km)";
on.add($t);
const $g = new ni(15 - 0.45, 100),
  Jg = new Dt({ color: 8355711, side: _t }),
  Jt = new Ne($g, Jg);
Jt.userData.originalColor = 8355711;
Jt.translateZ(-0.02);
Jt.name = "Mantle (1205 km)";
on.add(Jt);
const Kg = new ni(15 - 0.45 - 10.4, 100),
  Qg = new Dt({ color: 10889253, side: _t }),
  Cn = new Ne(Kg, Qg);
Cn.userData.originalColor = 10889253;
Cn.translateZ(-0.03);
Cn.name = "Partial Melt (150 km)";
on.add(Cn);
const e_ = new ni(15 - 0.45 - 10.4 - 1.3, 100),
  t_ = new Dt({ color: 10832932, side: _t }),
  Kt = new Ne(e_, t_);
Kt.userData.originalColor = 10832932;
Kt.translateZ(-0.04);
Kt.name = "Outer Core (90 km)";
on.add(Kt);
const n_ = new ni(15 - 0.45 - 10.4 - 1.3 - 0.78, 100),
  i_ = new Dt({ color: 10780974, side: _t }),
  Qt = new Ne(n_, i_);
Qt.userData.originalColor = 10780974;
Qt.translateZ(-0.05);
Qt.name = "Inner Core (240 km)";
on.add(Qt);
const zc = new Ec(16777215, 1);
zc.position.set(0, 10, -20);
on.add(zc);
Ve.add(on);
on.visible = !1;
const r_ = new Ke(15.008, 100, 100, -Math.PI / 2),
  s_ = new Dt({ map: sn.load("/heatmapHE.png") }),
  ps = new Ne(r_, s_);
ps.visible = !1;
Ve.add(ps);
at.add(ps);
const a_ = new Ke(15.012, 100, 100, -Math.PI / 2),
  o_ = new Dt({ map: sn.load("/heatmapMAS.png") }),
  ms = new Ne(a_, o_);
ms.visible = !1;
Ve.add(ms);
at.add(ms);
var ei = new dt(),
  rt = new dt(),
  lt = 0.1;
for (var pe = 0; pe < pn.length; pe++) {
  var l_ = pn[pe].Year,
    c_ = pn[pe].Day,
    u_ = pn[pe].H,
    d_ = pn[pe].M,
    h_ = pn[pe].S,
    Vl = pn[pe].Lat,
    Hl = pn[pe].Long,
    da = pn[pe].Magnitude,
    Pi = an(Vl, Hl, -90),
    ha = new Ne(new Ke(da / 12, 20, 20), new Ct({ color: 16711680 }));
  ha.position.set(Pi.x, Pi.y, Pi.z),
    (ha.name =
      "Year: " +
      l_ +
      `
Day: ` +
      c_ +
      `
Hour: ` +
      u_ +
      `
Min: ` +
      d_ +
      `
Sec: ` +
      h_ +
      `
Lat: ` +
      Vl +
      `
Lon: ` +
      Hl +
      `
Mag: ` +
      da),
    ei.add(ha);
  var f_ = da / 12,
    fa = new Ne(new qa(f_, 0.01, 100, 100), new Ct({ color: 16711680 }));
  fa.position.set(Pi.x, Pi.y, Pi.z), fa.lookAt(0, 0, 0), rt.add(fa);
}
ei.add(rt);
ei.visible = !1;
at.add(ei);
var Tn = new dt();
for (var pe = 0; pe < ia.length; pe++) {
  var pa = an(ia[pe].Lat, ia[pe].Long, -90),
    Gl = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 16773120 }));
  Gl.position.set(pa.x, pa.y, pa.z), Tn.add(Gl);
}
Tn.visible = !1;
Ve.add(Tn);
at.add(Tn);
var qi = new dt();
for (var pe = 0; pe < ra.length; pe++) {
  var ma = an(ra[pe].Lat, ra[pe].Long, 90),
    Wl = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 26367 }));
  Wl.position.set(ma.x, ma.y, ma.z), qi.add(Wl);
}
qi.visible = !1;
Ve.add(qi);
at.add(qi);
var ji = new dt();
for (var pe = 0; pe < ns.length; pe++) {
  var ga = an(ns[pe].Lat, ns[pe].Long, -90),
    Xl = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 65280 }));
  Xl.position.set(ga.x, ga.y, ga.z), ji.add(Xl);
}
ji.visible = !1;
Ve.add(ji);
at.add(ji);
var yr = new dt();
for (var pe = 0; pe < sa.length; pe++) {
  var _a = an(sa[pe].Lat, sa[pe].Long, -90),
    Yl = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 16711680, transparent: !0, opacity: 0.75 }));
  Yl.position.set(_a.x, _a.y, _a.z), yr.add(Yl);
}
yr.visible = !1;
Ve.add(yr);
at.add(yr);
var br = new dt();
for (var pe = 0; pe < ua.length; pe++) {
  var va = an(ua[pe].Lat, ua[pe].Long, -90),
    ql = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 16776960, transparent: !0, opacity: 0.75 }));
  ql.position.set(va.x, va.y, va.z), br.add(ql);
}
br.visible = !1;
Ve.add(br);
at.add(br);
var Mr = new dt();
for (var pe = 0; pe < aa.length; pe++) {
  var xa = an(aa[pe].Lat, aa[pe].Long, -90),
    jl = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 1044480, transparent: !0, opacity: 0.75 }));
  jl.position.set(xa.x, xa.y, xa.z), Mr.add(jl);
}
Mr.visible = !1;
Ve.add(Mr);
at.add(Mr);
var wr = new dt();
for (var pe = 0; pe < oa.length; pe++) {
  var Sa = an(oa[pe].Lat, oa[pe].Long, -90),
    Zl = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 65513, transparent: !0, opacity: 0.75 }));
  Zl.position.set(Sa.x, Sa.y, Sa.z), wr.add(Zl);
}
wr.visible = !1;
Ve.add(wr);
at.add(wr);
var Lr = new dt();
for (var pe = 0; pe < la.length; pe++) {
  var ya = an(la[pe].Lat, la[pe].Long, -90),
    $l = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 4095, transparent: !0, opacity: 0.75 }));
  $l.position.set(ya.x, ya.y, ya.z), Lr.add($l);
}
Lr.visible = !1;
Ve.add(Lr);
at.add(Lr);
var Er = new dt();
for (var pe = 0; pe < ca.length; pe++) {
  var ba = an(ca[pe].Lat, ca[pe].Long, -90),
    Jl = new Ne(new Ke(0.1, 20, 20), new Ct({ color: 15728895, transparent: !0, opacity: 0.75 }));
  Jl.position.set(ba.x, ba.y, ba.z), Er.add(Jl);
}
Er.visible = !1;
Ve.add(Er);
at.add(Er);
const Ar = new Og({ width: 400 });
let gs = Ar.addFolder("Moonquake Options"),
  si = Ar.addFolder("Moon Options"),
  Zi = Ar.addFolder("Moon Locations"),
  _s = Ar.addFolder("Light Options"),
  vs = Ar.addFolder("Camera Options");
gs.add(ei, "visible").name("Shallow Moonquakes");
gs.add(Tn, "visible").name("Deep Moonquakes");
gs.add(qi, "visible").name("Meteorite Moonquakes");
gs.add(ji, "visible").name("Lunar Moonquakes");
si.add(fs, "visible").name("Topography Map");
si.add(ps, "visible").name("Surface Roughness - Hurst Exponent");
si.add(ms, "visible").name("Surface Roughness - Median Absolute Slope");
si.add(on, "visible")
  .onChange(function () {
    at.visible = !at.visible;
  })
  .name("Show Moon Layers");
var Uc = {
  speed: 0,
  toggleStatus: function () {
    this.speed != 0 && (this.speed = 0);
  }
};
si.add(Uc, "speed", -5, 5, 0.01).name("Rotation Speed");
si.add(Uc, "toggleStatus").name("Stop Rotation");
Zi.add(yr, "visible").name("Lunar Bays");
Zi.add(br, "visible").name("Lunar Craters");
Zi.add(Mr, "visible").name("Lunar Lakes");
Zi.add(wr, "visible").name("Lunar Mountains");
Zi.add(Lr, "visible").name("Lunar Seas");
Zi.add(Er, "visible").name("Lunar Valleys");
_s.add(qn, "intensity", 0, 2).name("Sunlight Intensity");
_s.add(Ka.rotation, "y", 0, 2 * Math.PI, 0.02).name("Sunlight Position");
_s.add(fr, "intensity", 0, 6).name("Universal Intensity");
var p_ = {
  toggleStatus: function () {
    qn.intensity != 0 || fr.intensity != 5 ? ((qn.intensity = 0), (fr.intensity = 5)) : ((qn.intensity = 1), (fr.intensity = 1));
  }
};
_s.add(p_, "toggleStatus").name("Disable Realistic Light");
var Bc = {
  fovValue: 75,
  fovReset: function () {
    this.fovValue = 75;
  }
};
vs.add(Bc, "fovValue", 50, 120, 1).name("Field of View");
vs.add(Bc, "fovReset").name("Reset Camera");
vs.add(Sr, "reset").name("Reset Position");
const ls = document.createElement("div");
ls.className = "moonquakeLabel";
const pr = new Ac(ls);
pr.visible = !1;
Ve.add(pr);
const cs = document.createElement("div");
cs.className = "coreLabel";
const mn = new Ac(cs);
mn.visible = !1;
Ve.add(mn);
function kc() {
  if ((requestAnimationFrame(kc), (at.rotation.y += si.__controllers[2].getValue() / 100), (tn.fov = vs.__controllers[0].getValue()), Sr.update(), tn.updateProjectionMatrix(), Ti.setFromCamera(Ba, tn), at.visible == !1)) {
    var [r] = Ti.intersectObjects(on.children);
    if (r) {
      (nn.domElement.className = "coreHovered"), (mn.visible = !0), (cs.textContent = r.object.name), console.log(r.object);
      const a = new C();
      new Kn().setFromObject(r.object).getSize(a), r.object === $t ? ($t.material.color.set(9934489), mn.position.set(r.object.position.x, r.object.position.y + 10, r.object.position.z)) : $t.material.color.set($t.userData.originalColor), r.object === Jt ? (Jt.material.color.set(13421771), mn.position.set(r.object.position.x, r.object.position.y + 8, r.object.position.z)) : Jt.material.color.set(Jt.userData.originalColor), r.object === Cn ? (Cn.material.color.set(15679283), mn.position.set(r.object.position.x, r.object.position.y + 7, r.object.position.z)) : Cn.material.color.set(Cn.userData.originalColor), r.object === Kt ? (Kt.material.color.set(15954721), mn.position.set(r.object.position.x, r.object.position.y + 6, r.object.position.z)) : Kt.material.color.set(Kt.userData.originalColor), r.object === Qt ? (Qt.material.color.set(16040483), mn.position.set(r.object.position.x, r.object.position.y + 5, r.object.position.z)) : Qt.material.color.set(Qt.userData.originalColor);
    } else $t.material.color.set($t.userData.originalColor), Jt.material.color.set(Jt.userData.originalColor), Kt.material.color.set(Kt.userData.originalColor), Qt.material.color.set(Qt.userData.originalColor), (nn.domElement.className = ""), (mn.visible = !1), (cs.textContent = "");
  }
  var e, t, n, i;
  ei.visible == !0 ? ([e] = Ti.intersectObjects(ei.children)) : Tn.visible == !0 ? ([t] = Ti.intersectObjects(Tn.children)) : Tn.visible == !0 ? ([n] = Ti.intersectObjects(qi.children)) : ns.visible == !0 && ([i] = Ti.intersectObjects(ji.children));
  const s = e || t || n || i;
  if (s) {
    (nn.domElement.className = "moonquakesHovered"), (pr.visible = !0), (ls.textContent = s.object.name), console.log(s.object);
    const a = new C();
    new Kn().setFromObject(s.object).getSize(a), pr.position.set(s.object.position.x, s.object.position.y + 2, s.object.position.z);
  } else (nn.domElement.className = ""), (pr.visible = !1), (ls.textContent = "");
  for (var o = 0; o < rt.children.length; o++) rt.children[o].scale.setScalar(lt), lt <= 1 ? rt.children[o].material.color.set(14024704) : lt <= 1.2 ? rt.children[o].material.color.set(14028800) : lt <= 1.4 ? rt.children[o].material.color.set(14032896) : lt <= 1.6 ? rt.children[o].material.color.set(14036992) : lt <= 1.8 ? rt.children[o].material.color.set(14041088) : lt <= 2 ? rt.children[o].material.color.set(14045184) : lt <= 2.2 ? rt.children[o].material.color.set(14049280) : lt <= 2.4 ? rt.children[o].material.color.set(14054912) : lt <= 2.6 ? rt.children[o].material.color.set(14059008) : lt <= 2.8 ? rt.children[o].material.color.set(14063104) : lt <= 3 ? rt.children[o].material.color.set(14067200) : lt <= 3.2 ? rt.children[o].material.color.set(14071296) : lt <= 3.4 ? rt.children[o].material.color.set(14075392) : rt.children[o].material.color.set(14079488), (lt += 5e-4), lt >= 4.3 && (lt = 0.1);
  nn.render(Ve, tn), Yi.render(Ve, tn);
}
kc();
