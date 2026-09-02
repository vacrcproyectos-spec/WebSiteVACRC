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
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });
await send("Page.enable");
await send("Page.navigate", { url: "http://localhost:7778/?nocache=" + Date.now() });
await new Promise((r) => setTimeout(r, 3000));

const expr = `
(() => {
  const check = (el, label) => {
    const cs = getComputedStyle(el);
    return { label, overflowY: cs.overflowY, overflowX: cs.overflowX, scrollHeight: el.scrollHeight, clientHeight: el.clientHeight };
  };
  return JSON.stringify([check(document.documentElement, 'html'), check(document.body, 'body')]);
})()
`;
const result = await send("Runtime.evaluate", { expression: expr });
console.log(result.result.value);
ws.close();
process.exit(0);
