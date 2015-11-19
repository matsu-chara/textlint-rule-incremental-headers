# textlint-rule-incremental-headers

この[textlint](https://github.com/textlint/textlint)-ruleプラグインは次の２つのルールを検査します。

- ページの始まりの見出しは#(h1)から始まる。
- 見出しの深さ(h1, h2, h3など)は必ず１つずつ増加する。(h1, h3のように急に深くならない)

## Example

```
# この文章は

ルールに従っているので

## 問題

## ありません

### すばらしい

ですね

```

```
## この文章は

h2から始まっているので

## 問題です

```

```
# この文章は

以下のように

### 突然

#の数が多い(深い)見出しが付いているので

### 問題です

```

## Installation

プラグインのインストールは以下のように行います。

まずnpmのライブラリとしてインストールを行います。

```
npm install -D textlint textlint-rule-incremental-headers
```

その後、.textlintrcで以下のようにpluginsを記述します。

```js
{
    "plugins": [
        "incremental-headers"
    ]
}
```
