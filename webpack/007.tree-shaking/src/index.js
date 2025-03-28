import { square } from "./math";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "2 的平方是：" + square(2);
  return element;
}

document.body.appendChild(component());
