import * as labels from "./labels";
import { NumberToChineseOptionsObject } from "../options";

export interface NumberToChineseLabels {
  digits: [
    // 零
    string,
    // 一
    string,
    // 二
    string,
    // 三
    string,
    // 四
    string,
    // 五
    string,
    // 六
    string,
    // 七
    string,
    // 八
    string,
    // 九
    string,
  ];
  units: [
    "",
    // 十
    string,
    // 百
    string,
    // 千
    string,
    // 万
    string,
    // 十
    string,
    // 百
    string,
    // 千
    string,
    // 亿
    string,
    // 十
    string,
    // 百
    string,
    // 千
    string,
    // 兆
    string,
    // 十
    string,
    // 百
    string,
    // 千
    string,
    // 京
    string,
    // 十
    string,
    // 百
    string,
    // 千
    string,
    // 垓
    string,
  ];
  ordinal: string; // 第
  point: string; // 点
  minus: string; // 负
}

export * from "./labels";

export function getLabels(
  opts: NumberToChineseOptionsObject,
): NumberToChineseLabels {
  return labels[opts.chineseType];
}
