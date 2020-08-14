import { NumberToChineseOptions, normalizeOptions } from "./options";
import { getLabels } from "./label";
import { numberToChinese } from "./to-chinese";

export function numberToChineseOrdinalWithArabic(
  num: number,
  options?: NumberToChineseOptions,
): string {
  return getLabels(normalizeOptions(options)).ordinal + num.toString(10);
}

export function numberToChineseOrdinal(
  num: number,
  options?: NumberToChineseOptions,
): string {
  const opts = normalizeOptions(options);
  return getLabels(opts).ordinal + numberToChinese(num, opts);
}
