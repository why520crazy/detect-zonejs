import {
  HtmlParser,
  Text,
  Expansion,
  Attribute,
  ExpansionCase,
  Element,
  Comment,
  Node
} from "@angular/compiler";
import { ComponentOptions, SYMBOL_COMPONENT } from "./decorators";
import { getComponent } from "./store";

const EVENT_BINDING_REGEX = /\(([\w_]*)\)/gi;
const PROPERTY_BINDING_REGEX = /\[([\w_]*)\]/gi;

export class ComponentRuntime {
  instance: any;
  parent?: ComponentRuntime;
  children?: ComponentRuntime[] = [];
  bindProperties: string[] = [];
  cachePropertiesValueMap = {};
  fromParentProperties: string[] = [];

  constructor(instance: any, parent?: ComponentRuntime) {
    this.instance = instance;
    this.parent = parent;
    if (this.parent) {
      this.parent.children.push(this);
    }
  }

  addBindProperty(name: string) {
    this.bindProperties.push(name);
    this.cachePropertiesValueMap[name] = this.instance[name];
  }

  addFromParentProperty(name: string) {
    this.fromParentProperties.push(name);
  }

  makeForChanges() {
    this.bindProperties.forEach(name => {
      if (this.cachePropertiesValueMap[name] !== this.instance[name]) {
      }
    });
    this.children.forEach(child => {
      child.makeForChanges();
    });
  }
}

export interface IRenderer {
  render(rootNodes: Node[], component: ComponentRuntime): void;
}

export class BrowserRenderer implements IRenderer {
  fragment: DocumentFragment;

  constructor() {
    this.fragment = document.createDocumentFragment();
  }

  render(componentFn: any, rootNode: any) {
    const options: ComponentOptions = componentFn[SYMBOL_COMPONENT];
    const compiler = new Compiler();
    const component = new ComponentRuntime(new componentFn());
    const treeResult = compiler.compile(options.template);
    this._render(treeResult.rootNodes, component, rootNode);
    return component;
  }

  _render(rootNodes: Node[], component: ComponentRuntime, parentNode: any) {
    rootNodes.forEach(node => {
      if (node instanceof Text) {
        const textDom = document.createElement(node.value);
        this.fragment.appendChild(textDom);
      } else if (node instanceof Expansion) {
        console.log(node);
      } else if (node instanceof ExpansionCase) {
        console.log(node);
      } else if (node instanceof Attribute) {
        console.log(node);
      } else if (node instanceof Element) {
        const componentFn = getComponent(node.name);
        const element = document.createElement(node.name);
        let componentRuntime: ComponentRuntime;
        if (componentFn) {
          componentRuntime = this.render(componentFn, element);
        }
        node.attrs.forEach(attr => {
          const eventMatches = attr.name.match(EVENT_BINDING_REGEX);
          const propertyMatches = attr.name.match(PROPERTY_BINDING_REGEX);
          if (eventMatches && eventMatches.length >= 2) {
            element.addEventListener(eventMatches[1], event => {
              const eventAction = component.instance[attr.value];
              eventAction.call(component.instance, event);
            });
          }
          if (
            componentRuntime &&
            propertyMatches &&
            propertyMatches.length >= 2
          ) {
            const propertyName = propertyMatches[1].trim();
            componentRuntime.instance[propertyName] =
              component.instance[propertyName];
          }
          element.setAttribute(attr.name, attr.value);
        });
        this.fragment.appendChild(element);
        console.log(node);
      } else if (node instanceof Comment) {
        console.log(node);
      }
    });
  }
}

export class Compiler {
  compile(source: string) {
    if (typeof source === "undefined" || source === null) {
      throw new Error("compile(): input parameter is undefined or null");
    }
    if (typeof source !== "string") {
      throw new Error(
        "compile(): input parameter is of type " +
          Object.prototype.toString.call(source) +
          ", string expected"
      );
    }

    const htmlParser = new HtmlParser();
    return htmlParser.parse(source, "./template.html");
  }

  compileComponent(options: ComponentOptions, component: ComponentRuntime) {
    const treeResult = this.compile(options.template);
    // console.log(JSON.stringify(treeResult, null, 2));
    treeResult.rootNodes.forEach(node => {
      console.log("-----node");
      if (node instanceof Text) {
        console.log(node);
      } else if (node instanceof Expansion) {
        console.log(node);
      } else if (node instanceof ExpansionCase) {
        console.log(node);
      } else if (node instanceof Attribute) {
        console.log(node);
      } else if (node instanceof Element) {
        console.log(node);
      } else if (node instanceof Comment) {
        console.log(node);
      }
    });
  }
}

// const compiler = new Compiler();
// const result = compiler.compile("<div>{{hello}}<div>");
// console.log(result);
