const res = await fetch("http://localhost:9333/json/new?http://localhost:7778/", { method: "PUT" });
const target = await res.json();
const ws = new WebSocket(target.webSocketDebuggerUrl);

let id = 0;
const pending = new Map();
function send(method, params = {}) {
  return new Promise((resolve) => {
    const msgId = ++id;
    pending.set(msgId, resolve);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
}

ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result);
    pending.delete(msg.id);
  }
});

await new Promise((resolve) => ws.addEventListener("open", resolve));

await send("Page.enable");
await new Promise((r) => setTimeout(r, 3000));

const expr = `
JSON.stringify({
  htmlScrollWidth: document.documentElement.scrollWidth,
  htmlClientWidth: document.documentElement.clientWidth,
  bodyScrollWidth: document.body.scrollWidth,
  bodyClientWidth: document.body.clientWidth,
  windowInnerWidth: window.innerWidth,
  htmlScrollHeight: document.documentElement.scrollHeight,
  bodyScrollHeight: document.body.scrollHeight,
  windowInnerHeight: window.innerHeight,
  hasHtmlOverflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
})
`;

const result = await send("Runtime.evaluate", { expression: expr });
console.log(JSON.parse(result.result.value));

// Find the widest offending element beyond the viewport, if any
const finderExpr = `
(() => {
  const vw = document.documentElement.clientWidth;
  const offenders = [];
  document.querySelectorAll('*').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 || r.left < -1) {
      offenders.push({
        tag: el.tagName,
        id: el.id,
        cls: (el.className && el.className.toString().slice(0, 80)) || '',
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
      });
    }
  });
  return JSON.stringify(offenders.slice(0, 20));
})()
`;
const result2 = await send("Runtime.evaluate", { expression: finderExpr });
console.log(JSON.parse(result2.result.value));

ws.close();
process.exit(0);
