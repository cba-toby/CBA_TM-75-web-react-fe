import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function EditorInput({ initialValue, apiKey }) {
  const editorRef = React.useRef(null); // Ref to hold the editor instance

  return (
    <div className="row mb-3">
      <label htmlFor="inputText" className="col-sm-2 col-form-label">
        Nội dung
      </label>
      <div className="col-sm-10">
        <Editor
          apiKey={apiKey} // API Key for TinyMCE editor
          onInit={(_evt, editor) => (editorRef.current = editor)} // Function to store editor instance in ref
          initialValue={initialValue} // Initial value for the editor
          init={{
            height: 300,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
    </div>
  );
}

export default EditorInput;
