import serve from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("bun server");
    } else if (url.pathname === "/pankaj") {
      return new Response("pankaj server");
    } else {
      return new Response("404 not found");
    }
  },
  port: 3000,
});
