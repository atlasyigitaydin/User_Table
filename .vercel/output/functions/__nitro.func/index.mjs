import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { p as parseQuery, t as toNodeListener, u as useNitroApp } from './chunks/_/nitro.mjs';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'node:fs';
import 'node:path';

const nitroApp = useNitroApp();
const handler = toNodeListener(nitroApp.h3App);
const listener = function(req, res) {
  const query = req.headers["x-now-route-matches"];
  if (query) {
    const { url } = parseQuery(query);
    if (url) {
      req.url = url;
    }
  }
  return handler(req, res);
};

export { listener as default };
//# sourceMappingURL=index.mjs.map
