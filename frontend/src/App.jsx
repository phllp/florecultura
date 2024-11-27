import { Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/home";
import About from "./presentation/pages/about";
import BaseLayout from "./presentation/layouts/base-layout";
import Estoque from "./presentation/pages/estoque";
import Livros from "./presentation/pages/livros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/estoque" element={<Estoque />} />
      </Route>
    </Routes>
  );
}

export default App;
