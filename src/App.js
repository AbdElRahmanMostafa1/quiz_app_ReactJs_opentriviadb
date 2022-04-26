import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfigPage from "./pages/ConfigPage";
import QuestionPage from "./pages/QuestionPage";
import FinalScorePage from "./pages/FinalScorePage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <section className={`root ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Nav />
        <main className="container main">
          <section style={{ width: "100%", flex: 1 }}>
            <Routes>
              <Route path="/" index element={<ConfigPage />} />
              <Route path="/questions" element={<QuestionPage />} />
              <Route path="/score" element={<FinalScorePage />} />
            </Routes>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
