import { api } from "@/store/globalVariable";

export const getHomeData = async () => {
  const res = await uni.request({
    url: `${api.value}/wechat-mini-program/getHomeTabsData`,
    method: "get",
  });
  if (res.statusCode === 200) {
    return res.data;
  }
};
