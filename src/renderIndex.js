import { appVNode } from "./appVNode";
import { render } from "./core/render";

const rootElement = document.getElementById("root");
const domTree = render(appVNode);
rootElement.appendChild(domTree);
