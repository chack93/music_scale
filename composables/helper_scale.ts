import scaleData from "./helper_scale_data.json";

export type HelperScaleEntryMap = { [key: string]: HelperScaleEntry };
export type HelperScaleEntry = {
  name: string;
  mode: number;
  group?: string;
  interval: number[];
};

export const helperKeyList = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
];
export const helperScaleList = scaleData;
export function helperScaleMap(): HelperScaleEntryMap {
  return scaleData.reduce((acc, el) => {
    return { ...acc, [el.name]: el };
  }, {});
}
