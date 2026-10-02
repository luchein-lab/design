import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { root, generatedCss } from './build.mjs';
import { generatedShowcase } from './showcase.mjs';

assert.equal(await readFile(new URL('styles/tokens.css', root), 'utf8'), await generatedCss(), 'Generated CSS is stale; run npm run build');
const assets = JSON.parse(await readFile(new URL('assets/manifest.json', root), 'utf8'));
for (const asset of assets) {
  const bytes = await readFile(new URL(asset.path, root));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256, `Asset changed: ${asset.path}`);
}
assert.equal(assets.find(asset => asset.path === 'assets/logo/capptus-original.png').sha256, '55f5309be7b3d0e8c36c35c99188a98a6451e15c461bf03ea815af8fb2c73886', 'Original logo must remain unchanged');
const html = await readFile(new URL('index.html', root), 'utf8');
assert.equal(html, await generatedShowcase(), 'Generated showcase is stale; run npm run build');
const catalog = JSON.parse(await readFile(new URL('assets/catalog.json', root), 'utf8'));
assert.equal(catalog.length, 30);
for (const [family, expected] of [['compact', 7], ['interface', 16], ['capptus-way', 7]]) {
  assert.equal(catalog.filter(asset => asset.family === family).length, expected, `Unexpected ${family} count`);
}
for (const asset of catalog) {
  for (const field of ['master','png','png32','png64','png128','png256','tile']) if (asset[field]) await readFile(new URL(asset[field], root));
}
assert.equal(catalog.filter(asset => asset.family === 'capptus-way' && asset.status === 'official-stage').length, 6);
assert.equal(catalog.filter(asset => asset.family === 'capptus-way' && asset.status === 'proposed-extension').length, 1);
assert.equal(catalog.filter(asset => asset.family === 'compact' && asset.status === 'official-stage').length, 6);
assert.equal(catalog.filter(asset => asset.family === 'compact' && asset.status === 'proposed-extension').length, 1);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs');
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const target = match[1];
  if (target.startsWith('#')) assert(ids.includes(target.slice(1)), `Missing anchor: ${target}`);
  else if (!/^[a-z]+:/i.test(target)) await readFile(new URL(target, root));
}
for (const match of html.matchAll(/(?:aria-describedby|for)="([^"]+)"/g)) assert(ids.includes(match[1]), `Missing label or description: ${match[1]}`);
for (const file of ['styles/typography.css', 'styles/fonts.css']) {
  const css = await readFile(new URL(file, root), 'utf8');
  for (const match of css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)) {
    await readFile(new URL(match[1], new URL(file, root)));
  }
}
const tokens = JSON.parse(await readFile(new URL('tokens/tokens.json', root), 'utf8'));
function luminance(hex) {
  const rgb = hex.slice(1).match(/../g).map(value => parseInt(value, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
}
for (const [foreground, background] of [['ink','limestone'], ['muted','limestone'], ['action','limestone'], ['white','action'], ['white','cactus'], ['ink','sand'], ['muted','white']]) {
  const a = luminance(tokens.color[foreground].value), b = luminance(tokens.color[background].value);
  const ratio = (Math.max(a,b)+.05)/(Math.min(a,b)+.05);
  assert(ratio >= 4.5, `${foreground}/${background} fails normal-text contrast: ${ratio}`);
  console.log(`${foreground}/${background}: ${ratio.toFixed(2)}:1`);
}
console.log(`Passed: generated CSS and showcase, 30 catalog records, ${assets.length} file hashes, original logo, local references, HTML IDs, labels, and documented text contrast.`);
