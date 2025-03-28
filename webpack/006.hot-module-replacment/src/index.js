import "./styles.css";
import print from "./print";
function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello" + " webpack";

  const btn = document.createElement("button");
  btn.innerHTML = "Click";
  btn.onclick = print;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
