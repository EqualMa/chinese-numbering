import {
  numberToChinese,
  numberToChineseOrdinalWithArabic,
  numberToChineseOrdinal,
} from "../src";
describe("power of 10", function () {
  it("10⁰", function () {
    expect(numberToChinese(1)).toEqual("一");
  });

  it("10¹", function () {
    expect(numberToChinese(10)).toEqual("十");
  });

  it("10²", function () {
    expect(numberToChinese(100)).toEqual("一百");
  });

  it("10³", function () {
    expect(numberToChinese(1000)).toEqual("一千");
  });

  it("10⁴", function () {
    expect(numberToChinese(10000)).toEqual("一万");
  });

  it("10⁵", function () {
    expect(numberToChinese(100000)).toEqual("十万");
  });

  it("10⁶", function () {
    expect(numberToChinese(1000000)).toEqual("一百万");
  });

  it("10⁷", function () {
    expect(numberToChinese(10000000)).toEqual("一千万");
  });

  it("10⁸", function () {
    expect(numberToChinese(100000000)).toEqual("一亿");
  });

  it("10⁹", function () {
    expect(numberToChinese(1000000000)).toEqual("十亿");
  });

  it("10¹⁰", function () {
    expect(numberToChinese(10000000000)).toEqual("一百亿");
  });

  it("10¹¹", function () {
    expect(numberToChinese(100000000000)).toEqual("一千亿");
  });

  it("10¹²", function () {
    expect(numberToChinese(1000000000000)).toEqual("一兆");
  });

  it("10¹³", function () {
    expect(numberToChinese(10000000000000)).toEqual("十兆");
  });

  it("10¹⁴", function () {
    expect(numberToChinese(100000000000000)).toEqual("一百兆");
  });

  it("10¹⁵", function () {
    expect(numberToChinese(1000000000000000)).toEqual("一千兆");
  });

  it("10¹⁶", function () {
    expect(numberToChinese(10000000000000000)).toEqual("一京");
  });

  it("10¹⁷", function () {
    expect(numberToChinese(100000000000000000)).toEqual("十京");
  });

  it("10¹⁸", function () {
    expect(numberToChinese(1000000000000000000)).toEqual("一百京");
  });

  it("10¹⁹", function () {
    expect(numberToChinese(10000000000000000000)).toEqual("一千京");
  });

  it("10²⁰", function () {
    expect(numberToChinese(100000000000000000000)).toEqual("一垓");
  });
});

describe("convert numbers", function () {
  it("one", function () {
    expect(numberToChinese(1)).toEqual("一");
  });

  it("ten", function () {
    expect(numberToChinese(10)).toEqual("十");
  });

  it("twenty", function () {
    expect(numberToChinese(20)).toEqual("二十");
  });

  it("one hundred", function () {
    expect(numberToChinese(100)).toEqual("一百");
  });

  it("1001", function () {
    expect(numberToChinese(1001)).toEqual("一千零一");
  });

  it("1021", function () {
    expect(numberToChinese(1021)).toEqual("一千零二十一");
  });

  it("1010", function () {
    expect(numberToChinese(1010)).toEqual("一千零一十");
  });
});

describe("large numbers", function () {
  it("10001", function () {
    expect(numberToChinese(10001)).toEqual("一万零一");
  });

  it("10021", function () {
    expect(numberToChinese(10021)).toEqual("一万零二十一");
  });

  it("10321", function () {
    expect(numberToChinese(10321)).toEqual("一万零三百二十一");
  });

  it("12021", function () {
    expect(numberToChinese(12021)).toEqual("一万二千零二十一");
  });

  it("zero zero", function () {
    expect(numberToChinese(102506)).toEqual("十万零二千五百零六");
  });

  it("十一万", function () {
    expect(numberToChinese(112506)).toEqual("十一万二千五百零六");
  });

  it("十万零", function () {
    expect(numberToChinese(10102506)).toEqual("一千零一十万零二千五百零六");
  });

  it("百万零", function () {
    expect(numberToChinese(11002506)).toEqual("一千一百万零二千五百零六");
  });

  it("百万零", function () {
    expect(numberToChinese(12102506)).toEqual("一千二百一十万零二千五百零六");
  });

  it("亿零", function () {
    expect(numberToChinese(100102506)).toEqual("一亿零一十万零二千五百零六");
  });

  it("亿零", function () {
    expect(numberToChinese(100022102506)).toEqual(
      "一千亿零二千二百一十万零二千五百零六",
    );
  });

  it("亿零", function () {
    expect(numberToChinese(100000102506)).toEqual(
      "一千亿零一十万零二千五百零六",
    );
  });

  it("京万亿万零a", function () {
    expect(numberToChinese(10000100022102506)).toEqual(
      "一京零一千亿零二千二百一十万零二千五百零六",
    );
  });

  it("京万亿万零b", function () {
    expect(numberToChinese(10000000022102506)).toEqual(
      "一京零二千二百一十万零二千五百零六",
    );
  });

  it("京万亿万零c", function () {
    expect(numberToChinese(10000000000002506)).toEqual("一京零二千五百零六");
  });

  it("京万亿万零a", function () {
    expect(numberToChinese(12345678912345678)).toEqual(
      "一京二千三百四十五兆六千七百八十九亿一千二百三十四万五千六百七十八",
    );
  });

  it("京万亿万零hd", function () {
    expect(numberToChinese(100000000000000000)).toEqual("十京");
  });

  it("32 bit float max value", function () {
    expect(numberToChinese(2147483647)).toEqual(
      "二十一亿四千七百四十八万三千六百四十七",
    );
  });

  it("64 bit float max value", function () {
    expect(numberToChinese(9007199254740992)).toEqual(
      "九千零七兆一千九百九十二亿五千四百七十四万零九百九十二",
    );
  });

  it("7", function () {
    expect(numberToChinese(7000000000000)).toEqual("七兆");
  });
});

describe("samples", function () {
  it("21", function () {
    expect(numberToChineseOrdinalWithArabic(21)).toEqual("第21");
  });

  it("word", function () {
    expect(numberToChinese(13)).toEqual("十三");
  });

  it("decimal point", function () {
    expect(numberToChinese(2.9)).toEqual("二点九");
  });

  it("negative", function () {
    expect(numberToChinese(-3)).toEqual("负三");
  });

  it("large", function () {
    expect(numberToChinese(9007199254740992)).toEqual(
      "九千零七兆一千九百九十二亿五千四百七十四万零九百九十二",
    );
  });

  it("ordinal word", function () {
    expect(numberToChineseOrdinal(21)).toEqual("第二十一");
  });
});
