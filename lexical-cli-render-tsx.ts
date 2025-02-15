import { TextNode, $getRoot, $selectAll } from "lexical";
import { createHeadlessEditor } from "@lexical/headless";
import { $generateHtmlFromNodes } from "@lexical/html";
import { JSDOM } from 'jsdom';

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LinkNode } from "@lexical/link";
import { HashtagNode } from "@lexical/hashtag";
import { ListNode, ListItemNode } from "@lexical/list";

import { EmojiNode } from "./src/nodes/EmojiNode";

let input : string = "", html : string = "";
const editor = createHeadlessEditor({
  editable: false,
  nodes: [TextNode, HeadingNode, QuoteNode, LinkNode, HashtagNode, ListNode, ListItemNode, EmojiNode],
  onError: (error) => { throw error;},
});

const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;

process.stdin.on("data", (chunk) => {  input += chunk; });
process.stdin.on("end", async () => 
{
  try
  {
    const editorStateJson = JSON.parse(input).editorState;
    const editorState = editor.parseEditorState(editorStateJson);
    editor.setEditorState(editorState);    
    editor.update(() => { html = $generateHtmlFromNodes(editor, $selectAll()); });
    console.log(html);
  }
  catch (error)
  {
    console.error("Error processing EditorState JSON:", error);
    process.exit(1);
  }
});
