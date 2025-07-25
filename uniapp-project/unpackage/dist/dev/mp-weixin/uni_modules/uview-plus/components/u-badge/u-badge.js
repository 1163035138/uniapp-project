"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uBadge_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "u-badge",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_components_uBadge_props.props, uni_modules_uviewPlus_libs_mixin_mixin.mixin],
  computed: {
    // 是否将badge中心与父组件右上角重合
    boxStyle() {
      let style = new UTSJSONObject({});
      return style;
    },
    // 整个组件的样式
    badgeStyle() {
      const style = new UTSJSONObject({});
      if (this.color) {
        style.color = this.color;
      }
      if (this.bgColor && !this.inverted) {
        style.backgroundColor = this.bgColor;
      }
      if (this.absolute) {
        style.position = "absolute";
        if (this.offset.length) {
          const top_1 = this.offset[0];
          const right = this.offset[1] || top_1;
          style.top = uni_modules_uviewPlus_libs_function_index.addUnit(top_1);
          style.right = uni_modules_uviewPlus_libs_function_index.addUnit(right);
        }
      }
      return style;
    },
    showValue() {
      switch (this.numberType) {
        case "overflow":
          return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
        case "ellipsis":
          return Number(this.value) > Number(this.max) ? "..." : this.value;
        case "limit":
          return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;
        default:
          return Number(this.value);
      }
    }
  },
  methods: {
    addStyle: uni_modules_uviewPlus_libs_function_index.addStyle
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot)
  }, _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? {
    b: common_vendor.t(_ctx.isDot ? "" : $options.showValue),
    c: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
    d: common_vendor.n(_ctx.isDot ? "u-badge--dot" : "u-badge--not-dot"),
    e: common_vendor.n(_ctx.inverted && "u-badge--inverted"),
    f: common_vendor.n(_ctx.shape === "horn" && "u-badge--horn"),
    g: common_vendor.n(`u-badge--${_ctx.type}${_ctx.inverted ? "--inverted" : ""}`),
    h: common_vendor.s($options.addStyle(_ctx.customStyle)),
    i: common_vendor.s($options.badgeStyle)
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-06cca9b7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-badge/u-badge.js.map
