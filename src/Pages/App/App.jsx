import Header from '../../components/Header/Header.jsx';
import { NotFoundPage, ListWords, MainPage, TestWords } from '..'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/list' element={<ListWords />} />
        <Route path='/testwords' element={<TestWords />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div >
  );
}

export default App;
