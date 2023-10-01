import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import State from '../src/pages/learn-useState/index';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<State />}></Route>
          <Route path='/use-state' exact element={<State />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
