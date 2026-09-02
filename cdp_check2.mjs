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
(() => {
  const results = [];
  const check = (el, label) => {
    const cs = getComputedStyle(el);
    results.push({
      label,
      overflowY: cs.overflowY,
      overflowX: cs.overflowX,
      scrollHeight: el.scrollHeight,
      clientHeight: el.clientHeight,
      hasVScroll: el.scrollHeight > el.clientHeight,
    });
  };
  check(document.documentElement, 'html');
  check(document.body, 'body');
  const all = document.querySelectorAll('*');
  const offenders = [];
  all.forEach((el) => {
    const cs = getComputedStyle(el);
    if ((cs.overflowY === 'auto' || cs.overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 1) {
      offenders.push({
        tag: el.tagName,
        id: el.id,
        cls: (el.className && el.className.toString().slice(0, 100)) || '',
        scrollHeight: el.scrollHeight,
        clientHeight: el.clientHeight,
      });
    }
  });
  return JSON.stringify({ results, offenders });
})()
`;
const result = await send("Runtime.evaluate", { expression: expr });
console.log(JSON.stringify(JSON.parse(result.result.value), null, 2));

ws.close();
process.exit(0);
