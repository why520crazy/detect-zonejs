
import * as chars from "./chars";

export enum TokenType {
  Character,
  Identifier,
  Keyword,
  String,
  Operator,
  Number,
  Error
}

export class Token {
  constructor(
    public index: number,
    public type: TokenType,
    public numValue: number,
    public strValue: string
  ) {}
}

export class Lexer {
  constructor() {}

  lex(source: string) {
    source = source
      .replace(/\r\n|\r/g, "\n")
      .replace(/\t/g, "    ")
      .replace(/\u00a0/g, " ")
      .replace(/\u2424/g, "\n");

    return this.tokens(source);
  }

  tokens(source: string) {
    const tokens = [];
    let src = source.replace(/^ +$/gm, "");

    while (src) {
      // newline
    //   if (src.includes("\n")) {
    //     tokens.push({
    //       type: TokenType.line
    //     });
    //     src = src.substring(1, src.length);
    //   }

      if (src.includes("<")) {
      }
    }
    return tokens;
  }
}

export class Scanner {
    length: number;
    peek: number = 0;
    index: number = -1;
  
    constructor(public input: string) {
      this.length = input.length;
      this.advance();
    }
  
    advance() {
      this.peek = ++this.index >= this.length ? chars.$EOF : this.input.charCodeAt(this.index);
    }

    tokenize(){}
}
