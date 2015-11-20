// LICENSE : MIT
import TextLintTester from "textlint-tester";
import rule from "../src/incremental-headers";

let tester = new TextLintTester();
tester.run("見出しの深さが１つずつ増えている", rule, {
  valid: [`# ペンとは何か
ペンとは何か、それは分からない。

## ペン is a ペン
ペンはペンである。
これはペンについて判明している重要な性質の一つである。

## not ペン is a ペン
ペンではないものがペンであることもあるという報告がある。

## まとめ
ペンとは、ペンである。
`,
// 大見出し(h1)は必ずしも文章の先頭に来る必要はない。各見出しの最初が#(h1)で始まっていれば良い。
`以下の文章は過去の遺物なので参照しないでください。
# ペンとは

## まとめ
ペンとは、なんだろうか。
  `],
  invalid: [
    {
      text: `# ボールペンとは何か
  ボールペンについて考える。

  ### ボールペンの中のインクに使われている物質の成分について

  どういった成分の物質が使われているだろうか

  ## ボールペンのインクについて

  色々な色がある。すごい。`,
      errors: [
        {
          message: "#の後に###が来ています。段落は１つずつ下げてください。",
          line: 4,
          column: 1
        }
      ]
    },
    {
      text: `## シャープペンの芯について
  シャープなペンだ。
  `,
      errors: [
        {
          message: "ページの先頭のヘッダーが#から始まっていません。",
          line: 1,
          column: 1
        }
      ]
    },
    {
      text: `# 万年筆について
筆だ。

# 万年も使える
`,
      errors: [
        {
          message: "ページの先頭以外で#が見つかりました。",
          line: 4,
          column: 1
        }
      ]
    }
  ]
});
