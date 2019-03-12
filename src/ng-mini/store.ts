const componentsSelectorMap: { [key: string]: any } = {};

export function registerComponent(selector: string, component: any) {
  componentsSelectorMap[selector] = component;
}

export function getComponent(selector: string) {
  return componentsSelectorMap[selector];
}
