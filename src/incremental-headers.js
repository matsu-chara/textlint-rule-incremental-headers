// LICENSE : MIT
export default function (context, options = {}) {
    let {Syntax, RuleError, report, getSource} = context;
    let header_nodes = [];

    function reportResult(node, message) {
      report(node, new RuleError(message, {
        line: 0,
        column: 0
      }));
    }

    function repeat(str, n) {
      let ret = "";
      for (let i = 0; i < n; i++) {
        ret += str;
      }
      return ret;
    }

    return {
        [Syntax.Document](){
            header_nodes = [];
        },
        [Syntax.Header](node){
            header_nodes.push(node);
        },
        [`${Syntax.Document}:exit`](){
            let currentDepth = 0;

            for (let node of header_nodes ) {
              if (currentDepth == 0 && node.depth != 1) {
                reportResult(node, "ページの先頭のヘッダーが#から始まっていません。"); 
              } else if (node.depth > currentDepth + 1) {
                reportResult(node, `${repeat("#", currentDepth)}の後に${repeat("#", node.depth)}が来ています。段落は１つずつ下げてください。`);
              } else if (currentDepth > 0 && node.depth == 1) {
                reportResult(node, "ページの先頭以外で#が見つかりました。");
              }
              currentDepth = node.depth;
            }
        }
    }
}
