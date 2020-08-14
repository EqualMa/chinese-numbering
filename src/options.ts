export type ChineseType = "simplified" | "traditional";
export interface NumberToChineseOptionsObject {
  chineseType: ChineseType;
  keepOne: boolean;
}

export type ShortChineseType = "s" | "t";

export type NumberToChineseOptions =
  | ShortChineseType
  | ChineseType
  | Partial<NumberToChineseOptionsObject>;

const DEFAULT_OPTIONS: NumberToChineseOptionsObject = Object.freeze({
  chineseType: "simplified",
  keepOne: false,
});

export function normalizeChineseType(
  type: ShortChineseType | ChineseType,
): ChineseType {
  switch (type) {
    case "s":
      return "simplified";
    case "t":
      return "traditional";
    default:
      return type;
  }
}

export function normalizeOptions(
  opts?: NumberToChineseOptions,
): NumberToChineseOptionsObject {
  if (typeof opts === "boolean") {
    return {
      chineseType: opts ? "traditional" : "simplified",
      keepOne: DEFAULT_OPTIONS.keepOne,
    };
  } else if (typeof opts === "string") {
    return {
      chineseType: normalizeChineseType(opts),
      keepOne: DEFAULT_OPTIONS.keepOne,
    };
  } else if (typeof opts === "object" && opts !== null) {
    return {
      chineseType:
        typeof opts.chineseType === "string"
          ? normalizeChineseType(opts.chineseType)
          : DEFAULT_OPTIONS.chineseType,
      keepOne:
        typeof opts.keepOne === "undefined"
          ? DEFAULT_OPTIONS.keepOne
          : !!opts.keepOne,
    };
  } else {
    return DEFAULT_OPTIONS;
  }
}
