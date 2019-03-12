export interface ComponentOptions {
  selector: string;
  template: string;
}

export const SYMBOL_COMPONENT = Symbol("__ng-mini-component");

export function Component(options: ComponentOptions) {
  return function(constructor: Function) {
    constructor[SYMBOL_COMPONENT] = options;
  };
}
