import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";

const files = {
  "index.js": {
    name: "filename",
    language: "javascript",
    value: "// write your code here",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<!-- write your code here -->",
  },
};

const CodeTextEditor = () => {
  const [fileName, setFileName] = useState("index.js");
  const file = files[fileName];

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const getEditorValue = () => {
    console.log(editorRef.current.getValue());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex justify-between w-[500px]">
        <button onClick={() => setFileName("index.html")}>
          Switch to HTML
        </button>
        <button onClick={() => setFileName("index.js")}>Switch to JS</button>
        <button onClick={getEditorValue}>Get Editor Value</button>
      </div>
      <Editor
        height={"500px"}
        width={"500px"}
        theme="vs-dark"
        path={file.name}
        onMount={handleEditorDidMount}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  );
};

export default CodeTextEditor;
