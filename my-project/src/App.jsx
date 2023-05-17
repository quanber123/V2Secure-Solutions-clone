import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
function App() {
  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
