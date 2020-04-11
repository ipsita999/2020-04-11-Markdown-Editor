


import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import editorContext from "./EditorContext";
const ResultContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border: 1.5px solid rgba(15, 15, 15, 0.4);
  margin: 5%;
  font-family: "Lato", sans-serif;
`;

const ResultTitle = styled.div`
  font-size: 22px;
  color: maroon;
  font-weight: 600;
  margin-bottom: 1em;
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;

export function Result(props) {
  const { markdownText } = useContext(editorContext);

  return (
    <ResultContainer>
      <ResultTitle>PREVIEW</ResultTitle>
      <ResultArea>
        <ReactMarkdown source={markdownText} />
      </ResultArea>
    </ResultContainer>
  );
}




// import React, { useContext } from "react";
// import ReactMarkdown from "react-markdown";
// import EditorContext from "./EditorContext";


// export function Result(props) {
//   const { markdownText } = useContext(EditorContext);

//   return (
//     <div className = "ResultContainer">
//       <div className = "ResultTitle">Preview</div>
//       <div className = "ResultArea">
//         <ReactMarkdown source={markdownText} />
//       </div>
//     </div>
//   );
// }