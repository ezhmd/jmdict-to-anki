
# JMdict to Anki

```
mkdir -p dist
xml2json ./source/JMdict_e ./dist/JMdict.json
node code.js
node fintocsv.js
```