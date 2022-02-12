export * from "https://deno.land/x/nano_jsx/mod.ts";
export { tw } from "https://cdn.skypack.dev/twind";

import {
  Helmet,
  renderSSR,
} from "https://deno.land/x/nano_jsx/mod.ts";
import { setup } from "https://cdn.skypack.dev/twind";
import {
  getStyleTag,
  virtualSheet,
} from "https://cdn.skypack.dev/twind/sheets";
import typography from "https://cdn.skypack.dev/@twind/typography";

interface Options {
  head?: string[];
  footer?: string[];
  tw?: any;
}

let SHEET_SINGLETON: any = null;
function sheet(twOptions = {}) {
  return SHEET_SINGLETON ?? (SHEET_SINGLETON = setupSheet(twOptions));
}

// Setup TW sheet singleton
function setupSheet(twOptions: Record<string, any>) {
  const sheet = virtualSheet();
  setup({ ...twOptions, sheet, plugins: { ...typography() } });
  return sheet;
}

const html = ({ body, head, footer, styleTag }: { body: string, head: string[], footer: string[], styleTag: string }) => (`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${head}
    ${styleTag}
  </head>
  <body>
    ${body}
    ${footer.join("\n")}
  </body>
<html>
`);

export function ssr(render: CallableFunction, options?: Options) {
  sheet(options?.tw ?? {}).reset();
  const app = renderSSR(render());
  let { body, head, footer } = Helmet.SSR(app);
  head = head.concat(options?.head ?? []);
  footer = head.concat(options?.footer ?? []);
  const styleTag = getStyleTag(sheet());
  return new Response(
    html({ body, head, footer, styleTag }),
    { headers: { "content-type": "text/html" } },
  );
}