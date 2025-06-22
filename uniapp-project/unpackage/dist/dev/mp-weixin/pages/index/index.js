"use strict";
const common_vendor = require("../../common/vendor.js");
const store_globalVariable_index = require("../../store/globalVariable/index.js");
if (!Math) {
  (common_vendor.unref(Home) + common_vendor.unref(Tabbar))();
}
const Tabbar = () => "../../components/tabbar/index.js";
const Home = () => "./components/home.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject({
  __name: "index",
  setup(__props) {
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        b: common_vendor.unref(store_globalVariable_index.mainHomeHeight)()
      };
      return __returned__;
    };
  }
}));
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
