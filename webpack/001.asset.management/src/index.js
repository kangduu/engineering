import { join } from "lodash";
import "./style.css";
import DevImg from "./developer.jpg";
import CSV_DATA from "./data.csv";
import XML_DATA from "./data.xml";
import JSON_DATA from "./data.json";

function component() {
  const element = document.createElement("div");
  element.innerHTML = join(["你好", "webpack"], " ");
  element.classList.add("hello");

  const img = new Image();
  img.src = DevImg;
  element.appendChild(img);

  console.log(CSV_DATA);

  console.log(XML_DATA);

  console.log(JSON_DATA)

  return element;
}

document.body.appendChild(component());
