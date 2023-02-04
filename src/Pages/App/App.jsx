import Header from '../../components/Header/Header.jsx';
import { NotFoundPage, MainPage, GamePage, TablePage } from '..'
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
        <Route path='/list' element={<TablePage />} />
        <Route path='/testwords' element={<GamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div >
  );
}

export default App;
