import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Question from './components/Question';


function App() {
  return (
    <div className="App">
        welcome
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/question" element={<Question/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
