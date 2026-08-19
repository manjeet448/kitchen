const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\manje\\.gemini\\antigravity-ide\\brain\\37de0158-bb4b-417e-8506-fc699600762f\\.system_generated\\steps\\681\\content.md', 'utf8');
const regex = /https:\/\/teaminspire\.co\.in\/wp-content\/uploads\/[^\s"'\)]+/g;
const matches = content.match(regex) || [];
const unique = [...new Set(matches)];
console.log(unique.filter(u => u.match(/\.(jpg|jpeg|png|webp)$/i)).join('\n'));
