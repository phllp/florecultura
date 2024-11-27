import { Outlet } from "react-router-dom";
import Header from "../components/header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="bg-blueShadeado text-center py-8">
        <p>&copy; 2024 Flor & Cultura. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default BaseLayout;
