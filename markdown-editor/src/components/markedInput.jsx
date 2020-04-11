

import React, { useContext } from "react";
import styled from "styled-components";
import editorContext from "./EditorContext";

const MarkdownContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border: 1.5px solid rgba(15, 15, 15, 0.4);
  margin: 5%;
  margin-right: 0%;
  font-family: "Lato", sans-serif;
`;

const MarkdownTitle = styled.div`
  font-size: 22px;
  color: maroon;
  font-weight: 600;
  margin-bottom: 1em;
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 85%;
  resize: none;
  border: none;
  outline: none;
  font-size: 20px;
`;

export function MarkedInput(props) {
  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = e => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <MarkdownContainer>
      <MarkdownTitle>MARKDOWN TEXT</MarkdownTitle>
      <TextArea onChange={onInputChange} />
    </MarkdownContainer>
  );
}


// import React, { useContext } from "react";
// import EditorContext from "./EditorContext"



// export function MarkedInput(props) {
//   const { setMarkdownText } = useContext(EditorContext);

//   const onInputChange = e => {
//     const newValue = e.currentTarget.value;
//     setMarkdownText(newValue);
//   };

//   return (
//     <div className = "MarkdownContainer">
//       <div className = "MarkdownTitle">Markdown Text</div>
//       <div className = "TextArea" onChange={onInputChange} />
//     </div>
//   );
// }