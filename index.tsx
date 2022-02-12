/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std/http/server.ts";

import { h, ssr } from "./lib/nanossr.ts"
import { Hello } from "./app.tsx"

const PORT = Number(Deno.env.get("PORT") || "9090");

console.log(`Listening on http://localhost:${PORT}`);

await serve((req: { url: string|URL; }) => {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") ?? "world";
  return ssr(() => <Hello name={name} />, {
    head: ["<link rel=\"shortcut icon\" type=\"image/png\" href=\"https://deno.land/logo.svg\"/>"]
  });
}, { port: PORT });
