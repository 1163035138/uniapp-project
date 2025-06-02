"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uPopup_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "u-popup",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uPopup_props.props],
  data() {
    return {
      overlayDuration: this.duration + 50
    };
  },
  watch: {
    show(newValue = null, oldValue = null) {
      if (newValue === true) {
        const children = this.$children;
        this.retryComputedComponentRect(children);
      }
    }
  },
  computed: {
    transitionStyle() {
      const style = new UTSJSONObject({
        zIndex: this.zIndex,
        position: "fixed",
        display: "flex"
      });
      style[this.mode] = 0;
      if (this.mode === "left") {
        return uni_modules_uviewPlus_libs_function_index.deepMerge(style, new UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (this.mode === "right") {
        return uni_modules_uviewPlus_libs_function_index.deepMerge(style, new UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (this.mode === "top") {
        return uni_modules_uviewPlus_libs_function_index.deepMerge(style, new UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (this.mode === "bottom") {
        return uni_modules_uviewPlus_libs_function_index.deepMerge(style, new UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (this.mode === "center") {
        return uni_modules_uviewPlus_libs_function_index.deepMerge(style, new UTSJSONObject({
          alignItems: "center",
          "justify-content": "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }));
      }
    },
    contentStyle() {
      const style = new UTSJSONObject(
        {}
        // 通过设备信息的safeAreaInsets值来判断是否需要预留顶部状态栏和底部安全局的位置
        // 不使用css方案，是因为nvue不支持css的iPhoneX安全区查询属性
      );
      uni_modules_uviewPlus_libs_function_index.getWindowInfo().safeAreaInsets;
      if (this.mode !== "center") {
        style.flex = 1;
      }
      if (this.bgColor) {
        style.backgroundColor = this.bgColor;
      }
      if (this.round) {
        const value = uni_modules_uviewPlus_libs_function_index.addUnit(this.round);
        if (this.mode === "top") {
          style.borderBottomLeftRadius = value;
          style.borderBottomRightRadius = value;
        } else if (this.mode === "bottom") {
          style.borderTopLeftRadius = value;
          style.borderTopRightRadius = value;
        } else if (this.mode === "center") {
          style.borderRadius = value;
        }
      }
      return uni_modules_uviewPlus_libs_function_index.deepMerge(style, uni_modules_uviewPlus_libs_function_index.addStyle(this.customStyle));
    },
    position() {
      if (this.mode === "center") {
        return this.zoom ? "fade-zoom" : "fade";
      }
      if (this.mode === "left") {
        return "slide-left";
      }
      if (this.mode === "right") {
        return "slide-right";
      }
      if (this.mode === "bottom") {
        return "slide-up";
      }
      if (this.mode === "top") {
        return "slide-down";
      }
    }
  },
  emits: ["open", "close", "click", "update:show"],
  methods: {
    // 点击遮罩
    overlayClick() {
      if (this.closeOnClickOverlay) {
        this.$emit("update:show", false);
        this.$emit("close");
      }
    },
    open(e = null) {
      this.$emit("update:show", true);
    },
    close(e = null) {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    afterEnter() {
      this.$emit("open");
    },
    clickHandler() {
      if (this.mode === "center") {
        this.overlayClick();
      }
      this.$emit("click");
    },
    retryComputedComponentRect(children = null) {
      const names = [
        "u-calendar-month",
        "u-album",
        "u-collapse-item",
        "u-dropdown",
        "u-index-item",
        "u-index-list",
        "u-line-progress",
        "u-list-item",
        "u-rate",
        "u-read-more",
        "u-row",
        "u-row-notice",
        "u-scroll-list",
        "u-skeleton",
        "u-slider",
        "u-steps-item",
        "u-sticky",
        "u-subsection",
        "u-swipe-action-item",
        "u-tabbar",
        "u-tabs",
        "u-tooltip"
      ];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const grandChild = child.$children;
        if (names.includes(child.$options.name) && typeof (child === null || child === void 0 ? null : child.init) === "function") {
          uni_modules_uviewPlus_libs_function_index.sleep(50).then(() => {
            child.init();
          });
        }
        if (grandChild.length) {
          this.retryComputedComponentRect(grandChild);
        }
      }
    }
  }
});
if (!Array) {
  const _easycom_u_overlay2 = common_vendor.resolveComponent("u-overlay");
  const _easycom_u_status_bar2 = common_vendor.resolveComponent("u-status-bar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_safe_bottom2 = common_vendor.resolveComponent("u-safe-bottom");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  (_easycom_u_overlay2 + _easycom_u_status_bar2 + _easycom_u_icon2 + _easycom_u_safe_bottom2 + _easycom_u_transition2)();
}
const _easycom_u_overlay = () => "../u-overlay/u-overlay.js";
const _easycom_u_status_bar = () => "../u-status-bar/u-status-bar.js";
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_safe_bottom = () => "../u-safe-bottom/u-safe-bottom.js";
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  (_easycom_u_overlay + _easycom_u_status_bar + _easycom_u_icon + _easycom_u_safe_bottom + _easycom_u_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.open && $options.open(...args)),
    b: _ctx.overlay
  }, _ctx.overlay ? {
    c: common_vendor.o($options.overlayClick),
    d: common_vendor.p({
      show: _ctx.show,
      zIndex: _ctx.zIndex,
      duration: $data.overlayDuration,
      customStyle: _ctx.overlayStyle,
      opacity: _ctx.overlayOpacity
    })
  } : {}, {
    e: _ctx.safeAreaInsetTop
  }, _ctx.safeAreaInsetTop ? {} : {}, {
    f: _ctx.closeable
  }, _ctx.closeable ? {
    g: common_vendor.p({
      name: "close",
      color: "#909399",
      size: "18",
      bold: true
    }),
    h: common_vendor.o((...args) => $options.close && $options.close(...args)),
    i: common_vendor.n("u-popup__content__close--" + _ctx.closeIconPos)
  } : {}, {
    j: _ctx.safeAreaInsetBottom
  }, _ctx.safeAreaInsetBottom ? {} : {}, {
    k: common_vendor.s($options.contentStyle),
    l: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args)),
    m: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args)),
    n: common_vendor.o($options.afterEnter),
    o: common_vendor.o($options.clickHandler),
    p: common_vendor.p({
      show: _ctx.show,
      customStyle: $options.transitionStyle,
      mode: $options.position,
      duration: _ctx.duration
    }),
    q: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    r: common_vendor.n(_ctx.customClass),
    s: _ctx.show == false ? "0px" : "",
    t: _ctx.show == false ? "0px" : ""
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-05c24e9b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-popup/u-popup.js.map
