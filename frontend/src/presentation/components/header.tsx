import { Link } from 'react-router-dom';
import './header.css';
import { useUser } from '../contexts/userContext';
import { UserRoles } from '../../core/entities/usuario';
const Header = () => {
  const { user } = useUser();
  return (
    <header className="header">
      <div>
        <p className="logo">Flor & Cultura</p>
      </div>
      <p>Bem vindo ~{user?.nome}~</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/livros">Livros</Link>
          </li>
          <li>
            <a href="#">Eventos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          {user?.role && user.role == UserRoles.ADMIN && (
            <li>
              <Link to="/estoque">Estoque</Link>
            </li>
          )}
        </ul>
      </nav>

      {/* <div className="py-2 px-2 bg-red-500 border-2">
        <Link to="/estoque">Gerenciar Estoque</Link>
      </div> */}
    </header>
  );
};

export default Header;
