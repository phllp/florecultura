import { Route, Routes } from 'react-router-dom';
import BaseLayout from './presentation/layouts/base-layout';
import About from './presentation/pages/about';
import Livros from './presentation/pages/livros';
import Estoque from './presentation/pages/estoque';
import Home from './presentation/pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/estoque" element={<Estoque />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
