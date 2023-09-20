import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Question from './components/Question';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
    <div className="App">
        welcome
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          <Route path="/question" element={<Question/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
