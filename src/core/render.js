export function render(vNode) {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }

  const element = document.createElement(vNode.tagName);

  const attrs = vNode.attrs;
  for (const key in attrs) {
    const value = attrs[key];
    element.setAttribute(key, value);
  }

  if (vNode.children) {
    for (let i = 0; i < vNode.children.length; i++) {
      const child = vNode.children[i];
      const childElement = render(child);
      element.appendChild(childElement);
    }
  }

  return element;
}
