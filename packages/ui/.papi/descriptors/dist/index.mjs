// .papi/descriptors/src/dot.ts
var toBinary = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues = import("./descriptors-XFVVROTT.mjs").then((module) => module["Dot"]);
var metadataTypes = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary("default" in module ? module.default : module)
);
var asset = {};
var _allDescriptors = { descriptors: descriptorValues, metadataTypes, asset };
var dot_default = _allDescriptors;

// .papi/descriptors/src/ksm.ts
var toBinary2 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues2 = import("./descriptors-XFVVROTT.mjs").then((module) => module["Ksm"]);
var metadataTypes2 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary2("default" in module ? module.default : module)
);
var asset2 = {};
var _allDescriptors2 = { descriptors: descriptorValues2, metadataTypes: metadataTypes2, asset: asset2 };
var ksm_default = _allDescriptors2;

// .papi/descriptors/src/ksmAssetHub.ts
var toBinary3 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues3 = import("./descriptors-XFVVROTT.mjs").then((module) => module["KsmAssetHub"]);
var metadataTypes3 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary3("default" in module ? module.default : module)
);
var asset3 = {};
var _allDescriptors3 = { descriptors: descriptorValues3, metadataTypes: metadataTypes3, asset: asset3 };
var ksmAssetHub_default = _allDescriptors3;

// .papi/descriptors/src/ksmPpl.ts
var toBinary4 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues4 = import("./descriptors-XFVVROTT.mjs").then((module) => module["KsmPpl"]);
var metadataTypes4 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary4("default" in module ? module.default : module)
);
var asset4 = {};
var _allDescriptors4 = { descriptors: descriptorValues4, metadataTypes: metadataTypes4, asset: asset4 };
var ksmPpl_default = _allDescriptors4;

// .papi/descriptors/src/dotPpl.ts
var toBinary5 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues5 = import("./descriptors-XFVVROTT.mjs").then((module) => module["DotPpl"]);
var metadataTypes5 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary5("default" in module ? module.default : module)
);
var asset5 = {};
var _allDescriptors5 = { descriptors: descriptorValues5, metadataTypes: metadataTypes5, asset: asset5 };
var dotPpl_default = _allDescriptors5;

// .papi/descriptors/src/dotAssetHub.ts
var toBinary6 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues6 = import("./descriptors-XFVVROTT.mjs").then((module) => module["DotAssetHub"]);
var metadataTypes6 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary6("default" in module ? module.default : module)
);
var asset6 = {};
var _allDescriptors6 = { descriptors: descriptorValues6, metadataTypes: metadataTypes6, asset: asset6 };
var dotAssetHub_default = _allDescriptors6;

// .papi/descriptors/src/rococo.ts
var toBinary7 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues7 = import("./descriptors-XFVVROTT.mjs").then((module) => module["Rococo"]);
var metadataTypes7 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary7("default" in module ? module.default : module)
);
var asset7 = {};
var _allDescriptors7 = { descriptors: descriptorValues7, metadataTypes: metadataTypes7, asset: asset7 };
var rococo_default = _allDescriptors7;

// .papi/descriptors/src/rococoAssetHub.ts
var toBinary8 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues8 = import("./descriptors-XFVVROTT.mjs").then((module) => module["RococoAssetHub"]);
var metadataTypes8 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary8("default" in module ? module.default : module)
);
var asset8 = {};
var _allDescriptors8 = { descriptors: descriptorValues8, metadataTypes: metadataTypes8, asset: asset8 };
var rococoAssetHub_default = _allDescriptors8;

// .papi/descriptors/src/rococoPpl.ts
var toBinary9 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues9 = import("./descriptors-XFVVROTT.mjs").then((module) => module["RococoPpl"]);
var metadataTypes9 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary9("default" in module ? module.default : module)
);
var asset9 = {};
var _allDescriptors9 = { descriptors: descriptorValues9, metadataTypes: metadataTypes9, asset: asset9 };
var rococoPpl_default = _allDescriptors9;

// .papi/descriptors/src/bifrostDot.ts
var toBinary10 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues10 = import("./descriptors-XFVVROTT.mjs").then((module) => module["BifrostDot"]);
var metadataTypes10 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary10("default" in module ? module.default : module)
);
var asset10 = {};
var _allDescriptors10 = { descriptors: descriptorValues10, metadataTypes: metadataTypes10, asset: asset10 };
var bifrostDot_default = _allDescriptors10;

// .papi/descriptors/src/hydration.ts
var toBinary11 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues11 = import("./descriptors-XFVVROTT.mjs").then((module) => module["Hydration"]);
var metadataTypes11 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary11("default" in module ? module.default : module)
);
var asset11 = {};
var _allDescriptors11 = { descriptors: descriptorValues11, metadataTypes: metadataTypes11, asset: asset11 };
var hydration_default = _allDescriptors11;

// .papi/descriptors/src/khala.ts
var toBinary12 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues12 = import("./descriptors-XFVVROTT.mjs").then((module) => module["Khala"]);
var metadataTypes12 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary12("default" in module ? module.default : module)
);
var asset12 = {};
var _allDescriptors12 = { descriptors: descriptorValues12, metadataTypes: metadataTypes12, asset: asset12 };
var khala_default = _allDescriptors12;

// .papi/descriptors/src/phala.ts
var toBinary13 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues13 = import("./descriptors-XFVVROTT.mjs").then((module) => module["Phala"]);
var metadataTypes13 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary13("default" in module ? module.default : module)
);
var asset13 = {};
var _allDescriptors13 = { descriptors: descriptorValues13, metadataTypes: metadataTypes13, asset: asset13 };
var phala_default = _allDescriptors13;

// .papi/descriptors/src/paseo.ts
var toBinary14 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues14 = import("./descriptors-XFVVROTT.mjs").then((module) => module["Paseo"]);
var metadataTypes14 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary14("default" in module ? module.default : module)
);
var asset14 = {};
var _allDescriptors14 = { descriptors: descriptorValues14, metadataTypes: metadataTypes14, asset: asset14 };
var paseo_default = _allDescriptors14;

// .papi/descriptors/src/acala.ts
var toBinary15 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues15 = import("./descriptors-XFVVROTT.mjs").then((module) => module["Acala"]);
var metadataTypes15 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary15("default" in module ? module.default : module)
);
var asset15 = {};
var _allDescriptors15 = { descriptors: descriptorValues15, metadataTypes: metadataTypes15, asset: asset15 };
var acala_default = _allDescriptors15;

// .papi/descriptors/src/pasPpl.ts
var toBinary16 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues16 = import("./descriptors-XFVVROTT.mjs").then((module) => module["PasPpl"]);
var metadataTypes16 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary16("default" in module ? module.default : module)
);
var asset16 = {};
var _allDescriptors16 = { descriptors: descriptorValues16, metadataTypes: metadataTypes16, asset: asset16 };
var pasPpl_default = _allDescriptors16;

// .papi/descriptors/src/wesPpl.ts
var toBinary17 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues17 = import("./descriptors-XFVVROTT.mjs").then((module) => module["WesPpl"]);
var metadataTypes17 = import("./metadataTypes-BAH3J3UD.mjs").then(
  (module) => toBinary17("default" in module ? module.default : module)
);
var asset17 = {};
var _allDescriptors17 = { descriptors: descriptorValues17, metadataTypes: metadataTypes17, asset: asset17 };
var wesPpl_default = _allDescriptors17;

// .papi/descriptors/src/common-types.ts
import { _Enum } from "polkadot-api";
var DigestItem = _Enum;
var Phase = _Enum;
var DispatchClass = _Enum;
var BagsListListListError = _Enum;
var TokenError = _Enum;
var ArithmeticError = _Enum;
var TransactionalError = _Enum;
var PreimageEvent = _Enum;
var IndicesEvent = _Enum;
var BalanceStatus = _Enum;
var TransactionPaymentEvent = _Enum;
var StakingEvent = _Enum;
var StakingRewardDestination = _Enum;
var StakingForcing = _Enum;
var OffencesEvent = _Enum;
var SessionEvent = _Enum;
var GrandpaEvent = _Enum;
var VersionedLocatableAsset = _Enum;
var XcmV3Junctions = _Enum;
var XcmV3Junction = _Enum;
var XcmV3JunctionNetworkId = _Enum;
var XcmV3JunctionBodyId = _Enum;
var XcmV2JunctionBodyPart = _Enum;
var XcmV3MultiassetAssetId = _Enum;
var XcmVersionedLocation = _Enum;
var XcmV2MultilocationJunctions = _Enum;
var XcmV2Junction = _Enum;
var XcmV2NetworkId = _Enum;
var XcmV2BodyId = _Enum;
var ConvictionVotingEvent = _Enum;
var PreimagesBounded = _Enum;
var CommonClaimsEvent = _Enum;
var VestingEvent = _Enum;
var BountiesEvent = _Enum;
var ChildBountiesEvent = _Enum;
var ElectionProviderMultiPhaseEvent = _Enum;
var ElectionProviderMultiPhaseElectionCompute = _Enum;
var ElectionProviderMultiPhasePhase = _Enum;
var BagsListEvent = _Enum;
var NominationPoolsEvent = _Enum;
var NominationPoolsPoolState = _Enum;
var NominationPoolsCommissionClaimPermission = _Enum;
var ParachainsInclusionEvent = _Enum;
var ParachainsParasEvent = _Enum;
var ParachainsHrmpEvent = _Enum;
var ParachainsDisputesEvent = _Enum;
var ParachainsDisputeLocation = _Enum;
var ParachainsDisputeResult = _Enum;
var CommonParasRegistrarEvent = _Enum;
var CommonSlotsEvent = _Enum;
var CommonAuctionsEvent = _Enum;
var PolkadotRuntimeParachainsCoretimeEvent = _Enum;
var XcmV4TraitsOutcome = _Enum;
var XcmV3TraitsError = _Enum;
var XcmV4Instruction = _Enum;
var XcmV3MultiassetFungibility = _Enum;
var XcmV3MultiassetAssetInstance = _Enum;
var XcmV4Response = _Enum;
var XcmV3MaybeErrorCode = _Enum;
var XcmV2OriginKind = _Enum;
var XcmV4AssetAssetFilter = _Enum;
var XcmV4AssetWildAsset = _Enum;
var XcmV2MultiassetWildFungibility = _Enum;
var XcmV3WeightLimit = _Enum;
var XcmVersionedAssets = _Enum;
var XcmV2MultiassetAssetId = _Enum;
var XcmV2MultiassetFungibility = _Enum;
var XcmV2MultiassetAssetInstance = _Enum;
var ParachainsInclusionAggregateMessageOrigin = _Enum;
var ParachainsInclusionUmpQueueId = _Enum;
var AssetRateEvent = _Enum;
var PolkadotRuntimeOriginCaller = _Enum;
var DispatchRawOrigin = _Enum;
var GovernanceOrigin = _Enum;
var ParachainsOrigin = _Enum;
var XcmPalletOrigin = _Enum;
var PreimageOldRequestStatus = _Enum;
var PreimageRequestStatus = _Enum;
var BabeDigestsNextConfigDescriptor = _Enum;
var BabeAllowedSlots = _Enum;
var BabeDigestsPreDigest = _Enum;
var BalancesTypesReasons = _Enum;
var PreimagePalletHoldReason = _Enum;
var WestendRuntimeRuntimeFreezeReason = _Enum;
var NominationPoolsPalletFreezeReason = _Enum;
var TransactionPaymentReleases = _Enum;
var GrandpaStoredState = _Enum;
var TreasuryPaymentState = _Enum;
var ConvictionVotingVoteVoting = _Enum;
var ConvictionVotingVoteAccountVote = _Enum;
var VotingConviction = _Enum;
var TraitsScheduleDispatchTime = _Enum;
var ClaimsStatementKind = _Enum;
var Version = _Enum;
var BountiesBountyStatus = _Enum;
var ChildBountyStatus = _Enum;
var NominationPoolsClaimPermission = _Enum;
var PolkadotPrimitivesV6ExecutorParamsExecutorParam = _Enum;
var PolkadotPrimitivesV6PvfPrepKind = _Enum;
var PvfExecKind = _Enum;
var ValidityAttestation = _Enum;
var PolkadotPrimitivesV6DisputeStatement = _Enum;
var PolkadotPrimitivesV6ValidDisputeStatementKind = _Enum;
var InvalidDisputeStatementKind = _Enum;
var PolkadotRuntimeParachainsSchedulerPalletCoreOccupied = _Enum;
var PolkadotRuntimeParachainsSchedulerCommonAssignment = _Enum;
var ParachainsParasParaLifecycle = _Enum;
var UpgradeGoAhead = _Enum;
var UpgradeRestriction = _Enum;
var SlashingOffenceKind = _Enum;
var BrokerCoretimeInterfaceCoreAssignment = _Enum;
var MultiSigner = _Enum;
var CommonCrowdloanLastContribution = _Enum;
var XcmPalletQueryStatus = _Enum;
var XcmVersionedResponse = _Enum;
var XcmV2Response = _Enum;
var XcmV2TraitsError = _Enum;
var XcmV3Response = _Enum;
var XcmPalletVersionMigrationStage = _Enum;
var XcmVersionedAssetId = _Enum;
var ReferendaTypesCurve = _Enum;
var MultiAddress = _Enum;
var BalancesAdjustmentDirection = _Enum;
var StakingPalletConfigOpBig = _Enum;
var StakingPalletConfigOp = _Enum;
var GrandpaEquivocation = _Enum;
var NominationPoolsBondExtra = _Enum;
var NominationPoolsConfigOp = _Enum;
var MultiSignature = _Enum;
var XcmVersionedXcm = _Enum;
var XcmV2Instruction = _Enum;
var XcmV2MultiAssetFilter = _Enum;
var XcmV2MultiassetWildMultiAsset = _Enum;
var XcmV2WeightLimit = _Enum;
var XcmV3Instruction = _Enum;
var XcmV3MultiassetMultiAssetFilter = _Enum;
var XcmV3MultiassetWildMultiAsset = _Enum;
var TransactionValidityError = _Enum;
var TransactionValidityInvalidTransaction = _Enum;
var TransactionValidityUnknownTransaction = _Enum;
var TransactionValidityTransactionSource = _Enum;
var CoreState = _Enum;
var OccupiedCoreAssumption = _Enum;
var CandidateEvent = _Enum;
var MmrPrimitivesError = _Enum;
var RecoveryEvent = _Enum;
var IdentityJudgement = _Enum;
var IdentityData = _Enum;
var PolkadotRuntimeCommonIdentityMigratorEvent = _Enum;
var PolkadotRuntimeCommonAssignedSlotsEvent = _Enum;
var RootTestingEvent = _Enum;
var ReferendaTypesReferendumInfo = _Enum;
var WestendRuntimeOriginCaller = _Enum;
var WestendRuntimeGovernanceOriginsPalletCustomOriginsOrigin = _Enum;
var PolkadotRuntimeCommonAssignedSlotsSlotLeasePeriodStart = _Enum;
var WestendRuntimeRuntimeHoldReason = _Enum;
var ProcessMessageError = _Enum;
var AssetsEvent = _Enum;
export {
  ArithmeticError,
  AssetRateEvent,
  AssetsEvent,
  BabeAllowedSlots,
  BabeDigestsNextConfigDescriptor,
  BabeDigestsPreDigest,
  BagsListEvent,
  BagsListListListError,
  BalanceStatus,
  BalancesAdjustmentDirection,
  BalancesTypesReasons,
  BountiesBountyStatus,
  BountiesEvent,
  BrokerCoretimeInterfaceCoreAssignment,
  CandidateEvent,
  ChildBountiesEvent,
  ChildBountyStatus,
  ClaimsStatementKind,
  CommonAuctionsEvent,
  CommonClaimsEvent,
  CommonCrowdloanLastContribution,
  CommonParasRegistrarEvent,
  CommonSlotsEvent,
  ConvictionVotingEvent,
  ConvictionVotingVoteAccountVote,
  ConvictionVotingVoteVoting,
  CoreState,
  DigestItem,
  DispatchClass,
  DispatchRawOrigin,
  ElectionProviderMultiPhaseElectionCompute,
  ElectionProviderMultiPhaseEvent,
  ElectionProviderMultiPhasePhase,
  GovernanceOrigin,
  GrandpaEquivocation,
  GrandpaEvent,
  GrandpaStoredState,
  IdentityData,
  IdentityJudgement,
  IndicesEvent,
  InvalidDisputeStatementKind,
  MmrPrimitivesError,
  MultiAddress,
  MultiSignature,
  MultiSigner,
  NominationPoolsBondExtra,
  NominationPoolsClaimPermission,
  NominationPoolsCommissionClaimPermission,
  NominationPoolsConfigOp,
  NominationPoolsEvent,
  NominationPoolsPalletFreezeReason,
  NominationPoolsPoolState,
  OccupiedCoreAssumption,
  OffencesEvent,
  ParachainsDisputeLocation,
  ParachainsDisputeResult,
  ParachainsDisputesEvent,
  ParachainsHrmpEvent,
  ParachainsInclusionAggregateMessageOrigin,
  ParachainsInclusionEvent,
  ParachainsInclusionUmpQueueId,
  ParachainsOrigin,
  ParachainsParasEvent,
  ParachainsParasParaLifecycle,
  Phase,
  PolkadotPrimitivesV6DisputeStatement,
  PolkadotPrimitivesV6ExecutorParamsExecutorParam,
  PolkadotPrimitivesV6PvfPrepKind,
  PolkadotPrimitivesV6ValidDisputeStatementKind,
  PolkadotRuntimeCommonAssignedSlotsEvent,
  PolkadotRuntimeCommonAssignedSlotsSlotLeasePeriodStart,
  PolkadotRuntimeCommonIdentityMigratorEvent,
  PolkadotRuntimeOriginCaller,
  PolkadotRuntimeParachainsCoretimeEvent,
  PolkadotRuntimeParachainsSchedulerCommonAssignment,
  PolkadotRuntimeParachainsSchedulerPalletCoreOccupied,
  PreimageEvent,
  PreimageOldRequestStatus,
  PreimagePalletHoldReason,
  PreimageRequestStatus,
  PreimagesBounded,
  ProcessMessageError,
  PvfExecKind,
  RecoveryEvent,
  ReferendaTypesCurve,
  ReferendaTypesReferendumInfo,
  RootTestingEvent,
  SessionEvent,
  SlashingOffenceKind,
  StakingEvent,
  StakingForcing,
  StakingPalletConfigOp,
  StakingPalletConfigOpBig,
  StakingRewardDestination,
  TokenError,
  TraitsScheduleDispatchTime,
  TransactionPaymentEvent,
  TransactionPaymentReleases,
  TransactionValidityError,
  TransactionValidityInvalidTransaction,
  TransactionValidityTransactionSource,
  TransactionValidityUnknownTransaction,
  TransactionalError,
  TreasuryPaymentState,
  UpgradeGoAhead,
  UpgradeRestriction,
  ValidityAttestation,
  Version,
  VersionedLocatableAsset,
  VestingEvent,
  VotingConviction,
  WestendRuntimeGovernanceOriginsPalletCustomOriginsOrigin,
  WestendRuntimeOriginCaller,
  WestendRuntimeRuntimeFreezeReason,
  WestendRuntimeRuntimeHoldReason,
  XcmPalletOrigin,
  XcmPalletQueryStatus,
  XcmPalletVersionMigrationStage,
  XcmV2BodyId,
  XcmV2Instruction,
  XcmV2Junction,
  XcmV2JunctionBodyPart,
  XcmV2MultiAssetFilter,
  XcmV2MultiassetAssetId,
  XcmV2MultiassetAssetInstance,
  XcmV2MultiassetFungibility,
  XcmV2MultiassetWildFungibility,
  XcmV2MultiassetWildMultiAsset,
  XcmV2MultilocationJunctions,
  XcmV2NetworkId,
  XcmV2OriginKind,
  XcmV2Response,
  XcmV2TraitsError,
  XcmV2WeightLimit,
  XcmV3Instruction,
  XcmV3Junction,
  XcmV3JunctionBodyId,
  XcmV3JunctionNetworkId,
  XcmV3Junctions,
  XcmV3MaybeErrorCode,
  XcmV3MultiassetAssetId,
  XcmV3MultiassetAssetInstance,
  XcmV3MultiassetFungibility,
  XcmV3MultiassetMultiAssetFilter,
  XcmV3MultiassetWildMultiAsset,
  XcmV3Response,
  XcmV3TraitsError,
  XcmV3WeightLimit,
  XcmV4AssetAssetFilter,
  XcmV4AssetWildAsset,
  XcmV4Instruction,
  XcmV4Response,
  XcmV4TraitsOutcome,
  XcmVersionedAssetId,
  XcmVersionedAssets,
  XcmVersionedLocation,
  XcmVersionedResponse,
  XcmVersionedXcm,
  acala_default as acala,
  bifrostDot_default as bifrostDot,
  dot_default as dot,
  dotAssetHub_default as dotAssetHub,
  dotPpl_default as dotPpl,
  hydration_default as hydration,
  khala_default as khala,
  ksm_default as ksm,
  ksmAssetHub_default as ksmAssetHub,
  ksmPpl_default as ksmPpl,
  pasPpl_default as pasPpl,
  paseo_default as paseo,
  phala_default as phala,
  rococo_default as rococo,
  rococoAssetHub_default as rococoAssetHub,
  rococoPpl_default as rococoPpl,
  wesPpl_default as wesPpl
};
