# textlint-rule-incremental-headers

this is a linter plugin for japanese text.

この[textlint](https://github.com/textlint/textlint)-ruleは次の２つの規則を検査します。

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

ruleのインストールは以下のように行います。

まずnpmのライブラリとしてインストールを行います。

```
npm install -D textlint textlint-rule-incremental-headers
```

その後、.textlintrcで以下のようにrulesを記述します。

```js
{
    "rules": {
        "incremental-headers": true
    }
}
```
