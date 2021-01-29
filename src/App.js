import { useState } from "react";
import { Container } from "reactstrap";
import Result from "./components/Result";
import Entry from "./components/Entry";
import './App.css';

function App() {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <Container>
        {data 
        ? 
        <Result setData={setData} data={data} />
        :
        <Entry setData={setData} data={data} />
        }
      </Container>
    </div>
  );
}

export default App;
