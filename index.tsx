/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, ssr, tw } from "https://crux.land/nanossr@0.0.1";

import { Hello } from "./app.tsx"

const PORT = Number(Deno.env.get("PORT") || "9090");

console.log(`Listening on http://localhost:${PORT}`);

await serve((req) => {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") ?? "world";
  return ssr(() => <Hello name={name} />);
}, { addr: `localhost:${PORT}` });