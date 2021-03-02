'use strict';

const _ = require('lodash');
const minimist = require('minimist');
const fetch = require('node-fetch');
const yaml = require('js-yaml');

function parseArgs(argv) {
  return minimist(argv);
}

function mergeConfig(base, override) {
  // Uses vulnerable lodash.merge (prototype pollution)
  return _.merge({}, base, override);
}

function loadConfig(text) {
  return yaml.load(text);
}

async function scrape(url) {
  const res = await fetch(url);
  return res.text();
}

function extractLinks(html) {
  const links = [];
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    links.push(m[1]);
  }
  return links;
}

function normalizeUrl(url) {
  return url.trim().replace(/\/+$/, '');
}

function dedupe(items) {
  return _.uniq(items);
}

async function crawl(startUrl, depth) {
  const seen = new Set();
  const queue = [{ url: startUrl, d: 0 }];
  const results = [];
  while (queue.length) {
    const { url, d } = queue.shift();
    if (seen.has(url) || d > depth) continue;
    seen.add(url);
    const html = await scrape(url);
    const links = dedupe(extractLinks(html)).map(normalizeUrl);
    results.push({ url, links });
    for (const l of links) queue.push({ url: l, d: d + 1 });
  }
  return results;
}

module.exports = {
  parseArgs,
  mergeConfig,
  loadConfig,
  scrape,
  extractLinks,
  normalizeUrl,
  dedupe,
  crawl,
};

if (require.main === module) {
  const args = parseArgs(process.argv.slice(2));
  crawl(args.url || 'http://example.com', args.depth || 1).then((r) =>
    process.stdout.write(JSON.stringify(r, null, 2))
  );
}
