# chinese-numbering

[![npm package chinese-numbering](https://img.shields.io/npm/v/chinese-numbering?style=flat-square)](http://npm.im/chinese-numbering)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/EqualMa/chinese-numbering/dev/typescript?style=flat-square)]()
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

format numbers as chinese words and ordinals

## Install

```shell
npm install chinese-numbering
yarn add chinese-numbering
```

## Usage

### import

- Node.js

  ```js
  const cn = require("chinese-numbering");
  ```

- Browser

  - with iife / umd bundle:

    <!-- TODO  -->

    ```html
    <script></script>
    ```

    ```js
    const cn = window.ChineseNumbering;
    ```

  - with es module bundle:

    <!-- TODO -->

    ```html

    ```

- ES Modules

  ```js
  import * as cn from "chinese-numbering";
  ```

### number to Simplified / Traditional Chinese

```js
// Simplified Chinese 简体中文
// 一万零一点六
cn.numberToChinese(10001.6);
cn.numberToChinese(10001.6, "s");
cn.numberToChinese(10001.6, "simplified");
cn.numberToChinese(10001.6, { chineseType: "simplified" });

// Tradition Chinese 繁體中文
// 一萬零一點六
cn.numberToChinese(10001.6, "t");
cn.numberToChinese(10001.6, "traditional");
cn.numberToChinese(10001.6, { chineseType: "traditional" });

// negative numbers 负数
cn.numberToChinese(-1200); // 负一千二百
cn.numberToChinese(-0.5, "t"); // 負零點五
```

### Keep the first `One`

```js
// not keep the first `One`
cn.numberToChinese(12); // 十二
// Keep the first `One`
cn.numberToChinese(12, { keepOne: true }); // 一十二
```

### Ordinal

```js
cn.numberToChineseOrdinal(12); // 第十二
cn.numberToChineseOrdinal(12, { keepOne: true }); // 第一十二
cn.numberToChineseOrdinal(10000, { chineseType: "t" }); // 第一萬

// with Arabic numerals
cn.numberToChineseOrdinalWithArabic(12); // 第12
```

## License

MIT © [Equal Ma](https://github.com/EqualMa)

> The algorithm to format number as Chinese words is inspired by [digi3studio/number-to-chinese-words](https://github.com/digi3studio/number-to-chinese-words/blob/master/src/index.js). Great Thanks to digi3studio.
