import { join } from "lodash";
import Print from "./print";

function component() {
  const element = document.createElement("div");
  element.innerHTML = join(["Hello", "webpack"], " ");
  element.onclick = Print.bind(null, "hello");

  return element;
}

document.body.appendChild(component());
