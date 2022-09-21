import { Routes, Route } from 'react-router';
import './styles/App.css';

// pages
import Home from './pages/Home';
import File from './pages/File';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<File/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/file' element={<File/>}/>
    </Routes>
    </>
  );
}

export default App;
