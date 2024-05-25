import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:pageId" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
