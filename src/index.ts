const listener = Deno.listen({ port: 8080 });
console.log("Server listening on http://localhost:8080");

async function handle(conn: any) {
    const requests = Deno.serveHttp(conn);
    for await (const { respondWith } of requests) {
        respondWith(new Response("Hello Deno!"));
    }
}

for await (const conn of listener) {
    handle(conn);
}