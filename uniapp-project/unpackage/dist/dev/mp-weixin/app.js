"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const uni_modules_uviewPlus_index = require("./uni_modules/uview-plus/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/buy/index.js";
  "./pages/explore/index.js";
}
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.uvue:5", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.uvue:8", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.uvue:11", "App Hide");
  },
  onExit: function() {
    common_vendor.index.__f__("log", "at App.uvue:32", "App Exit");
  }
}));
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(uni_modules_uviewPlus_index.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
