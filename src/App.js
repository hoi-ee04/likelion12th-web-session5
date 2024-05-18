import Header from './components/Header.jsx';
import BoxofficeRank from './components/BoxofficeRank.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<BoxofficeRank />} />
          <Route path="/detail/:pageId" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter> 
  );
}

export default App;