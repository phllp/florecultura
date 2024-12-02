import './home.css';
import { Livro } from '../../core/entities/livro';
import { useEffect, useState } from 'react';
import axiosInstance from '../../external/axiosInstance';
import LivroDestaque from '../components/home/livro-destaque';
import UserAuth from '../components/home/user-auth';

const Home = () => {
  const [livros, setLivros] = useState<Livro[]>([]);

  const fetchLivros = async () => {
    const response = await axiosInstance('/api/livros');
    const data = response.data;

    const shuffled = [...data].sort(() => 0.5 - Math.random());

    setLivros(shuffled);
  };

  useEffect(() => {
    fetchLivros();
  }, []);

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

        <UserAuth />
      </div>
    </>
  );
};

export default Home;
