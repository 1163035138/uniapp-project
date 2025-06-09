"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home_index = require("../../store/home/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_tabbar_item_1 = common_vendor.resolveComponent("up-tabbar-item");
  const _easycom_up_tabbar_1 = common_vendor.resolveComponent("up-tabbar");
  (_easycom_up_icon_1 + _easycom_up_tabbar_item_1 + _easycom_up_tabbar_1)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_up_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_tabbar_item + _easycom_up_tabbar)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject({
  __name: "index",
  setup(__props) {
    const clickTab = (tab = null) => {
      switch (tab) {
        case "index":
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
          break;
        case "buy":
          common_vendor.index.switchTab({
            url: "/pages/buy/index"
          });
          break;
        case "explore":
          common_vendor.index.switchTab({
            url: "/pages/explore/index"
          });
          break;
        case "my":
          common_vendor.index.switchTab({
            url: "/pages/my/index"
          });
          break;
      }
    };
    common_vendor.onShow(() => {
      common_vendor.index.__f__("log", "at components/tabbar/index.uvue:70", "App Show111");
      common_vendor.index.hideTabBar(new UTSJSONObject({
        animation: false
      }));
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.p({
          name: "gift-fill",
          size: "20"
        }),
        b: common_vendor.p({
          name: "gift",
          size: "20"
        }),
        c: common_vendor.o(($event = null) => {
          return clickTab("index");
        }),
        d: common_vendor.p({
          text: "萌盒"
        }),
        e: common_vendor.p({
          name: "bag-fill",
          size: "20"
        }),
        f: common_vendor.p({
          name: "bag",
          size: "20"
        }),
        g: common_vendor.o(($event = null) => {
          return clickTab("buy");
        }),
        h: common_vendor.p({
          text: "购买"
        }),
        i: common_vendor.p({
          name: "camera-fill",
          size: "20"
        }),
        j: common_vendor.p({
          name: "camera",
          size: "20"
        }),
        k: common_vendor.o(($event = null) => {
          return clickTab("explore");
        }),
        l: common_vendor.p({
          text: "探索"
        }),
        m: common_vendor.p({
          name: "account-fill",
          size: "20"
        }),
        n: common_vendor.p({
          name: "account",
          size: "20"
        }),
        o: common_vendor.o(($event = null) => {
          return clickTab("my");
        }),
        p: common_vendor.p({
          text: "我"
        }),
        q: common_vendor.o(common_vendor.unref(store_home_index.setActiveTab)),
        r: common_vendor.p({
          value: common_vendor.unref(store_home_index.state).activeTab,
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true,
          inactiveColor: "#1A1A1A",
          activeColor: "#1A1A1A"
        }),
        s: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      };
      return __returned__;
    };
  }
}));
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tabbar/index.js.map
