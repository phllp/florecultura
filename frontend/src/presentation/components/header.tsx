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
          {user?.role && user.role == UserRoles.ADMIN && (
            <li>
              <Link to="/estoque">ESTOQUE</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
