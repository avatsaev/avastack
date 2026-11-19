# AvaStack website

Static site, no build step. Open `index.html` or upload the folder to any static host.

```
index.html        → redirects to fr/ or en/ based on browser language
fr/, en/          → one HTML file per page (index, services, about, contact)
css/style.css     → all styles; colours and fonts are variables at the top
js/main.js        → scales the two illustrations on small screens
assets/           → logo
```

To edit text, change the matching file in both `fr/` and `en/`.
The FR / EN switch links to the same file name in the other folder, so keep file names identical.
