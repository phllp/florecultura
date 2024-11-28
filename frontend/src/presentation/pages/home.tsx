import './home.css';

import Button from '../components/button';
import { Livro } from '../../core/entities/livro';
import { useEffect, useState } from 'react';
import axiosInstance from '../../external/axiosInstance';
import LivroDestaque from '../components/home/livro-destaque';

const Home = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const fetchLivros = async () => {
    const response = await axiosInstance('/api/livros');
    const data = response.data;

    const shuffled = [...data].sort(() => 0.5 - Math.random());

    setLivros(shuffled);
    // console.log(data);
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <>
      <div className="hero">
        <h1>Bem-vindo à Flor & Cultura</h1>
        <p>Explore um mundo de conhecimento e descoberta.</p>
      </div>

      <main className="home-main">
        <section>
          <h2>Livros em Destaque</h2>
          <div className="book">
            {livros.slice(0, 3).map((livro) => (
              <LivroDestaque key={livro.id} livro={livro} />
            ))}
          </div>
          <section>
            <h2>Próximos Eventos</h2>
            <p>
              Fique atento aos próximos eventos e workshops em nossa biblioteca!
            </p>
            <ul>
              <li>Workshop de Escrita Criativa - 10 de Outubro</li>
              <li>Clube do Livro - 15 de Outubro</li>
              <li>Palestra sobre História da Literatura - 20 de Outubro</li>
            </ul>
          </section>
        </section>
      </main>

      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">Bem-Vindo!</h2>
            <p className="description description-primary">
              Faça login com suas informações
            </p>
            <Button onClick={() => {}} text="Entrar" variant="primary" />
          </div>
          <div className="second-column">
            <h2 className="title title-second">Criar Conta</h2>
            <form className="form">
              <label className="label-input" htmlFor="">
                <input type="text" placeholder="Name" />
              </label>

              <label className="label-input" htmlFor="">
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" htmlFor="">
                <input type="password" placeholder="Password" />
              </label>

              <label className="role">Escolha o perfil:</label>
              <select id="role" name="role" required>
                <option value="leitor">Leitor</option>
                <option value="administrador">Administrador</option>
                <option value="bibliotecario">Bibliotecário</option>
              </select>

              <Button onClick={() => {}} text="Cadastrar" variant="secondary" />
            </form>
          </div>
        </div>

        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Olá, Usuário!</h2>

            <Button onClick={() => {}} text="Entrar" variant="secondary" />
          </div>
          <div className="second-column">
            <h2 className="title title-second">Login</h2>
            <form className="form">
              <label className="label-input" htmlFor="">
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" htmlFor="">
                <input type="password" placeholder="Password" />
              </label>

              <a className="password" href="#">
                Esqueceu sua senha?
              </a>
              <Button onClick={() => {}} text="Entrar" variant="secondary" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
