#!/usr/bin/env node
// run: node generate-icons.js
const fs = require('fs');
const path = require('path');

function svgIcon(size) {
  const r = size * 0.15;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="#1a1a2e"/>
  <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-size="${size*0.55}" font-family="system-ui">🍽</text>
</svg>`;
}

const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir);

fs.writeFileSync(path.join(iconsDir, 'icon-192.svg'), svgIcon(192));
fs.writeFileSync(path.join(iconsDir, 'icon-512.svg'), svgIcon(512));

console.log('SVG icons generated. Convert to PNG with: npx sharp-cli or similar.');
console.log('For quick testing, rename .svg to .png — browsers accept SVG icons.');
