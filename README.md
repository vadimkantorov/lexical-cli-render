# lexical2html
Renders Facebook Lexical's EditorState serialized to JSON (see sample [`./samples/playground.lexical.json`](./samples/playground.lexical.json) and [`./samples/playground_without_emoji.lexical.json`](./samples/playground_without_emoji.lexical.json)) produced by exporting to JSON default content of https://playground.lexical.dev 

## Usage

```shell
# nodejs starting with version 22 supports native execution of TypeScript without prior transpilation: https://nodejs.org/en/learn/typescript/run-natively

cat samples/playground_without_emoji.lexical.json | node lexical-cli-render.ts

cat samples/playground.lexical.json | npx ts-node lexical-cli-render.tsx
```

# References
- https://github.com/facebook/lexical/discussions/7177
- https://github.com/nodejs/node
