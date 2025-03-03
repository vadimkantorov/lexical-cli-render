# lexical-cli-render
Renders Facebook Lexical's EditorState serialized to JSON (see sample [`./samples/playground.lexical.json`](./samples/playground.lexical.json) and [`./samples/playground-without-emoji.lexical.json`](./samples/playground-without-emoji.lexical.json)) produced by exporting to JSON default content of https://playground.lexical.dev 

## Usage

```shell
# nodejs starting with version 22 supports native execution of TypeScript without prior transpilation: https://nodejs.org/en/learn/typescript/run-natively
cat samples/playground.lexical.json | npx ts-node lexical-cli-render.ts

# if does not use JSX/TSX imports, can use node instea of npx ts-node:
cat samples/playground-without-emoji.lexical.json | node lexical-cli-render-without-emoji.ts
```

# Future work
- How to style the produced HTML tags? At the very least, how to ask lexical to add css classes to preserve the original node types? 
- How to replace the produed `style="white-space: pre-wrap;"` with some CSS class?


# References
- https://github.com/facebook/lexical/discussions/7177
- https://github.com/TypeStrong/ts-node/issues/2086
- https://github.com/orgs/nodejs/discussions/57070
- https://nodejs.org/en/learn/typescript/run-natively
