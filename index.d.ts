declare var LinkifyIt: {
  (schemas?: LinkifyIt.SchemaRules, options?: LinkifyIt.Options): LinkifyIt.LinkifyIt;
  new (schemas?: LinkifyIt.SchemaRules, options?: LinkifyIt.Options): LinkifyIt.LinkifyIt;
};

declare namespace LinkifyIt {
  export interface FullRule {
    validate: (text:string, pos:number, self:LinkifyIt) => number;
    normalize?: (match:string) => string;
  }

  export type Rule = string | RegExp | FullRule;

  export interface SchemaRules {
    [schema: string]: Rule;
  }

  export interface Options {
    fuzzyLink?: boolean;
    fuzzyIP?: boolean;
    fuzzyEmail?: boolean;
  }

  export interface Match {
    index: number;
    lastIndex: number;
    raw: string;
    schema: string;
    text: string;
    url: string;
  }

  export interface LinkifyIt {
    add(schema:string, rule:Rule):LinkifyIt;
    match(text:string):Match[];
    normalize(raw:string):string;
    pretest(text:string):boolean;
    set(options:Options):LinkifyIt;
    test(text:string):boolean;
    testSchemaAt(text:string, schemaName:string, pos:number):number;
    tlds(list:string | string[], keepOld?:boolean):LinkifyIt;
  }
}

export = LinkifyIt;
