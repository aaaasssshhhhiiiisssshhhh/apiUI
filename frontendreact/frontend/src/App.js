// import logo from "./logo.svg";
import "./App.css";
import Message from "./component/Message";
import Image from "./img/leave.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Result</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={Image} className="App-logo" alt="img" />
        <Message />
      </header>
    </div>
  );
}

export default App;
