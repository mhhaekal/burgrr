//import rute
import rute from './routes/rute'
//import router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div data-theme="light">

      <Routes>

        {rute.map((value) => value)}

      </Routes>


    </div>
  );
}

export default App;
