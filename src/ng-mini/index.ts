import { SYMBOL_COMPONENT, ComponentOptions } from "./decorators";
import { Compiler, ComponentRuntime } from "./compiler";
import { registerComponent } from "./store";

export class NgMini {
  static component(componentFn: any) {
    if (!componentFn[SYMBOL_COMPONENT]) {
      throw new Error(`${typeof componentFn} is not component`);
    }
    const options = componentFn[SYMBOL_COMPONENT];
    registerComponent(options.selector, componentFn);
  }

  static bootstrap(componentFn: any) {
    const componentInstance = new componentFn();
    const options: ComponentOptions = componentFn[SYMBOL_COMPONENT];
    const compiler = new Compiler();
    const rootComponent = new ComponentRuntime(componentInstance);
    compiler.compileComponent(options, rootComponent);
    // const rootDom = document.querySelector(componentInstance.selector);
    // compilerFn(componentInstance)
  }
}

export * from "./decorators";
