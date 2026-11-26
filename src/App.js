import logo from './logo.svg';
import './App.css';
import Classcomponent from './Classcomponent';
import DocViewer, { DocViewerRenderers } from "@iamjariwala/react-doc-viewer";
import "@iamjariwala/react-doc-viewer/dist/index.css";


function App() {
  const docs = [
    { uri: "/resume.docx" }, // Loads from public/sample.pdf
  ];
  return (
    <div className="App">
      <h1>Function Component</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Mark />
     
      <div style={{ height: "100vh" }}>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
     <Classcomponent />
    </div>
  );
}
function Mark()
{
  return(
    <div>
      <h1>Score: 100</h1>
    </div>
  );
}



export default App;
