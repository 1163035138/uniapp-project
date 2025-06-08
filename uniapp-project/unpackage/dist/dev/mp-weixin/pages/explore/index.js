"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(Explore) + common_vendor.unref(Tabbar))();
}
const Tabbar = () => "../../components/tabbar/index.js";
const Explore = () => "./components/explore.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject({
  __name: "index",
  setup(__props) {
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      };
      return __returned__;
    };
  }
}));
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/explore/index.js.map
