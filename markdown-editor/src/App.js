// import React, { useState } from "react";
// import { MarkedInput } from "./components/MarkedInput";
// import { Result } from "./components/Result"
// import EditorContext from "./components/EditorContext";
// import './App.css'

// export default function App() {
//   const [markdownText, setMarkdownText] = useState("");

//   const contextValue = {
//     markdownText,
//     setMarkdownText
//   };

//   return (
//     <EditorContext.Provider value={contextValue}>
//       <div className = "AppContainer">
//       <EditorContext.Provider value={contextValue}>

//         <div className = "Title">Markdown Editor</div>
//         </EditorContext.Provider>
//         <EditorContext.Provider value={contextValue}>

//         <div className = 'EditorContainer'>
//         <EditorContext.Provider value={contextValue}>
//   <MarkedInput />
//   </EditorContext.Provider>
//   <EditorContext.Provider value={contextValue}>

//           <Result />
//           </EditorContext.Provider>

//         </div>
//         </EditorContext.Provider>

//       </div>
//     </EditorContext.Provider>
//   );
// }

import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { MarkedInput } from "./components/markedInput";
import { Result } from "./components/result";
import EditorContext from "./components/EditorContext";

const AppContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AppTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: "Lato", sans-serif;
  margin-top: 3%;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <AppTitle>REACT MARKDOWN EDITOR</AppTitle>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}
