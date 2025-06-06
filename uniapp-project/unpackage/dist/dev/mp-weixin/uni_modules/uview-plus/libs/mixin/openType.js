"use strict";
const uni_modules_uviewPlus_libs_vue = require("../vue.js");
const openType = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    openType: String
  },
  methods: {
    onGetUserInfo(event) {
      this.$emit("getuserinfo", event.detail);
    },
    onContact(event) {
      this.$emit("contact", event.detail);
    },
    onGetPhoneNumber(event) {
      this.$emit("getphonenumber", event.detail);
    },
    onError(event) {
      this.$emit("error", event.detail);
    },
    onLaunchApp(event) {
      this.$emit("launchapp", event.detail);
    },
    onOpenSetting(event) {
      this.$emit("opensetting", event.detail);
    }
  }
});
exports.openType = openType;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/libs/mixin/openType.js.map
