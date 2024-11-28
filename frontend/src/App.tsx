import { Route, Routes } from 'react-router-dom';
import BaseLayout from './presentation/layouts/base-layout';
import About from './presentation/pages/about';
import Livros from './presentation/pages/livros';
import Estoque from './presentation/pages/estoque';
import Home from './presentation/pages/home';
import { UserProvider } from './presentation/contexts/userContext';

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/livros" element={<Livros />} />
            <Route path="/estoque" element={<Estoque />} />
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
