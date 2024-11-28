import './home.css';

import Button from '../components/button';
import { Livro } from '../../core/entities/livro';
import { useEffect, useState } from 'react';
import axiosInstance from '../../external/axiosInstance';
import LivroDestaque from '../components/home/livro-destaque';
import UsuarioManageForm from '../components/usuario/usuario-manage-form';
import UsuarioLoginForm from '../components/usuario/usuario-login-form';

const Home = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const body = document.querySelector('body');

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

  // btnSignin.addEventListener("click", function () {
  //   });

  //   btnSignup.addEventListener("click", function () {
  //   body.className = "sign-up-js";
  //   })
  const handleSignUp = () => {
    console.log(`clicked`);
    if (body) body.className = 'sign-up-js';
  };

  const handleSignIn = () => {
    if (body) body.className = 'sign-in-js';
  };

  return (
    <>
      <div>
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
                Fique atento aos próximos eventos e workshops em nossa
                biblioteca!
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
              <Button
                onClick={() => {
                  handleSignIn();
                }}
                text="Entrar"
                variant="primary"
              />
            </div>
            <div className="second-column">
              <h2 className="title title-second">Criar Conta</h2>
              <UsuarioManageForm onCancel={() => {}} onSave={() => {}} />
            </div>
          </div>

          <div className="content second-content">
            <div className="first-column">
              <h2 className="title title-primary">Olá, Usuário!</h2>

              <Button
                onClick={() => {
                  handleSignUp();
                }}
                text="Cadastrar"
                variant="primary"
              />
            </div>
            <div className="second-column">
              <h2 className="title title-second">Login</h2>
              <UsuarioLoginForm onSuccess={() => {}} onCancel={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
