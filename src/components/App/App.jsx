import Header from '../Header/Header.jsx';
import ListWords from "../ListWords/ListWords.jsx";
import TestWords from "../TestWords/TestWords.jsx";
import MainPage from "../Mainpage/MainPage.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/list' element={<ListWords />} />
          <Route path='/testwords' element={<TestWords />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
