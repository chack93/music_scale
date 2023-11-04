import scaleData from "./helper_scale_data.json";

export type HelperScaleEntry = {
  name: string;
  mode: number;
  group?: string;
  interval: number[];
};

export const helperScaleList = scaleData;
export function helperScaleMap(): HelperScaleEntry[] {
  return scaleData;
  //VueI18n
  //
  //{ title: "nav.scale.major", link: "/scale/major" },
}
