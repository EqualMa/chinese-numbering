import { NumberToChineseOptions, normalizeOptions } from "./options";
import { getLabels, NumberToChineseLabels } from "./label";

interface LabelRegexps {
  onlyZero: [RegExp, string];
  zeroBetweenBigUnits: [RegExp, string];
  zeroBetweenSmallAndBigUnits: [RegExp, string];
  groupZero: [RegExp, string];
  removeTailZero: [RegExp, string];
  removeOne: [RegExp, string];
}

const regexps = new WeakMap<NumberToChineseLabels, LabelRegexps>();

function getRegexps(labels: NumberToChineseLabels): LabelRegexps {
  const r = regexps.get(labels);

  if (r) {
    return r;
  }

  const { digits, units } = labels;
  const smallUnit = units[1] + units[2] + units[3];
  const bigUnit = units[4] + units[8] + units[12] + units[16] + units[20];
  const zero = digits[0];

  const v: LabelRegexps = {
    // 零千,零百,零十 keeps 零
    onlyZero: [new RegExp(`(${zero})[${smallUnit}]`, "g"), "$1"],
    //大數中間沒細數，補零
    zeroBetweenBigUnits: [
      new RegExp(`([${bigUnit}])[^${smallUnit}]+([${bigUnit}])`, "g"),
      "$1" + zero,
    ],
    zeroBetweenSmallAndBigUnits: [
      new RegExp(`([${smallUnit}])${zero}+([${bigUnit}])`, "g"),
      "$1$2" + zero,
    ],
    //group 零
    groupZero: [new RegExp(`(${digits[0]})+`, "g"), "$1"],
    // remove tail zero
    removeTailZero: [new RegExp(zero + "+$"), ""],
    // 一十 => 十
    removeOne: [new RegExp(`^${digits[1]}${units[1]}`), units[1]],
  };
  regexps.set(labels, v);

  return v;
}

function parseIntPart(
  num: number,
  labels: NumberToChineseLabels,
  keepOne: boolean,
) {
  const { digits, units, minus } = labels;

  const regexps = getRegexps(labels);

  let n = Math.floor(Math.abs(num));

  // 0
  if (n < 1) return (num < 0 ? minus : "") + digits[0];

  let str = "";
  let unitIndex = 0;
  while (n > 0) {
    str = digits[n % 10] + units[unitIndex] + str;

    n = Math.floor(n / 10);
    unitIndex++;
  }

  str = str
    .replace(...regexps.onlyZero)
    .replace(...regexps.zeroBetweenBigUnits)
    .replace(...regexps.zeroBetweenSmallAndBigUnits)
    .replace(...regexps.groupZero)
    .replace(...regexps.removeTailZero);

  if (keepOne != true) {
    str = str.replace(...regexps.removeOne);
  }

  return (num < 0 ? minus : "") + str;
}

function parseFloatPart(num: number, labels: NumberToChineseLabels): string {
  if (num % 1 === 0) return "";

  num = Math.abs(num);
  const { digits, point } = labels;

  let numStr = num.toString();
  numStr = numStr.slice(numStr.indexOf(".") + 1);

  let str = "";
  for (const d of numStr) {
    str = str + digits[parseInt(d)];
  }

  return point + str;
}

export function numberToChinese(
  num: number,
  options?: NumberToChineseOptions,
): string {
  const opts = normalizeOptions(options);
  const labels = getLabels(opts);
  return parseIntPart(num, labels, opts.keepOne) + parseFloatPart(num, labels);
}
