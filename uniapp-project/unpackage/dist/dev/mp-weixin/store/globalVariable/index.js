"use strict";
const common_vendor = require("../../common/vendor.js");
const locolhost = "http://localhost:3000";
const api = common_vendor.ref(locolhost);
const isIos = () => {
  let end = "";
  const res = common_vendor.index.getDeviceInfo();
  const res_str = UTS.JSON.stringify(res);
  const res_obj = UTS.JSON.parseObject(res_str);
  const res_map = res_obj.toMap();
  let keys = [];
  res_map.forEach((_ = null, key) => {
    keys.push(key);
  });
  keys.sort().forEach((key) => {
    const value = res[key];
    if (value != null) {
      const item = new UTSJSONObject({
        label: key,
        value: "" + (typeof value == "object" ? UTS.JSON.stringify(value) : value)
      });
      if (key === "osName") {
        end = item.value;
      }
    }
  });
  return end;
};
const mainHomeHeight = () => {
  common_vendor.index.__f__("log", "at store/globalVariable/index.uts:32", isIos(), "isIos()");
  if (isIos() === "ios") {
    return `calc(100vh - 84px) `;
  } else {
    return `calc(100vh - 50px) `;
  }
};
exports.api = api;
exports.mainHomeHeight = mainHomeHeight;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/globalVariable/index.js.map
