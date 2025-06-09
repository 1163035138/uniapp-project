"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_index_api = require("../api.js");
if (!Array) {
  const _easycom_up_search_1 = common_vendor.resolveComponent("up-search");
  const _easycom_up_tabs_1 = common_vendor.resolveComponent("up-tabs");
  const _easycom_up_sticky_1 = common_vendor.resolveComponent("up-sticky");
  (_easycom_up_search_1 + _easycom_up_tabs_1 + _easycom_up_sticky_1)();
}
const _easycom_up_search = () => "../../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_tabs = () => "../../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_up_sticky = () => "../../../uni_modules/uview-plus/components/u-sticky/u-sticky.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_tabs + _easycom_up_sticky)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const list1 = common_vendor.reactive([]);
    const fetchData = () => {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        const res = yield pages_index_api.getHomeData();
        if ((res === null || res === void 0 ? null : res.errorCode) === 200) {
          const formattedData = res.data.map((item = null) => {
            return new UTSJSONObject({ name: item.title });
          });
          list1.push(...formattedData);
        }
      });
    };
    common_vendor.onMounted(fetchData);
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.o(($event = null) => {
          return common_vendor.isRef(searchValue) ? searchValue.value = $event : null;
        }),
        b: common_vendor.p(new UTSJSONObject({
          ["show-action"]: false,
          shape: "square",
          modelValue: common_vendor.unref(searchValue)
        })),
        c: common_vendor.unref(list1).length
      }), common_vendor.unref(list1).length ? new UTSJSONObject({
        d: common_vendor.p(new UTSJSONObject({
          list: common_vendor.unref(list1),
          ["active-color"]: "#0AB7B8",
          itemStyle: ""
        }))
      }) : new UTSJSONObject({}), new UTSJSONObject({
        e: common_vendor.p(new UTSJSONObject({
          bgColor: "#fff"
        })),
        f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      }));
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/components/home.js.map
