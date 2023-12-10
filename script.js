import "./styles.css";

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

let mainStr = "DOM Manipulation";
const mainH1 = document.createElement("h1");
mainH1.textContent = mainStr;
mainEl.appendChild(mainH1);

mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((link) => {
  let item = document.createElement("a");
  item.setAttribute("href", link.href);
  item.textContent = link.text;
  topMenuEl.appendChild(item);
});
