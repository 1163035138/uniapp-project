"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_datetime_picker_1 = common_vendor.resolveComponent("up-datetime-picker");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_up_datetime_picker_1 + _easycom_up_button_1)();
}
const _easycom_up_datetime_picker = () => "../../uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.js";
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_datetime_picker + _easycom_up_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject({
  __name: "index",
  setup(__props) {
    const show = common_vendor.ref(false);
    const value1 = common_vendor.ref(Date.now());
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_vendor.o(($event = null) => {
          return value1.value = $event;
        }),
        b: common_vendor.p({
          hasInput: true,
          show: show.value,
          mode: "datetime",
          modelValue: value1.value
        }),
        c: common_vendor.o(($event = null) => {
          return show.value = true;
        }),
        d: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      };
      return __returned__;
    };
  }
}));
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
