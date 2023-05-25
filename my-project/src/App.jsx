import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import Layout from './components/layout';
import Page404 from './components/404';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
